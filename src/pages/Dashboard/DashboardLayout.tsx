import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "@/components/dashboard/SideHeader";



export default function DashboardLayout() {


    return (
        <SidebarProvider className="flex w-screen h-screen">
            <AppSidebar className="w-64 flex-shrink-0" />
            <SidebarInset className="flex flex-col flex-grow overflow-auto">
                <SiteHeader />
                <Outlet />
            </SidebarInset>
        </SidebarProvider>


    );
}
