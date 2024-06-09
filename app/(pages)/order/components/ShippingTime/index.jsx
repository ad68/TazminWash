"use client";
import React, { useEffect, useState } from "react";

import DateList from "./DateList";
import Times from "./Times";

import Image from "next/image";
import { IconCalenderlock } from "@/common/icons";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [weekDay, setWeekDay] = useState(1);
  const [selectTime, setSelectTime] = useState(1);
  const [otherDay, setOtherDay] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(otherDay);
  }, [otherDay]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto mt-8 xl:mt-[48px] h-auto xl:h-[611px] w-[90%]  xl:w-[636px]">
        <section className="xl:h-[539px] h-auto w-full rounded-[15px] dark:border-[1px] dark:border-[#ffffff46] dark:text-white dark:bg-searchBox-gradient  dark:bg-opacity-90 dark:backdrop-blur-lg bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14]">
        
          <span className="flex  items-center text-base font-medium xl:text-[20px] dark:text-white text-black xl:text-[#222222]">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] dark:bg-[#a590ad] bg-[#700B97]"></section>
        <IconCalenderlock  className="z-10 mr-[28px]" viewBox="0 0 24 25"/>
          
            <span className="mr-2 leading-[34.55px]"> تاریخ و ساعت</span>
          </span>
          <section>
          <DateList weekDay={weekDay} setWeekDay={setWeekDay} otherDay={otherDay} setOtherDay={setOtherDay}/>
          <Times selectTime={selectTime} setSelectTime={setSelectTime}/>
          </section>
        </section>
       
        <section className="xl:mt-6 mt-8 flex text-base xl:text-[18px] gap-4 xl:gap-0 leading-[34.55px] font-medium w-full justify-between">
          <button
            onClick={() => {
              setActiveTab(4);
            }}
            className="flex h-[40px] xl:h-[48px] w-full xl:w-[416px] items-center justify-center rounded-lg bg-[#700B97] text-white"
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
          <button     onClick={() => {
              setActiveTab(2);
            }} className="flex h-[40px] xl:h-[48px] w-full xl:w-[196px] items-center justify-center rounded-lg border border-solid dark:border-[#a590ad] dark:text-[#a590ad] border-[#700B97] text-[#700B97]">
                      مرحله قبل
          </button>
        </section>
      </section>
    </>
  );
}
