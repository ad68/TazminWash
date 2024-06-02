"use client";
import { IconHatchback } from "@/common/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { title } from "process";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ img, title, value, carType, setCarType }) {
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
          setCarType(value);
        }}
        className={` flex h-[46px] cursor-pointer w-full items-center gap-4 rounded-lg  border border-solid pr-4 ${carType ===value ? "border-[#700B97]"   : "border-[#EBEBEB]"}`}
      >
        <span className={`h-4 w-4 flex justify-center items-center rounded-full bg-[#D9D9D9]`}>
          <section
            className={`h-2 w-2 rounded-full  ${carType ===value ? "bg-[#700B97]" : "bg-[#D9D9D9]"}`}
          ></section>
        </span>
        <section
          className={`flex gap-1 ${carType ===value ? "text-[#700B97]" : "text-[#222222]"}`}
        >
          <Image alt="" src={img} width="41" height="21" />
          {title}
        </section>
      </section>
    </>
  );
}
