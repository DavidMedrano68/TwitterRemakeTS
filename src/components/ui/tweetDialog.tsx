import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "@/firebase/firebase.config";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import profilePic from "@/assets/profile.svg";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
export default function TweetDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tweet, setTweet] = useState("");
  const { toast } = useToast();
  function getUID() {
    return auth.currentUser.uid;
  }
  function getProfilePic() {
    return auth.currentUser.photoURL || profilePic;
  }
  function getUserName() {
    return auth.currentUser.displayName;
  }
  function getUserEmail() {
    return auth.currentUser.email;
  }
  async function createTweet() {
    const userPic = getProfilePic();
    try {
      await addDoc(collection(db, "globalTweets"), {
        name: getUserName(),
        email: getUserEmail(),
        profilePicURL: userPic,
        text: tweet,
        data: {
          comments: [],
          likes: 0,
          retweets: 0,
        },
        owner: auth.currentUser.uid,
        timeStamp: serverTimestamp(),
      });
      if (auth.currentUser) {
        await addDoc(collection(db, `${getUID()}tweets`), {
          Tweet: tweet,
          timeStamp: serverTimestamp(),
        });
      }
    } catch (error) {
      console.error("there has been a problem" + error);
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="btn px-5 py-1 text-xl font-extrabold">
        Tweet
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Compose a Tweet</DialogHeader>
        <Textarea
          placeholder="What is happening?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        <DialogFooter>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (tweet && auth.currentUser) {
                createTweet();
                setIsDialogOpen(false);
              } else {
                setIsDialogOpen(false);
                toast({
                  description: "Please sign in or Connect to the internet",
                });
              }
            }}
          >
            Tweet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
