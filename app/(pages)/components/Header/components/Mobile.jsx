
"use client";
import React from "react";
import Image from "next/image";
import DarkMode from "./DarkMode";
import { IconMenu, IconPerson } from "@/common/icons";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
  <section className="fixed left-0 top-0 z-10 h-[64px] flex items-center bg-white dark:bg-black  xl:hidden w-full ">
        <section className="mx-auto  flex items-center w-[90%] justify-between font-medium text-[#0C0C0C] dark:text-white ">
          <section className="w-full">
          <IconMenu  viewBox="0 0 24 24" width='24' height='24' color='white' className=' hidden dark:xl:hidden dark:block'/>
          <IconMenu  viewBox="0 0 24 24" width='24' height='24' color='black' className=' block xl:hidden dark:xl:hidden dark:hidden'/>
          </section>
          
          <section className="flex w-full">
            <Image
              alt=""
              width={99}
              height={41}
              src="/images/icons/logo.svg"
              className="dark:hidden w-[50%] h-auto xl:w-[99px] "
            />
            <Image
              alt=""
              width={99}
              height={41}
              src="/images/icons/logo-Dark.svg"
              className="hidden dark:block w-[50%] h-auto xl:w-[99px] "
            />
          </section>
          <section className="flex w-full  items-center justify-between">
            <DarkMode />
            <section className="flex h-full w-fit  bg-[#700B97] dark:bg-transparent xl:bg-white px-[6px] py-1 xl:p-0  xl:w-[155px] items-center justify-center gap-[12.25px] rounded-[5px] xl:rounded-lg border border-solid border-[#700B97] font-medium text-[#700B97] dark:border-white dark:text-white">
                  <IconPerson
                width="10.33"
                height="13.67"
                viewBox="0 0 16 22"
                color="white"
                fill='white'
                className="hidden dark:xl:hidden  dark:block"
              />
                   <IconPerson
                width="10.33"
                height="13.67"
                viewBox="0 0 16 22"
                color="white"
                fill='white'
                className="block   xl:hidden dark:hidden"
              />
             
              
              <span className="hidden dark:hidden xl:block">حساب کاربری</span>
           
            </section>
          </section>
        </section>
      </section>
  </>;
}