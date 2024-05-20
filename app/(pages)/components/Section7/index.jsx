"use client";
import React from "react";
import Image from "next/image";
import Dot from "./components/Dot";
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
      <section className="my-[120px]">
        <header className="flex justify-center gap-[22px]">
          <Image
            src="/images/icons/Frame 1261154674.svg"
            width={32}
            height={32}
            alt=""
          />
          <h1 className="text-[32px] font-extrabold">نظرات مشتریان</h1>
          <Image
            src="/images/icons/Frame 1261154674.svg"
            width={32}
            height={32}
            alt=""
          />
        </header>
        <section className="mt-6 grid h-[580px] w-full justify-items-center bg-[url('/images/BG.png')] bg-cover py-[80px]">
          <Image src="/images/icons/Vector.svg" width={18} height={15} alt="" />
          <h3 className="w-[856px] text-center text-2xl font-bold leading-[49px]">
            با سلام و عرض ادب ، من از خدمات و نتیجه نهایی کار بسیار راضی بودم
            همچنین بسیار کادر مودب و آن تایمی داشتند .
          </h3>
          <Image
            src="/images/icons/Vectort.svg"
            width={18}
            height={15}
            alt=""
          />
          <span className="text-[16px] font-[400px]">هاشم زاده | تهران</span>
          <section className="flex gap-6">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </section>
        </section>
      </section>
    </>
  );
}
