"use client";
import React from "react";
import SignupConditions from "./components/SignupConditions";
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
  <section className="xl:w-[1296px] w-[90%] mx-auto mt-[56px] xl:mt-[135px] grid gap-[72px] relative">
    <header>
        <h1 className="xl:text-[32px] text-[20px] xl:font-extrabold font-bold leading-[34.55px] dark:text-white text-[#343434] text-center xl:text-right">شرایط ثبت نام سفیر در تضمین واش چطوریه؟</h1>
    </header>
    <SignupConditions />
    <Image src="/images/Arrow-Filled-Head.png" width={103} height={138} alt="" className="xl:w-[103px] xl:h-[138px] absolute xl:right-[-100px] right-0 top-[28px]"/>
  </section>
  </>;
}
