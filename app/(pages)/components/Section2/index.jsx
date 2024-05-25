"use client";
import React from "react";
import Box from "./components/Box";
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
      <section className="w-full mt-[40px] xl:mt-[120px]">
        <section className=" mx-auto  grid justify-items-center gap-6 xl:mt-[120px] xl:h-[382.29px] xl:w-[1296.5px] ">
          <header className="flex items-center gap-4 ">
            {/*             <Image
              src="/images/icons/Frame 1261154674.svg"
              width={16}
              height={16}
              alt=""
            /> */}
            <section className="flex size-4 items-center justify-center rounded-full border-[1px] border-[#6f0b9759] dark:border-[#ffffff7a]">
              <section className="flex size-3 items-center justify-center rounded-full border-[1px] border-[#6f0b97ac] dark:border-[#ffffffbf]">
                <div className="inline-block size-2 rounded-full bg-[#700B97]  dark:bg-white"></div>
              </section>
            </section>
            <h1 className="text-[20px] font-medium text-black xl:text-[40px] xl:font-bold	dark:text-[#ffffff]">
              چرا{" "}
              <span className="xl:color font-extrabold text-[#700B97]  dark:text-[#700B97]">
                تضمین واش
              </span>{" "}
              را انتخاب کنیم؟
            </h1>
          </header>
          <section className="grid gap-6 xl:flex">
            <section className="order-last px-px xl:order-first xl:mt-[-100px]">
              <Box
                image={"/images/10542761 1.png"}
                title={"شستشو با مواد نانو"}
                text={
                  "خودروی شما با بهترین مواد شسته میشود تا به آن آسیبی نرسد"
                }
              />
            </section>
            <section className="order-3">
              <Box
                image={"/images/32165 3.png"}
                title={"هزینه‌ی مناسب"}
                text={"با توجه به صرفه جویی در زمان و وقت شما و بهترین مواد "}
              />
            </section>
            <section>
              <Box
                image={"/images/cartoon.png"}
                title={"بیمه بودن خودرو"}
                text={"خودرو شما در هنگام شستشو بیمه می‌باشد"}
              />
            </section>

            <section className="order-first px-px xl:order-last xl:mt-[-100px]">
              <Box
                image={"/images/illustration.png"}
                title={"تکنسین متخصص"}
                text={
                  "تمامی متخصصین ما آموزش دیده هستند و با دقت تمام شتسشو را "
                }
              />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
