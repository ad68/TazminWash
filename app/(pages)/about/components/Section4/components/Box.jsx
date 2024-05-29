"use client";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({title, text, boxIndex}) {
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
  <section className="xl:w-[306px] py-4 xl:h-[200px] border-[1px] border-[#0000001A] rounded-2xl grid justify-items-center place-content-start gap-4 xl:gap-3 bg-[#ffffff] dark:bg-white/10 dark:backdrop-blur-sm dark:border-[1px] dark:border-[#ffffff46] dark:text-white dark:circle">
    <span className={`${boxIndex%2 === 1 ? "text-[#AA205E]" : ""} xl:text-[20px] text-[16px] font-medium xl:font-bold text-center`}>{title}</span>
    <span className="xl:w-[274px] w-[90%] text-center xl:text-[16px] text-[12px] font-normal xl:font-normal">{text}</span>
    </section></>;
}
