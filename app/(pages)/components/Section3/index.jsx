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
  return (
    <>
      <section className="mx-auto mt-[120px] grid text-[#0C0C0C]">
        <header className="flex gap-4 justify-self-center">
          <Image
            src="/images/icons/Frame 1261154674.svg"
            width={16}
            height={16}
            alt=""
          />
          <h1 className="text-[40px] font-bold ">با تضمین واش</h1>
        <Image src='/images/Arrow-Filled.png' width={84} height={84} alt="" className=""/>
        </header>
        <section className="mx-auto  flex gap-[105px]">
          <Image
            src={"/images/Carwash45 1.png"}
            width={632}
            height={255}
            alt=""
            className="mr-[34px]"
          />
          <section className=" grid h-[290px] w-[574px] gap-6 rounded-2xl bg-white p-6 shadow-2xl">
            <h1 className="text-[28px] font-medium">
              در مصرف آب صرفه جویی میشه
            </h1>
            <p className="text-justify text-[16px] font-medium leading-[27.64px]">
              استفاده از تکنولوژی نانو در کارواش می‌تواند باعث کاهش بیشتر در
              مصرف آب شود، زیرا این تکنولوژی قابلیت استفاده از کمترین مقدار آب
              برای کارایی بهتر و نتایج بیشتر را فراهم می‌کند.
            </p>
            <button className="flex items-center px-4 py-[6px] border-[1px] border-[#700B97] w-[164px] rounded-xl justify-self-end	">
                <span className="text-[20px] font-bold text-[#700B97]">ثبت سفارش</span>
                <Image src='/images/icons/Chevron_Left_MD.svg' width={24} height={24} alt=""/>
            </button>
          </section>
        </section>
        <section className="mt-[108px]  flex w-full"></section>
      </section>
    </>
  );
}
