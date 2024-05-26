"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Descripion from "./components/Descripion";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ question, des }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [scroll, setScroll] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(scroll);
  }, [scroll]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        className={`${scroll?  "grid " : ""} w-full items-center gap-6 border-y-[1px] border-[#EFEFEF] bg-white px-6 py-4 `}
      >
        <section className={`flex w-full gap-2 transition-all`}>
          <button
            onClick={() => {
              setScroll(!scroll);
              !scroll
                ? (document.getElementById("plus").src =
                    "/images/icons/expand_24.svg")
                : (document.getElementById("plus").src =
                    "/images/icons/collapse_24.svg");
             !scroll ? (document.getElementById("ques").style.color = "#700B97");
            }}
          >
            <Image
              src="/images/icons/collapse_24.svg"
              width={24}
              height={24}
              alt=""
              id="plus"
            />
          </button>
          <h5 id="ques" className="text-[16px] font-bold text-[#505050]">
            {question}
          </h5>
        </section>
        <section>{scroll ? <Descripion des={des} /> : ""}</section>
      </section>
    </>
  );
}
