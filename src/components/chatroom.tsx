import {
  collection,
  query,
  orderBy,
  limit,
  DocumentData,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { db, auth } from "../firebase/firebase.config";
import PostSkeleton from "./ui/postSkeleton";
type chatChannelProps = {
  chatChannel: string;
};
//replace post skeleton with message skeleton
export default function ChatRoom({ chatChannel }: chatChannelProps) {
  const msgRef = collection(db, chatChannel);
  const q = query(msgRef, orderBy("timeStamp"), limit(25));
  const [messages,loading ] = useCollectionData(q);
  function getUID() {
    return auth.currentUser.uid;
  }
  function createChatMessage(msgInfo: DocumentData, key: string) {
    return msgInfo.userUID !== getUID() ? (
      <div className="flex ml-1" key={key}>
        <img
          className="h-8 w-8 inline  rounded-full"
          src={msgInfo.profilePicURL}
          referrerPolicy="no-referrer"
          alt=""
        />{" "}
        <div className="m-1 inline p-1.5 rounded-3xl text-black bg-muted-foreground">
          {msgInfo.text}
        </div>
      </div>
    ) : (
      <div className="flex justify-end" key={key}>
        <div className=" m-1 inline p-1.5 rounded-3xl bg-muted">
          {msgInfo.text}
        </div>
        <img
          className="h-8 w-8 inline   rounded-full"
          src={msgInfo.profilePicURL}
          alt=""
        />
      </div>
    );
  }
  return (
    <>{messages && messages.map((msg) => createChatMessage(msg, msg.id))}
    {loading ? <PostSkeleton/> : null}</>
  );
}
