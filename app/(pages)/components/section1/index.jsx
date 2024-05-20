"use client";
import React from "react";
import Image from "next/image";
import SearchBox from "./components/SearchBox";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";
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
    <section className="w-full dark:bg-black pt-[41px] relative h-[744px]">
      <section className="flex w-[1296px] dark:bg-black  mx-auto items-center h-[488px] justify-between ">
     
       
        <section className="h-[291px] w-[564px] dark:text-white text-[#0C0C0C]">
          <h2 className="text-[40px] ml-[99px] text-right font-bold leading-[69.09px]">
            تمیزی خودروی شما،<br/> تنها با <span className="font-extrabold text-[#700B97]">یک کلیک</span> فاصله دارد!
          </h2>
          <span className="text-[24px] mt-4 leading-[41.45px] font-medium dark:text-white text-[#434343]">کارواش ما، به شما در محل خودتان خدمت رسانی می‌کند.</span>
          <section className="flex h-[56px] mt-[40px] dark:border-white dark:text-white w-[178px] items-center justify-center gap-[10px] rounded-lg border border-solid border-[#700B97] font-medium text-[#700B97]">
          اطلاعات بیشتر
          <IconArrowLeft width='8' hight='13' color='#700B97' viewBox="0 0 6 10" className='dark:hidden block'/>
          <IconArrowLeft width='8' hight='13' color='white' viewBox="0 0 6 10" className='hidden dark:block'/>
          </section>
        </section>
        <Image
            width={1000}
            height={498}
            src="/images/hero.png"
            className="absolute left-[5%] top-[-50px] "
            alt=""
          />
      </section>
    
      <SearchBox />
      </section>
    </>
  );
}
