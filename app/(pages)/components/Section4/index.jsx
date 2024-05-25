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
      <section className="dark:bg-searchBox-gradient mt-[40px] flex h-auto  w-full items-center  xl:gap-[37px] gap-6 border-[1px] border-solid border-[#ffffff1a] bg-gradient-to-r from-[#CE50FF] to-[#700B97] px-[16px]  xl:px-[54px] py-[40px] text-[#0C0C0C] xl:mt-[120px]  xl:h-[439px] dark:bg-opacity-90 dark:backdrop-blur-lg">
        <header className="h-auto w-[45%] text-white xl:h-[330px] xl:w-[311px]">
          <section className="flex items-center w-full gap-[2px] xl:gap-[12px]">
            <section className="h-[16px] w-[16px] flex justify-center items-center border-opacity-20 rounded-full border border-solid border-[#FFFFFF] ">
              <section className="h-[12px] w-[12px] rounded-full flex justify-center items-center  border border-solid border-opacity-50 border-[#FFFFFF] ">
                <section className="h-[8px] w-[8px] rounded-full  bg-white"></section>
              </section>
            </section>

            <span className="leading-[19px] w-full text-[11px] font-bold xl:text-base">
              محصولات جانبی کارواش
            </span>
          </section>
          <h2 className="mt-4 xl:h-[166px] h-auto xl:w-[268px] pr-[22px] w-full text-[20px] xl:text-[48px] font-semibold leading-[34.55px] xl:leading-[82.91px]">
            پرفروش‌ترین محصولات‌مــا
          </h2>
          <section className="mt-[50px] xl:flex hidden h-[2px] w-full items-center justify-center gap-[6.67px] pr-[22px]">
            <span className="h-[1px] w-[70px] bg-[#BF91D0] transition-all hover:h-full  hover:w-[76px] hover:bg-white dark:opacity-65 dark:hover:bg-[#700B97]"></span>
            <span className="h-[1px] w-[70px] bg-[#BF91D0] transition-all hover:h-full  hover:w-[76px] hover:bg-white dark:opacity-65 dark:hover:bg-[#700B97]"></span>
            <span className="h-[1px] w-[70px] bg-[#BF91D0] transition-all hover:h-full  hover:w-[76px] hover:bg-white dark:opacity-65 dark:hover:bg-[#700B97]"></span>
            <span className="h-[1px] w-[70px] bg-[#BF91D0] transition-all  hover:h-full  hover:w-[76px] hover:bg-white dark:opacity-65 dark:hover:bg-[#700B97]"></span>
          </section>
          <section className="xl:mt-[33px] mt-[75px]  flex  w-full justify-between pr-[22px] ">
            <button className="h-[39px] border border-solid border-white w-full xl:w-[125px] rounded-lg xl:bg-white text-[14px] font-medium text-white xl:text-[#700B97]">
              مشاهده همه
            </button>
            <section className="xl:flex h-[37px] hidden  w-[108px] justify-between ">
              <button className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-solid border-[#FFFFFF]">
                <IconArrowRight width="10" hight="15" viewBox="0 0 8 13" />
              </button>
              <button className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-solid border-[#FFFFFF]">
                <IconArrowLeft viewBox="-4.9 -4.1 17.5 17.5" />
              </button>
            </section>
          </section>
        </header>
         <section className="flex h-auto xl:h-[359px] gap-6">
          <Card
            title="شامپو بدنه خودرو سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان ۷۵,۰۰۰
         "
         display='hidden xl:flex'
          />
          <Card
            title="شامپو بدنه خودرو سوپر فوم یاتاش"
            text="مخصوص ماشین‌های سفید . نقره‌ای"
            img="/images/Rectanglebg.png"
            price=" تومان ۷۵,۰۰۰
         "
         display='hidden xl:flex'
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
         display='hidden xl:flex'
          />
        </section> 
      </section>
    </>
  );
}
