"use client";
import React, { useState } from "react";
import { IconCarTitle, IconClipboardList } from "@/common/icons";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [selectAddress, setSelectAddress] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto mt-8 xl:mt-[48px] h-auto xl:h-[528px] w-[90%] xl:w-[636px]">
        <section className="h-auto xl:h-[456px] w-full rounded-[15px] dark:border-[1px] dark:border-[#ffffff46] dark:text-white dark:bg-searchBox-gradient  dark:bg-opacity-90 dark:backdrop-blur-lg bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14]">
          <span className="flex  items-center text-base font-medium xl:text-[20px] dark:text-white text-black xl:text-[#222222]">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] dark:bg-[#a590ad] bg-[#700B97]"></section>
            <IconClipboardList  width='24' height='24' viewBox="0 0 24 25"  className="z-10 mr-[28px]"/>
            <span className="mr-2 leading-[34.55px]">جزئیات سفارش</span>
          </span>
       
        </section>
        <section className="flex mt-6 text-base gap-4 xl:gap-0 xl:text-[18px] font-medium leading-[34.55px] justify-between w-full">
          <button
            onClick={() => {
              setActiveTab();
            }}
            className="flex h-[40px] xl:h-[48px] w-full xl:w-[416px] items-center justify-center rounded-lg bg-[#700B97] text-white"
          >
            پرداخت
         
          </button>
          <button  onClick={() => {
              setActiveTab(6);
            }}
            className="flex h-auto w-full xl:h-[48px] xl:w-[196px] items-center justify-center rounded-lg dark:text-[#a590ad] text-[#700B97] border border-solid dark:border-[#a590ad] border-[#700B97]"
          >
          مرحله قبل
        
          </button>
        </section>
      </section>
    </>
  );
}
