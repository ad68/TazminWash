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
}) {
  return (
    <section className="relative">
      <input
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        style={{ ...style }}
        className={`${dark ? "border-[#ffffff46] bg-[#2f2f2f80] text-white" : "border-[#EBEBEB]"} mx-0 h-[40px] w-full rounded-[4px] border-[1px] p-[15px] text-xs outline-none transition-all duration-300 focus:border-[#0165e1] ${className}`}
      />
    </section>
  );
}
