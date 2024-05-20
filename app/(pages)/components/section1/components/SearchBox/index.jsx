"use client";
import React from "react";
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
  return <>
  <section className="flex items-center text-[#666666] mt-[123px] mx-auto w-[1066.64px] h-[119px] bg-white p-8 rounded-[15px] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]
">
<span className="text-[24px] w-[155px]  font-bold leading-[41.45px] text-[#0C0C0C]">ثبت درخواست </span>
<section className="w-[199.64px] py-[10px]  justify-center rounded-[10px] border border-solid  border-[#EBEBEB] mr-8 h-[55px] flex jus items-center">
<Image
            width={23.5}
            height={16}
            src="/images/icons/car.svg"
            className="ml-4"
            alt=""
           
          />
          ماشین
           <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className="mr-[45.84px]"
            alt=""
          />
</section>
<section className="w-[199.64px] py-[10px]  justify-center rounded-[10px] border border-solid  border-[#EBEBEB] mr-8 h-[55px] flex jus items-center">
<Image
            width={24}
            height={24}
            src="/images/icons/calender.svg"
            className="ml-4"
           alt=""
          />
          تاریخ
           <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className="mr-[64px]"
            alt=""
          />
</section>
<section className="w-[199.64px] py-[10px]  justify-center rounded-[10px] border border-solid  border-[#EBEBEB] mr-8 h-[55px] flex jus items-center">
<Image
            width={24}
            height={24}
            src="/images/icons/Widget.svg"
            className="ml-4"
           alt=""
          />
          خدمات
           <Image
            width={15.5}
            height={7.5}
            src="/images/icons/arrow-down.svg"
            className="mr-[49px]"
            alt=""
          />
</section>
<button className="w-[199.64px] py-[10px]  text-white bg-gradient-to-r from-[#CE50FF] -12.01% to-[#700B97] 108.61%   justify-center rounded-[10px] border border-solid  border-[#EBEBEB] mr-8 h-[55px] flex jus items-center">
           <Image
            width={24}
            height={24}
            alt=""
            src="/images/icons/Search.svg"
            className="ml-2"
          />
          جستجو
</button>
  </section>
  </>;
}