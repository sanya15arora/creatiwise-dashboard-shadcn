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
    name: "Sanya Arora",
    email: "sanya@example.com",
    avatar: "/avatars/sanya.jpg",
  },
  platforms: [
    {
      name: "Amazon",
      avatar: "/avatars/amazon.png",
      plan: "Business",
    },
    {
      name: "Google",
      avatar: "/avatars/google.png",
      plan: "Professional",
    },
    {
      name: "Facebook",
      avatar: "/avatars/facebook.png",
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "/dashboard/articles",
      icon: Newspaper,
      isActive: true,
      items: [
        { title: "Create Article", url: "/dashboard/articles/create" },
        { title: "Generated Articles", url: "/dashboard/articles/generate" },
        { title: "Keyword Projects", url: "/dashboard/articles/keyword-project" },
        { title: "AI Keyword to Articles", url: "/dashboard/articles/ai-keyword" },
        { title: "Article Settings", url: "/dashboard/articles/settings" },
      ],
    },
    {
      title: "Auto Blog",
      url: "/dashboard/auto-blog",
      icon: Bot,
      items: [
        { title: "Genesis Bot", url: "/dashboard/auto-blog/genesis" },
        { title: "Content Explorer", url: "/dashboard/auto-blog/explorer" },
        { title: "Quantum Writer", url: "/dashboard/auto-blog/quantum" },
      ],
    },
    {
      title: "Internal Links",
      url: "/dashboard/internal-links",
      icon: Link,
      items: [
        { title: "Introduction", url: "/dashboard/internal-links/intro" },
        { title: "Get Started", url: "/dashboard/internal-links/start" },
        { title: "Tutorials", url: "/dashboard/internal-links/tutorials" },
        { title: "Changelog", url: "/dashboard/internal-links/changelog" },
      ],
    },
    {
      title: "Free Backlinks",
      url: "/dashboard/backlinks",
      icon: Settings2,
      items: [
        { title: "Overview", url: "/dashboard/backlinks/overview" },
        { title: "Manage Team", url: "/dashboard/backlinks/team" },
        { title: "Billing", url: "/dashboard/backlinks/billing" },
        { title: "Usage Limits", url: "/dashboard/backlinks/limits" },
      ],
    },
    {
      title: "Integration",
      url: "/dashboard/integration",
      icon: Plug,
      items: [
        { title: "API Keys", url: "/dashboard/integration/api" },
        { title: "Webhooks", url: "/dashboard/integration/webhooks" },
        { title: "Third-Party Tools", url: "/dashboard/integration/tools" },
      ],
    },
    {
      title: "Subscriptions",
      url: "/dashboard/subscriptions",
      icon: Star,
      items: [
        { title: "Current Plan", url: "/dashboard/subscriptions/current" },
        { title: "Team Members", url: "/dashboard/subscriptions/team" },
        { title: "Billing History", url: "/dashboard/subscriptions/billing" },
      ],
    },
    {
      title: "Affiliate Program",
      url: "/dashboard/affiliate",
      icon: CircleDollarSign,
      items: [
        { title: "Overview", url: "/dashboard/affiliate/overview" },
        { title: "Referrals", url: "/dashboard/affiliate/referrals" },
        { title: "Payouts", url: "/dashboard/affiliate/payouts" },
      ],
    },
    {
      title: "Help Center",
      url: "/dashboard/help",
      icon: Info,
      items: [
        { title: "Documentation", url: "/dashboard/help/docs" },
        { title: "FAQs", url: "/dashboard/help/faqs" },
        { title: "Contact Support", url: "/dashboard/help/contact" },
      ],
    },
    {
      title: "Updates",
      url: "/dashboard/updates",
      icon: Bell,
      items: [
        { title: "Latest Features", url: "/dashboard/updates/features" },
        { title: "Release Notes", url: "/dashboard/updates/notes" },
        { title: "Roadmap", url: "/dashboard/updates/roadmap" },
      ],
    },
    {
      title: "Live Chat Support",
      url: "/dashboard/support/chat",
      icon: Bot,
      items: [
        { title: "Technical", url: "/dashboard/support/chat/tech" },
        { title: "Billing", url: "/dashboard/support/chat/billing" },
        { title: "General", url: "/dashboard/support/chat/general" },
      ],
    },
  ],
  profile: [
    {
      name: "Profile Settings",
      url: "/dashboard/profile",
      icon: User,
    },
  ],
};

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

