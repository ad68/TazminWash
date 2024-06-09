"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IconClose } from "@/common/icons";
import { Modal } from "@/common";
import { useWindowSize } from "@/hooks";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ closeModal, modalOpen }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [windowHeight, windowWidth] = useWindowSize();
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(windowHeight, windowWidth);
  }, [windowHeight, windowWidth]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Modal
        onClose={closeModal}
        open={modalOpen}
        width={windowWidth > 900 ? 1206 : "95%"}
      >
        <section className="flex xl:h-[512px] h-auto flex-col gap-[12px] xl:gap-0 justify-between rounded-[15px] bg-[#F9FAFA] xl:p-[30px]  py-5 xl:py-0 xl:pt-[35px] xl:flex-row ">
          <section className="flex h-auto xl:h-[413px] gap-4 xl:gap-0 w-[90%] mx-auto xl:w-[316px] items-center  xl:flex-col justify-between">
          <Image
            alt=""
            width={316}
            height={316}
            src="/images/Rectangle-product.png"
            className=" w-[48%] h-auto  xl:w-[316px] xl:h-[316px]"
          />
          <section className="xl:flex grid gap-4 xl:gap-0 grid-cols-2 h-full xl:h-[73px] w-full justify-between">
            <Image
              alt=""
              width={73}
              height={73}
              src="/images/Rectangleproduct2.png"
              className="w-full h-auto xl:w-[73px] xl:h-[73px]"
            />
            <Image
              alt=""
              width={73}
              height={73}
              src="/images/Rectangleproduct2.png"
              className="w-full h-auto xl:w-[73px] xl:h-[73px]"
            />
            <Image
              alt=""
              width={73}
              height={73}
              src="/images/Rectangle-product.png"
              className="w-full h-auto xl:w-[73px] xl:h-[73px]"
            />
            <Image
              alt=""
              width={73}
              height={73}
              src="/images/Rectangleproduct2.png"
              className="w-full h-auto xl:w-[73px] xl:h-[73px]"
            />
          </section>
        </section>
        <section className="flex h-auto xl:h-[442px] w-[90%] mx-auto xl:w-[474px] flex-col">
          <span className="text-base xl:text-[24px] font-bold leading-[28.44px] text-[#404040]">
            شامپو بدنه خودرو سوپر فوم یاتاش
          </span>
          <span className="xl:mt-[15px] flex py-2 xl:py-0 xl:h-[79px] items-center  gap-[106px] xl:gap-[119px] border-b-[0.5px] border-solid border-[#DEDEDE] text-xs xl:text-sm">
            <span className="text-[#5E5E5E]">ابعاد</span>
            <span className="font-medium text-[#343434]">
              ۲۸x۳x۱۶ سانتی‌متر
            </span>
          </span>
          <span className="flex xl:h-[79px] py-2 xl:py-0 items-center gap-[109px] xl:gap-[122px] border-b-[0.5px] border-solid border-[#DEDEDE] text-xs xl:text-sm">
            <span className="text-[#5E5E5E]">وزن</span>
            <span className="font-medium text-[#343434]">
            ۲۵۰ گرم            </span>
          </span>
          <span className="flex xl:h-[79px] py-2 xl:py-0  items-center gap-[101px] xl:gap-[112px] border-b-[0.5px] border-solid border-[#DEDEDE] text-xs xl:text-sm">
            <span className="text-[#5E5E5E]">جنس</span>
            <span className="font-medium text-[#343434]">
            پلاستیک فشرده            </span>
          </span>
          <span className="flex xl:h-[79px] py-2 xl:py-0  items-center gap-[63px] xl:gap-[72px] border-b-[0.5px] border-solid border-[#DEDEDE] text-xs xl:text-sm">
            <span className="text-[#5E5E5E]">مدل کارواش</span>
            <span className="font-medium text-[#343434]">
            کارواش کلتی دو تکه قطع کن دار            </span>
          </span>
          <span className="flex xl:h-[79px] py-2 xl:py-0  items-center gap-[74px] xl:gap-[87px]  text-xs xl:text-sm">
            <span className="text-[#5E5E5E]">توضیحات</span>
            <span className="font-medium text-[#343434]">
              دسته کارواش کلتی با پاشش متغیر متراژ پاشش ۶ تا ۸ متر است دارای قطع
              کن میباشد رزوه ی آن برنجی است
            </span>
          </span>
        </section>
        <section className="flex w-[90%] mx-auto  h-auto xl:h-[335px] xl:w-[277px]  flex-col justify-start gap-2 xl:gap-[24px] rounded-[15px] border border-solid border-[#700B97] px-[16px] pb-[16px] pt-[24px] text-[10px] xl:text-sm shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]">
          <span className="flex w-full justify-between">
            <span className="text-[#5E5E5E]">قیمت محصول</span>
            <span className="font-medium text-xs xl:text-sm text-[#343434]">245.000 تومان </span>
          </span>
          <span className="flex w-full justify-between">
            <span className="text-[#5E5E5E]">تخفیف</span>
            <span className="font-medium text-xs xl:text-sm text-[#343434]">245.000 تومان </span>
          </span>
          <span className="flex w-full justify-between">
            <span className="text-[#5E5E5E]">هزینه ارسال</span>
            <span className="font-medium text-xs xl:text-sm text-[#343434]">245.000 تومان </span>
          </span>
          <span className="h-[0.5px] w-full bg-[#D3B3DF]"></span>
          <span className="flex w-full justify-between text-[#700B97]">
            <span className="font-bold">مبلغ کل</span>
            <span className="xl:text-[20px] text-sm  font-normal">245.000 تومان </span>
          </span>
          <button className="xl:mt-[43px] h-[40px] w-full rounded-lg bg-[#700B97] text-base text-white">
            افزودن به سبد
          </button>
        </section>
        </section>
      </Modal>
    </>
  );
}
