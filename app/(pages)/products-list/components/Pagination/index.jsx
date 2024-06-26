"use client";
import React from "react";
import { IconBack, IconNext } from "@/common/icons";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
   <section className="mx-auto mt-[64px] overflow-hidden flex h-[40px] w-fit justify-between rounded-[10px] border  border-solid border-[#E5E7EB] text-[#6B7280] shadow-[0px_1px_2px_0px_#0000000D] dark:text-white">
        <span className="flex h-full w-[70px] hover:bg-[#700B97] cursor-pointer items-center justify-center  gap-2 border-l border-solid border-[#E5E7EB]">
          <IconBack
            viewBox="0 0 8 8"
            width="10"
            height="20"
            color="#6B7280"
            fill="#6B7280"
            className="dark:hidden "
          />
          <IconBack
            viewBox="0 0 8 8"
            width="10"
            height="20"
            color="white"
            fill="white"
            className="hidden dark:block "
          />
          قبل
        </span>
        <span className="flex h-full w-[40px] cursor-pointer items-center justify-center  border-l border-solid border-[#E5E7EB] hover:bg-[#700B97] hover:text-white">
          1
        </span>
        <span className="flex h-full w-[40px] cursor-pointer items-center justify-center border-l border-solid border-[#E5E7EB] hover:bg-[#700B97] hover:text-white">
          2
        </span>
        <span className="flex h-full w-[40px] cursor-pointer items-center justify-center border-l border-solid border-[#E5E7EB] hover:bg-[#700B97] hover:text-white">
          3
        </span>
        <span className="flex h-full w-[40px] cursor-pointer items-center justify-center hover:bg-[#700B97] hover:text-white">
          4
        </span>
        <span className="flex h-full w-[70px] hover:bg-[#700B97]  cursor-pointer items-center justify-center gap-2 border-r border-solid border-[#E5E7EB]">
          بعد
          <IconNext
            viewBox="0 0 8 8"
            width="10"
            height="20"
            color="#6B7280"
            fill="#6B7280"
            className="dark:hidden "
          />
          <IconNext
            viewBox="0 0 8 8"
            width="10"
            height="20"
            color="white"
            fill="white"
            className="hidden dark:block "
          />
        </span>
      </section>
  </>;
}