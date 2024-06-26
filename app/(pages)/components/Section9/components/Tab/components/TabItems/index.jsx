"use client";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({title}) {
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
  <button className="text-[#707070] active:text-white active:bg-[#2C8EE8]  py-[6px] px-4 border-[1px] border-[#D1D1D1] rounded-[10px] hover:border-[#2C8EE8] active:border-[#2C8EE8] hover:text-[#2C8EE8]">
    <span className="text-[14px] font-bold  ">{title}</span>
  </button>
  </>;
}
