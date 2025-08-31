import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "New Challenge",
      url: "#",
      items: [
        { 
          title: "Home",
          url: "#",
        },
        {
          title: "Rewards",
          url: "#",
        },
      ],
    },
    {
      title: "My Offers",
      url: "#",
      items: [
        {
          title: "Withdrawal",
          url: "#",
        },
        {
          title: "Buy Challenge",
          url: "#",
          // isActive: true,
        },
      
      ],
    },
    {
      title: "Performance",
      url: "#",
      items: [
        {
          title: "My Stats",
          url: "#",
        },
        {
          title: "Certificates",
          url: "#",
        },

      ],
    },

  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar {...props}>
      <SidebarHeader  className="bg-[#0b0b0b] text-white">
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        {/* <SearchForm /> */}
        {/* <p className="text-white">llllll</p> */}
      </SidebarHeader>
      <SidebarContent  className="bg-[#0b0b0b] text-white">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-white">{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
