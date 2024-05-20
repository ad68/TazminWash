import React, { useState, useContext, useEffect } from 'react'
import DarkModeCircle from '../../../../../public/images/icons/DarkModeCircle.svg'
import Son from '../../../../../public/images/icons/Son.svg'
import Moon from '../../../../../public/images/icons/moon.svg'
import Image from 'next/image'
import { consoleLog_BlackOrange } from '@/helper'
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
        <section onClick={() => { status === true ? goToLightMode() : goToDarkMode() }} className='w-[64px] cursor-pointer h-[31px] relative border border-[#700B97] rounded-[19px]'>
            <Image src={Son} alt='' className={`absolute top-[5px] right-2 transition-all ease-in-out left-[27px]`} />
            <Image src={DarkModeCircle} alt='' className={`absolute top-[-4px] transition-all duration-300 ${status ? `left-[-3px]` : `left-[27px]`}`} />
            <Image src={Moon} alt='' className={`absolute top-[5px] left-2 transition-all`} />
        </section>
    )
}
