
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
  <section className="fixed left-0 top-0 z-10   xl:hidden w-full block">
        <section className="mx-auto  flex items-center h-[64px] w-[90%] justify-between font-medium text-[#0C0C0C] dark:text-white ">
          <section className="w-full">
          <IconMenu  viewBox="0 0 24 24" width='24' height='24' color='white' className=' hidden dark:xl:hidden dark:block'/>
          <IconMenu  viewBox="0 0 24 24" width='24' height='24' color='black' className=' block xl:hidden dark:xl:hidden dark:hidden'/>
          </section>
          
          <section className="flex w-full xl:w-[598px] items-center justify-between">
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
            <span className="hidden xl:block">صفحه اصلی</span>
            <span className="hidden xl:block">درباره ما</span>
            <span className="hidden xl:block">محصولات</span>
            <span className="hidden xl:block">لیست قیمت ها</span>
            <span className="hidden xl:block">وبلاگ</span>
          </section>
          <section className="flex w-full  items-center justify-between">
            <DarkMode />
            <section className="flex h-full w-fit  bg-[#700B97] dark:bg-transparent xl:bg-white px-[6px] py-1 xl:p-0  xl:w-[155px] items-center justify-center gap-[12.25px] rounded-[5px] xl:rounded-lg border border-solid border-[#700B97] font-medium text-[#700B97] dark:border-white dark:text-white">
              <IconPerson
                width="15.4"
                height="20.4"
                viewBox="0 0 17 22"
                color="white"
                className="hidden  dark:xl:block"
                fill='white'
              />
              <IconPerson
                width="15.4"
                height="20.4"
                viewBox="0 0 17 22"
                color="#700B97"
                fill='#700B97'
                className="xl:block hidden  dark:hidden  "
              />
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