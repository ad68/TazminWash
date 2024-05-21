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
      <section className="xl:flex xl:w-full w-[90%] mx-auto xl:justify-center">
        <section className="dark:darkMode mt-[40px]  xl:mt-[120px] xl:h-[284px] w-full xl:w-[1296px]">
          <section className="relative h-auto w-full justify-center rounded-[15px] bg-cover bg-[url('/images/Rectangle.png')] from-[#B800FF] to-[#700B97]  bg-no-repeat py-8 xl:pr-14 text-white xl:flex xl:h-[284px] xl:w-[1296px] xl:justify-between xl:bg-gradient-to-r xl:bg-[length:1296px_284px] dark:bg-gradient-to-r dark:from-white/10 dark:to-white/10 dark:backdrop-blur-sm grid  gap-2">
            <section className="mx-auto">
              <h1 className="text-[20px] tracking-[.1em]  leading-[34.55px] text-center xl:leading-[82.91px] font-extrabold w-full xl:text-[48px] xl:mr-[30px]">
                چند قدم تا کسب درآمد
              </h1>
              <section className="flex xl:grid justify-around">

              <h2 className="text-[12px]  font-bold xl:text-[24px] w-[60%]">
                با ثبت نام در تضمین واش برای خودت درآمد کسب کن
              </h2>
              <button className="rounded-[10px] bg-white xl:mt-4 xl:h-[48px] xl:w-[117px] dark:bg-[#700B97] w-[25%]">
                <span className="text-[12px] xl:text-[18px] font-semibold  text-[#700B97] dark:text-white">
                  ثبت‌ نام
                </span>
              </button>
              </section>
            </section>
            <section className="order-first w-full xl:order-last xl:mt-[35px] mt-[10px] ">
              <Image
                src="/images/cleaning.png"
                width={458}
                height={284}
                alt=""
                className="h-auto w-[60%] p-px mx-auto  xl:h-[248px] xl:w-[458px] mt-[-20px] xl:mt-[-30px]"
              />
            </section>
            <Image
              src={"/images/line-l.png"}
              width={875.9}
              height={795.95}
              alt=""
              className="absolute hidden xl:bottom-[0px] xl:right-[164px] xl:block dark:hidden"
            />
            <Image
              src={"/images/line-d.png"}
              width={875.9}
              height={795.95}
              alt=""
              className="absolute hidden xl:bottom-[0px] xl:right-[164px]  dark:block"
            />
            <Image
              src={"/images/line-l-l.png"}
              width={70}
              height={284}
              alt=""
              className="absolute hidden xl:left-0 xl:block dark:hidden"
            />
            <Image
              src={"/images/line-d-l.png"}
              width={70}
              height={284}
              alt=""
              className="absolute hidden xl:left-0 dark:block"
            />
          </section>
        </section>
      </section>
    </>
  );
}
