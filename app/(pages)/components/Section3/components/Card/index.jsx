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
  <section className=" grid h-[290px] w-[574px] gap-6 rounded-2xl bg-white p-6 shadow-2xl">
            <h1 className="text-[28px] font-medium">
                {title}
            </h1>
            <p className="text-justify text-[16px] font-medium leading-[27.64px]">
              {text}
            </p>
            <button className="flex items-center px-4 py-[6px] border-[1px] border-[#700B97] w-[164px] rounded-xl justify-self-end	">
                <span className="text-[20px] font-bold text-[#700B97]">ثبت سفارش</span>
                <Image src='/images/icons/Chevron_Left_MD.svg' width={24} height={24} alt=""/>
            </button>
          </section></>;
}
