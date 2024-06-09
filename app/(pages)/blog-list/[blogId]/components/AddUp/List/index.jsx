"use client";
import React from "react";

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
  return (
    <>
      <section className="h-auto w-full dark:border-[#ffffff46] dark:border-[1px]  dark:text-white  dark:dark:bg-slider-gradient shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] xl:h-[324px] xl:w-[371px] rounded-[20px] xl:px-[20px] px-4 py-[24px]">
        <span className="xl:text-lg w-[90%] block mx-auto xl:w-full text-base font-bold xl:font-extrabold leading-[16px] ">فهرست</span>
        <ul className="flex w-[90%]  mx-auto xl:w-full xl:text-[18px] text-sm leading-[34px] xl:leading-[35px] dark:text-white text-[#434343] font-semibold mt-6 gap-3 xl:gap-4 flex-col list-inside list-disc">
          <li className=" justify-self-center pb-3 xl:pb-4  border-b-[0.5px] border-solid border-[#DEDEDE]">نقشه سایت چیست؟</li>
          <li className=" border-b-[0.5px] pb-3 xl:pb-4  border-solid border-[#DEDEDE]">چرا به نقشه سایت نیاز داریم؟</li>
          <li className=" border-b-[0.5px] pb-3 xl:pb-4  border-solid border-[#DEDEDE]">انواع سایت مپ</li>
          <li className="">روش های ساخت سایت مپ</li>
        </ul>
      </section>
    </>
  );
}
