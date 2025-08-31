import React, { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  // USER DATA 
   const [user, setUser] = useState(null)

// useEffect(() => {
//   const storedUser = localStorage.getItem("user")
//   if (storedUser && storedUser !== "undefined") {
//     try {
//       setUser(JSON.parse(storedUser))
//     } catch (err) {
//       console.error("Invalid user data in localStorage:", err)
//       localStorage.removeItem("user")
//     }
//   }
// }, [])

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser && storedUser !== "undefined") {
    try {
      setUser(JSON.parse(storedUser));
    } catch (err) {
      console.error("Invalid user data in localStorage:", err);
      localStorage.removeItem("user");
    }
  }
}, []);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset  className="bg-[#0b0b0b]">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink className="text-white flex gap-6" href="#"> 
                {/* {user ? user.name || user.email || "User" : "Guest"}  */}
                  {/* {user ? `${user.name} (${user.email})` : "Guest"} */}
                    {/* {user ? `${user.email.split("@")[0]} (${user.email})` : "Guest"} */}
                    <p className="font-bold">Welcome</p>
                    <div className="font-boldl ">
                    {/* {user ? `${user.email.split("@")[0]} ` : "Guest"} */}

                      {user 
                      ? `${user.email.split("@")[0].charAt(0).toUpperCase()}${user.email.split("@")[0].slice(1)} (${user.email})` 
                      : "Guest"}
                    </div>

                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">



          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="flex flex-col justify-center  bg-[#171717] p-4 aspect-video rounded-xl" >
            <h1 className=" text-[1.2rem]">Total Payouts</h1>
            <h1 className="text-[3rem] font-bold">$0.00</h1>
            </div>
            <div className="flex flex-col justify-center  bg-[#171717] p-4 aspect-video rounded-xl" >
            <h1 className=" text-[1.2rem]">Number of Accounts</h1>
            <h1 className="text-[3rem] font-bold">1</h1>
            </div>
            <div className="flex flex-col justify-center bg-[#171717] p-4 aspect-video rounded-xl" >
            <h1 className=" text-[1.2rem]">Account Passed</h1>
            <h1 className="text-[3rem] font-bold">0</h1>
            </div>

          </div>
          <div className="bg-[#171717] p-5 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
            <div>
              <div className="line-1 my-3">
                <div> 
                {/* <i class="fa-regular fa-user" style="color: #63E6BE;"></i> */}
                </div>
                <h2 className="text-[1.3rem]">Account 1 - 64555</h2>
              </div>
              <div className="line2 my-3">
                {/* <img src="" alt="" /> */}
                <p className="text-[1.2rem]">Phase 1 challenge -   
                   <span className="text-muted-foreground text-[1rem]">  Normal 
                    Two Step GUAL</span></p>
              </div>
              <div className="line3">
                {/* <img src="" alt="" /> */}
                <p className="text-[1.3rem]">Started: November 30,2024:
                  <span className="text-muted-foreground text-[1rem]"> November 30, 2024 </span>
                </p>
              </div>
            </div>
              {/*  */}
              <div className="bx-2 flex gap-[4rem] bg-red-0 mt-[3rem] py-5 border-t border-t-[#3d3d3d]">
                <div className="bx-sec1">
                  <h2 className="text-[1.3rem] font-semibold">Starting Balance</h2>
                  <h1 className="text-[1.7rem] font-bold">$2,000.00</h1>
                </div>
                <div className="bx-sec2">
                  <h2 className="text-[1.3rem] font-semibold">Current Equity</h2>
                  <h1 className="text-[1.7rem] font-bold">$1,807.76</h1>
                </div>
                <div className="bx-sec3">
                  <h2 className="text-[1.3rem] font-semibold">Phase</h2>
                  <h1 className="text-[1.7rem] font-bold">1</h1>
                </div>
              </div>
          </div>
        </div>

      </SidebarInset>
    </SidebarProvider>
  )
}
