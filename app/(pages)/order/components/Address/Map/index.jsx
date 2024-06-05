"use client";
import React, { useState, useContext, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Select, TextBox } from "@/common";

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
        <section className="h-auto w-full rounded-[15px] bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14] xl:h-[582px]">
          <span className="flex  items-center text-base font-medium text-black xl:text-[20px] xl:text-[#222222]">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] bg-[#700B97]"></section>
            <Image
              alt=""
              width={14}
              height={17.75}
              src="/images/icons/location.svg"
              className="z-10 mr-[28px]"
            />
            <span className="mr-2 leading-[34.55px]">انتخاب آدرس</span>
          </span>
          <section className="flex gap-8 w-full flex-col items-center overflow-hidden">
            <section className="mt-[34px] grid w-full grid-cols-2 gap-6 px-6">
              <Select />
              <Select />
            </section>
            <section className="w-full relative px-6">
              <label className="absolute z-10 right-[40px] top-[-15px] px-[6px] bg-white text-[#666666]">آدرس کامل</label>
            <TextBox  className="w-full " />
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
            className="flex h-[40px] w-full items-center justify-center rounded-lg border border-solid border-[#700B97] text-[#700B97] xl:h-[48px] xl:w-[196px]"
          >
            مرحله قبل
          </button>
        </section>
      </section>
    </>
  );
}
