"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import IteemsList from "./components/IteemsList";
import Pagination from "./components/Pagination";
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
      <section className="mx-auto mt-[113px] flex w-[90%]  flex-col items-center xl:w-[1296px]">
        <h2 className="w-full text-center text-[20px] font-bold leading-[34.55px] text-[#222222] xl:text-right dark:text-white">
          محصولات تضمین‌واش
        </h2>
        <Header />
        <IteemsList />
        <Pagination />
      </section>
    </>
  );
}
