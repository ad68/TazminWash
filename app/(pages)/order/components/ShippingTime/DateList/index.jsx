"use client";
import React from "react";
import Date from "./Date";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ otherDay, setOtherDay, setWeekDay, weekDay }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>   <section className="xl:mx-6 relative mt-6 xl:mt-8 grid xl:h-[288px] w-[85%] justify-items-center mx-auto h-auto xl:w-[588px] grid-cols-2 xl:grid-cols-5 xl:items-center gap-4 rounded-[10px] border xl:border-solid border-none xl:border-[#EBEBEB] xl:p-8">
      <span className="absolute hidden leading-[27.64px] w-[51px] h-[28px] xl:flex justify-center items-center bg-[#FFFFFF] text-[#666666] top-[-15px] right-[24px]">تاریخ</span>
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={1}
    day="شنبه"
    date="10 اردیبهشت"
  />
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={2}
    day="یکشنبه"
    date="11 اردیبهشت"
  />
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={3}
    day="دوشنبه"
    date="12 اردیبهشت"
  />
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={4}
    day="سه شنبه"
    date="13 اردیبهشت"
  />
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={5}
    day="چهار شنبه"
    date="14 اردیبهشت"
  />
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={6}
    day="پنج شنبه"
    date="14 اردیبهشت"
  />
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={7}
    day="پنج شنبه"
    date="14 اردیبهشت"
  />
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={8}
    day="پنج شنبه"
    date="14 اردیبهشت"
  />
  <Date
    weekDay={weekDay}
    setWeekDay={setWeekDay}
    value={9}
    day="پنج شنبه"
    date="14 اردیبهشت"
  />
  <section
  onClick={()=>{
    setOtherDay(!otherDay)
    setWeekDay(10)
  }}
    className={` flex xl:h-[104px] w-full  xl:w-[92PX] flex-col items-center justify-center gap-4 rounded-lg  border border-solid  ${weekDay ===10  ? "border-[#700B97]" : "border-[#EBEBEB]"}`}
  >
    <section
      className={`text-center ${weekDay ===10 ? "text-[#700B97]" : "text-[#0081F8]"}`}
    >
      انتخاب یک تاریخ دیگر
    </section>
  </section>
</section></>;
}
