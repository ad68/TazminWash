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
      <section className="w-full ">
        <section className=" mx-auto mt-[120px] grid h-[382.29px] w-[1296.5px] justify-items-center gap-6">
          <header className="flex items-center gap-4 text-[40px] font-bold	">
            <Image
              src="/images/icons/Frame 1261154674.svg"
              width={16}
              height={16}
              alt=""
            />
            چرا <span className="color ">تضمین واش</span> را انتخاب کنیم؟
          </header>
          <section className="flex gap-6">
            <section className="mt-[-100px] px-px">
              <Box
                image={"/images/10542761 1.png"}
                title={"شستشو با مواد نانو"}
                text={
                  "خودروی شما با بهترین مواد شسته میشود تا به آن آسیبی نرسد"
                }
              />
            </section>

            <Box
              image={"/images/32165 3.png"}
              title={"هزینه‌ی مناسب"}
              text={"با توجه به صرفه جویی در زمان و وقت شما و بهترین مواد "}
            />
            <Box
              image={"/images/cartoon.png"}
              title={"بیمه بودن خودرو"}
              text={"خودرو شما در هنگام شستشو بیمه می‌باشد"}
            />

            <section className="mt-[-100px] px-px">
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
