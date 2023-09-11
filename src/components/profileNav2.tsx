import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserLikes from "./userLikes";
import { auth } from "@/firebase/firebase.config";
import { isSignedContext } from "@/context/authContext";
import { useContext } from "react";
import UserTweets from "./userTweets";
export default function ProfileNavigation() {
  const isSignedin = useContext(isSignedContext);
  return (
    <Tabs defaultValue="Tweets">
      <TabsList className="w-full justify-evenly  bg-black border-t-2 border-b-2 rounded-none">
        <TabsTrigger value="Tweets">Retweets</TabsTrigger>
        <TabsTrigger value="Replies">Replies</TabsTrigger>
        <TabsTrigger value="Media">Media</TabsTrigger>
        <TabsTrigger value="Likes">Likes</TabsTrigger>
      </TabsList>
      <TabsContent value="Tweets">
        {isSignedin ? <UserTweets userUID={auth.currentUser.uid} /> : null}
      </TabsContent>
      <TabsContent className="text-center text-2xl lowOpWhite" value="Replies">
        Coming soon
      </TabsContent>
      <TabsContent className="text-center text-2xl lowOpWhite" value="Media">
        Coming soon
      </TabsContent>
      <TabsContent value="Likes">
        {isSignedin ? <UserLikes userUID={auth.currentUser.uid} /> : null}
      </TabsContent>
    </Tabs>
  );
}
