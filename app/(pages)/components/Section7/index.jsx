"use client";
import React from "react";
import Image from "next/image";
import Dot from "./components/Dot";
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
      <section className="xl:mt-[120px] mt-[40px] relative w-[90%] mx-auto ">
        <header className="flex items-center justify-center gap-[22px] dark:text-white">
          <section className="flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-[#6f0b9759] dark:border-[#ffffff7a]">
            <section className="flex h-3 w-3 items-center justify-center rounded-full border-[1px] border-[#6f0b97ac] dark:border-[#ffffffbf]">
              <div className="inline-block h-2 w-2 rounded-full bg-[#700B97]  dark:bg-white"></div>
            </section>
          </section>
          <h1 className="text-[32px] font-extrabold">نظرات مشتریان</h1>
          <section className="flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-[#6f0b9759] dark:border-[#ffffff7a]">
            <section className="flex h-3 w-3 items-center justify-center rounded-full border-[1px] border-[#6f0b97ac] dark:border-[#ffffffbf]">
              <div className="inline-block h-2 w-2 rounded-full bg-[#700B97]  dark:bg-white"></div>
            </section>
          </section>
        </header>
        <section className="mt-6 absolute bg-white dark:xl:bg-black dark:xl:text-white z-10 grid h-[278px] rounded-[15px] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] xl:h-[580px] w-full justify-items-center gap-4 xl:bg-[url('/images/BG.png')] bg-cover py-6 xl:py-[80px] xl:dark:bg-[url('/images/BGD.png')]">
          <Image
            src="/images/icons/Vector.svg"
            width={18}
            height={15}
            alt=""
            className=""
          />
          <h3 className="xl:w-[856px]  w-[70%] text-center text-[14px] font-medium xl:text-2xl xl:font-bold leading-[26px] xl:leading-[49px]">
            با سلام و عرض ادب ، من از خدمات و نتیجه نهایی کار بسیار راضی بودم
            همچنین بسیار کادر مودب و آن تایمی داشتند .
          </h3>
          <Image
            src="/images/icons/Vectort.svg"
            width={18}
            height={15}
            alt=""
          />
          <span className="xl:text-[16px] text-[12px] font-[400px]">هاشم زاده | تهران</span>
          <section className="flex gap-6">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </section>
        </section>
        <section className="xl:hidden mt-6 h-[278px] -z-10 rotate-6 absolute grid rounded-[15px] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] xl:h-[580px] w-full justify-items-center gap-4 xl:bg-[url('/images/BG.png')] bg-cover py-6 xl:py-[80px] xl:dark:bg-[url('/images/BGD.png')]">
     
        </section>
        <section className="xl:hidden mt-6 grid h-[278px] z-0 rotate-3  absolute rounded-[15px] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] xl:h-[580px] w-full justify-items-center gap-4 xl:bg-[url('/images/BG.png')] bg-cover py-6 xl:py-[80px] xl:dark:bg-[url('/images/BGD.png')]">
      
        </section>
      </section>
    </>
  );
}
