"use client";
import React from "react";
import Info from "./components/Info";
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
      <section className="gradient xl:h-[252px] h-auto w-full bg-[#0B142F] text-white xl:mt-[110px] mt-8">
        <header className="flex justify-center pt-4 xl:pt-8 xl:text-[40px] xl:font-extrabold text-[24px] font-normal">
          ارتباط با ما
        </header>
        <section className="xl:mt-6 mt-8 xl:flex xl:justify-between xl:w-[1296px] grid gap-8 mx-auto pb-4">
          <Info
            image={"/images/icons/Map Point Wave.svg"}
            title={"نشانی:"}
            des={"پونک ، میدان  پونک ، خیابان میرزا بابایی پلاک 32"}
          />
          <Info
            image={"/images/icons/Letter.svg"}
            title={"ایمیل:"}
            des={"Tazminwash@mail.com"}
          />
          <Info image={"/images/icons/Phone Calling Rounded.svg"} title={"شماره تماس:"} des={"021-44661122"}/>
        </section>
      </section>
    </>
  );
}
