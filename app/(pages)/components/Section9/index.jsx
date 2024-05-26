"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import QuestionBox from "./components/QestionBoxState";


// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(0)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mt-[40px] grid gap-6 xl:my-[120px]">
        <header className="flex justify-center items-center gap-4 mx-auto">
          <section className="flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-[#6f0b9759] dark:border-[#ffffff7a]">
            <section className="flex h-3 w-3 items-center justify-center rounded-full border-[1px] border-[#6f0b97ac] dark:border-[#ffffffbf]">
              <div className="inline-block h-2 w-2 rounded-full bg-[#700B97]  dark:bg-white"></div>
            </section>
          </section>
          <h1 className="xl:text-[32px] xl:font-extrabold dark:text-white text-[20px] font-bold">
            پرسش‌های متداول
          </h1>
          <section className="hidden xl:flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-[#6f0b9759] dark:border-[#ffffff7a]">
            <section className="flex h-3 w-3 items-center justify-center rounded-full border-[1px] border-[#6f0b97ac] dark:border-[#ffffffbf]">
              <div className="inline-block h-2 w-2 rounded-full bg-[#700B97]  dark:bg-white"></div>
            </section>
          </section>
        </header>
        <section className="xl:flex xl:w-[1296px] w-full mx-auto justify-between xl:h-[471px] items-center">
          <section className="xl:w-[728px] w-full px-2 mx-auto">
            <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={1} question='شرایط استفاده از کد تخفیف چگونه است؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
            <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={2} question='شرایط استفاده از کد تخفیف چگونه است؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
            <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={3} question='شرایط استفاده از کد تخفیف چگونه است؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
            <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={4} question='شرایط استفاده از کد تخفیف چگونه است؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
            <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={5} question='شرایط استفاده از کد تخفیف چگونه است؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
          </section>
          <Image src="/images/file 1.png" width={477} height={376} alt="" className="hidden xl:block"/>
        </section>
      </section>
    </>
  );
}
