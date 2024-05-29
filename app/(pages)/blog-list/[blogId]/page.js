"use client";
import React from "react";
import Header from "./components/Header";
import AddUp from "./components/AddUp";
import SimilarArticle from "./components/SimilarArticle";

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
        <Header src="/images/article1.png" />
        <AddUp />
        <section>
          <SimilarArticle />
        </section>
      </section>
    </>
  );
}
