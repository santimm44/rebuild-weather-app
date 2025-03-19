'use client'

import React, { useState } from 'react'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu'
import Link from 'next/link'
import { DropdownMenu } from './ui/dropdown-menu'
import { Input } from './ui/input'
import magnifyingGlass from '../assets/resources/magnifying-glass-solid.svg'
import bookmark from '../assets/icons/bookmark-regular.svg'
import { useAppContext } from '@/context/context'

const Navbar = () => {

    const [city, setCity] = useState("")
    const {setSearchCity} = useAppContext()

    const handleCityState = (event: React.ChangeEvent<HTMLInputElement>) => {
        let valueOfInput = event.target.value
        setCity(valueOfInput)
        console.log(city)
    }

    const handleClickEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSearchCity(city);
        }
    }

    return (
        <NavigationMenu className='max-w-screen bg-[#D9D9D999]'>
            <NavigationMenuList className='flex  justify-around items-baseline'>
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
                <div className='flex'>
                    <Input className='border-black w-3/4 rounded-full' onKeyDown={handleClickEvent} onChange={handleCityState} type='string' />
                    <img className='w-1/4' src={magnifyingGlass} alt="search Icon: Magnifying glass" />
                </div>
                <DropdownMenu>
                    //Dropdown menu
                </DropdownMenu>
                <div>
                    <img src={bookmark} alt="Bookmark ICon" />
                </div>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar