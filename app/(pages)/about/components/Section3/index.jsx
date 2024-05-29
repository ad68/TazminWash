"use client";
import React from "react";
import Image from "next/image";
import Box from "./components/Box";
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
  <section className="bg-[url('/images/Features.png')] xl:bg-cover bg-[length:100%_255px] bg-no-repeat w-full xl:h-[400px] h-[225px] mt-8 xl:mt-[137px] text-white">
    <section className="xl:flex xl:justify-between xl:w-[1296px] mx-auto grid gap-6 justify-items-center pt-4">
        <section className="xl:mt-[114px]  xl:w-[535px] xl:text-right grid xl:gap-6 gap-1">
            <header className="flex gap2 xl:gap-3 justify-center xl:justify-start items-center">
                <Image src="/images/icons/Label.svg" width={36} height={36} alt="" className="xl:size-[36px] size-4"/>
                <span className="xl:text-[18px] text-[12px] font-light xl:font-normal">مزیت تضمین واش چیه؟</span>
            </header>
            <span className="xl:text-[36px] text-[14px] font-bold ">از دلایلی باید از تضمین واش استفاده کرد !</span>
        </section>
        <section className="xl:mt-[64px] flex xl:gap-[28px] gap-6 justify-center">
            <Box image={"/images/icons/Icon.svg"} title={"بیمه بودن خودرو"}/>
            <Box image={"/images/icons/Icon2.svg"} title={"شستشو با مواد نانو"}/>
            <Box image={"/images/icons/Icon3.svg"} title={"صرفه جویی تو وقت و آب"}/>
        </section>
    </section>
  </section>
  </>;
}
