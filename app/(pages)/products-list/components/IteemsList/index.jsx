"use client";
import React from "react";
import Card from "../Card";
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
  return <>
   <section className="mt-[40px] w-[90%]  xl:w-[1296px]  mx-auto grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-x-[24px] xl:gap-y-[40px]">
          <Card
            title="شامپو بدنه خودرو سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان ۷۵,۰۰۰
         "
            display="hidden xl:flex"
          />
          <Card
            title="شامپو بدنه خودرو سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان ۷۵,۰۰۰
         "
            display=""
          />
          <Card
            title="شامپو  سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان ۷۵,۰۰۰
         "
          />
          <Card
            title="شامپو  سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان ۷۵,۰۰۰
         "
            display="hidden xl:flex"
          />
  
        </section>
  </>;
}