import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserLikes from "./userLikes";
import { isSignedContext } from "@/context/authContext";
import { useContext } from "react";
import UserTweets from "./userTweets";
type ProfileNavigationProps = {
  userUID: string;
};
export default function ProfileNavigation({ userUID }: ProfileNavigationProps) {
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
        {isSignedin ? <UserTweets userUID={userUID} /> : null}
      </TabsContent>
      <TabsContent className="text-center text-2xl lowOpWhite" value="Replies">
        Coming soon
      </TabsContent>
      <TabsContent className="text-center text-2xl lowOpWhite" value="Media">
        Coming soon
      </TabsContent>
      <TabsContent value="Likes">
        {isSignedin ? <UserLikes userUID={userUID} /> : null}
      </TabsContent>
    </Tabs>
  );
}
