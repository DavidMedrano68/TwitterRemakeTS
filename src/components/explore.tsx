import { getNewsAPIKey } from "@/firebase/firebase.config";
import axios from "axios";
import { useEffect, useState } from "react";
import format from "date-fns/format";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Explore() {
  const [headlines, setHeadlines] = useState([]);
  console.log(headlines);
  async function getHeadlines() {
    const getHeadlines = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${getNewsAPIKey()}`
    );
    setHeadlines(getHeadlines.data.articles);
  }

  function fixDate(date: string) {
    const newDate = new Date(date);
    return format(newDate, "PPPP");
  }

  function fixTitle(title: string) {
    if (title !== null) {
      const [fixedTitle] = title.split("-");
      return fixedTitle;
    } else {
      return "undefined";
    }
  }
  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <ScrollArea className="h-[600px]  mt-10 col-span-7 grid ">
      <div className="sticky text-2xl font-extrabold pl-3">Trending</div>
      <ul className="flex flex-col gap-1 mx-12">
        {headlines &&
          headlines.map((h) => {
            if (h.title !== "[Removed]") {
              return (
                <Dialog>
                  <DialogTrigger>
                    <li
                      className="delayHover cursor-pointer pb-3"
                      key={h.title}
                    >
                      <p className="text-sm font-bold">
                        {fixDate(h.publishedAt)}
                      </p>
                      <p>{h.author ? h.author : null}</p>
                      <p className="text-sm text-muted-foreground">
                        {fixTitle(h.title)}
                      </p>
                    </li>
                    <Separator />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <div>
                        <div>{h.author}</div>
                        <div>
                          <a href={h.url}>{h.title}</a>
                        </div>
                      </div>
                    </DialogHeader>
                    <DialogDescription>{h.description}</DialogDescription>
                    <img src={h.urlToImage} />
                    <div>{h.content}</div>
                  </DialogContent>
                </Dialog>
              );
            }
          })}
      </ul>
    </ScrollArea>
  );
}
