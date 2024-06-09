"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ image, title, text, date,display }) {
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
      <section className={`grid h-auto w-[70%]  rounded-[10px] shadow-md xl:h-[441px] ${display} xl:w-[306px] xl:gap-4 gap-1 dark:bg-white/10 dark:backdrop-blur-sm dark:border-[1px] dark:border-[#ffffff46] dark:text-white dark:gradient`}>
        <Image
          src={image}
          width={306}
          height={200}
          alt=""
          className="h-auto w-full rounded-t-[10px] xl:h-[200px] xl:w-[306px]"
        />
        <section className="grid px-4 pb-4 xl:gap-4 gap-2">
          <h1 className="text-[12px] font-bold leading-[20.73px] xl:text-[16px] xl:font-normal xl:leading-[27.64px]">
            {title}
          </h1>
          <p className="leading-[20px] text-[#404040] text-justify text-[10px] font-normal xl:text-[14px] xl:font-light xl:leading-[24.18px]">
            {text}
          </p>
          <section className="flex justify-between">
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
          <section className="flex items-center justify-center border-t-[1px] border-[#6060603b] xl:hidden py-3">
            <button className="flex gap-1 ">
                <span className="text-[12px] font-medium text-[#700B97]">مشاهده</span>
                <Image src="images/icons/Ey.svg" width={16} height={16} alt="" />
            </button>
          </section>
      </section>
    </>
  );
}
