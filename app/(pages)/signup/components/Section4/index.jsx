"use client";
import React from "react";
import Box from "./components/Box";
import Info from "./components/Info";
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
  <section className="xl:w-[1296px] w-[90%] mx-auto mt-[56px] xl:mt-[135px] grid xl:gap-[72px] gap-[40px] ">
  <header>
        <h1 className="xl:text-[32px] text-[20px] xl:font-extrabold font-bold leading-[34.55px] dark:text-white text-[#343434] text-center xl:text-right"><span className="text-[#700B97]">مزایای</span> سفیر تضمین واش</h1>
    </header>
    <section className="xl:flex grid xl:gap-[60px] gap-8 items-center">
        <Box image={"/images/icons/History 2.svg"} title={"انعطاف‌پذیری"} text={"امکان زمانی انعطاف‌پذیر و توازن بین کار و زندگی"}/>
        <Box image={"/images/icons/Card 2.svg"} title={"پاداش و مزایا"} text={"ارائه بسته‌های رقابتی شامل بیمه، پاداش‌های عملکردی و ..."}/>
        <Box image={"/images/icons/Frame 1261154869.svg"} title={"فرصت‌های پیشرفت"} text={"ارائه مسیر شغلی واضح و فرصت‌های رشد حرفه‌ای"}/>
    </section>
    <section className="mx-auto xl:m-0">
        <Info />
    </section>
    </section></>;
}
