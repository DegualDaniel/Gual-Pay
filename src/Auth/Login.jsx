// import React from 'react'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Card,
  //   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  // FORM VALIDATION
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });
  // ERROR HANDLING
  const [errors, setErrors] = useState({});
  // HANDLE CHAGE IN FORM
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const validateForm = () => {

    let newErrors = {};

    if (!formData.email.trim() && !formData.phone.trim()) {
    newErrors.identifier = "Please enter your email or phone number";
  }
    if (!formData.password) { 
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      navigate("/"); // go back to home
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
      console.log("🚀 handleSubmit triggered", formData); 
    e.preventDefault();
    if (validateForm()) {
      const identifier = formData.phone || formData.email;
      try {
        const response = await axios.post(
  "https://task-79s6.onrender.com/api/login",
  { 
    identifier,
    password: formData.password,
  }
);

        // const response = await axios.post(
        //   "https://task-79s6.onrender.com/api/login",
        //   { 
        //     password: formData.password,
        //     // phone: formData.phone,
        //     email: formData.email,
        //   }
        // );
        console.log(response.data);
         // SAVE USER TO STORAGE
        localStorage.setItem("user", JSON.stringify(response.data));

                // TOAST
                console.log(" Form submitted:", formData);
                toast.success("Login successfully 🎉");




        //  If login success
        // if (response.data?.status === true) {
        //   toast.success("Login successful 🎉");
        //   localStorage.setItem("user", JSON.stringify(response.data.data)); // save user if needed
        //   navigate("/"); // go to home page
        // } else {
        //   // If backend sends failure
        //   toast.error(response.data?.message || "Login failed ❌");
        // }

        // clear form
        setFormData({ 
                  password: "" ,
                  // phone: "",
                  email: "",
                });

        setErrors({});
        // NAVIGATE TO HOME / DASHBOARD
        navigate("/");

      } catch (error) {
        //  Differentiate errors
        if (error.response)  {
                // CATCH ERROR
                if (error.response) {
                   console.log("❌ Full error response:", error.response?.data);

                  toast.error(error.response.data?.message || "login failed ❌");
                } else {
                  toast.error("Network error ❌");
                  console.log("❌ Full error response:", error.response?.data);

                }
              }
          
            }
    }
  };
  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed 
   inset-0 flex items-center
    justify-center
    bg-black/50 
    backdrop-blur-sm z-50
    lg:p-[6em] md:p-[3em] p-[1em]"
    >
      <Card className="w-full max-w-sm mx-auto bg-white shadow-xl">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription className="text-[.85rem]">
            Sign in to your Gual Account to continue trading.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="grid gap-2">


                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="hover:shadow-lg 
                transition duration-300 ease-in-out "
                />

                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="phone">Phone Number</Label>
                </div>
                <Input
                  id="phone"
                  type="text"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="hover:shadow-lg transition duration-300 ease-in-out"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="hover:shadow-lg
                 transition duration-300 ease-in-out "
                />

                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}

                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button onClick={handleSubmit} type="button" className="w-full py-5">
            Sign in
          </Button>

          <p className="text-[.9rem] mt-2">
            Don't have an account?
            <Link to="/signup" className="underline font-semibold ml-1">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
