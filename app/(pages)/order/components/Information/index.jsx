"use client";
import React, { useState } from "react";
import { Select, TextBox } from "@/common";
import Image from "next/image";
import { IconVectorPerson } from "@/common/icons";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
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
      <section className="mx-auto mt-8 h-auto w-[90%] xl:mt-[48px] xl:h-[317px] xl:w-[636px]">
        <section className="dark:bg-searchBox-gradient h-auto w-full rounded-[15px] bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14] xl:h-[245px]  dark:border-[1px] dark:border-[#ffffff46] dark:bg-opacity-90 dark:text-white dark:backdrop-blur-lg">
          <span className="flex  items-center text-base font-medium text-black xl:text-[20px] xl:text-[#222222] dark:text-white">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] bg-[#700B97] dark:bg-[#a590ad]"></section>
            <IconVectorPerson viewBox="0 0 18 20" width='16' height='18'   className="z-10 mr-[28px]" />
            <span className="mr-2 leading-[34.55px]">مشخصات فردی</span>
          </span>
          <form>
            <section className="relative mt-8 h-[48px] w-full  px-6 ">
              <label className="absolute right-[40px] top-[-15px] z-10 bg-white px-[6px] text-[#666666] dark:bg-transparent dark:text-white">
                نام
              </label>
              <section className="hidden w-full dark:block">
                <TextBox dark className="w-full " />
              </section>
              <section className="block w-full dark:hidden">
                <TextBox className="w-full " />
              </section>
            </section>
            <section className="relative mt-8 h-[48px] w-full  px-6 ">
              <label className="absolute right-[40px] top-[-15px] z-10 bg-white px-[6px] text-[#666666] dark:bg-transparent dark:text-white">
                نام خانوادگی
              </label>
              <section className="hidden w-full dark:block">
                <TextBox dark className="w-full " />
              </section>
              <section className="block w-full dark:hidden">
                <TextBox className="w-full " />
              </section>
            </section>
          </form>
        </section>
        <section className="mt-6 flex w-full justify-between gap-4 text-base font-medium leading-[34.55px] xl:gap-0 xl:text-[18px]">
          <button
            onClick={() => {
              setActiveTab(6);
            }}
            className="flex h-[40px] w-full items-center justify-center rounded-lg bg-[#700B97] text-white xl:h-[48px] xl:w-[416px]"
          >
            ادامه
            <Image
              alt=""
              width={10}
              height={8}
              src="/images/icons/Vectorbtn.svg"
              className="z-10 mr-[10.3px]"
            />
          </button>
          <button
            onClick={() => {
              setActiveTab(4);
            }}
            className="flex h-auto w-full items-center justify-center rounded-lg border border-solid dark:border-[#a590ad] border-[#700B97] dark:text-[#a590ad] text-[#700B97] xl:h-[48px] xl:w-[196px]"
          >
            مرحله قبل
          </button>
        </section>
      </section>
    </>
  );
}
