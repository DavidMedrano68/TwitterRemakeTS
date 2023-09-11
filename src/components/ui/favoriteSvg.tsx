import { useState, useEffect, useContext } from "react";
import {
  updateDoc,
  doc,
  increment,
  arrayRemove,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "@/firebase/firebase.config";
import { isSignedContext } from "@/context/authContext";

type favoriteProps = {
  numFav: number;
  postID: string;
  isComment: boolean;
  tweetID?: string;
};
export default function FavoriteSVG({
  numFav,
  postID,
  isComment,
  tweetID,
}: favoriteProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(Boolean);
  const isSignedIn = useContext(isSignedContext);
  useEffect(() => {
    if (isSignedIn) {
      if (isComment) {
        fetchComment();
      } else {
        fetchPost();
      }
    }
  }, [isLiked]);

  async function fetchPost() {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const getDocu = await getDoc(docRef);
    const isLiked = getDocu.data().likes;
    if (isLiked.includes(postID)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }
  async function fetchComment() {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const getDocu = await getDoc(docRef);
    const isLiked = getDocu.data().comments.likes;
    if (isLiked.includes(postID)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }
  async function handleCommentClick() {
    if (isSignedIn) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const getDocu = await getDoc(docRef);
      const isFavorited = getDocu.data().comments.likes;
      if (isFavorited.includes(postID)) {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          "comments.likes": arrayRemove(postID),
        });
        await updateDoc(doc(db, `${tweetID}-comments`, postID), {
          "data.likes": increment(-1),
        });
        setIsLiked(false);
      } else {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          "comments.likes": arrayUnion(postID),
        });
        await updateDoc(doc(db, `${tweetID}-comments`, postID), {
          "data.likes": increment(1),
        });
        setIsLiked(true);
      }
    } else {
      return;
    }
  }
  async function handleClick(postID: string) {
    if (isSignedIn) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const getDocu = await getDoc(docRef);
      const isFavorited = getDocu.data().likes;
      if (isFavorited.includes(postID)) {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          likes: arrayRemove(postID),
        });
        await updateDoc(doc(db, "globalTweets", postID), {
          "data.likes": increment(-1),
        });
        setIsLiked(false);
      } else {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          likes: arrayUnion(postID),
        });
        await updateDoc(doc(db, "globalTweets", postID), {
          "data.likes": increment(1),
        });
        setIsLiked(true);
      }
    } else {
      return;
    }
  }

  return (
    <div className="grid grid-cols-2 ">
      <svg
        className="h-5 w-5 delayHover rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={
          isComment ? () => handleCommentClick() : () => handleClick(postID)
        }
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_43_18)">
          <path
            d="M66 12C59.04 12 52.36 15.24 48 20.36C43.64 15.24 36.96 12 30 12C17.68 12 8 21.68 8 34C8 49.12 21.6 61.44 42.2 80.16L48 85.4L53.8 80.12C74.4 61.44 88 49.12 88 34C88 21.68 78.32 12 66 12ZM48.4 74.2L48 74.6L47.6 74.2C28.56 56.96 16 45.56 16 34C16 26 22 20 30 20C36.16 20 42.16 23.96 44.28 29.44H51.76C53.84 23.96 59.84 20 66 20C74 20 80 26 80 34C80 45.56 67.44 56.96 48.4 74.2Z"
            fill={`${isHovered || isLiked ? "red" : "white"} `}
          />
        </g>
        <defs>
          <clipPath id="clip0_43_18">
            <rect width="96" height="96" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className={`pl-1 ${isHovered ? "text-[red]" : null}`}>
        {numFav < 1 ? null : numFav}
      </span>
    </div>
  );
}
