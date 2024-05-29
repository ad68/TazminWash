"use client";
import React from "react";
import Card from "../../../components/Card";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";
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
      <section className="xl:mt-[38px] mt-8 flex justify-between text-[#404040] dark:text-white">
        <span className="text-base xl:text-[24px] flex items-center gap-[9px] leading-[24px] ">
        <section className="h-[16px] w-[16px] flex justify-center items-center  dark:border-opacity-20 border-opacity-20 rounded-full border border-solid border-[#700B97] dark:border-[#FFFFFF] ">
              <section className="h-[12px] w-[12px] rounded-full flex justify-center items-center  border border-solid border-opacity-50 dark:border-opacity-50 border-[#700B97] dark:border-[#FFFFFF] ">
                <section className="h-[8px] w-[8px] rounded-full bg-[#700B97] dark:bg-white"></section>
              </section>
            </section>
            مقالات‌ مشابه</span>
        <section className=" flex items-center gap-[10px] text-xs xl:text-sm font-bold leading-[24.18px]">
          مشاهده همه
          <IconArrowLeft width="8" height="16" viewBox="0 0 6 10" />
        </section>
      </section>
      <section className="mx-auto xl:mt-[40px]  mt-4 grid  w-full gap-4 xl:w-[1296px] xl:grid-cols-4 xl:gap-x-[24px] xl:gap-y-[42px] ">
        <Card
          image={"/images/article1.png"}
          title={"تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات"}
          text={
            "تمیزی و نگهداری مناسب خودرو، علاوه بر بهبود ظاهر و استحکام آن، تأثیر بسزایی در ایجاد اعتماد و رضایت مشتریان دارد و... "
          }
          date={"1403/02/02"}
        />
        <Card
          image={"/images/article2.png"}
          title={"تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات"}
          text={
            "تمیزی و نگهداری مناسب خودرو، علاوه بر بهبود ظاهر و استحکام آن، تأثیر بسزایی در ایجاد اعتماد و رضایت مشتریان دارد و... "
          }
          date={"1403/02/02"}
        />

        <Card
          image={"/images/article3.png"}
          title={"تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات"}
          text={
            "تمیزی و نگهداری مناسب خودرو، علاوه بر بهبود ظاهر و استحکام آن، تأثیر بسزایی در ایجاد اعتماد و رضایت مشتریان دارد و... "
          }
          date={"1403/02/02"}
        />
        <Card
          image={"/images/article4.png"}
          title={"تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات"}
          text={
            "تمیزی و نگهداری مناسب خودرو، علاوه بر بهبود ظاهر و استحکام آن، تأثیر بسزایی در ایجاد اعتماد و رضایت مشتریان دارد و... "
          }
          date={"1403/02/02"}
        />
      </section>
    </>
  );
}
