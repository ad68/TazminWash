"use client";
import React from "react";
import Image from "next/image";
import { IconCalender, IconCar, IconWidget } from "@/common/icons";
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
      <section
        className="items-centern dark:bg-searchBox-gradient mx-auto mt-[123px]  flex h-[119px] w-[1066.64px] rounded-[15px] border-[1px]  border-solid border-[#ffffff1a] bg-white p-8 text-[#666666] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] dark:bg-opacity-90 dark:text-white dark:backdrop-blur-lg
"
      >
        <span className="w-[155px] text-[24px]  font-bold leading-[41.45px] text-[#0C0C0C] dark:text-white">
          ثبت درخواست{" "}
        </span>
        <section className="jus mr-8  flex h-[55px] w-[199.64px] items-center  justify-center rounded-[10px] border  border-solid border-[#EBEBEB] py-[10px]">
          <section className="ml-4">
            <IconCar
              width="23.5"
              height="16"
              color="#666666"
              fill="white"
              viewBox="0 0 26 19"
              className="block dark:hidden"
            />
            <IconCar
              width="23.5"
              height="16"
              fill="#666666"
              coclor="white"
              viewBox="0 0 26 19"
              className="hidden dark:block"
            />
          </section>
          ماشین
          <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className="mr-[45.84px]"
            alt=""
          />
        </section>
        <section className="jus mr-8  flex h-[55px] w-[199.64px] items-center  justify-center rounded-[10px] border border-solid border-[#EBEBEB] py-[10px]">
          {/* <Image
            width={24}
            height={24}
            src="/images/icons/calender.svg"
            className="ml-4"
            alt=""
          /> */}
          <section className="ml-4">
            <IconCalender
              viewBox="0 0 22 22"
              color="#666666"
              className="block dark:hidden"
              width="24"
              height="24"
            />
            <IconCalender
              viewBox="0 0 22 22"
              color="white"
              className="hidden dark:block"
              width="24"
              height="24"
            />
          </section>
          تاریخ
          <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className="mr-[64px]"
            alt=""
          />
        </section>
        <section className="jus mr-8  flex h-[55px] w-[199.64px] items-center  justify-center rounded-[10px] border border-solid border-[#EBEBEB] py-[10px]">
          <section className="ml-4">
            <IconWidget
              viewBox="0 0 24 25"
              color="#666666"
              className="block dark:hidden"
              width="24"
              height="24"
            />
            <IconWidget
              viewBox="0 0 24 25"
              color="white"
              className="hidden dark:block"
              width="24"
              height="24"
            />
          </section>
          خدمات
          <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className="mr-[49px]"
            alt=""
          />
        </section>
        <button className="-12.01% 108.61%   mr-8 flex h-[55px] w-[199.64px] items-center   justify-center rounded-[10px] border border-solid  border-[#EBEBEB] dark:border-none dark:bg-[#700B97] dark:from-[#700B97] dark:to-[#700B97] bg-gradient-to-r from-[#CE50FF] to-[#700B97] py-[10px] text-white">
          <Image
            width={24}
            height={24}
            alt=""
            src="/images/icons/Search.svg"
            className="ml-2"
          />
          جستجو
        </button>
      </section>
    </>
  );
}
