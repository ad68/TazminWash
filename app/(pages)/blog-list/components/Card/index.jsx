"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ image, title, text, date }) {
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
      <section className="flex xl:flex-col xl:h-[441px] py-[14px] xl:py-0 xl:w-[306px]  rounded-[10px] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] w-full xl:gap-4 gap-1  dark:bg-white/5 dark:backdrop-blur-sm dark:bg-slider-gradient  dark:border-[1px]  dark:border-[#ffffff46] dark:text-white dark:dark:bg-slider-gradient">
        <Image
          src={image}
          width={306}
          height={200}
          alt=""
          className="h-auto mx-auto w-[30%] mr-2 xl:mr-0 rounded-[5px] xl:h-[200px] xl:w-[306px]"
        />
        <section className="flex w-[70%] xl:w-full mx-auto flex-col px-4 xl:pb-4 ">
          <span className="text-[12px] xl:w-full w-[75%] font-bold leading-[20.73px] text-ellipsis xl:whitespace-normal whitespace-nowrap overflow-hidden  xl:text-[16px] xl:font-normal xl:leading-[27.64px]">
            {title}
          </span>
          <span className="leading-[20px] xl:w-full w-[90%] text-[#404040] dark:text-white  text-ellipsis whitespace-pre-wrap overflow-hidden  mt-[3px] xl:mt-4 text-justify text-[10px] font-normal xl:text-[14px] dark:xl:font-light  xl:font-light xl:leading-[24.18px]">
            {text}
          </span>
          <section className="flex mt-[8px] xl:w-full w-[70%] xl:mt-8 justify-between">
            <section className="flex items-center gap-2">
              <Image
                src="/images/icons/Calender 1.svg"
                width={18}
                height={20}
                alt=""
                className="size-4 xl:h-[20px] xl:w-[18px]"
              />
              <span className="text-[10px] font-normal text-[#9C9C9C] xl:text-[14px] xl:font-light">
                {date}
              </span>
            </section>
            <button className="hidden items-center xl:flex">
              <span className="text-[16px] font-medium text-[#700B97]">
                خواندن
              </span>
              <Image
                src="/images/icons/Chevron_Left_MD.svg"
                width={24}
                height={24}
                alt=""
              />
            </button>
          </section>
        </section>
       
      </section>
    </>
  );
}
