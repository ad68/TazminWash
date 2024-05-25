"use client";
import React from "react";
import Image from "next/image";
import Steps from "./components/Steps";
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
      <section className="relative mt-[40px] xl:mt-[120px] dark:text-white">
        <Image
          src="/images/Group7.png"
          width={1489}
          height={157}
          alt=""
          className="my-[135px] xl:my-[333px] w-full"
        />
        <section className="absolute xl:right-[350px] xl:top-[-260px] grid w-[114px] xl:w-[239px] justify-items-center top-[-101px] right-[39px]">
          <h1 className="number text-[32px] xl:text-[96px] font-extrabold ">01</h1>
          <h2 className="text-[16px] xl:text-[32px] font-black">
            ثبت <span className="text-[#700B97]">سفارش</span> کن منتظر تایید باش
          </h2>
        </section>
        <section className="absolute xl:right-[45%] xl:top-[260px] grid w-[114px] xl:w-[239px] justify-items-center top-[44px] right-[35%]">
          <h1 className="number text-[32px] xl:text-[96px] font-extrabold ">02</h1>
          <h2 className="text-center text-[16px] xl:text-[32px] font-black ">
            <span className="text-[#700B97]">کارواش</span> داره میاد سمتت
          </h2>
        </section>
        <section className="absolute xl:left-[325px] xl:top-[-300px] grid w-[138px] xl:w-[239px] justify-items-center left-[16px] top-[-101px] ">
          <h1 className="number text-[32px] xl:text-[96px] font-extrabold ">03</h1>
          <h2 className="text-center text-[16px] xl:text-[32px] font-black">
            شست‌وشو <span className="text-[#700B97]">تموم</span> ‌شد ماشین ‌شما
            ‌آمادست
          </h2>
        </section>
      </section>
    </>
  );
}
