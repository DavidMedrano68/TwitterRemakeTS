import {
  ChevronRightIcon,
  LockClosedIcon,
  AccessibilityIcon,
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  BellIcon,
  EyeOpenIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Settings() {
  return (
    <div className="col-span-7 mx-12 mt-10">
      <ScrollArea className="h-[600px] px-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Your account</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-black">
                <CardHeader className="">
                  <div className="inline-flex">
                    <PersonIcon className="w-5 h-5 mr-2 " />
                    <span>Change account settings</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Update Password</p>
                      <p className="text-sm text-muted-foreground">
                        Change current password.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Update Email</p>
                      <p className="text-sm text-muted-foreground">
                        Change current email.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end " />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p> Enable 2-Step Verification</p>
                      <p className="text-sm text-muted-foreground ">
                        2-Step Verification helps data stay private.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p> Download your Data</p>
                      <p className="text-sm text-muted-foreground">
                        Data will be download as archive.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p className=" text-red-400">Deacivate your account</p>
                      <p className="text-sm text-muted-foreground">
                        Find out How to deacivate your account.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Security and account access</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-black">
                <CardHeader>
                  <div className="inline-flex">
                    <LockClosedIcon className="w-5 h-5 mr-2 " />
                    <span>Update security prefrences</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Security</p>
                      <p className="text-sm text-muted-foreground">
                        Manage your account's security
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Apps and sessions</p>
                      <p className="text-sm text-muted-foreground">
                        See previous account log-ins and connected Apps
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Connected accounts</p>
                      <p className="text-sm text-muted-foreground">
                        Manage provider accounts connected to Twitter
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Privacy and safety</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-black">
                <CardHeader>
                  <div className="inline-flex">
                    <EyeOpenIcon className="w-5 h-5 mr-2 " />
                    <span>Manage what information you share</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Audience and Tagging</p>
                      <p className="text-sm text-muted-foreground">
                        Change what information users can see.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Your Post</p>
                      <p className="text-sm text-muted-foreground">
                        Manage interactions with your posts.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Content you see</p>
                      <p className="text-sm text-muted-foreground">
                        Prefrences on what you see on Twitter.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Mute and Block</p>
                      <p className="text-sm text-muted-foreground">
                        Manage words, post, account's that you've muted or
                        blocked.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Direct Messages</p>
                      <p className="text-sm text-muted-foreground">
                        Manage who can directly contact you.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Notifications</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-black">
                <CardHeader>
                  <div className="inline-flex">
                    <BellIcon className="w-5 h-5 mr-2 " />
                    <span>Manage what you'd like to see</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Filters</p>
                      <p className="text-sm text-muted-foreground">
                        Choose what notificiations you'd like to see.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Prefrences</p>
                      <p className="text-sm text-muted-foreground">
                        Select prefrences on how you'd like to see your
                        notifications.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Acessibility, display, data</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-black">
                <CardHeader>
                  <div className="inline-flex">
                    <AccessibilityIcon className="w-5 h-5 mr-2 " />
                    <span>Manage how content is displayed</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Accessibility</p>
                      <p className="text-sm text-muted-foreground">
                        Manage aspects of the app to better suit you.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Display</p>
                      <p className="text-sm text-muted-foreground">
                        Manage what is on screen such as font size and color
                        schemes.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2">
                    <div>
                      <p>Data</p>
                      <p className="text-sm text-muted-foreground">
                        Select prefrences on how you'd like the App to handle
                        your data.
                      </p>
                    </div>

                    <ChevronRightIcon className="h-5 w-5 justify-self-end" />
                  </div>
                  <Separator className="my-2" />
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </div>
  );
}
