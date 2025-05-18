import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { LogOut, LucideLogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const {user}=useSelector(store=>store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>
          {
            !user ? (
                <div className="flex items-center gap-2">
                    <Link to="/login"><Button variant="outline" className="cursor-pointer">Login</Button></Link>
                    <Link to="/signup"><Button className="bg-[#6A3BC2] hover:bg-[#5b30a6] cursor-pointer">SignUp</Button></Link>
                </div>
            ) :
            (
                <Popover>
            <PopoverTrigger aschild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-88">
              <div className="">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">Patel MernStack</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit!
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-2 text-gray-600">
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <User2 />
                  <Button variant="link" className="cursor-pointer">
                    View Profile
                  </Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LucideLogOut />
                  <Button variant="link" className="cursor-pointer">
                    Logout
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
};
