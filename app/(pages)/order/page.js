"use client";
import React, { useEffect, useState } from "react";
import TypeOfCar from "./components/TypeOfCar";
import Service from "./components/Service";
import AdditionalServices from "./components/AdditionalServices";
import Information from "./components/Information";
import DetailsPayment from "./components/DetailsPayment";
import ShippingTime from "./components/ShippingTime";
import Address from "./components/Address";
import StepBox from "./components/StepsBox";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <StepBox activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 1 ? (
        <TypeOfCar activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <></>
      )}
      {activeTab === 2 ? (
        <Service activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <></>
      )}
      {activeTab === 3 ? (
        <ShippingTime activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <></>
      )}
      {activeTab === 4 ? (
        <Address activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <></>
      )}
      {activeTab === 5 ? (
        <Information activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <></>
      )}
      {activeTab === 6 ? (
        <AdditionalServices activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <></>
      )}
      {activeTab === 7 ? (
        <DetailsPayment activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <></>
      )}{" "}
    </>
  );
}
