import React from "react";

import { Button } from "@/components/ui/button";
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
  return (
    <div className="fixsed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">

    <Card className="w-full max-w-sm mx-auto bg-white shadow-xl">
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription className="text-[.85rem]">
          Join Gual and start your trading journey today.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Full Name</Label>
              <Input id="name" type="text" placeholder="Enter your full name"
                className="hover:shadow-lg transition duration-300 ease-in-out " />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email"
               type="email"
                placeholder="Enter your email"
                className="hover:shadow-lg transition duration-300 ease-in-out " />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                className="hover:shadow-lg transition duration-300 ease-in-out "
              /> 
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Confirm your password"
                className="hover:shadow-lg transition duration-300 ease-in-out "
              />
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
        <Button type="submit" className="w-full py-5">
          Create Account
        </Button>

      
        <p className="text-[.9rem] mt-2">
           
          Already have an account? 
          <a href="#" className="underlidne font-semibold ml-1">
             Sign in
          </a> 
        </p>
      </CardFooter>
    </Card>
    </div>
  );
};

export default Signup;
