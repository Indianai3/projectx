import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLink } from "@/utils/nav-link";
import { SidebarOpen } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <SidebarOpen className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent
          className="max-w-[80%]  bg-secondary text-secondary-foreground   "
          side={"left"}
        >
          <SheetHeader className="mt-5">
            <div className="w-full flex flex-col justify-center items-center gap-y-6 md:gap-y-8  ">
              {navLink.map((item) => (
                <Link to={item.link} key={item.label} className="w-full">
                  <div className="min-w-full p-3 m-1  md:p-4  rounded-md text-lg font-medium bg-muted/30 text-muted-foreground  flex justify-center items-center  min-h-12">
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
