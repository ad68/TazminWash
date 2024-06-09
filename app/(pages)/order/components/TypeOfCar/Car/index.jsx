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
        className={` flex h-[46px] cursor-pointer  w-full items-center gap-4 rounded-lg  border border-solid pr-4 ${carType ===value ? "dark:border-[#c4b6ca] border-[#700B97]"   : "dark:border-[#ffffff46] border-[#EBEBEB]"}`}
      >
        <span className={`h-4 w-4 flex justify-center items-center rounded-full dark:bg-[#a590ad] bg-[#D9D9D9]`}>
          <section
            className={`h-2 w-2 rounded-full  ${carType ===value ? "  bg-[#700B97]" : "dark:bg-[#a590ad] bg-[#D9D9D9]"}`}
          ></section>
        </span>
        <section
          className={`flex gap-1 ${carType ===value ? " dark:text-white text-[#700B97]" : "dark:text-[#c4b6ca] text-[#222222]"}`}
        >
          <Image alt="" src={img} width="41" height="21" />
          {title}
        </section>
      </section>
    </>
  );
}
