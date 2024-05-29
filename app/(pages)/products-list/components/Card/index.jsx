"use client";
import React from "react";
import Image from "next/image";
import { IconAltArrow, IconArrowLeft } from "@/common/icons";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title, text, img, price,display,discount,discountPercent,oldPrice,showMoal }) {
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
      <section className={`${display} dark:bg-slider-gradient justify-between dark:bg-white/5 dark:backdrop-blur-sm  flex h-auto w-full xl:w-[306px] flex-col rounded-2xl  border-[1px] border-solid border-[#ffffff1a]  bg-white p-[10px] xl:p-4 text-[#0C0C0C] shadow-2xl dark:text-white`}>
        <Image src={img} width={274} height={170} alt="" />
        <span className="mt-2 xl:mt-4 text-xs xl:text-[16px] font-medium leading-[28.44px]">
          {title}
        </span>
        <p className="xl:mt-[16px] xl:text-justify text-[10px] xl:text-[12px] leading-[24px]">
          {text}
        </p>
        <section className="xl:mt-8  flex flex-col xl:flex-row  w-full items-end justify-self-end xl:items-center xl:justify-between">
          <section className="flex flex-col gap-1">
          {
          oldPrice?<span className="text-sm line-through font-medium text-[#666666]">{oldPrice}</span>:""
         }
          <span className="text-sm font-medium ">{price}</span>  
        
          </section>
          {
            discount? <span className="bg-[#C10500] text-xs px-[10px] rounded-full py-[4px] text-white">{discountPercent}</span>:''
          }
         <button onClick={showMoal} className="flex  xl:h-[40px] mt-[13px] xl:mt-0 xl:w-[96px] w-full items-center rounded-lg border-[0.5px] xl:border-[1px] border-[#700B97] dark:border-[#CFCFCF]  xl:dark:border-[#CFCFCF] xl:border-[#0C0C0C] justify-center   	">
        
            <span className="text-[14px] font-medium leading-[24.18px] text-[#700B97] xl:text-[#0C0C0C] dark:text-white">
              مشاهده
            </span>

            <IconAltArrow
              color="white"
              fill='white'
              viewBox="0 0 24 25"
              className=" hidden dark:block"
            />
            
            <IconAltArrow
              color="#700B97"
              fill='#700B97'
              viewBox="0 0 24 25"
              className="dark:hidden xl:hidden xl:dark:hidden block"
            />
            <IconAltArrow
              color="black"
              fill='black'
              viewBox="0 0 24 25"
              className="hidden xl:block dark:hidden"
            />
          </button>
        </section>
      </section>
    </>
  );
}
