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

import { useState } from "react";

// Zustand store to manage sidebar state
import { useSidebarStore } from "@/stores/sidebar_store"; 

// Dashboard Content
const DashboardContent = () => {
  return (
    <>
      <div className="bg-blue-400 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </>
  )
};

// Job list content
const JobListContent = () => {
  return (
    <>
      <div className="bg-amber-700 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </>
  );
};

export default function Sidebar() {

  // used to get the stored active content from Zustand
  const activeContent = useSidebarStore((state) => state.activeContent);

  let content
  switch (activeContent){
    case "Dashboard":
      content = <DashboardContent />;
      break;
    case "Jobs":
      content = <JobListContent />;
      break;
    default:
      content = <DashboardContent />;
  }

  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {content}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
