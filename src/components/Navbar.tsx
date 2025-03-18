import React from 'react'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu'
import Link from 'next/link'
import { DropdownMenu } from './ui/dropdown-menu'
const Navbar = () => {
    return (
        <NavigationMenu className='w-screen'>
            <NavigationMenuList className='flex justify-around'>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <h1>
                            Womp Womp
                        </h1>
                        <h1>
                            Weather APP
                        </h1>
                    </NavigationMenuLink>
                </Link>
                <Link href={`#`} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        //Search Bar
                    </NavigationMenuLink>
                </Link>
                <DropdownMenu>
                    //Dropdown menu
                </DropdownMenu>
                <div>
                    <img src="#" alt="Bookmark ICon" />
                </div>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar