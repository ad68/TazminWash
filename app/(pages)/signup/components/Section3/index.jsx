"use client";
import React from "react";
import SignupSteps from "./components/SignupSteps";
import Image from "next/image";
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
  <section className="xl:w-[1296px] w-[90%] mx-auto mt-[56px] xl:mt-[135px] grid xl:gap-[72px] gap-[40px] relative">
    <header>
        <h1 className="xl:text-[32px] text-[20px] xl:font-extrabold font-bold leading-[34.55px] dark:text-white text-[#343434] text-center xl:text-right">مراحل ثبت نام در تضمین واش</h1>
    </header>
    <SignupSteps />
    <Image src="/images/Ellipse 80.png" width={19} height={169} alt="" className="absolute xl:top-[60%] xl:right-[-5%] top-[30%] right-0"/>
    <Image src="/images/Ellipse 79.png" width={19} height={169} alt="" className="absolute xl:left-[65%] xl:top-[30%] bottom-[10%] left-0"/>
    </section></>;
}
