import { DocumentData, collection } from "firebase/firestore";
import moreSVG from "../assets/Morehoriz.svg";
import speechSVG from "../assets/Speech.svg";
import FavoriteSVG from "./ui/favoriteSvg";
import RetweetSVG from "./ui/retweetSvg";
import { Link } from "react-router-dom";
import { db } from "@/firebase/firebase.config";
import { useCollection } from "react-firebase-hooks/firestore";
type postProps = {
  msgInfo: DocumentData;
  postID: string;
};
export default function Post({ msgInfo, postID }: postProps) {
  const ref = collection(db, `${postID}-comments`);
  const [refs] = useCollection(ref);

  function createUserName(email: string) {
    const [username] = email.split("@");
    return username;
  }
  function createUserHandle(email: string) {
    const [username] = email.split("@");
    return `@${username}`;
  }
  const userName = createUserName(msgInfo.email);
  const userHandle = createUserHandle(msgInfo.email);
  return (
    <div className="grid grid-flow-row-dense h-40" key={postID}>
      <div className="grid grid-cols-12">
        <Link
          className=" ml-1 mt-2 self-start w-12 h-12 col-span-2 rounded-full"
          to={`/Profile/${msgInfo.owner}`}
        >
          <img
            className="rounded-full"
            referrerPolicy="no-referrer"
            src={msgInfo.profilePicURL}
          ></img>
        </Link>

        <div className=" col-span-9">
          <div id="userInfo" className="">
            {userName}
          </div>
          <div id="userHandle" className="">
            {userHandle}
          </div>
        </div>
        <img className="w-10 h-10" src={moreSVG}></img>
      </div>
      <div className="grid-rows-2">
        <div className="text-center pb-1">{msgInfo.text}</div>
        <div className="border-t-2 lowOpWhite grid grid-flow-col-dense place-items-center">
          <Link to={`/Post/${postID}`}>
            {" "}
            <div className="grid grid-cols-2 ">
              <img className="h-5 w-5" src={speechSVG}></img>
              <span className="pl-1">{refs && refs.size}</span>
            </div>
          </Link>

          <RetweetSVG
            isComment={false}
            postID={postID}
            numRetweets={msgInfo.data.retweets}
          />
          <FavoriteSVG
            isComment={false}
            postID={postID}
            numFav={msgInfo.data.likes}
          />
        </div>
      </div>
    </div>
  );
}
