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
      <section className="relative grid w-full gap-[40px] mt-[40px] text-[#0C0C0C] xl:mt-[120px]">
        <header className="relative mx-auto flex items-center gap-4 justify-self-center">
          {/* <Image
            src="/images/icons/Frame 1261154674.svg"
            width={16}
            height={16}
            alt=""
          /> */}
          <section className="flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-[#6f0b9759] dark:border-[#ffffff7a]">
            <section className="flex h-3 w-3 items-center justify-center rounded-full border-[1px] border-[#6f0b97ac] dark:border-[#ffffffbf]">
              <div className="inline-block h-2 w-2 rounded-full bg-[#700B97]  dark:bg-white"></div>
            </section>
          </section>
          <h1 className="text-[20px] font-bold xl:text-[40px] dark:text-white">
            با تضمین واش
          </h1>
          <Image
            src="/images/Arrow-Filled.png"
            width={84}
            height={84}
            alt=""
            className="absolute hidden xl:right-[265px] xl:top-[32px]  xl:block xl:size-[84px]	"
          />
          <Image
            src={"/images/Vector.png"}
            width={33}
            height={46}
            alt=""
            className=" absolute right-[-46px] top-[126px]  block h-[45px] w-[20px] xl:hidden"
          />
        </header>
        <section className="mx-auto  grid w-full justify-items-center gap-[40px] xl:mt-[101px] xl:flex xl:justify-evenly">
          <Image
            src={"/images/Carwash451.png"}
            width={632}
            height={255}
            alt=""
            className="h-[81px] w-[192px] xl:mr-[34px] xl:h-[255px] xl:w-[632px]"
          />
          <Card
            title={"در مصرف آب صرفه جویی میشه"}
            text="استفاده از تکنولوژی نانو در کارواش می‌تواند باعث کاهش بیشتر در مصرف آب 
            شود، زیرا این تکنولوژی قابلیت استفاده از کمترین مقدار آب برای کارایی بهتر و 
            نتایج بیشتر را فراهم می‌کند."
          />
        </section>
        <Image
          src="/images/Arrow-Filled-Head.png"
          width={84}
          height={84}
          alt=""
          className="absolute hidden h-[45px] w-[20px] xl:bottom-[280px] xl:right-[246px] xl:block xl:size-[84px]"
        />
        <Image
          src="/images/Vector2.png"
          width={84}
          height={84}
          alt=""
          className="absolute  bottom-[290px] left-[67px] h-[45px] w-[20px] xl:hidden"
        />
        <section className="mx-auto  grid w-full justify-items-center gap-[40px] xl:mt-[101px] xl:flex xl:justify-evenly">
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
            className=" order-first h-[123px] w-[172px] xl:h-[255px] xl:w-[632px]"
          />
        </section>
      </section>
    </>
  );
}
