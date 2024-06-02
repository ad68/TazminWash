"use client";
import { IconHatchback } from "@/common/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { title } from "process";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ selectTime, setSelectTime,value,time }) {
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
          setSelectTime(value);
        }}
        className={` flex xl:h-[40px] h-auto py-2 xl:py-0 cursor-pointer w-full xl:w-[80px] items-center justify-center gap-2 rounded-lg  border border-solid  ${selectTime === value ? "border-[#700B97]"   : "border-[#EBEBEB]"}`}
      >
       
        <section
          className={`${selectTime === value ? "text-[#700B97]" : "text-[#6B6B6B]"}`}
        >
         
          {time}
        </section>
      
      </section>
    </>
  );
}
