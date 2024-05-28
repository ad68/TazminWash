"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import IteemsList from "./components/IteemsList";
import OfferList from "./components/OfferList";
import AddMore from "./components/AddMore";
import { IconBack, IconNext } from "@/common/icons";
import { useWindowSize } from "@/hooks";
import ProductModal from "./components/ProductModal";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // const [windowHeight, windowWidth] = useWindowSize();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const[modalOpen,setModalOpen]=useState(false)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  // useEffect(() => {
  //   console.log(windowHeight, windowWidth);
  // }, [windowHeight, windowWidth]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
const showMoal=()=>{
  setModalOpen(true)
}
const closeModal=()=>{
  setModalOpen(false)
}
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
    <ProductModal closeModal={closeModal} modalOpen={modalOpen}  />
      <section className="mx-auto mt-[113px] flex w-[90%]  flex-col items-center xl:w-[1296px]">
        <h2 className="w-full text-center text-[20px] font-bold leading-[34.55px] text-[#222222] xl:text-right dark:text-white">
          محصولات تضمین‌واش
        </h2>
        <Header />
      </section>
      <IteemsList showMoal={showMoal}/>
      <OfferList showMoal={showMoal}/>
      <IteemsList />
      <AddMore />
      <IteemsList />
      <section className="mx-auto mt-[64px] flex h-[40px] w-fit justify-between rounded-[10px] border  border-solid border-[#E5E7EB] text-[#6B7280] shadow-[0px_1px_2px_0px_#0000000D] dark:text-white">
        <span className="flex h-full w-[70px] cursor-pointer items-center justify-center  gap-2 border-l border-solid border-[#E5E7EB]">
          <IconBack
            viewBox="0 0 8 8"
            width="10"
            height="20"
            color="#6B7280"
            fill="#6B7280"
            className="dark:hidden "
          />
          <IconBack
            viewBox="0 0 8 8"
            width="10"
            height="20"
            color="white"
            fill="white"
            className="hidden dark:block "
          />
          قبل
        </span>
        <span className="flex h-full w-[40px] cursor-pointer items-center justify-center  border-l border-solid border-[#E5E7EB] hover:bg-[#700B97] hover:text-white">
          1
        </span>
        <span className="flex h-full w-[40px] cursor-pointer items-center justify-center border-l border-solid border-[#E5E7EB] hover:bg-[#700B97] hover:text-white">
          2
        </span>
        <span className="flex h-full w-[40px] cursor-pointer items-center justify-center border-l border-solid border-[#E5E7EB] hover:bg-[#700B97] hover:text-white">
          3
        </span>
        <span className="flex h-full w-[40px] cursor-pointer items-center justify-center hover:bg-[#700B97] hover:text-white">
          4
        </span>
        <span className="flex h-full w-[70px]  cursor-pointer items-center justify-center gap-2 border-r border-solid border-[#E5E7EB]">
          بعد
          <IconNext
            viewBox="0 0 8 8"
            width="10"
            height="20"
            color="#6B7280"
            fill="#6B7280"
            className="dark:hidden "
          />
          <IconNext
            viewBox="0 0 8 8"
            width="10"
            height="20"
            color="white"
            fill="white"
            className="hidden dark:block "
          />
        </span>
      </section>
    </>
  );
}
