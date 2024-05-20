"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({image, title, text}) {
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
  <section className="w-[307px] h-[242px] bg-white shadow-md rounded-2xl grid justify-items-center gap-4 ">
    <Image src={image} width={84} height={84} alt=""/>
    <h2 className="text-[24px] font-medium">{title}</h2>
    <p className="text-[16px] font-medium w-[234px] leading-[26px] text-justify mb-6">{text}</p>
  </section>
  </>;
}
