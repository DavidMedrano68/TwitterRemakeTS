import { auth, db } from "../firebase/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import wifiOff from "@/assets/wifiOff.svg";
import { Input } from "@/components/ui/input";
import profiePic from "../assets/profile.svg";
import sendBtn from "../assets/Send.svg";
import ChatRoom from "./chatroom";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useState, useRef, useContext } from "react";
import { isSignedContext } from "@/context/authContext";
type chatProps = {
  chatChannel: string;
};
export default function Chat({ chatChannel }: chatProps) {
  const isSignedin = useContext(isSignedContext);
  const dummyRef = useRef(null);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  function getUID() {
    return auth.currentUser.uid;
  }
  function getProfilePic() {
    return auth.currentUser.photoURL || profiePic;
  }
  function getUserName() {
    return auth.currentUser.displayName;
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userPic = getProfilePic();
    const UID = getUID();
    await addDoc(collection(db, chatChannel), {
      name: getUserName(),

      profilePicURL: userPic,
      text: message,

      timeStamp: serverTimestamp(),
      userUID: UID,
    });

    setMessage("");
    dummyRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`col-span-6 bg-black grid`}>
      <div className="font-extrabold text-3xl ml-2">Chat</div>
      {isSignedin ? (
        <>
          <ScrollArea className=" h-[550px] ">
            <ChatRoom chatChannel={chatChannel} />
            <div ref={dummyRef}></div>
          </ScrollArea>
          <div className=" rounded-3xl grid ">
            <form
              className="bg-[#020817]  relative grid rounded-3xl h-[90%] "
              onSubmit={handleSubmit}
            >
              <button type="submit" className="self-center absolute right-10">
                <img className="w-8 h-8" src={sendBtn} alt="sendBtn" />
              </button>
              <Input
                onInput={() => setMessage(inputRef.current.value)}
                ref={inputRef}
                placeholder="Enter chat"
                className="w-[90%]  bg-black place-self-center msgInput"
                value={message}
              ></Input>
            </form>
          </div>
        </>
      ) : (
        <div>
          <img src={wifiOff} alt="wifiOffSVG" className="h-64 w-64" />
          <p>Please connect to Internet or Sign in</p>
        </div>
      )}
    </div>
  );
}
