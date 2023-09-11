import backSVG from "../assets/Back.svg";
import backgroundImg from "../assets/background.jpg";
import defaultPic from "../assets/profile.svg";
import calendarSVG from "../assets/calendar.svg";
import cakeSVG from "../assets/Cake.svg";
import locationSVG from "../assets/location.svg";
import { useParams } from "react-router-dom";
import { isSignedContext } from "@/context/authContext";
import { useContext } from "react";
import { auth, db } from "@/firebase/firebase.config";
import { useDocumentData } from "react-firebase-hooks/firestore";
import UpdateForm from "./updateForm";
import ProfileNavigation from "./profileNav2";
import { Link } from "react-router-dom";
import { doc } from "firebase/firestore";

export default function ProfilePage() {
  const { userID } = useParams();
  const userINFO = doc(db, "users", userID);
  const [userData] = useDocumentData(userINFO);

  const isSignedin = useContext(isSignedContext);
  function createUserName(email: string) {
    const [username] = email.split("@");
    return username;
  }
  function createUserHandle(email: string) {
    const [username] = email.split("@");
    return `@${username}`;
  }

  return (
    <div className={`col-span-7 bg-black `}>
      <div className="h-[60vh] grid eightRow ">
        <div className="flex fixed top-0 w-[57.1%] bg-black ">
          <Link className="w-8 h-8 mx-5 self-center " to={"/Home"}>
            <img src={backSVG} alt="backarrow" />
          </Link>

          {userData && (
            <div className="grid grid-rows-2">
              <p>{createUserName(userData.userData.userEmail)}</p>
              <p>{createUserHandle(userData.userData.userEmail)}</p>
            </div>
          )}
        </div>
        <img
          className="h-52 w-full row-start-2 row-span-3"
          src={backgroundImg}
        />
        {userData && (
          <div
            id="userInfo"
            className="row-start-5 row-end-[9] grid grid-rows-3 grid-cols-2"
          >
            <img
              referrerPolicy="no-referrer"
              className="w-32 h-32 -translate-y-20 translate-x-8 rounded-full border-4 bg-black z-50 "
              src={isSignedin ? userData.userData.userPictureURL : defaultPic}
            />
            {userData ? (
              userData.userData.userEmail == auth.currentUser.email ? (
                <UpdateForm />
              ) : (
                <div></div>
              )
            ) : null}
            <div id="UserInfo" className="self-center ml-6">
              <p className="font-semibold">
                {createUserName(userData.userData.userEmail)}
              </p>
              <p className="font-light">
                {createUserHandle(userData.userData.userEmail)}
              </p>
            </div>
            <div id="bio" className="place-self-center">
              <p>{userData.userData.bio}</p>
            </div>
            <div className="grid grid-cols-3 ml-3">
              <div className="font-light text-sm">
                <img
                  className="w-1/3 h-1/3"
                  src={locationSVG}
                  alt="locationSVG"
                />
                <p>{userData.userData.location}</p>
              </div>
              <div className="font-light text-sm">
                <img className="w-1/3 h-1/3" src={cakeSVG} alt="cakeSVG" />
                <p>{userData.userData.birthday}</p>
              </div>
              <div className="font-light text-sm">
                <img
                  className="w-1/3 h-1/3"
                  src={calendarSVG}
                  alt="calendarSVG"
                />
                <p>{userData.userData.dateJoined}</p>
              </div>
            </div>
            <div
              id="followers"
              className="grid grid-rows-2 justify-items-center"
            >
              <p className="font-extrabold text-sm">
                {`Followers: ${userData.friends.followers}`}
              </p>
              <p className="font-extrabold text-sm">
                {`Following: ${userData.friends.following}`}
              </p>
            </div>
          </div>
        )}
      </div>
      <ProfileNavigation />
    </div>
  );
}
