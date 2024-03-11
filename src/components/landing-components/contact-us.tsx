import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ContactForm from "./contact-form";
import { XIcon } from "lucide-react";

interface ContactUsProps {
  label: string;
}

const ContactUs: FC<ContactUsProps> = ({ label }) => {
  return (
    <Drawer>
      <DrawerTrigger>{label} </DrawerTrigger>
      <DrawerContent className="bggrad">
        <DrawerHeader>
          <Card className="  border-none shadow-none w-full h-full flex lg:flex-row flex-col bg-inherit  justify-between items-center m-0 p-0 ">
            <CardHeader className="w-1/2">
              <div className=" w-2/3 hidden lg:block">
                <CardTitle className=" text-4xl font-semibold">
                  {" "}
                  Get in touch
                </CardTitle>
                <CardDescription className=" text-lg mt-4">
                  We value your feedback and are here to assist you with any
                  questions or concerns you may have—our dedicated team is
                  committed to providing exceptional support as we guide you
                  towards discovering the ideal tee that matches your unique
                  style and preferences.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className=" lg:w-1/2 w-full ">
              <ContactForm />
            </CardContent>
          </Card>
        </DrawerHeader>
        <DrawerClose className=" fixed top-2 right-4 ">
          <Button variant="outline" size={"icon"}>
            <XIcon className="w-5 h-5 " />{" "}
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactUs;
