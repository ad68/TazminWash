"use client";
import React from "react";
import Header from "./components/Header";
import IteemsList from "./components/IteemsList";
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
  return (
    <>
      <section className="mx-auto mt-[113px] flex w-[90%]  xl:w-[1296px] flex-col items-center">
        <h2 className="w-full text-[20px] text-center xl:text-right font-bold leading-[34.55px] dark:text-white text-[#222222]">
        محصولات تضمین‌واش
        </h2>
        <Header />
        <IteemsList />
        <section className="mt-[64px] dark:text-white justify-between flex h-[40px] w-fit rounded-[10px]  border border-solid border-[#E5E7EB] text-[#6B7280] shadow-[0px_1px_2px_0px_#0000000D]">
          <span className="flex h-full cursor-pointer border-l border-solid border-[#E5E7EB]  w-[70px] items-center justify-center gap-2">
            <IconBack
              viewBox="0 0 8 8"
              width="10"
              height="20"
              color="#6B7280"
              fill="#6B7280"
              className='dark:hidden '
            />
              <IconBack
              viewBox="0 0 8 8"
              width="10"
              height="20"
              color="white"
              fill="white"
              className='dark:block hidden '
            />
            قبل
          </span>
          <span className="w-[40px] cursor-pointer h-full border-l border-solid border-[#E5E7EB]  hover:bg-[#700B97] hover:text-white flex justify-center items-center">
            1
          </span>
          <span className="w-[40px] cursor-pointer h-full border-l border-solid border-[#E5E7EB] hover:bg-[#700B97] hover:text-white flex justify-center items-center">
            2
          </span>
          <span className="w-[40px] cursor-pointer h-full border-l border-solid border-[#E5E7EB] hover:bg-[#700B97] hover:text-white flex justify-center items-center">
            3
          </span>
          <span className="w-[40px] cursor-pointer h-full hover:bg-[#700B97] hover:text-white flex justify-center items-center">
            4
          </span>
          <span className="flex h-full cursor-pointer  border-r border-solid border-[#E5E7EB] w-[70px] items-center justify-center gap-2">
          بعد
            <IconNext
              viewBox="0 0 8 8"
              width="10"
              height="20"
              color="#6B7280"
              fill="#6B7280"
              className='dark:hidden '
            />
              <IconNext
              viewBox="0 0 8 8"
              width="10"
              height="20"
              color="white"
              fill="white"
              className='dark:block hidden '
            />
          
          </span>
        </section>
      </section>
    </>
  );
}
