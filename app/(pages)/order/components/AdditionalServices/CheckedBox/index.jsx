"use client";
import { IconHatchback } from "@/common/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { title } from "process";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  img,
  title,
  value,
  serviceType,
  setServiceType,
  price,
  values,
  creatServiceType,
  deleateServiceType
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
const [checkedBox,setCheckedBox]=useState(false)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
useEffect(()=>{
if(checkedBox){
  creatServiceType(value);
}else{
  deleateServiceType(value)
}
},[checkedBox])
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        onClick={() => {
          setCheckedBox(!checkedBox)
          
        }}
        className={` flex h-[46px] w-full cursor-pointer items-center justify-between  rounded-lg  border border-solid px-4 ${ serviceType.includes(value) ? "dark:border-white border-[#700B97]" : "dark:border-[#ffffff46] border-[#EBEBEB]"}`}
      >
        <section className="flex items-center gap-4">
          <span
            className={`flex h-[13.33PX] w-[13.33PX] items-center justify-center rounded-[3.33px]  ${serviceType.includes(value) ? "bg-[#700B97]" : "dark:bg-[#a590ad] bg-[#F1E7F5]"} `}
          >
            {serviceType.includes(value) ? (
              <Image
                alt=""
                width={8}
                height={6}
                src="/images/icons/VectorTick.svg"
                className="z-10"
              />
            ) : (
              ""
            )}
          </span>
          <section
            className={`xl:text-base text-sm flex gap-1 ${serviceType.includes(value) ? "dark:text-white text-[#700B97]" : "dark:text-[#a590ad] text-[#222222]"}`}
          >
            {title}
          </section>
        </section>

        <span
          className={` xl:text-base text-xs justify-self-end ${serviceType.includes(value)? "dark:text-white text-[#700B97]" : "dark:text-[#a590ad] text-[#222222]"}`}
        >
          {price}
        </span>
      </section>
    </>
  );
}
