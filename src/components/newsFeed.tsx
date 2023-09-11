import { useContext, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase/firebase.config";
import wifiOff from "@/assets/wifiOff.svg";
import Post from "./post";
import { isSignedContext } from "@/context/authContext";

import PostSkeleton from "./ui/postSkeleton";

export default function NewsFeed() {
  const isSignedIn = useContext(isSignedContext);
  const newsNavRef = useRef(null);
  const msgRef = collection(db, "globalTweets");
  const q = query(msgRef, orderBy("timeStamp"), limit(25));
  const [posts, loading] = useCollection(q);

  return (
    <div className={`${"col-span-7"} bg-black grid`}>
      <div
        ref={newsNavRef}
        className="sticky z-20 top-0 border-b-2 bg-black grid grid-cols-2 grid-rows-2 h-32"
      >
        <h3 className="col-span-2 pl-2 font-extrabold text-2xl">Home</h3>
        <div className="  cursor-pointer grid place-items-center delayHover">
          <p>For You</p>
        </div>
        <div className=" cursor-pointer grid place-items-center  delayHover">
          Following
        </div>
      </div>
      <ScrollArea>
        {isSignedIn ? (
          <div id="feed" className={`feed mx-24`}>
            {loading && (
              <div className="grid gap-4">
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
              </div>
            )}
            {posts &&
              posts.docs.map((msg) => (
                <Post msgInfo={msg.data()} postID={msg.id} key={msg.id} />
              ))}
          </div>
        ) : (
          <div className="grid place-items-center">
            <img src={wifiOff} alt="wifiOffSVG" className="h-32 w-32" />
            <p>Please connect to internet or Sign In</p>
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
