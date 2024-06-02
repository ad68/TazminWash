"use client";
import React, { useState } from "react";
import StepsBox from "../StepsBox";
import Car from "./Car";
import { IconCarTitle } from "@/common/icons";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [carType, setCarType] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className=" mt-8 xl:mt-[48px] xl:h-[543px] mx-auto h-auto w-[90%] xl:w-[636px]">
        <section className="h-[471px] w-full rounded-[15px] bg-white py-[24px] shadow-[0px_0px_8px_0px_#AFAFAF14]">
          <span className="flex  items-center text-base font-medium xl:text-[20px] text-black xl:text-[#222222]">
            <section className="h-[35px] w-[2px] rounded-bl-[10px] rounded-tl-[10px] bg-[#700B97]"></section>
            <IconCarTitle
              width="28"
              height="28"
              viewBox="0 0 28 29"
              className="mr-6"
            />
            <span className="mr-2 leading-[34.55px]">نوع خودرو</span>
          </span>
          <section className="xl:mt-8 mt-6 flex flex-col gap-4 xl:w-full w-[85%] mx-auto xl:px-6">
            <Car
              carType={carType}
              setCarType={setCarType}
              value={1}
              img="/images/Hatchback.png"
              title="هاچ بک"
            />
            <Car
              carType={carType}
              setCarType={setCarType}
              value={2}
              img="/images/Hatchback.png"
              title="سدان"
            />
            <Car
              carType={carType}
              setCarType={setCarType}
              value={3}
              img="/images/Hatchback.png"
              title="ام یو وی"
            />
            <Car
              carType={carType}
              setCarType={setCarType}
              value={4}
              img="/images/Hatchback.png"
              title="اس یو وی"
            />
            <Car
              carType={carType}
              setCarType={setCarType}
              value={5}
              img="/images/Hatchback.png"
              title="کوپه"
            />
            <Car
              carType={carType}
              setCarType={setCarType}
              value={6}
              img="/images/Hatchback.png"
              title="کروک"
            />
          </section>
        </section>
        <section className="mt-6 flex w-full gap-4 xl:gap-0 justify-between text-base xl:text-[18px] font-medium leading-[34.55px]">
          <button
            onClick={() => {
              setActiveTab(2);
            }}
            className="flex h-[40px] xl:h-[48px] w-full xl:w-[416px] items-center justify-center rounded-lg bg-[#700B97] text-white"
          >
            ادامه
            <Image
              alt=""
              width={10}
              height={8}
              src="/images/icons/Vectorbtn.svg"
              className="z-10 mr-[10.3px]"
            />
          </button>
          <button className="flex h-[40px] xl:h-[48px] w-full xl:w-[196px] items-center justify-center rounded-lg border border-solid border-[#700B97] text-[#700B97]">
            بازگشت
          </button>
        </section>
      </section>
    </>
  );
}
