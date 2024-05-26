"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Descripion from "./components/Descripion";
import { consoleLog_Blue, consoleLog_Red, consoleLog_yellow } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ question, des, tabIndex, activeTab, setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (activeTab === tabIndex) {
      setOpen(true)
    }
    else {
      setOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const toggle = () => {
    if (!open) {
      setActiveTab(tabIndex)
    }
    else {
      setActiveTab(0)
    }

  }
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        className={`${open ? "grid" : ""} w-full items-center gap-6 border-y-[1px] border-[#EFEFEF] bg-white px-6 py-4 `}
      >
        <section className={`flex w-full gap-2 transition-all`}>
          <button onClick={toggle}>
            <Image
              src={open ? "/images/icons/expand_24.svg" : "/images/icons/collapse_24.svg"}
              width={24}
              height={24}
              alt=""
            />
          </button>
          <h5 className={`text-[16px] font-bold ${open ? "text-[#700B97]" : "text-[#505050]"} `}>
            {question}
          </h5>
        </section>
        <section>{open ? <Descripion des={des} /> : ""}</section>
      </section>
    </>
  );
}


