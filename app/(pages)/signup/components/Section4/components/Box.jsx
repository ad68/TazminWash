"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({image, title, text}) {
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
  <section className="xl:w-[166px] w-[198px] mx-auto xl:m-0 xl:h-[147px] grid justify-items-center gap-2 dark:text-white ">
        <Image src={image} width={40} height={40} alt="" className="xl:size-[40px] size-[48px]"/>
        <h1 className="xl:text-[20px] text-[16px] font-bold">{title}</h1>
        <p className="text-[14px] font-normal text-[#343434] text-center leading-[24.18px] dark:text-white">{text}</p>
    </section></>;
}
