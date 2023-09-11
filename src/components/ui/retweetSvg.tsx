import { isSignedContext } from "@/context/authContext";
import { auth, db } from "@/firebase/firebase.config";
import {
  doc,
  updateDoc,
  increment,
  getDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
type rewteetProps = {
  numRetweets: number;
  postID: string;
  tweetID?: string;
  isComment: boolean;
};
export default function RetweetSVG({
  numRetweets,
  postID,
  tweetID,
  isComment,
}: rewteetProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(Boolean);
  const isSignedIn = useContext(isSignedContext);

  useEffect(() => {
    if (isSignedIn) {
      if (isComment) {
        fetchComment();
      } else {
        fetchPost();
      }
    }
  }, [isRetweeted]);
  async function fetchComment() {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const getDocu = await getDoc(docRef);
    const isRetweeted = getDocu.data().comments.retweets;
    if (isRetweeted.includes(postID)) {
      setIsRetweeted(true);
    } else {
      setIsRetweeted(false);
    }
  }
  async function fetchPost() {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const getDocu = await getDoc(docRef);
    const isRetweeted = getDocu.data().retweets;
    if (isRetweeted.includes(postID)) {
      setIsRetweeted(true);
    } else {
      setIsRetweeted(false);
    }
  }
  async function handleCommentClick() {
    if (isSignedIn) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const getDocu = await getDoc(docRef);
      const isRetweeted = getDocu.data().comments.retweets;
      if (isRetweeted.includes(postID)) {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          "comments.retweets": arrayRemove(postID),
        });
        await updateDoc(doc(db, `${tweetID}-comments`, postID), {
          "data.retweets": increment(-1),
        });
        setIsRetweeted(false);
      } else {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          "comments.retweets": arrayUnion(postID),
        });
        await updateDoc(doc(db, `${tweetID}-comments`, postID), {
          "data.retweets": increment(1),
        });
        setIsRetweeted(true);
      }
    } else {
      return;
    }
  }
  async function handleClick(postID: string) {
    if (isSignedIn) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const getDocu = await getDoc(docRef);
      const isRetweeted = getDocu.data().retweets;
      if (isRetweeted.includes(postID)) {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          retweets: arrayRemove(postID),
        });
        await updateDoc(doc(db, "globalTweets", postID), {
          "data.retweets": increment(-1),
        });
        setIsRetweeted(false);
      } else {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          retweets: arrayUnion(postID),
        });
        await updateDoc(doc(db, "globalTweets", postID), {
          "data.retweets": increment(1),
        });
        setIsRetweeted(true);
      }
    } else {
      return;
    }
  }
  return (
    <div className="grid grid-cols-2 ">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={
          isComment ? () => handleCommentClick() : () => handleClick(postID)
        }
      >
        <svg
          className="w-5 h-5 self-center"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="3"
          stroke={isHovered || isRetweeted ? "green" : "white"}
          fill="none"
        >
          <path d="M52.94,42.93V18.3a5.54,5.54,0,0,0-5.54-5.54H11.83" />
          <path d="M11.83,20.14V44.77a5.54,5.54,0,0,0,5.54,5.54H52.94" />
          <polyline points="4.15 26.39 12.09 20.14 19.51 26.88" />
          <polyline points="60.36 36.12 52.91 42.94 45 36.76" />
        </svg>
      </button>

      <span className={`p-1 ${isHovered ? "text-[green]" : null} `}>
        {numRetweets < 1 ? null : numRetweets}
      </span>
    </div>
  );
}
