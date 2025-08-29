// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

const Signup = () => {
  const navigate = useNavigate();
  // FORM VALIDATION

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits)";
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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
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
    e.preventDefault();
    if (validateForm()) {
      // HANDLING API AND STORAGE
      try {
        const response = await axios.post(
          "https://task-79s6.onrender.com/api/register",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phoneNumber: formData.phone,
          }
        );
        console.log(response.data);
        // SAVE USER TO STORAGE
        localStorage.setItem("user", JSON.stringify(response.data));

        // TOAST
        console.log(" Form submitted:", formData);
        toast.success("Account created successfully 🎉");

        //  Clear the form after successful validation
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
        });

        // Also clear errors
        setErrors({});
        // NAVIGATE TO HOME / DASHBOARD
        navigate("/");
      } catch (error) {
        // CATCH ERROR
        if (error.response) {
          toast.error(error.response.data?.message || "Signup failed ❌");
        } else {
          toast.error("Network error ❌");
        }
      }
    }
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className=" fixed inset-0 flex items-center 
    justify-center bg-black/50 
    backdrop-blur-sm z-50
    lg:p-[2em] md:p-[2em] p-[1em]"
    >
      <Card className="w-full max-w-sm mx-auto bg-white shadow-xl">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription className="text-[.85rem]">
            Join Gual and start your trading journey today.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="hover:shadow-lg 
               transition duration-300 ease-in-out "
                />

                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>

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
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="hover:shadow-lg 
                transition duration-300 ease-in-out "
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>
              {/* Confirm Password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="hover:shadow-lg 
                transition duration-300 ease-in-out "
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </form>
          <p className="text-[.7rem] mt-4">
            By creating an account, you aggree to our
            <span className="font-semibold"> Terms of Service</span> and
            <span className="font-semibold"> Privacy Policy.</span>
          </p>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" onClick={handleSubmit} className="w-full py-5">
            Create Account
          </Button>

          <p className="text-[.9rem] mt-2">
            Already have an account?
            {/* <a href="#" className="underlidne font-semibold ml-1">
             Sign in
          </a>  */}
            <Link to="/login" className="underline font-semibold ml-1">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
