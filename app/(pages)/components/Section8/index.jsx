"use client";
import React from "react";
import Image from "next/image";
import Card from "./components/Card";
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
      <section className="mx-auto mt-[40px] xl:mt-[120px] xl:w-[1296px] w-[95%] grid gap-[25px]">
        <header className="flex items-center  justify-between dark:text-white">
          <section className="flex items-center gap-2 xl:gap-[22px]">
            <section className="flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-[#6f0b9759] dark:border-[#ffffff7a]">
              <section className="flex h-3 w-3 items-center justify-center rounded-full border-[1px] border-[#6f0b97ac] dark:border-[#ffffffbf]">
                <div className="inline-block h-2 w-2 rounded-full bg-[#700B97]  dark:bg-white"></div>
              </section>
            </section>
            <h1 className="xl:text-[32px] text-[20px] xl:font-extrabold font-bold">مقالات‌ ما</h1>
          </section>
          <button className="flex gap-2 items-center">
            <span className="text-[14px] font-normal xl:font-bold">مشاهده همه</span>
            <Image src="/images/icons/Chevron_Left_B.svg" width={24} height={24} alt="" className="dark:hidden"/>
            <Image src="/images/icons/Chevron.svg" width={24} height={24} alt="" className="dark:block hidden"/>
          </button>
        </header>
        <section className=" flex gap-6 justify-center">
            <Card display='block' image={"/images/article1.png"} title={"تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات"} text={"تمیزی و نگهداری مناسب خودرو، علاوه بر بهبود ظاهر و استحکام آن، تأثیر بسزایی در ایجاد اعتماد و رضایت مشتریان دارد و... "} date={'1403/02/02'}/>
            <Card display='xl:block hidden' image={"/images/article2.png"} title={"تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات"} text={"تمیزی و نگهداری مناسب خودرو، علاوه بر بهبود ظاهر و استحکام آن، تأثیر بسزایی در ایجاد اعتماد و رضایت مشتریان دارد و... "} date={'1403/02/02'}/>
          
                
            <Card display='xl:block hidden' image={"/images/article3.png"} title={"تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات"} text={"تمیزی و نگهداری مناسب خودرو، علاوه بر بهبود ظاهر و استحکام آن، تأثیر بسزایی در ایجاد اعتماد و رضایت مشتریان دارد و... "} date={'1403/02/02'}/>
            <Card display='xl:block hidden' image={"/images/article4.png"} title={"تاثیر تمیزی خودرو بر استحکام و طول عمر قطعات"} text={"تمیزی و نگهداری مناسب خودرو، علاوه بر بهبود ظاهر و استحکام آن، تأثیر بسزایی در ایجاد اعتماد و رضایت مشتریان دارد و... "} date={'1403/02/02'} />
           
        </section>
      </section>
    </>
  );
}
