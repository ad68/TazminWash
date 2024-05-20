"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({title, text,img,price}) {
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
  <section className=" flex  py-4 flex-col h-full w-[306px]  rounded-2xl bg-white p-6 shadow-2xl">
  <Image src={img} width={274} height={170} alt=""/>
            <span className="text-[16px] mt-4 font-medium leading-[28.44px]">
                {title}
            </span>
            <p className="text-justify text-[12px] mt-[24px] leading-[24px]">
              {text}
            </p>
            <section className="flex justify-between mt-8 w-full items-center">
              <span className="text-sm font-medium ">{price}</span>
            <button className="flex items-center px-2 py-[8px] border-[1px] border-[##0C0C0C] w-[96px] rounded-lg h-[40px] 	">
                <span className="text-[14px] leading-[24.18px] font-medium text-[#0C0C0C]">مشاهده</span>
                <Image src='/images/icons/Alt-Arrow-Left.png' width={24} height={24} alt=""/>
            </button>
            </section>
          </section></>;
}
