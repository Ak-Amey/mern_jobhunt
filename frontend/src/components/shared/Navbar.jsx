import React from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { LogOut, LogOutIcon, LucideLogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_END_POINT } from "../../utils/constant";
import axios from "axios";
import { setUser } from "../../redux/authSlice";

export const Navbar = () => {
    const {user}=useSelector(store=>store.auth);
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const logOutHandler = async()=>{
      try{
        const res= await axios.get(`${USER_API_END_POINT}/logout`,{
          withCredentials:true
        })
       if(res.data.success){
        dispatch(setUser(null))
        navigate("/")
        toast.success(res.data.message)
       }
      }catch(err){
        console.log(err);
        toast.error(err.response.data.message)
      }
    }

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
                  src={user?.profile?.profilePhoto}
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-88">
              <div className="">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
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
                    <Link to="/profile">View Profile</Link>
                  </Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOutIcon/>
                  <Button onClick={logOutHandler} variant="link" className="cursor-pointer">
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
