import { FC } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/utils/site-config";
import { Link } from "react-router-dom";
import { Box, ShoppingCart, SidebarOpen } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import Sidebar from "./sidebar";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex justify-between items-center h-16 px-2  md:px-3  py-1 shadow-md shadow-secondary  ">
      <div className="">
        <Link to={"/"}>
          <Button variant={"navbar"} className=" text-xl font-semibold">
            <Box className=" w-6 h-6 mr-3 " /> {siteConfig.name}
          </Button>
        </Link>
      </div>
      <div className=" ml-auto  pr-4  gap-x-5 hidden lg:flex">
        <Link to={"/#contact-us"}>
          <Button variant={"ghost"}> Contact Us </Button>
        </Link>
        <Link to={"/faq"}>
          <Button variant={"ghost"}> FAQ</Button>
        </Link>
        <Link to={"/auth/login"}>
          <Button variant={"primaryGradient"}>Login</Button>
        </Link>
        <Link to={"/cart"}>
          <Button
            variant={"outline"}
            size={"icon"}
            className=" w-10 h-10 mx-2 border-x-primary  border-t-blue-400 border-b-blue-300 ring-1"
          >
            <ShoppingCart className=" w-6 h-6   " />
          </Button>
        </Link>
        <ModeToggle />
      </div>
      <div className=" ml-auto  pr-4  gap-x-4 flex lg:hidden">
        <Sidebar />
        <Link to={"/auth/login"}>
          <Button size={"sm"} variant={"primaryGradient"}>
            Login
          </Button>
        </Link>
        <Link to={"/cart"}>
          <Button
            variant={"outline"}
            size={"icon"}
            className=" mx-2 border-x-primary  border-t-blue-400 border-b-blue-300 ring-1"
          >
            <ShoppingCart className=" w-5 h-5   " />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
