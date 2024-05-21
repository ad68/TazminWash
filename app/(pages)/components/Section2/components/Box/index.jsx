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
  <section className="w-[328px] h-auto xl:w-[307px] xl:h-[242px] bg-white shadow-md rounded-2xl grid justify-items-center gap-4 py-2 dark:bg-white/10 dark:backdrop-blur-sm dark:border-[1px] dark:border-[#ffffff46] dark:text-white dark:circle">

    <Image src={image} width={84} height={84} alt="" className="w-[56px] h-auto xl:w-[84px] xl:h-[84px]" />
    <h2 className="text-[24px] font-medium">{title}</h2>
    <p className="text-[16px] font-medium w-[234px] leading-[26px] mb-6 text-center dark:text-
    [#ffffff55]">{text}</p>
  </section>
  </>;
}
