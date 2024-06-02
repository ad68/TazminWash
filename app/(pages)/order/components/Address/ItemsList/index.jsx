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
  selectAddress, setSelectAddress,
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
        className={` flex h-auto xl:h-[72px] w-full cursor-pointer items-center gap-4 justify-between rounded-lg p-2 xl:p-0  border border-solid xl:px-4 ${selectAddress === value ? "border-[#700B97]" : "border-[#EBEBEB]"}`}
      >
        <section className="flex w-full items-center gap-2">
        <span
          className={`flex h-4 w-4 items-center justify-center rounded-full bg-[#D9D9D9]`}
        >
          <section
            className={`h-2 w-2 rounded-full  ${selectAddress === value ? "bg-[#700B97]" : "bg-[#D9D9D9]"}`}
          ></section>
        </span>
        <section className={`flex w-[80%] xl:w-full text-sm gap-2 xl:text-base flex-col`}>
          <span
            className={`${selectAddress === value ? "text-[#700B97]" : "text-[#222222]"}`}
          >
            {title}
          </span>
          <span className="text-xs xl:text-sm leading-[20.73px] xl:leading-[24.18px] text-[#666666]">
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
