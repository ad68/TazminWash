"use client";
import React, { useState, useEffect } from "react";

import CheckedBox from "./CheckedBox";
import { IconCarTitle } from "@/common/icons";
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
      
        <section className="xl:h-[471px] h-auto w-full rounded-[15px] bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14]">
          <span className="flex  items-center text-base font-medium xl:text-[20px] text-black xl:text-[#222222]">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] bg-[#700B97]"></section>
            <Image
              alt=""
              width={19.56}
              height={19.56}
              src="/images/icons/service.svg"
              className="z-10 mr-[28px]"
            />
            <span className="mr-2 leading-[34.55px]">خدمات</span>
          </span>
          <span className="mr-[28px] mt-2 xl:mt-4 block  text-sm text-[#747474]">
            خدمات مورد نیاز خود را انتخاب کنید.
          </span>
          <section className="mt-6 flex flex-col gap-4 w-[85%] mx-auto xl:w-full  xl:px-6">
            <CheckedBox
              serviceType={serviceType}
              value={1}
              img="/images/Hatchback.png"
              title="روشویی"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
            <CheckedBox
              serviceType={serviceType}
              value={2}
              img="/images/Hatchback.png"
              title="توشویی"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
             <CheckedBox
              serviceType={serviceType}
              value={3}
              img="/images/Hatchback.png"
              title="نظافت صندوق"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
               <CheckedBox
              serviceType={serviceType}
              value={4}
              img="/images/Hatchback.png"
              title=" صفرشویی"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
              <CheckedBox
              serviceType={serviceType}
              value={5}
              img="/images/Hatchback.png"
              title="واکس و پولیش"
              price="15000تومان "
              creatServiceType={creatServiceType}
              deleateServiceType={deleateServiceType}
            />
          </section>
        </section>
        <section className="mt-6 flex w-full gap-4 xl:gap-0 justify-between text-base xl:text-[18px] font-medium leading-[34.55px]">
          <button
            onClick={() => {
              setActiveTab(3);
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
              setActiveTab(1);
            }}
            className="flex h-[40px] xl:h-[48px] w-full xl:w-[196px] items-center justify-center rounded-lg border border-solid border-[#700B97] text-[#700B97]"
          >
          مرحله قبل
          </button>
        </section>
      </section>
    </>
  );
}
