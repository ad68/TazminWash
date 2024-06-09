"use client";
import React, { useState, useEffect } from "react";

import CheckedBox from "./CheckedBox";
import { IconCarTitle, IconVectoservice } from "@/common/icons";
import Image from "next/image";
import {
  consoleLog_BlackGreen,
  consoleLog_BlackYellow,
  consoleLog_Blue,
  consoleLog_Red,
} from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [serviceType, setServiceType] = useState([]);
  const values =  new Set( serviceType);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const creatServiceType = (value) => {
    values.add(value);
    setServiceType([...values]);
  };
  const deleateServiceType = (value) => {
    values.delete(value);
    setServiceType([...values]);
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    consoleLog_BlackYellow(serviceType);
  }, [serviceType]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto mt-8 xl:mt-[48px] h-auto xl:h-[543px] w-[90%] xl:w-[636px]">
      
        <section className="xl:h-[411px] h-auto w-full rounded-[15px] dark:border-[1px] dark:border-[#ffffff46] dark:text-white dark:bg-searchBox-gradient  dark:bg-opacity-90 dark:backdrop-blur-lg bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14]">
          <span className="flex  items-center text-base font-medium xl:text-[20px] dark:text-white text-black xl:text-[#222222]">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] dark:bg-[#a590ad] bg-[#700B97]"></section>
            <IconVectoservice width='19.56'  viewBox="0 0 18 18" height='19.56' className="z-10 mr-[28px]"/>
            <span className="mr-2 leading-[34.55px]">خدمات تکمیلی</span>
          </span>
          <section className="mt-6 flex flex-col gap-4  px-6">
            <CheckedBox
              serviceType={serviceType}
              value={1}
              img="/images/Hatchback.png"
              title="واکس لاستیک"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
            <CheckedBox
              serviceType={serviceType}
              value={2}
              img="/images/Hatchback.png"
              title="واکس صندلی چرم"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
             <CheckedBox
              serviceType={serviceType}
              value={3}
              img="/images/Hatchback.png"
              title="واکس داشبورد"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
               <CheckedBox
              serviceType={serviceType}
              value={4}
              img="/images/Hatchback.png"
              title="رفع کدری چراغ "
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
              <CheckedBox
              serviceType={serviceType}
              value={5}
              img="/images/Hatchback.png"
              title="قلم گیری"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
          </section>
        </section>
        <section className="mt-6 text-base gap-4 xl:gap-0 xl:text-[18px] leading-[34.55px] font-medium flex w-full justify-between">
          <button
            onClick={() => {
              setActiveTab(7);
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
          <button
            onClick={() => {
              setActiveTab(5);
            }}
            className="flex h-[40px] xl:h-[48px] w-full xl:w-[196px] items-center justify-center rounded-lg border border-solid dark:border-[#a590ad] border-[#700B97] dark:text-[#a590ad] text-[#700B97]"
          >
          مرحله قبل
          </button>
        </section>
      </section>
    </>
  );
}
