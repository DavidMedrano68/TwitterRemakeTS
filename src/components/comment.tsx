import { DocumentData } from "firebase/firestore";
import moreSVG from "@/assets/Morehoriz.svg";

import RetweetSVG from "./ui/retweetSvg";
import FavoriteSVG from "./ui/favoriteSvg";
import { Link } from "react-router-dom";

type commentDataProps = {
  commentInfo: DocumentData;
  postID: string;
  tweetID?: string;
};
export default function Comment({
  commentInfo,
  postID,
  tweetID,
}: commentDataProps) {
  function createUserName(email: string) {
    const [username] = email.split("@");
    return username;
  }
  function createUserHandle(email: string) {
    const [username] = email.split("@");
    return `@${username}`;
  }
  const userName = createUserName(commentInfo.email);
  const userHandle = createUserHandle(commentInfo.email);
  return (
    <div className="grid grid-flow-row-dense h-40" key={postID}>
      <div className="grid grid-cols-12">
        <Link
          className=" ml-1 mt-2 self-start w-12 h-12 col-span-2 rounded-full"
          to={`/Profile/${commentInfo.owner}`}
        >
          <img
            referrerPolicy="no-referrer"
            className=" ml-1 mt-2 self-start w-12 h-12 col-span-2 rounded-full"
            src={commentInfo.profilePicURL}
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
        <div className="text-center pb-1">{commentInfo.comment}</div>
        <div className="border-t-2 lowOpWhite grid grid-flow-col-dense place-items-center">
          <div></div>
          <RetweetSVG
            isComment={true}
            postID={postID}
            tweetID={tweetID}
            numRetweets={commentInfo.data.retweets}
          />
          <FavoriteSVG
            tweetID={tweetID}
            isComment={true}
            postID={postID}
            numFav={commentInfo.data.likes}
          />
        </div>
      </div>
    </div>
  );
}
