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
      <section className="relative mt-[120px]">
        <Image
          src="/images/Group7.png"
          width={1489}
          height={157}
          alt=""
          className="my-[333px] w-full"
        />
        <section className="absolute right-[350px] top-[-260px] grid w-[239px] justify-items-center">
          <h1 className="number text-[96px] font-extrabold ">01</h1>
          <h2 className="text-[32px] font-black">
            ثبت <span className="text-[#700B97]">سفارش</span> کن منتظر تایید باش
          </h2>
        </section>
        <section className="absolute right-[45%] top-[260px] grid w-[239px] justify-items-center">
          <h1 className="number text-[96px] font-extrabold ">02</h1>
          <h2 className="text-center text-[32px] font-black">
            <span className="text-[#700B97]">کارواش</span> داره میاد سمتت
          </h2>
        </section>
        <section className="absolute left-[325px] top-[-300px] grid w-[239px] justify-items-center">
          <h1 className="number text-[96px] font-extrabold ">03</h1>
          <h2 className="text-center text-[32px] font-black">
            شست‌وشو <span className="text-[#700B97]">تموم</span> ‌شد ماشین ‌شما
            ‌آمادست
          </h2>
        </section>
      </section>
    </>
  );
}
