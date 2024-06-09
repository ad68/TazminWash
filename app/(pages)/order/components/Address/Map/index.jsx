"use client";
import React, { useState, useContext, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Select, TextBox } from "@/common";
import { IconCarTitle, IconLocation, IconVectorAdd } from "@/common/icons";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const Map = useMemo(
    () =>
      dynamic(
        () => import("@/(pages)/order/components/Address/Map/components/Map"),
        {
          loading: () => <p>A map is loading</p>,
          ssr: false,
        },
      ),
    [],
  );
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto mb-[120px] mt-8 h-auto w-[90%] xl:mt-[48px] xl:h-[564px] xl:w-[636px]">
        <section className="h-auto w-full rounded-[15px] dark:border-[1px] dark:border-[#ffffff46] dark:text-white dark:bg-searchBox-gradient  dark:bg-opacity-90 dark:backdrop-blur-lg bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14] xl:h-[582px]">
          <span className="flex  items-center text-base font-medium dark:text-white text-black xl:text-[20px] xl:text-[#222222]">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] bg-[#700B97]"></section>
            <IconLocation viewBox="0 0 24 25" fill='white'  className="z-10 mr-[28px]"/>
            <span className="mr-2 leading-[34.55px]">انتخاب آدرس</span>
          </span>
          <section className="flex w-full mx-auto flex-col items-center gap-8 overflow-hidden">
            <section className="mt-[34px] hidden dark:grid w-full  xl:grid-cols-2 gap-6 px-6">
              <Select dark/>
              <Select dark/>
            </section>
            <section className="mt-[34px] dark:hidden grid w-full  xl:grid-cols-2 gap-6 px-6">
              <Select />
              <Select />
            </section>
            <section className="relative w-full px-6">
              <label className="absolute right-[40px] top-[-15px] z-10 dark:text-white dark:bg-transparent bg-white px-[6px] text-[#666666]">
                آدرس کامل
              </label>
              <section className="w-full dark:block hidden"> <TextBox dark className="w-full " /></section>
              <section className="w-full block dark:hidden"> <TextBox  className="w-full " /></section>
            </section>

            <Map />
          </section>
        </section>
        <section className="mt-6 flex w-full justify-between gap-4 text-base font-medium leading-[34.55px] xl:gap-0 xl:text-[18px]">
          <button
            onClick={() => {
              setActiveTab(5);
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
              setActiveTab(3);
            }}
            className="flex h-[40px] w-full items-center justify-center rounded-lg border border-solid dark:border-[#a590ad] border-[#700B97] dark:text-[#a590ad] text-[#700B97] xl:h-[48px] xl:w-[196px]"
          >
            مرحله قبل
          </button>
        </section>
      </section>
    </>
  );
}
