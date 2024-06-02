"use client";
import React, { useState } from "react";

import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
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
      <section className="mx-auto mt-8 xl:mt-[48px] h-auto xl:h-[317px] w-[90%] xl:w-[636px]">
        <section className="xl:h-[245px] h-auto w-full rounded-[15px] bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14]">
          <span className="flex  items-center text-base font-medium xl:text-[20px] text-black xl:text-[#222222]">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] bg-[#700B97]"></section>
            <Image
              alt=""
              width={16}
              height={18}
              src="/images/icons/Vectorperson.svg"
              className="z-10 mr-[28px]"
            />
            <span className="mr-2 leading-[34.55px]">مشخصات فردی</span>
          </span>
          <form>
          <section className="w-full mt-8 px-6 h-[48px]  relative ">
          <label className="text-[#666666] px-[6px] leading-[27.64px] bg-white absolute top-[-15px] right-[40px] ">نام</label>
          <input type="text" className="w-full h-full border px-4  rounded-lg  border-solid border-[#EBEBEB]"/>
        </section>
        <section className="w-full mt-8 px-6 h-[48px]  relative ">
          <label className="text-[#666666] px-[6px] leading-[27.64px] bg-white absolute top-[-15px] right-[40px] ">نام خانوادگی</label>
          <input type="text" className="w-full h-full border  rounded-lg px-4  border-solid border-[#EBEBEB]"/>
        </section>
          </form>
      
        </section>
        <section className="flex mt-6 gap-4 xl:gap-0 text-base xl:text-[18px] font-medium leading-[34.55px] justify-between w-full">
          <button
            onClick={() => {
              setActiveTab(6);
            }}
            className="flex h-[40px] xl:h-[48px] w-full xl:w-[416px] items-center justify-center rounded-lg bg-[#700B97] text-white"
          >
            ادامه
            <Image
              alt=""
              width={10}
              height={8}
              src="/images/icons/Vectorbtn.svg"
              className="z-10 mr-[10.3px]"
            />
          </button>
          <button  onClick={() => {
              setActiveTab(4);
            }}
            className="flex h-auto xl:h-[48px] w-full xl:w-[196px] items-center justify-center rounded-lg text-[#700B97] border border-solid border-[#700B97]"
          >
          مرحله قبل
        
          </button>
        </section>
      </section>
    </>
  );
}
