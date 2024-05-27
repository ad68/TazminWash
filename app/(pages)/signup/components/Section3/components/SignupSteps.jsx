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
  <section>
    <ul className="grid xl:gap-[102px] mx-auto gap-[64px] justify-items-center xl:justify-items-start">
        <li>
            <section className="flex gap-4 items-center">
                <Image src="/images/Frame 1261154883.png" width={96} height={96} alt="" className="xl:size-[96px] hidden xl:block"/>
                <Image src="/images/Frame 12654883.png" width={56} height={56} alt="" className=" size-[56px]  xl:hidden"/>

                <section className="grid gap-2 w-[184px] xl:w-[256px] content-center">
                    <h1 className="xl:text-[24px] text-[16px] font-bold text-[#742BFA] text-justify">ارسال فرم ثبت نام</h1>
                    <p className="xl:text-[16px] xl:font-light text-[12px] font-normal leading-[24px] text-[#423D3D] dark:text-white">فرم ثبت نام روبرو را پر کرده و ارسال می کنید و مورد بررسی ما قرار میگیرد</p>
                </section>
            </section>
        </li>
        <li>
            <section className="flex gap-4 items-center">
                <section className="grid gap-2 w-[184px] xl:w-[256px] content-center">
                    <h1 className="xl:text-[24px] text-[16px] font-bold text-[#742BFA]">مراجعه حضوری</h1>
                    <p className="xl:text-[16px] xl:font-light text-[12px] font-normal leading-[24px] text-[#423D3D] text-justify dark:text-white">با شناسنامه و کارت ملی و یک عکس 3*4 به محل کارواش مراجعه می کنید برای ثبت اطلاعات نهایی</p>
                </section>
                <Image src="/images/Frame 126115483.png" width={96} height={96} alt="" className="xl:size-[96px] hidden xl:block"/>
                <Image src="/images/Frame 1264883.png" width={56} height={56} alt="" className=" size-[56px]  xl:hidden"/>

            </section>
        </li>
        <li>
            <section className="flex gap-4 items-center">
                <Image src="/images/Frame 126114883.png" width={96} height={96} alt="" className="xl:size-[96px] hidden xl:block"/>
                <Image src="/images/Frame 12683.png" width={56} height={56} alt="" className=" size-[56px]  xl:hidden"/>

                <section className="grid gap-2 w-[184px] xl:w-[256px] content-center">
                    <h1 className="xl:text-[24px] text-[16px] font-bold text-[#742BFA]"> عقد قرارداد</h1>
                    <p className="xl:text-[16px] xl:font-light text-[12px] font-normal leading-[24px] text-[#423D3D] text-justify dark:text-white">بعد از بررسی شرایط قرارداد کاری را میبندیم</p>
                </section>
            </section>
        </li>
    </ul>
    </section></>;
}
