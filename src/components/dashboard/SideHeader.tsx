import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import type { JSX } from "react/jsx-runtime";

type BreadcrumbConfig = {
  label: string;
  clickable: boolean;
};

const BREADCRUMB_MAPPINGS: Record<string, BreadcrumbConfig> = {
  articles: { label: "Articles", clickable: false }, 
  create: { label: "Create Article", clickable: true },
  generate: { label: "Generate Article", clickable: true },
  "keyword-project": { label: "Keyword Project", clickable: true },
  "ai-keyword": { label: "AI Keyword to Articles", clickable: true },
};


function getSegmentInfo(segment: string): BreadcrumbConfig {
  if (BREADCRUMB_MAPPINGS[segment]) {
    return BREADCRUMB_MAPPINGS[segment];
  }
  
  const formattedLabel = segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
    
  return {
    label: formattedLabel,
    clickable: false, 
  };
}

type SiteHeaderProps = {
  basePath?: string;
  className?: string;
  showSidebarTrigger?: boolean;
};

export function SiteHeader({
  basePath = "dashboard",
  className = "",
  showSidebarTrigger = true,
}: SiteHeaderProps) {
  const location = useLocation();

  const { breadcrumbItems } = useMemo(() => {
    const pathSegments = location.pathname
      .replace(/^\/|\/$/g, "")
      .split("/")
      .filter((segment) => segment && segment !== basePath);
    
    const items: JSX.Element[] = [];
    
    pathSegments.forEach((segment, index) => {
      const { label, clickable } = getSegmentInfo(segment);
      const path = `/${basePath}/${pathSegments.slice(0, index + 1).join("/")}`;
      const isLastItem = index === pathSegments.length - 1;
      
      const isValidLink = clickable && (segment !== "articles" || !isLastItem);
      
      items.push(
        <BreadcrumbItem key={path}>
          {isValidLink && !isLastItem ? (
            <BreadcrumbLink asChild>
              <Link to={path} aria-label={`Go to ${label}`}>{label}</Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{label}</BreadcrumbPage>
          )}
          {!isLastItem && <BreadcrumbSeparator />}
        </BreadcrumbItem>
      );
    });
    
    return { segments: pathSegments, breadcrumbItems: items };
  }, [location.pathname, basePath]);
  
  return (
    <header className={`group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear ${className}`}>
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {showSidebarTrigger && (
          <>
            <SidebarTrigger 
              className="-ml-1" 
              aria-label="Toggle sidebar"
            />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
          </>
        )}
        
        {breadcrumbItems.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex-1 overflow-hidden">
            <Breadcrumb>
              <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
            </Breadcrumb>
          </nav>
        )}
      </div>
    </header>
  );
}
