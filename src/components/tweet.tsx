import Post from "./post";
import { auth, db } from "@/firebase/firebase.config";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  query,
  limit,
} from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { useState, useContext } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { isSignedContext } from "@/context/authContext";
import Comment from "./comment";
import defaultPic from "@/assets/profile.svg";

export default function Tweet() {
  const { TweetID } = useParams();
  const docRef = doc(db, "globalTweets", TweetID);
  const [comment, setComment] = useState("");
  const [post] = useDocument(docRef);
  const isSignedin = useContext(isSignedContext);
  const commentsRef = collection(db, `${TweetID}-comments`);
  const q = query(commentsRef, limit(25));
  const [comments] = useCollection(q);
  function getUserEmail() {
    return auth.currentUser.email;
  }
  function getUserName() {
    return auth.currentUser.displayName;
  }
  function getProfilePic() {
    return auth.currentUser.photoURL;
  }
  async function handleSubmit() {
    if (comment && isSignedin) {
      try {
        await addDoc(collection(db, `${TweetID}-comments`), {
          name: getUserName(),
          email: getUserEmail(),
          profilePicURL: getProfilePic(),
          comment: comment,
          data: {
            likes: 0,
            retweets: 0,
          },
          owner: auth.currentUser.uid,
          timestamp: serverTimestamp(),
        }).then(() => setComment(""));
      } catch (error) {
        console.error("Comment was unsucessful", error);
      }
    } else {
      return;
    }
  }
  return (
    <div className={`col-span-7 `}>
      <div className="sticky text-xl ml-3 mt-3 font-extrabold"> Tweet</div>
      <ScrollArea className="mx-20">
        {post ? (
          <>
            <Post
              msgInfo={JSON.parse(JSON.stringify(post.data()))}
              postID={post.id}
            />
            <form id="replyForm" className="grid mb-1 pb-6 border-b">
              <div className=" grid grid-cols-6">
                <img
                  referrerPolicy="no-referrer"
                  className="rounded-full w-10 h-10 col-span-1"
                  src={isSignedin ? auth.currentUser.photoURL : defaultPic}
                ></img>
                <input
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  value={comment}
                  className="outline-none  bg-black text-white col-span-5"
                  placeholder="Write a reply"
                ></input>
              </div>
              <div className="grid place-items-end">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className=" rounded-full my-1 w-1/3   "
                >
                  Reply
                </Button>
              </div>
            </form>
            {comments &&
              comments.docs.map((com) => (
                <Comment
                  tweetID={post.id}
                  commentInfo={com.data()}
                  postID={com.id}
                />
              ))}
          </>
        ) : null}
      </ScrollArea>
    </div>
  );
}
