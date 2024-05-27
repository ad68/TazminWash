"use client";
import React, { useEffect, useState } from "react";
import QestionBoxState from "./components/QestionBoxState";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(0);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto mt-[56px] xl:mt-[135px] xl:w-[1296px] grid xl:gap-[72px] gap-[40px]">
        <header>
          <h1 className="text-center text-[20px] font-bold leading-[34.55px] text-[#343434] xl:text-[32px] xl:font-extrabold dark:text-white">
            {" "}
            پرسش‌های متداول{" "}
          </h1>
        </header>
        <section className="w-full  items-center  justify-between  xl:flex ">
          <section className="mx-auto w-full px-2 xl:w-[728px]">
            <QestionBoxState
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabIndex={1}
              question={"شرایط استفاده از کد تخفیف چگونه است؟"}
              des={
                "هر کد تخفیف فقط یکبار قابل استفاده می‌باشد. شما می‌توانید امتیازهای دریافتی خود را در بخش حساب کاربری تبدیل به کد تخفیف کرده و در خرید بعدی خوداز سایت و اپلیکیشن پرشیا از آن بهره‌مند شوید."
              }
            />
            <QestionBoxState
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabIndex={2}
              question={"چطور می‌توانم امتیاز بگیرم؟"}
              des={
                "هر کد تخفیف فقط یکبار قابل استفاده می‌باشد. شما می‌توانید امتیازهای دریافتی خود را در بخش حساب کاربری تبدیل به کد تخفیف کرده و در خرید بعدی خوداز سایت و اپلیکیشن پرشیا از آن بهره‌مند شوید."
              }
            />
            <QestionBoxState
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabIndex={3}
              question={"چگونه می‌توانم با پشتیبانی ارتباط داشته باشم؟"}
              des={
                "هر کد تخفیف فقط یکبار قابل استفاده می‌باشد. شما می‌توانید امتیازهای دریافتی خود را در بخش حساب کاربری تبدیل به کد تخفیف کرده و در خرید بعدی خوداز سایت و اپلیکیشن پرشیا از آن بهره‌مند شوید."
              }
            />
            <QestionBoxState
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabIndex={4}
              question={"شستشو با مواد نانو چگونه می‌باشد؟"}
              des={
                "هر کد تخفیف فقط یکبار قابل استفاده می‌باشد. شما می‌توانید امتیازهای دریافتی خود را در بخش حساب کاربری تبدیل به کد تخفیف کرده و در خرید بعدی خوداز سایت و اپلیکیشن پرشیا از آن بهره‌مند شوید."
              }
            />
            <QestionBoxState
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabIndex={5}
              question={"مدت زمان شستشو چقدر است؟"}
              des={
                "هر کد تخفیف فقط یکبار قابل استفاده می‌باشد. شما می‌توانید امتیازهای دریافتی خود را در بخش حساب کاربری تبدیل به کد تخفیف کرده و در خرید بعدی خوداز سایت و اپلیکیشن پرشیا از آن بهره‌مند شوید."
              }
            />
          </section>
          <Image
            src="/images/Frame 1261154886.png"
            width={477}
            height={376}
            alt=""
            className="hidden xl:block"
          />{" "}
        </section>
      </section>
    </>
  );
}
