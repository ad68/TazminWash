"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({title, text}) {
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
  <section className="dark:circle">
  <section className=" grid w-[328px] h-auto xl:h-[290px] xl:w-[574px] gap-4 xl:gap-6 rounded-2xl bg-white p-[20px] xl:p-6  dark:bg-white/10 dark:backdrop-blur-sm dark:border-[1px] dark:border-[#ffffff46] dark:text-white justify-items-center xl:justify-items-start">
            <h1 className="text-[16px] font-bold xl:text-[28px] xl:font-medium">
                {title}
            </h1>
            <p className="text-justify text-[14px] font-normal xl:text-[16px] xl:font-medium leading-[27.64px]">
              {text}
            </p>
            <button className="flex justify-center items-center px-[12px] xl:px-4 py-[6px] border-[1px] border-[#700B97] w-[110px] xl:w-[164px] rounded-[5px] xl:rounded-xl xl:justify-self-end	justify-self-center	">
                <span className="text-[12px] xl:text-[20px] font-medium xl:font-bold text-[#700B97]">ثبت سفارش</span>
                <Image src='/images/icons/Chevron_Left_MD.svg' width={24} height={24} alt="" className="w-[20px] h-[20px] xl:w-[24px] xl:h-6"/>
            </button>
          </section></section></>;
}
