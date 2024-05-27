"use client";
import React from "react";
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
  <section className="xl:w-[635px] w-[227px] h-[525px] xl:h-[179px] bg-[#700B97] rounded-[10px] xl:flex grid text-white ">
    <section className="xl:w-fit xl:h-full grid justify-items-center  rounded-r-[10px] content-center px-[40px]">
    <Image src={"/images/icons/Frame 1261154875.svg"} width={48} height={48} alt=""/>
    <span className="xl:text-[20px] font-bold mt-4 mb-2">8.700.000 تومان</span>
    <span className="xl:text-[16px] font-normal">میانگین درآمد</span>
    </section>
    <section className="xl:w-fit xl:h-full grid justify-items-center xl:bg-gradient-to-l bg-gradient-to-b from-[#00000041] to-transparent content-center px-[40px]">
    <Image src={"/images/icons/Frame 1261154876.svg"} width={48} height={48} alt=""/>
    <span className="xl:text-[20px] font-bold mt-4 mb-2">13 سال</span>
    <span className="xl:text-[16px] font-normal">سابقه تضمین واش</span>
    </section>
    <section className="xl:w-fit xl:h-full grid justify-items-center xl:bg-gradient-to-l bg-gradient-to-b from-[#00000041] to-transparent content-center px-[40px]">
    <Image src={"/images/icons/Frame 1261154877.svg"} width={48} height={48} alt=""/>
    <span className="xl:text-[20px] font-bold mt-4 mb-2">+94</span>
    <span className="xl:text-[16px] font-normal">  تعداد سفیران</span>
    </section>
    </section></>;
}
