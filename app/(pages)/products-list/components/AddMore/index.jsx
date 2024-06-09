"use client";
import React from "react";
import Image from "next/image";
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
      <section className="mx-auto mt-[40px] px-[18px] py-[22px] flex w-full items-center justify-center gap-[-24px]  xl:gap-[126px]  xl:rounded-[15px] bg-[#700B97] xl:h-[342px] xl:w-[1296px]  ">
        <section className="flex w-full h-auto xl:h-[182px] xl:w-[448px] flex-col gap-[16px] xl:gap-6">
          <span className="xl:mr-5  text-right text-sm xl:text-[32px] leading-[24.18px] xl:leading-[59px] text-white ">
            با کفپوش های سه‌بعدی ماشینت رو زیبا تر کن
          </span>
          <button className="flex py-1 xl:py-0 xl:h-[40px] w-[50%] xl:w-[184px] items-center justify-center gap-1 xl:gap-[17px] text-xs xl:text-base rounded-[25px] bg-white xl:font-bold">
            مشاهده
            <IconArrowLeft viewBox="0 -1 8 13" className='hidden xl:block'/>
            <IconArrowLeft viewBox="0 -1 8 13" width='7' height='14' className='xl:hidden'/>
          </button>
        </section>
        <Image
          className="w-[50%] xl:w-[464px] h-auto xl:h-[272px] bg-[radial-gradient(circle,white_-20%,transparent_50%)]"
          alt=""
          width={464}
          height={272}
          src="/images/picturemoreAdd.png"
        
        />
      </section>
    </>
  );
}
