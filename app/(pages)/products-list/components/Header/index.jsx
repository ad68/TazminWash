"use client";
import React from "react";
import Image from "next/image";
import { IconBtnProducts, IconRoundedMagnifer } from "@/common/icons";
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
      <section className="w-full flex xl:mt-[41px] text-sm xl:text-base mt-6 items-center gap-[51px] xl:gap-0 xl:justify-between">
        <section className=" items-center flex gap-[12px] dark:text-white text-[#070707]">
            <IconBtnProducts viewBox="0 0 20 22" width='26' height='18' color='black' fill='black' className='cursor-pointer dark:hidden'/>
            <IconBtnProducts viewBox="0 0 20 22" width='26' height='18' color='white' fill='white' className='cursor-pointer dark:block hidden'/>
          <span className="cursor-pointer hidden xl:block">مرتب سازی:</span>
          <span className="cursor-pointer hidden xl:block">منتخب</span>
          <span className="cursor-pointer ">جدیدترین</span>
          <span className="cursor-pointer hidden xl:block">پربازدیدترین</span>
          <span className="cursor-pointer hidden xl:block">گران‌ترین</span>
          <span className="cursor-pointer hidden xl:block">ارزان‌ترین</span>
          <span className="cursor-pointer hidden xl:block">پرفروش‌ترین</span>
        </section>
        <section className=" relative dark:bg-slider-gradient  border-[1px] border-solid border-[#ffffff1a]  flex h-[40px] w-full xl:w-[550px] rounded-lg">
          <input
            placeholder="جستجو"
            type="text"
            className="h-full w-full text-xs xl:text-base rounded-lg dark:bg-searchBox-gradient  dark:bg-opacity-90 dark:backdrop-blur-lg bg-[#EDEDED] px-[40px] dark:placeholder-white placeholder-[#666666]"
          />
          <IconRoundedMagnifer
            viewBox="0 0 24 24"
            width="21.5"
            height="21.5"
            fill="#666666"
            color="#666666"
            className="absolute right-[9.25px] top-[20%] dark:hidden"
          />
             <IconRoundedMagnifer
            viewBox="0 0 24 24"
            width="21.5"
            height="21.5"
            fill="white"
            color="white"
            className="absolute right-[9.25px] top-[20%] dark:block hidden"
          />
        </section>
      </section>
    </>
  );
}
