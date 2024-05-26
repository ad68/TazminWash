"use client";
import React from "react";
import Input from './components/Input';
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
  return <>

    <aside className={`xl:w-[414px] w-[95%] xl:h-[685px] bg-white shadow-md rounded-2xl px-4 py-6 grid gap-6 mt-6`}>
      <header>
        <h1 className="xl:text-[24px] xl:font-bold text-[#404040]">فرم ثبت‌نام سفیران</h1>
        <h2 className="text-[16px] font-normal text-[#434343]">همین حالا ثبت‌نام کنید!</h2>
      </header>
      <Input value={"نام"} />
      <Input value={"نام خانوادگی"} />
      <Input value={"وسیله نقلیه"} />
      <Input value={"آدرس"} />
      <Input value={"کد ملی"} />
      <Input value={"شماره همراه"} />
      <button className="text-white bg-gradient-to-r from-[#CE50FF] to-[#700B97] xl:w-[382px] w-full xl:h-[56px] flex justify-center text-[16px] font-normal xl:rounded-lg rounded-[10px] h-[40px] items-center mx-auto">
        ثبت اطلاعات
      </button>
    </aside>

  </>;
}
