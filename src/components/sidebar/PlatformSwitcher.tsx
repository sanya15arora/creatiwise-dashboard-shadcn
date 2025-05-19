import * as React from "react"
import { ChevronDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function PlatformSwitcher({
  platforms,
}: {
  platforms: {
    name: string
    avatar: string
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activePlatform, setActivePlatform] = React.useState(platforms[0])

  if (!activePlatform) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem className="lg:w-full lg:rounded-full lg:border lg:border-gray-300 px-3 lg:shadow-sm">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground ">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={activePlatform.avatar} alt={activePlatform.name} />
                <AvatarFallback className=" rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500">
                  {activePlatform.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activePlatform.name}</span>
              </div>
              <ChevronDown />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Platforms
            </DropdownMenuLabel>
            {platforms.map((platform) => (
              <DropdownMenuItem
                key={platform.name}
                onClick={() => setActivePlatform(platform)}
                className="flex items-center gap-3 p-2"
              >
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage src={platform.avatar} alt={platform.name} />
                  <AvatarFallback className="rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    {platform.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col overflow-hidden">
                  <span className="font-semibold">{platform.name}</span>
                  <span className="truncate text-xs text-gray-500">{platform.plan}</span>
                </div>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add Platform</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
