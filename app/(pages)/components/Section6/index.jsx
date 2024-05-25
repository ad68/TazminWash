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
      <section className="mx-auto w-[90%] xl:flex xl:w-full xl:justify-center">
        <section className="dark:darkMode mt-[40px]  w-full xl:mt-[120px] xl:h-[284px] xl:w-[1296px]">
          <section className="relative grid h-auto w-full gap-2 rounded-[15px] bg-[url('/images/Rectangle.png')] from-[#B800FF]  to-[#700B97] bg-cover  bg-no-repeat py-8 text-white xl:flex xl:h-[284px] xl:w-[1296px] xl:bg-gradient-to-r xl:bg-[length:1296px_284px] dark:bg-gradient-to-r dark:from-white/10  dark:to-white/10 dark:backdrop-blur-sm">
            <section className="xl:flex xl:justify-between w-full xl:pr-[56px] grid justify-items-center">
              <section className="grid justify-items-center xl:justify-items-start gap-3">
                <h1 className="text-[20px] font-extrabold leading-[34.55px] tracking-[0.2rem]	 xl:text-[48px] xl:leading-[82.91px] xl:tracking-normal">
                  چند قدم تا کسب درآمد
                </h1>
                <section className="flex justify-around xl:grid">
                  <h2 className="w-[50%] xl:w-full  text-[12px] font-bold xl:text-[24px] text-right">
                    با ثبت نام در تضمین واش برای خودت درآمد کسب کن
                  </h2>
                  <button className="w-[25%] rounded-[10px] bg-white xl:mt-4 xl:h-[48px] xl:w-[117px] dark:bg-[#700B97]">
                    <span className="text-[12px] font-semibold text-[#700B97]  xl:text-[18px] dark:text-white">
                      ثبت‌ نام
                    </span>
                  </button>
                </section>
              </section>
              <section className="order-first  xl:order-last xl:mt-[35px] ">
                <Image
                  src="/images/cleaning.png"
                  width={458}
                  height={284}
                  alt=""
                  className="mx-auto mt-[-10px]  h-auto w-[60%]  p-px xl:mt-[-30px] xl:h-[248px] xl:w-[458px] "
                />
              </section>
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
              className="absolute hidden xl:bottom-[0px] xl:right-[164px]  dark:block xl:block"
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
