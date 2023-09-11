import { db } from "@/firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./post";
import PostSkeleton from "./ui/postSkeleton";
type userLikesProps = {
  userUID: string;
};
export default function UserLikes({ userUID }: userLikesProps) {
  const [post, setPost] = useState([]);
  const loading = post.length <= 0;
  const likedDoc = doc(db, "users", userUID);

  async function fetchLikedTweets() {
    const getLikedDoc = await getDoc(likedDoc);
    if (getLikedDoc.exists()) {
      function getData() {
        const data = getLikedDoc.data().likes;
        data.forEach(async (like: string) => {
          const docu = doc(db, "globalTweets", like);
          const documentData = await getDoc(docu);
          setPost((prev) => [
            ...prev,
            { id: documentData.id, data: documentData.data() },
          ]);
        });
      }
      getData();
    }
  }
  useEffect(() => {
    fetchLikedTweets();
  }, []);

  return (
    <div className="mx-12">
      {loading ? (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      ) : null}
      {post &&
        post.map((p, i) => {
          if (i % 2 !== 0) {
            return <Post postID={p.id} msgInfo={p.data} key={p.id} />;
          }
        })}
    </div>
  );
}
