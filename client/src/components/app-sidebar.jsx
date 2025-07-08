import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  LayoutDashboard,
  Sheet,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useSidebarStore } from "@/stores/sidebar_store";



const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      // url: "/dashboard",
      icon: LayoutDashboard,
      isActive: false,
    },
    {
      title: "Jobs",
      // url: "/jobs",
      icon: Sheet,
      isActive: false,
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
}


export function AppSidebar({
  ...props
}) {

  // used to get the stored active content from Zustand
  const activeContent = useSidebarStore((state) => state.activeContent);

  // Set the active state for the main navigation items based on the active content
  data.navMain = data.navMain.map(item =>
  item.title === activeContent
    ? { ...item, isActive: true }
    : { ...item, isActive: false }
  );

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Job Tracker App</span>
              <span className="truncate text-xs">By Jericho Mortega</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain}/>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
