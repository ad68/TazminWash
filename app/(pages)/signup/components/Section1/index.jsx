"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import SignupForm from "./components/SignupForm";
import { useScroll, useWindowSize } from "@/hooks";
import { consoleLog_BlackGreen, consoleLog_BlackYellow } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [scrollYPosition] = useScroll();
  /* const [windowHeight, windowWidth] = useWindowSize(); */
  // ─── Functions ──────────────────────────────────────────────────────────────────
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  /*   useEffect(() => {
      consoleLog_BlackYellow(windowHeight, "window Height:")
      consoleLog_BlackGreen(windowWidth, "window Width:")
    }, [windowHeight, windowWidth]) */
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="w-full">
        <section className="mx-auto mt-[42px] grid w-[95%] justify-items-center  xl:justify-between xl:mt-[137px] xl:flex  xl:w-[1296px]">
          <section className="grid justify-self-start	">
            <header>
              <h1 className="w-[90%] mx-auto text-center text-[20px] font-extrabold leading-[34.55px] text-[#404040] dark:text-white xl:w-[663px] xl:text-right xl:text-[40px] xl:leading-[69.09px]">
                به راحتی ثبت نام کن و به جمع سفیرانِ
                <span className="text-[#700B97]"> تضمین واش </span> بپیوند
              </h1>
            </header>
            <h2 className="mt-8 text-center xl:text-right dark:text-white text-[14px] font-normal xl:text-[24px] xl:font-medium">
              یک بار انلاین، یک بار حضوری ثبت نامت نهایی میشه!
            </h2>
            <Image
              src="/images/16276547_5748997 2.png"
              width={641}
              height={425}
              alt=""
              className="order-first mt-4 h-[255px] w-full xl:order-last xl:h-[425px] xl:w-[641px] order-firset "
            />
          </section>

        </section>
        <section className={`w-full ${scrollYPosition >= 2020 ? "xl:absolute xl:top-[2100px]" : "xl:fixed xl:top-[89px]"}  xl:left-0 `}>
          <section className="xl:w-[1296px] mx-auto flex xl:justify-end justify-center">
            <SignupForm />
          </section>
        </section>
      </section>
    </>
  );
}
