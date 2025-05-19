import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

const breadcrumbMap: Record<string, string> = {
    articles: "Articles",
    create: "Create Article",
    generate: "Generate Article",
};

const clickableSegments = ["create", "generate"];

function formatSegment(segment: string): string {
    return breadcrumbMap[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function SiteHeader() {
    const location = useLocation();

    const segments = location.pathname
        .replace(/^\/|\/$/g, "")
        .split("/")
        .filter((s) => s && s !== "dashboard");

    const breadcrumbItems = segments.map((segment, index) => {
        const path = "/dashboard/" + segments.slice(0, index + 1).join("/");
        const isClickable = clickableSegments.includes(segment);

        return (
            <BreadcrumbItem key={path}>
                {isClickable ? (
                    <BreadcrumbLink asChild>
                        <Link to={path}>{formatSegment(segment)}</Link>
                    </BreadcrumbLink>
                ) : (
                    <BreadcrumbPage>{formatSegment(segment)}</BreadcrumbPage>
                )}
                {index < segments.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
        );
    });

    return (
        <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                    <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    )
}
