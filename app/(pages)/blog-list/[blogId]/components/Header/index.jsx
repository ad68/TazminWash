"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({src}) {
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
      <section className="flex h-auto dark:bg-searchBox-gradient border-[1px] border-solid border-[#ffffff1a]  dark:backdrop-blur-sm dark:bg-opacity-90  w-full items-center gap-4 rounded-[15px] bg-[linear-gradient(83.83deg,_#700B97_1.63%,_#B800FF_99.5%)]  px-4 py-[13px] xl:h-[304px] xl:gap-8 xl:rounded-[23px] xl:pl-[101px] xl:pr-[42px] xl:py-[30px]">
        <Image
          src={src}
          width={304}
          height={251}
          alt=""
          className="h-auto w-[40%] rounded-[9.32px] xl:h-[251px] xl:w-[304px] xl:rounded-[20px]"
        />
        <section className=" self-start xl:self-end">
          <section className=" text-sm font-extrabold leading-[24.18px] text-white xl:text-[24px] xl:leading-[41.45px]">
            تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات !
          </section>
          <p className=" text-[10px] leading-[17.27px] mt-2 text-white  xl:font-bold xl:text-[16px] xl:leading-[27.64px]">
            تمیزی و نگهداری مناسب خودرو، تأثیر بسزایی در ایجاد اعتماد و رضایت
            مشتریان دارد.
          </p>
        </section>
      </section>
    </>
  );
}
