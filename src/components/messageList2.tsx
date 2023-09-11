import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import sportsPic from "../assets/sports.jpeg";
import gamingPic from "../assets/gaming.png";
import bitcoinPic from "../assets/bitcoin.png";
import techPic from "../assets/tech.png";
import Chat from "./chat";
export default function MessageList2() {
  return (
    <Tabs className="col-span-10 grid grid-cols-10" defaultValue="item-1">
      <TabsList className="col-span-4 bg-black  border-r grid grid-flow-row-dense">
        <TabsTrigger
          className="p-0 data-[state=active]:border-r-4 data-[state=active]:border-[#46A5DB] data-[state=active]:underline-offset-0 data-[state=active]:no-underline"
          value="item-1"
        >
          <div className=" w-full grid grid-cols-8 m-1 py-4 delayHover">
            <img
              className="rounded-full w-[40px] h-[40px] col-span-2"
              src={sportsPic}
              alt=""
            />
            <div className={`col-span-6 grid grid-rows-2 blueBorder `}>
              <div className="grid grid-cols-3">
                <div id="Username">David M</div>
                <div id="handle" className="text-xs">
                  @davidM8989
                </div>
                <div className="justify-self-end mr-2">4h</div>
              </div>
              <div className="">I havent Told u</div>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="item-2"
          className="p-0 data-[state=active]:border-r-4 data-[state=active]:border-[#46A5DB] data-[state=active]:underline-offset-0 data-[state=active]:no-underline"
        >
          <div className=" w-full grid grid-cols-8 m-1 py-4 delayHover">
            <img
              className="rounded-full w-[40px] h-[40px] col-span-2"
              src={techPic}
              alt=""
            />
            <div className={`col-span-6 grid grid-rows-2 blueBorder `}>
              <div className="grid grid-cols-3">
                <div id="Username">David M</div>
                <div id="handle" className="text-xs">
                  @davidM8989
                </div>
                <div className="justify-self-end mr-2">4h</div>
              </div>
              <div className="">I havent Told u</div>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger
          className="p-0 data-[state=active]:border-r-4 data-[state=active]:border-[#46A5DB] data-[state=active]:underline-offset-0 data-[state=active]:no-underline"
          value="item-3"
        >
          <div className=" w-full grid grid-cols-8 m-1 py-4 delayHover">
            <img
              className="rounded-full w-[40px] h-[40px] col-span-2"
              src={bitcoinPic}
              alt=""
            />
            <div className={`col-span-6 grid grid-rows-2 blueBorder `}>
              <div className="grid grid-cols-3">
                <div id="Username">David M</div>
                <div id="handle" className="text-xs">
                  @davidM8989
                </div>
                <div className="justify-self-end mr-2">4h</div>
              </div>
              <div className="">I havent Told u</div>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger
          className="p-0 data-[state=active]:border-r-4 data-[state=active]:border-[#46A5DB] data-[state=active]:underline-offset-0 data-[state=active]:no-underline"
          value="item-4"
        >
          <div className=" w-full grid grid-cols-8 m-1 py-4 delayHover">
            <img
              className="rounded-full w-[40px] h-[40px] col-span-2"
              src={gamingPic}
              alt=""
            />
            <div className={`col-span-6 grid grid-rows-2 blueBorder `}>
              <div className="grid grid-cols-3">
                <div id="Username">David M</div>
                <div id="handle" className="text-xs">
                  @davidM8989
                </div>
                <div className="justify-self-end mr-2">4h</div>
              </div>
              <div className="">I havent Told u</div>
            </div>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent className="col-span-6 bg-black border-l" value="item-1">
        <Chat chatChannel="globalChat1" />
      </TabsContent>
      <TabsContent className="col-span-6 bg-black border-l" value="item-2">
        <Chat chatChannel="globalChat2" />
      </TabsContent>
      <TabsContent className="col-span-6 bg-black border-l" value="item-3">
        <Chat chatChannel="globalChat3" />
      </TabsContent>

      <TabsContent className="col-span-6 bg-black border-l" value="item-4">
        <Chat chatChannel="globalChat4" />
      </TabsContent>
    </Tabs>
  );
}
