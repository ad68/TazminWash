"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({image, title, des}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
  <section className="flex gap-4 items-center text-white">
    <Image src={image} width={56} height={56} alt="" className="xl:size-[56px] size-[40px]"/>
    <section className="grid xl:gap-2">
        <span className="xl:text-[20px] text-[14px] font-normal">{title}</span>
        <span className="xl:text-[16px] text-[12px] font-normal">{des}</span>
    </section>
  </section>
  </>;
}
