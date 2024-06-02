"use client";
import React, { useEffect } from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({title,display,activeTab,index,bg1,bg2,textColor}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(()=>{console.log(activeTab);
  },[activeTab])
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section  className="xl:w-[124px] w-full justify-center items-start  flex flex-col gap-2 h-full ">
        <section className="flex self-end justify-start xl:h-[24px] w-full xl:w-[112px] items-center">
          <section className={`xl:h-[24px] flex justify-center items-center w-4 h-4 xl:w-[24px] rounded-full  ${activeTab===index?"bg-[#DBC2E5]":activeTab>index? "bg-[#700B97]" :'bg-[#D9D9D9]'} `}>
            {activeTab>index? <Image alt='' width={12.72} height={8.42} src='/images/icons/VectorTick.svg' className="z-10 hidden xl:block"/>:''}
            {activeTab>index? <Image alt='' width={8.48} height={5.66} src='/images/icons/VectorTick.svg' className="z-10 xl:hidden block"/>:''}
          </section>
          <section className={`${display} xl:h-[4px] h-[2px] w-[36px] xl:w-[88px]  ${activeTab===index?"bg-[#DBC2E5]":activeTab>index?"bg-[#700B97]":'bg-[#D9D9D9]'}`}></section>
        </section>
        <span className={`${activeTab>=index?"text-[#700B97]":"text-[#D9D9D9]"} w-full xl:block hidden text-[11px] leading-[19px]`}>{title}</span>
      </section>
    </>
  );
}
