"use client";
import React from "react";
import Item from "./Item";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({selectTime, setSelectTime }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>   <section className="xl:mx-6  relative mt-8 grid grid-cols-3 justify-center py-6 px-4 xl:px-0 xl:py-0 xl:flex h-auto xl:h-[104px] mx-auto w-[85%]  xl:w-[588px]  items-center gap-2 xl:gap-4 rounded-[10px] border border-solid border-[#EBEBEB] xl:p-8">
      <span className="absolute leading-[27.64px] w-[51px] h-[28px] flex justify-center items-center bg-[#FFFFFF] text-[#666666] top-[-15px] right-[24px]">ساعت</span>
  <Item
  selectTime={selectTime} setSelectTime={setSelectTime}
    value={1}
    time='8-10'
  />
  <Item
   selectTime={selectTime} setSelectTime={setSelectTime}
    value={2}
    time='10-12'
  />
  <Item
selectTime={selectTime} setSelectTime={setSelectTime}
    value={3}
    time='12-14'
  />
  <Item
  selectTime={selectTime} setSelectTime={setSelectTime}
    value={4}
    time='14-16'
  />
  <Item
selectTime={selectTime} setSelectTime={setSelectTime}
    value={5}
    time='16-18'
  />
  <Item
  selectTime={selectTime} setSelectTime={setSelectTime}
    value={6}
    time='18-20'
  />
  
</section></>;
}
