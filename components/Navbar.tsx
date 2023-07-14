import { UserButton } from "@clerk/nextjs"

import { MainNav } from "@/components/MainNav"

export const Navbar = () => {
  return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
        <div>This will be as store switcher</div>
        <div>
            <MainNav className="mx-6"/>
        </div>
        <div className="ml-auto flex items-center space-x-4">
            <UserButton afterSignOutUrl="/"/>
        </div>
        </div>
    </div>
  )
}
