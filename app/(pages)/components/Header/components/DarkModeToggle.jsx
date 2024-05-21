import React, { useState, useContext, useEffect } from 'react'
// import DarkModeCircle from '../../../../../public/images/icons/DarkModeCircle.svg'
// import Son from '../../../../../public/images/icons/Son.svg'
// import Moon from '../../../../../public/images/icons/moon.svg'
// import Image from 'next/image'
import { consoleLog_BlackOrange } from '@/helper'
import { IconDarkModeCircle, IconMoon, IconSon } from '@/common/icons'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ theme, setTheme, goToLightMode, goToDarkMode }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [status, setStatus] = useState(theme === "dark" ? true : false)
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        if (theme === "dark") {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }, [theme])

    // ─── Functions ──────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (
        <section onClick={() => { status === true ? goToLightMode() : goToDarkMode() }} className='w-[64px] cursor-pointer h-[31px] relative border dark:border-white border-[#700B97] rounded-[19px]'>
            <span className={`absolute top-[5px] right-2 transition-all ease-in-out left-[27px]`}>
        <IconSon width='19.82' height='19.97'  color='white' viewBox="0 0 17 18" className='dark:block hidden'/>
        <IconSon width='19.82' height='19.97' color='#700B97' viewBox="0 0 17 18" className='block dark:hidden'/>
            </span>
            <span className={`absolute top-[-2px] transition-all duration-300 ${status ? `left-[-2px]` : `left-[29px]`}`}>
                <IconDarkModeCircle width='32.24' height='31.33' fill='white' color='white' viewBox="0 0 37 37"  className='dark:block hidden'/>
                <IconDarkModeCircle width='32.24' height='31.33' fill='#700B97'  color='#700B97' viewBox="0 0 37 37"   className='block dark:hidden'/>
            </span>
            <span className={`absolute top-[6px] left-2 transition-all`}>
                <IconMoon width='19.82' height='14.97' fill='white' color='white' viewBox="0 0 30 30"  className='dark:block hidden'/>
                <IconMoon width='19.82' height='14.97' fill='#700B97' color='#700B97' viewBox="0 0 30 30"    className='block dark:hidden'/>
        
            </span>
        </section>
    )
}
