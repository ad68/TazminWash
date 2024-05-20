"use client";
import React from "react";
import Image from "next/image";
import Card from "./components/Card";
import Icon from "@ant-design/icons/lib/components/Icon";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";

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
      <section className="  -12.01% 108.61% mt-[120px] flex h-[439px] w-full items-center  gap-4 bg-gradient-to-r from-[#CE50FF] to-[#700B97]  px-[54px] py-[40px] text-[#0C0C0C]">
        <header className="h-[330px]  w-[311px] text-white">
          <section className="flex items-center gap-[10px]">
            <section className="h-[8px] w-[8px] rounded-full bg-white"></section>
            <span className="font-bold">محصولات جانبی کارواش</span>
          </section>
          <h2 className="pr-[22px] mt-4 h-[166px] w-[268px] text-[48px] font-semibold leading-[82.91px]">
            پرفروش‌ترین محصولات‌مــا
          </h2>
          <section className="pr-[22px] mt-[50px] flex h-[2px] w-full items-center justify-center gap-[6.67px]">
            <span className="h-[1px] w-[70px]  bg-[#BF91D0] transition-all  hover:h-full hover:w-[76px] hover:bg-white"></span>
            <span className="h-[1px] w-[70px] bg-[#BF91D0] transition-all  hover:h-full hover:w-[76px] hover:bg-white"></span>
            <span className="h-[1px] w-[70px] bg-[#BF91D0] transition-all  hover:h-full hover:w-[76px] hover:bg-white"></span>
            <span className="h-[1px] w-[70px] bg-[#BF91D0]  transition-all  hover:h-full hover:w-[76px] hover:bg-white"></span>
          </section>
          <section className="pr-[22px] mt-[33px]  flex w-full justify-between ">
            <button className="h-[39px] w-[125px] rounded-lg bg-white text-[14px] font-medium text-[#700B97]">
              مشاهده همه
            </button>
            <section className="flex h-[37px] w-[108px] justify-between ">
              <button className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-solid border-[#FFFFFF]">
                <IconArrowRight width='10' hight='15' viewBox="0 0 8 13" />
              </button>
              <button className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-solid border-[#FFFFFF]">
                <IconArrowLeft viewBox="-4.9 -4.1 17.5 17.5" />
              </button>
            </section>
          </section>
        </header>
        <section className="flex h-[359px] gap-6">
          <Card
            title="شامپو بدنه خودرو سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان ۷۵,۰۰۰
         "
          />
          <Card
            title="شامپو بدنه خودرو سوپر فوم یاتاش"
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
          />
               <Card
            title="شامپو  سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان ۷۵,۰۰۰
         "
          />
        </section>
      </section>
    </>
  );
}
