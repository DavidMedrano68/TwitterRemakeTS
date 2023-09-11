import { useEffect, useState } from "react";
import axios from "axios";
import { getNewsAPIKey } from "@/firebase/firebase.config";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  async function fetchArticles() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${getNewsAPIKey()}`
    );
    setArticles(response.data.articles);
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
    fetchArticles();
  }, []);
  return (
    <div className=" mt-3 justify-self-center w-[90%]   rounded-lg bg-[#16181c]">
      <ul className="ml-1">
        <h2 className="font-extrabold mb-2 ">What's happening</h2>
        <ul className=" flex flex-col gap-1">
          {articles &&
            articles.map((a, i) => {
              if (i < 3) {
                return (
                  <Dialog>
                    <DialogTrigger>
                      <li className="delayHover cursor-pointer" key={a.author}>
                        <p className="text-sm font-bold">
                          {a.source.name ? a.source.name : "undefined"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {" "}
                          {fixTitle(a.title)}
                        </p>
                      </li>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <div>
                          <div>{a.author}</div>
                          <div>
                            <a href={a.url}>{a.title}</a>
                          </div>
                        </div>
                      </DialogHeader>
                      <DialogDescription>{a.description}</DialogDescription>
                      <img src={a.urlToImage} />
                      <div>{a.content}</div>
                      <DialogFooter>{a.publishedAt}</DialogFooter>
                    </DialogContent>
                  </Dialog>
                );
              }
            })}
        </ul>
      </ul>
    </div>
  );
}
