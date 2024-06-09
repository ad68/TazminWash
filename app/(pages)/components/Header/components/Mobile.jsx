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
  return (
    <>
      <section className="fixed left-0 top-0 z-10 flex h-[64px] w-full items-center bg-white  xl:hidden dark:bg-black ">
        <section className="mx-auto  flex w-[90%] items-center justify-between font-medium text-[#0C0C0C] dark:text-white ">
          <section className="w-full">
            <IconMenu
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="white"
              className=" hidden dark:block dark:xl:hidden"
            />
            <IconMenu
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="black"
              className=" block xl:hidden dark:hidden dark:xl:hidden"
            />
          </section>
          <section className="flex w-full">
            <Image
              alt=""
              width={99}
              height={41}
              src="/images/icons/logo.svg"
              className="h-auto w-[50%] xl:w-[99px] dark:hidden "
            />
            <Image
              alt=""
              width={99}
              height={41}
              src="/images/icons/logo-Dark.svg"
              className="hidden h-auto w-[50%] xl:w-[99px] dark:block "
            />
          </section>
          <section className="flex w-full  items-center justify-between">
            <DarkMode />
            <section className="flex h-full w-fit  items-center justify-center gap-[12.25px] rounded-[5px] border border-solid  border-[#700B97] bg-[#700B97] px-[6px] py-1 font-medium text-[#700B97] xl:w-[155px] xl:rounded-lg xl:bg-white xl:p-0 dark:border-white dark:bg-transparent dark:text-white">
              <IconPerson
                width="10.33"
                height="13.67"
                viewBox="0 0 16 22"
                color="white"
                fill="white"
                className="hidden dark:block  dark:xl:hidden"
              />
              <IconPerson
                width="10.33"
                height="13.67"
                viewBox="0 0 16 22"
                color="white"
                fill="white"
                className="block   xl:hidden dark:hidden"
              />
              <span className="hidden xl:block dark:hidden">حساب کاربری</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
