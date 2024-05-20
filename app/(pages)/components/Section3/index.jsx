"use client";
import React from "react";
import Image from "next/image";
import Card from "./components/Card";
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
      <section className="  mt-[120px] grid w-full text-[#0C0C0C] relative">
        <header className="relative mx-auto flex gap-4 justify-self-center">
          <Image
            src="/images/icons/Frame 1261154674.svg"
            width={16}
            height={16}
            alt=""
          />
          <h1 className="text-[40px] font-bold ">با تضمین واش</h1>
          <Image
            src="/images/Arrow-Filled.png"
            width={84}
            height={84}
            alt=""
            className="absolute right-[265px] top-[32px]"
          />
        </header>
        <section className="mx-auto mt-[101px] flex w-full justify-evenly">
          <Image
            src={"/images/Carwash45 1.png"}
            width={632}
            height={255}
            alt=""
            className="mr-[34px]"
          />
          <Card
            title={"در مصرف آب صرفه جویی میشه"}
            text="استفاده از تکنولوژی نانو در کارواش می‌تواند باعث کاهش بیشتر در مصرف آب 
شود، زیرا این تکنولوژی قابلیت استفاده از کمترین مقدار آب برای کارایی بهتر و 
نتایج بیشتر را فراهم می‌کند."
          />
        </section>
          <Image src='/images/Arrow-Filled-Head.png' width={84} height={84} alt="" className="absolute right-[246px] bottom-[280px]"/>
        <section className="mx-auto mt-[101px] flex w-full justify-evenly">
          <Card
            title={"تو وقتت هم صرفه جویی میشه"}
            text="با این روش، شما نیازی به رفت و آمد به کارواش ندارید و می‌توانید وقت خود را 
برای امور مهمتری اختصاص دهید. همچنین، با انجام این کار در محل، می‌توانید 
هزینه‌های مربوط به سفر و وقت اضافی را کاهش دهید."
          />
          <Image
            src={"/images/31684655165 1.png"}
            width={397.32}
            height={285.09}
            alt=""
          />
        </section>
      </section>
    </>
  );
}
