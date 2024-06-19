"use client";
import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import "./style.css";
import { eslint } from "../../../../next.config";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  dark,
  loading,
  options,
  setState,
  state,
  optionTitle,
  optionValue,
  placeHolder,
  sameOption,
  search,
  defaultValue
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  /* const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]; */
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [myOptions, setMyOptions] = useState([]);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    let arr = [];
    if (sameOption) {
      if (options.length > 0) {
        options.forEach((item) => {
          arr.push({ value: item, label: item });
        });
      }
    } else {
      options?.forEach((item) => {
        arr.push({ value: item[optionValue], label: item[optionTitle] });
      });
    }

    setMyOptions(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const searchInObjArray = (arr) => {
    let result;
    arr.forEach((item) => {
      if (item.value === defaultValue) {
        result = item;
      }
    });
    return result;
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <Select
      options={myOptions}
      isLoading={loading}
      onChange={setState}
      isRtl={true}
      value={state}
      placeholder={placeHolder ? placeHolder : "انتخاب کنید..."}
      isSearchable={search}
      loadingMessage={() => <span>در حال بارگزاری...</span>}
      noOptionsMessage={() => <span>اطلاعاتی موجود نیست</span>}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
        ...theme.colors,
          primary25: '',
          primary: '#700B97',
          primary50:'#D3B3DF',
        },
      })}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "#700B97" : "#EBEBEB",
          backgroundColor: dark ? "#2f2f2f80" : "white",
          width: "100% !important",
          height:48,
          color:'#666666',
          borderRadius:10,
          boxShadow: 'none',
          '&:hover':{
            boxShadow: 'none',
          }
        }),
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0,
      
        }),
      
        /*   option: (provided) => ({
            ...provided,
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
          }), */
        singleValue: (provided) => ({
          ...provided,
          color: dark ? "white" : "#666666",
        }),
      }}
    />
  );
}
