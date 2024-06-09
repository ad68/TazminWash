"use client";
import { IconHatchback } from "@/common/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { title } from "process";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ day, date, value, setWeekDay, weekDay }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  // useEffect(()=>{console.log(select)},[select])
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        onClick={() => {
          setWeekDay(value);
        }}
        className={` flex flex-col cursor-pointer xl:h-[104px] py-[17.5px] xl:py-0 w-full xl:w-[92PX] items-center justify-center gap-4 rounded-lg  border border-solid  ${ weekDay ===value ? "dark:border-white border-[#700B97]"   : "dark:border-[#ffffff46] border-[#EBEBEB]"}`}
      >
       
        <section
          className={`${ weekDay ===value ? "dark:text-white text-[#700B97]" : "dark:text-[#a590ad]  text-[#6B6B6B]"}`}
        >
         
          {day}
        </section>
        <section
          className={`text-sm ${ weekDay ===value ? "dark:text-white text-[#700B97]" : "dark:text-[#a590ad]  text-[#6B6B6B]"}`}
        >
          {date}
        </section>
      </section>
    </>
  );
}
