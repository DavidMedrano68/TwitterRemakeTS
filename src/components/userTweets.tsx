import { db } from "@/firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./post";

import PostSkeleton from "./ui/postSkeleton";
type userLikesProps = {
  userUID: string;
};
export default function UserTweets({ userUID }: userLikesProps) {
  const [post, setPost] = useState([]);
  const loading = post.length <= 0;
  const likedDoc = doc(db, "users", userUID);

  async function fetchLikedTweets() {
    const getLikedDoc = await getDoc(likedDoc);
    if (getLikedDoc.exists()) {
      function getData() {
        const data = getLikedDoc.data().retweets;
        data.forEach(async (tweet: string) => {
          const docu = doc(db, "globalTweets", tweet);

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
        post.map((p) => {
          return <Post postID={p.id} msgInfo={p.data} key={p.id} />;
        })}
    </div>
  );
}
