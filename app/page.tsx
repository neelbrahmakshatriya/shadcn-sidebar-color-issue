import type { ComponentType, CSSProperties } from 'react'

import { BookOpen, Bot, Frame, Map, MoreHorizontal, PieChart, Settings, SquareTerminal } from 'lucide-react'

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
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'

type MenuItem = {
  icon: ComponentType
  label: string
  href: string
}

const platformItems: MenuItem[] = [
  {
    icon: SquareTerminal,
    label: 'Playground',
    href: '#'
  },
  {
    icon: Bot,
    label: 'Models',
    href: '#'
  },
  {
    icon: BookOpen,
    label: 'Documentation',
    href: '#'
  },
  {
    icon: Settings,
    label: 'Settings',
    href: '#'
  }
]

const projectsItems: MenuItem[] = [
  {
    icon: Frame,
    label: 'Design Engineering',
    href: '#'
  },
  {
    icon: PieChart,
    label: 'Sales & Marketing',
    href: '#'
  },
  {
    icon: Map,
    label: 'Travel',
    href: '#'
  },
  {
    icon: MoreHorizontal,
    label: 'More',
    href: '#'
  }
]

const SidebarPage = () => {
  return (
    <SidebarProvider
      style={{ '--sidebar': 'var(--color-red-600)', '--sidebar-foreground': 'white' } as CSSProperties}
    >
      <Sidebar className='[&_[data-slot=sidebar-group-label]]:text-white'>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' className='!bg-transparent !text-white' asChild>
                <a href='#'>
                  <img src='https://ui.shadcn.com/favicon.ico' alt='Shadcn Logo' className='size-8.5' />
                  <span className='text-xl font-semibold'>Shadcn UI</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {platformItems.map(item => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton tooltip={item.label} asChild>
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projectsItems.map(item => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton tooltip={item.label} asChild>
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger />
    </SidebarProvider>
  )
}

export default SidebarPage
