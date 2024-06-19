"use client";
import React, { useState, useContext, useEffect } from "react";
export default function Index({
  title,
  dark,
  style,
  defaultValue,
  placeholder,
  className,
  validation,
  register,
  name,
  onChange,
  value,
  type

}) {
  return (
    <section className="relative">
      {type === "phone" && <section className="ltr flex justify-between font-light text-[#A6A9BD] items-center w-[40px] absolute top-2 left-3">
        +98 <span className="block  w-[1px] h-[32px] bg-[#A6A9BD]"></span>
      </section>}
      <input
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        style={{ ...style }}
        className={`${dark ? "border-[#ffffff46] bg-[#2f2f2f80] text-white" : "border-[#EBEBEB]"}  ${type === "phone" && 'pl-16 ltr'} mx-0 h-[40px] w-full rounded-[4px] border-[1px] p-[15px] text-xs outline-none transition-all duration-300 focus:border-[#700B97] ${className}`}
      />
    </section>
  );
}
