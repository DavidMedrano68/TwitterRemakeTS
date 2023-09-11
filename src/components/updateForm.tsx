import { DatePicker } from "@/components/ui/datePicker";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase.config";
import format from "date-fns/format";

export default function UpdateForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const userData = doc(db, "users", auth.currentUser.uid);
  const [usersInfo, setUsersInfo] = useState({
    location: "",
    bio: "",
  });
  const [date, setDate] = useState<Date>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateDoc(userData, {
      "userData.bio": usersInfo.bio,
      "userData.location": usersInfo.location,
      "userData.birthday": date ? format(date, "PP") : "",
    });
    setUsersInfo({
      location: "",
      bio: "",
    });
  }
  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger className="border-2 rounded-3xl w-1/2 h-1/2 self-end justify-self-end  mr-5">
        Edit Profile
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogHeader>Update your profile.</DialogHeader>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            setIsFormOpen(false);
          }}
        >
          <div className="flex flex-col">
            <Label>Birth Day :</Label>
            <DatePicker date={date} setDate={setDate} />
          </div>
          <div>
            <Label className="text-center">Location</Label>
            <Input
              required
              name="location"
              className="bg-black"
              value={usersInfo.location}
              onChange={(e) =>
                setUsersInfo({
                  ...usersInfo,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Write Location"
            />
          </div>
          <div>
            <Label>Bio</Label>
            <Textarea
              required
              className="mb-4"
              name="bio"
              value={usersInfo.bio}
              onChange={(e) =>
                setUsersInfo({
                  ...usersInfo,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Write something about yourself"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
