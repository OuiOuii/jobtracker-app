import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Zustand store to manage sidebar state
import { useSidebarStore } from "@/stores/sidebar_store"; 

// Main content components
import DashboardContent from "@/components/blocks/main-contents/dashboard/dashboard";
import JobListContent from "@/components/blocks/main-contents/data-table/job-list";

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
            {/* <div className="bg-muted min-h-[100vh] rounded-xl md:min-h-min">
              
            </div> */}
            {content}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
