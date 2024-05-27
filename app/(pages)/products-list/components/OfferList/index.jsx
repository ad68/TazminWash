"use client";
import React from "react";
import Card from "../Card";

import Image from "next/image";
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
      <section className="mx-auto mt-[24px] flex h-auto  w-full items-stretch xl:h-[407px] xl:w-[1320px]  xl:items-center ">
        <section className="flex w-full flex-col  items-center justify-center  rounded-l-[20px] bg-[#C10500]  xl:h-full xl:w-[306px] xl:rounded-l-[50px] xl:rounded-r-[15px]">
          <Image
            src="/images/purple-sign-that-says-percent.png"
            width={245}
            height={245}
            alt=""
            className=" h-[95px] w-[95px] mix-blend-luminosity xl:h-[245px] xl:w-[245px]"
          />
          <span className="text-2xl font-extrabold leading-[31.2px] text-white xl:text-[40px] xl:leading-[24px]">
            تخفیف رویایی
          </span>
        </section>

        <section className="flex h-auto w-[1.5px]  flex-col justify-center gap-2 dark:bg-black bg-white xl:h-auto ">
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 w-full bg-[#C10500]"></span>
          <span className="h-3 hidden xl:block w-full bg-[#C10500]"></span>
          <span className="hidden h-3 w-full bg-[#C10500] xl:block"></span>
          <span className="hidden h-3 w-full bg-[#C10500] xl:block"></span>
          <span className="hidden h-3 w-full bg-[#C10500] xl:block"></span>
        </section>
        <section className=" grid   w-full  gap-4 rounded-r-[20px] bg-[#C10500] px-[13px]  py-[14px] xl:w-[1014px] xl:grid-cols-3 xl:gap-x-[24px] xl:gap-y-[40px] xl:rounded-l-[15px] xl:rounded-r-[50px] xl:px-[32.75px] xl:py-[24px]">
          <Card
            title="شامپو بدنه خودرو سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price="6۵,۰۰۰ تومان "
            display="hidden xl:flex"
            discount={true}
            discountPercent="10%"
            oldPrice="۷۵,۰۰۰ تومان "
          />
          <Card
            discount={true}
            discountPercent="10%"
            oldPrice="۷۵,۰۰۰ تومان "
            title="شامپو  سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان 6۵,۰۰۰
         "
          />
          <Card
            discount={true}
            discountPercent="10%"
            oldPrice="۷۵,۰۰۰ تومان "
            title="شامپو  سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان 6۵,۰۰۰
         "
            display="hidden xl:flex"
          />
        </section>
      </section>
    </>
  );
}
