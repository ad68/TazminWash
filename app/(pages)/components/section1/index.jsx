"use client";
import React from "react";
import Image from "next/image";
import SearchBox from "./components/SearchBox";
import { IconArrowLeft, IconArrowRight, IconVectorBg } from "@/common/icons";
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
      <section className="relative h-auto xl:h-[744px] w-full pt-[41px] dark:bg-black">
        <section className="mx-auto flex h-auto xl:h-[488px] w-[90%] flex-col items-center  justify-between xl:w-[1296px] xl:flex-row dark:bg-black ">
          <section className="mt-[233px] flex flex-col xl:items-start items-center h-auto w-full text-[#0C0C0C] xl:h-[195px] xl:w-[564px] dark:text-white">
            <h2 className="text-right text-base font-bold leading-[27.64px] xl:ml-[99px] xl:text-[40px] xl:leading-[69.09px]">
              تمیزی خودروی شما، تنها با{" "}
              <span className="font-extrabold text-[#700B97]">یک کلیک</span>{" "}
              فاصله دارد!
            </h2>
            <span className="mt-4 text-sm font-medium leading-[27.64px] xl:leading-[41.45px] text-[#434343] xl:text-[24px] dark:text-white">
              کارواش ما، به شما در محل خودتان خدمت رسانی می‌کند.
            </span>
          </section>
          <Image
            width={900}
            height={498}
            src="/images/hero.png"
            className="absolute left-[5%] top-[15px] xl:top-[-30px] "
            alt=""
          />
        </section>
        <section className="xl:w-[1296px]  mx-auto">
        <IconVectorBg viewBox="0 0 126 186" width='124.59' height='182.5' color='#700B97' fill='#700B97' className='dark:hidden hidden xl:block'/>
        <IconVectorBg viewBox="0 0 126 186" width='124.59' height='182.5' color='white' fill='white' className='dark:xl:block  hidden'/>
        </section>

        <SearchBox />
      </section>
    </>
  );
}
