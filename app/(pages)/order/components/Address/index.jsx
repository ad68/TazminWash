"use client";
import React, { useState } from "react";
import StepsBox from "../StepsBox";
import ItemsList from "./ItemsList";
import Map from "./Map";
import { IconCarTitle, IconLocation, IconVectorAdd } from "@/common/icons";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [selectAddress, setSelectAddress] = useState(1);
  const [map,setMap]=useState(false)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      {
            map? <Map setActiveTab={setActiveTab}/> :
            <section className="mx-auto mt-8 xl:mt-[48px] h-auto xl:h-[408px] w-[90%] xl:w-[636px]">
            <section className="xl:h-[336px] h-auto w-full rounded-[15px] dark:border-[1px] dark:border-[#ffffff46] dark:text-white dark:bg-searchBox-gradient  dark:bg-opacity-90 dark:backdrop-blur-lg bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14]">
              <span className="flex  items-center text-base font-medium xl:text-[20px] dark:text-white text-black xl:text-[#222222]">
                <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] dark:bg-[#a590ad] bg-[#700B97]"></section>
                <IconLocation viewBox="0 0 24 25" fill='white'  className="z-10 mr-[28px]"/>
                <span className="mr-2 leading-[34.55px]">انتخاب آدرس</span>
              </span>
              <section className="mt-6 flex flex-col gap-2 w-[85%] mx-auto  xl:px-6">
                <ItemsList
                  selectAddress={selectAddress}
                  setSelectAddress={setSelectAddress}
                  value={1}
                  address='اشرفی اصفهانی - خیابات موسوی - کوچه یکم - پلاک 23'
                  title="تهران - صادقیه"
                />
                <ItemsList
                   selectAddress={selectAddress}
                   setSelectAddress={setSelectAddress}
                  value={2}
                  address='اشرفی اصفهانی - خیابات موسوی - کوچه یکم - پلاک 23'
                  title="تهران - پیروزی"
                />
                <button onClick={()=>{
                  setMap(true)
                }} className="dark:text-[#a590ad] text-[#700B97] xl:text-base text-sm flex items-center justify-center gap-[10px] mt-[25px] rounded-lg h-[48px] border border-solid dark:border-[#a590ad] border-[#700B97]">
               <IconVectorAdd viewBox="0 0 14 14" width='16' height='16'/>
                افزودن آدرس جدید
                </button>
              </section>
            </section>
            <section className="flex mt-6 gap-4 xl:gap-0 text-base xl:text-[18px] font-medium leading-[34.55px] justify-between w-full">
              <button
                onClick={() => {
                  setActiveTab(5);
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
              <button  onClick={() => {
                  setActiveTab(3);
                }}
                className="flex h-[40px] xl:h-[48px] w-full xl:w-[196px] items-center justify-center rounded-lg dark:text-[#a590ad] text-[#700B97] border border-solid dark:border-[#a590ad] border-[#700B97]"
              >
              مرحله قبل
            
              </button>
            </section>
          </section>
          }

    </>
  );
}

