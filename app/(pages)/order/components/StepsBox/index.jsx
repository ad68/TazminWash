"use client";
import React, { useEffect, useState } from "react";
import Step from "./Step";
import { consoleLog_BlackOrange } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({activeTab,setActiveTab}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    consoleLog_BlackOrange(activeTab)
   }, [activeTab]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto mt-[104px] xl:mt-[136px] flex justify-center h-4 xl:h-[51px] w-[90%] xl:w-[735px]">
        
        <Step
          title="نوع خودرو"
          display="block"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          index={1}
        />
        <Step title="خدمات" display="block"   index={2}  activeTab={activeTab}
          setActiveTab={setActiveTab}/>
        <Step title="تاریخ و ساعت" display="block"  index={3}  activeTab={activeTab}
          setActiveTab={setActiveTab}/>
        <Step title="آدرس" display="block"  index={4}  activeTab={activeTab}
          setActiveTab={setActiveTab}/>
        <Step title="مشخصات" display="block"  index={5}  activeTab={activeTab}
          setActiveTab={setActiveTab}/>
        <Step title="خدمات تکمیلی" display="block"  index={6}  activeTab={activeTab}
          setActiveTab={setActiveTab}/>
        <Step title="جزئیات و پرداخت" display="hidden"  index={7}  activeTab={activeTab}
          setActiveTab={setActiveTab}/>
      </section>
    </>
  );
}
