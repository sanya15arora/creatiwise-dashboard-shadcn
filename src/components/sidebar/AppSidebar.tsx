import * as React from "react"
import {
  Bot,
  User,
  Newspaper,
  CircleDollarSign,
  Star,
  Settings2,
  Plug,
  Link,
  Info,
  Bell
} from "lucide-react"

import { NavMain } from "@/components/sidebar/NavMain"
import { NavUser } from "@/components/sidebar/NavUser"
import { PlatformSwitcher } from "@/components/sidebar/PlatformSwitcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Sanya",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  platforms: [
    {
      name: "amazon.com",
      avatar: "/avatars/shadcn.jpg",
      plan: "Yearly",
    },
    {
      name: "google.com",
      avatar: "AudioWaveform",
      plan: "Professional",
    },
    {
      name: "facebook.com",
      avatar: "/avatars/shadcn.jpg",
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: Newspaper,
      isActive: true,
      items: [
        {
          title: "Create Article",
          url: "/dashboard/articles/create",
        },
        {
          title: "Generated Articles",
          url: "/dashboard/articles/generate",
        },
        {
          title: "Keyword Projects",
          url: "#",
        },
        {
          title: "AI Keyword to Articles",
          url: "#",
        },
        {
          title: "Steal Competitor Keyword",
          url: "#",
        },
        {
          title: "Import Keyword from GSC",
          url: "#",
        },
        {
          title: "Article Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Auto Blog",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Internal Links",
      url: "#",
      icon: Link,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Free Backlinks",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Integration",
      url: "#",
      icon: Plug,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Subscriptions",
      url: "#",
      icon: Star,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Affiliate Program",
      url: "#",
      icon: CircleDollarSign,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Help Center",
      url: "#",
      icon: Info,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Updates",
      url: "#",
      icon: Bell,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Live Chat Support",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
  ],
  profile: [
    {
      name: "Profile",
      url: "#",
      icon: User,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
        <PlatformSwitcher platforms={data.platforms} />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <NavMain items={data.navMain} profile={data.profile} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
