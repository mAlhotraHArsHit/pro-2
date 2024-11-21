import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-[#e3edf7] shadow-sm border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-[#6C63FF]">Job</span> Portal
          </h1>
        </div>

        {/* Navigation and Authentication */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <ul className="flex font-medium items-center gap-5 text-gray-700">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="hover:text-[#6C63FF] hover:underline underline-offset-4"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className="hover:text-[#6C63FF] hover:underline underline-offset-4"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#6C63FF] hover:underline underline-offset-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="hover:text-[#6C63FF] hover:underline underline-offset-4"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="hover:text-[#6C63FF] hover:underline underline-offset-4"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Authentication Section */}
          {!user ? (
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-[#6C63FF] border-[#6C63FF] hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6C63FF] hover:bg-blue-800 text-white transition-all">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="h-10 w-10 rounded-full cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@user"
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback className="h-full w-full rounded-full">
                    {user?.fullname?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 m-3 bg-white shadow-lg rounded-md border border-gray-200">
                <div className="flex gap-2 space-y-2 p-4">
                  <Avatar className="h-10 w-10 rounded-full cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@user"
                      className="h-full w-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {user?.fullname}
                    </h4>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {user && user.role === "student" && (
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
                      <User2 />
                      <Button variant="link" className="text-gray-700 hover:text-blue-600">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
                    <LogOut />
                    <Button
                      onClick={logoutHandler}
                      variant="link"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
