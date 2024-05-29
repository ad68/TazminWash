"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ image, title }) {
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
      <section className="grid h-[118px] w-[25%] place-content-center justify-items-center rounded-[10px] border-[1px] border-white text-white xl:h-[272px] xl:w-[200px]">
        <Image src={image} width={70} height={70} alt="" />
        <span className="px-1 text-center text-[12px] font-bold xl:w-[141px] xl:text-[30px] xl:font-extrabold xl:leading-[45.46px]">
          {title}
        </span>
      </section>
    </>
  );
}
