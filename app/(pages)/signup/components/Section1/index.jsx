"use client";
import React from "react";
import Image from "next/image";
import SideBar from "./components/SideBar";
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
    <section className="w-full">
      <section className="mx-auto mt-[89px] grid w-[95%] justify-between xl:mt-[137px] xl:flex xl:w-[1296px]">
        <section className="grid">
          <header>
            <h1 className="w-[90%] text-center text-[20px] font-extrabold leading-[34.55px] text-[#404040] xl:w-[663px] xl:text-right xl:text-[40px] xl:leading-[69.09px]">
              به راحتی ثبت نام کن و به جمع سفیرانِ
              <span className="text-[#700B97]"> تضمین واش </span> بپیوند
            </h1>
          </header>
          <h2 className="hmt-8 text-[14px] font-normal xl:text-[24px] xl:font-medium">
            یک بار انلاین، یک بار حضوری ثبت نامت نهایی میشه!{" "}
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
        <section className="w-full fixed left-0 top-[89px] ">
        <section className="w-[1296px] mx-auto flex justify-end ">
          <SideBar />
        </section>
        </section>
      </section>
    </>
  );
}
