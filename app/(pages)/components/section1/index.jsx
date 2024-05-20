"use client";
import React from "react";
import Image from "next/image";
import SearchBox from "./components/SearchBox";
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
    <section className="w-full h-[744px]">
      <section className="flex w-[1296px]  mx-auto items-center h-[488px] justify-between ">
        <section className="absolute left-0   top-[-100px] -z-10 mt-[40px] flex  h-[1000px] w-[1000px]  justify-center bg-[radial-gradient(#ccabda,#cca9d9,1%,#d7bfe2,#f3f0f6,white,white,white)]">
          <Image
            width={641}
            height={423}
            src="/images/bg-car.png"
            className="absolute bottom-[330px] -z-0 "
            alt=""
          />
          <Image
            width={718}
            height={230.29}
            src="/images/circ-bg.png"
            className="absolute bottom-[300px] -z-10"
            alt=""
          />
        </section>
       
        <section className="h-[291px] w-[564px] text-[#0C0C0C]">
          <h2 className="text-[40px] ml-[99px] text-right font-bold leading-[69.09px]">
            تمیزی خودروی شما،<br/> تنها با <span className="font-extrabold text-[#700B97]">یک کلیک</span> فاصله دارد!
          </h2>
          <span className="text-[24px] mt-4 leading-[41.45px] font-medium text-[#434343]">کارواش ما، به شما در محل خودتان خدمت رسانی می‌کند.</span>
          <section className="flex h-[56px] mt-[40px] w-[178px] items-center justify-center gap-[10px] rounded-lg border border-solid border-[#700B97] font-medium text-[#700B97]">
          اطلاعات بیشتر
            <Image alt="" width={4} height={8} src="/images/icons/arrow-left.svg" />
          </section>
        </section>
      
      </section>
      <SearchBox />
      </section>
    </>
  );
}
