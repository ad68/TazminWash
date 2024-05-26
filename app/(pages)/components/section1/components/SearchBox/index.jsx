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
        className="items-center dark:bg-searchBox-gradient mx-auto mt-[21px] gap-4 xl:gap-0  xl:flex-row flex-col  flex xl:h-[119px] xl:w-[1066.64px] w-[90%] mx-auto h-auto rounded-[15px] border-[1px]  border-solid border-[#ffffff1a] bg-white p-8 text-[#666666] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] dark:bg-opacity-90 dark:text-white dark:backdrop-blur-sm
"
      >
        <span className="xl:w-[155px] w-full text-base xl:text-[24px] text-center  font-bold leading-[41.45px] text-[#0C0C0C] dark:text-white">
          ثبت درخواست{" "}
        </span>
        <section className="xl:px-0 px-6 xl:mr-8 w-full h-auto  flex xl:h-[55px] xl:w-[199.64px] text-xs xl:text-base  items-center  xl:justify-center justify-between rounded-[10px] border  border-solid border-[#EBEBEB] py-[10px]">
          <section className=" xl:ml-4">
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
          <span className="xl:pl-0 pl-[60%]">ماشین</span>
          
          <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className=" xl:mr-[45.84px]"
            alt=""
          />
        </section>
        <section className=" xl:mr-8 px-6 xl:px-0 text-xs xl:text-base flex h-auto w-full xl:h-[55px] xl:w-[199.64px] items-center justify-between xl:justify-center rounded-[10px] border border-solid border-[#EBEBEB] py-[10px]">
  
          <section className="xl:ml-4">
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
          <span className="xl:pl-0 pl-[35%]"> تاریخ</span>
         
          <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className="mr-[64px]"
            alt=""
          />
        </section>
        <section className=" xl:mr-8  flex xl:h-[55px] text-xs xl:text-base w-full h-auto xl:w-[199.64px] px-6 xl:px-0 items-center justify-between xl:justify-center rounded-[10px] border border-solid border-[#EBEBEB] py-[10px]">
          <section className="xl:ml-4">
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
          <span className="xl:pl-0 pl-[40%]">خدمات</span>
     
          <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className="mr-[49px]"
            alt=""
          />
        </section>
        <button className="-12.01% 108.61%  text-xs xl:text-base xl:mr-8 flex h-auto xl:h-[55px] w-full xl:w-[199.64px] items-center   justify-center rounded-[10px] border border-solid  border-[#EBEBEB] dark:border-none dark:bg-[#700B97] dark:from-[#700B97] dark:to-[#700B97] bg-gradient-to-r from-[#CE50FF] to-[#700B97] py-[10px] text-white">
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
