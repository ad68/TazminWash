"use client";
import { IconHatchback } from "@/common/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { title } from "process";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  img,
  title,
  value,
  selectAddress,
  setSelectAddress,
  address,
}) {
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
          setSelectAddress(value);
        }}
        className={` flex h-auto w-full cursor-pointer items-center justify-between  rounded-lg border border-solid p-2  xl:h-[72px] xl:p-0 xl:px-4 ${selectAddress === value ? "border-[#700B97] dark:border-white" : "border-[#EBEBEB] dark:border-[#ffffff46]"}`}
      >
        <section className="flex w-full items-center gap-[5px]">
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full bg-[#D9D9D9] dark:bg-[#a590ad]`}
          >
            <section
              className={`h-2 w-2 rounded-full  ${selectAddress === value ? " bg-[#700B97]" : "bg-[#D9D9D9] dark:bg-[#a590ad]"}`}
            ></section>
          </span>
          <section
            className={`flex w-[80%] flex-col gap-2 text-sm xl:text-base`}
          >
            <span
              className={`${selectAddress === value ? "text-[#700B97] dark:text-white" : "text-[#222222] dark:text-[#a590ad]"}`}
            >
              {title}
            </span>
            <span className="text-xs leading-[20.73px] text-[#666666] xl:text-sm xl:leading-[24.18px]  dark:text-[#a590ad]">
              {address}
            </span>
          </section>
        </section>

        <Image
          alt=""
          width={24}
          height={24}
          src="/images/icons/TrashBinTrash.svg"
          className="z-10 hidden xl:block"
        />
      </section>
    </>
  );
}
