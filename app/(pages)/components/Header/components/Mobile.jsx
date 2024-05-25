
"use client";
import React from "react";
import Image from "next/image";
import DarkMode from "./DarkMode";
import { IconPerson } from "@/common/icons";
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
          {/* <section className="flex w-[598px] items-center justify-between">
            <Image
              alt=""
              width={99}
              height={41}
              src="/images/icons/logo.svg"
              className="dark:hidden"
            />
            <Image
              alt=""
              width={99}
              height={41}
              src="/images/icons/logo-Dark.svg"
              className="hidden dark:block"
            />
            <span>صفحه اصلی</span>
            <span>درباره ما</span>
            <span>محصولات</span>
            <span>لیست قیمت ها</span>
            <span>وبلاگ</span>
          </section> */}
          <section className="flex w-full  items-center justify-between">
            <DarkMode />
            {/* <Image width={64} height={32} src="/images/icons/darkModeBtn.png" /> */}
            {/* <section className="flex h-full w-[155px] items-center justify-center gap-[12.25px] rounded-lg border border-solid border-[#700B97] font-medium text-[#700B97] dark:border-white dark:text-white">
              <IconPerson
                width="15.5"
                height="20.5"
                viewBox="0 0 16 22"
                color="white"
                className="hidden dark:block"
              />
              <IconPerson
                width="15.5"
                height="20.5"
                viewBox="0 0 16 22"
                color="#700B97"
                className="block dark:hidden"
              />
              حساب کاربری
            </section> */}
          </section>
        </section>
      </section>
  </>;
}