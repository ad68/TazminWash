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
      
      <section className="xl:mx-auto mt-[54px] xl:mt-[81px]  xl:w-[1296px] xl:flex xl:justify-between items-center">
        <section className="px-4">
          <section className="flex gap-3 ">
            <Image
              src="/images/icons/Icon Label.svg"
              width={36}
              height={36}
              alt=""
            className="xl:size-[36px] size-[19px]"/>
            <h1 className="dark:text-white xl:font-extrabold font-bold text-[14px] xl:text-[24px]">
              تکنسین های <span className="number">تضمین‌واش</span>
            </h1>
          </section>
          <p className="dark:text-white xl:font-bold text-[16px] font-normal xl:text-[20px] leading-[22px] xl:leading-[49px] mt-4 xl:mt-6 xl:text-justify  ">
          <Image src="/images/Object.png" width={642} height={533} alt="" className="xl:w-[642px] xl:h-[533px] w-[50%] h-auto  float-left xl:order-last xl:hidden"/>
            ما از تکنسین‌های متخصص با تجربه برای شستشو و نگهداری خودروها استفاده
            می‌کنیم. این تکنسین‌ها دارای مهارت‌ها و دانش لازم برای انجام کارهای
            شستشو با بهترین روش‌ها و مواد مناسب هستند که باعث می‌شود خودرو شما
            نه تنها تمیز شود، بلکه بهترین نگهداری را هم تجربه کنید.
           
          </p>
        </section>
        <Image src="/images/Object.png" width={642} height={533} alt="" className="xl:w-[642px] xl:h-[533px] w-[50%] h-auto  float-left xl:order-last hidden xl:block"/>
      </section>
    </>
  );
}
