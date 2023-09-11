import homeSVG from "../assets/homePage.svg";
import searchSVG from "../assets/Search.svg";
import inboxSVG from "../assets/Inbox.svg";
import notiSVG from "../assets/Notifications.svg";
import profileSVG from "../assets/profile.svg";
import moreSVG from "../assets/Morehoriz.svg";
import Icon from "./icon";
import defaultPic from "../images/defaultPic.jpeg";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { isSignedContext } from "@/context/authContext";
import { auth, db } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import MessageList2 from "./messageList2";
export default function MessagesPage() {
  const isSignedin = useContext(isSignedContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
  async function createUser(user: User) {
    const userRef = doc(db, "users", user.uid);
    const userSnapShot = await getDoc(userRef);
    if (!userSnapShot.exists()) {
      try {
        await setDoc(userRef, {
          retweets: [],
          friends: { followers: 0, following: 0 },
          likes: [],
          comments: {
            likes: [],
            retweets: [],
          },
          userData: {
            userEmail: user.email,
            userPictureURL: user.photoURL,
            location: "",
            birthday: "",
            dateJoined: "",
            bio: "",
          },
        });
      } catch (error) {
        console.log("there has a been an error " + error);
      }
    }
  }
  async function login() {
    let provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    await createUser(user);
  }
  function signOutUser() {
    signOut(auth);
  }
  function createUserName(email: string) {
    const [username] = email.split("@");

    return username;
  }
  function reduceUserName(email: string) {
    return email.slice(0, 10) + "..";
  }
  function reduceUserHandle(handle: string) {
    return handle.slice(0, 10) + "..";
  }
  function createUserHandle(email: string) {
    const [username] = email.split("@");
    return `@${username}`;
  }
  return (
    <div className="grid grid-cols-12 min-h-screen w-[98vw]   ">
      <div className="col-span-2 border-r-2">
        <nav className="sticky top-0">
          <ul className=" mt-5 grid gap-3 place-items-center">
            <Icon screenWidth={screenWidth} src={homeSVG} name={"Home"} />
            <Icon screenWidth={screenWidth} src={searchSVG} name={"Explore"} />
            <Icon screenWidth={screenWidth} src={notiSVG} name={"Alerts"} />
            <Icon screenWidth={screenWidth} src={inboxSVG} name={"Inbox"} />
            {isSignedin ? (
              <Icon
                screenWidth={screenWidth}
                src={profileSVG}
                altName={auth.currentUser.uid}
                name={"Profile"}
              />
            ) : null}
            <Icon screenWidth={screenWidth} src={moreSVG} name={"More.."} />
            <button className="btn px-5 py-2 text-xl font-extrabold">
              Tweet
            </button>
            {screenWidth > 989 ? (
              <div className="w-40 fixed bottom-10 grid grid-cols-3 rounded-2xl delayHover">
                <img
                  src={isSignedin ? auth.currentUser.photoURL : defaultPic}
                  className=" rounded-full w-10 h-10"
                />
                <div className="grid grid-rows-2">
                  {isSignedin ? (
                    createUserName(auth.currentUser.email).length > 12 ? (
                      <HoverCard>
                        <HoverCardTrigger>
                          <p className=" font-semibold text-xs">
                            {reduceUserName(auth.currentUser.email)}
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-black text-center text-white">
                          <div>{createUserName(auth.currentUser.email)}</div>
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      <p className=" font-semibold text-xs">
                        {createUserName(auth.currentUser.email)}
                      </p>
                    )
                  ) : (
                    <p className=" font-semibold text-xs">Anon</p>
                  )}

                  {isSignedin ? (
                    createUserHandle(auth.currentUser.email).length > 12 ? (
                      <HoverCard>
                        <HoverCardTrigger>
                          <p className=" font-semibold text-xs">
                            {reduceUserHandle(auth.currentUser.email)}
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-black text-center text-white">
                          <div>{createUserHandle(auth.currentUser.email)}</div>
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      <p className="text-muted-foreground font-semibold text-xs">
                        {createUserHandle(auth.currentUser.email)}
                      </p>
                    )
                  ) : (
                    <p className=" font-semibold text-xs">@anon</p>
                  )}
                </div>

                <Popover>
                  <PopoverTrigger className="justify-self-end self-center h-7 w-7">
                    <img src={moreSVG} alt="" />
                  </PopoverTrigger>
                  <PopoverContent className="w-52 dark">
                    <Button
                      className={!isSignedin ? "btn" : "rounded-3xl"}
                      onClick={isSignedin ? signOutUser : login}
                      variant="outline"
                    >
                      {isSignedin ? "Sign out" : "Sign In"}
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger className="">
                  <img
                    className=" w-14 h-14 rounded-full"
                    src={isSignedin ? auth.currentUser.photoURL : defaultPic}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-52 dark">
                  <Button
                    className={!isSignedin ? "btn" : "rounded-3xl"}
                    onClick={isSignedin ? signOutUser : login}
                    variant="outline"
                  >
                    {isSignedin ? "Sign out" : "Sign In"}
                  </Button>
                </PopoverContent>
              </Popover>
            )}
          </ul>
        </nav>
      </div>

      <MessageList2 />
      {/* <Chat /> */}
    </div>
  );
}
