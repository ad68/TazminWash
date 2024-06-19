"use client";
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, ComponentLoading, ErrorMessage, Select, TextBox } from "@/common";
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { notify } from "@/helper";
import { Regex } from "@/enums";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const types = [
    { label: "خودرو", value: "CAR" },
    { label: "موتور", value: "MOTORCYCLE" },
  ];
  const { handleSubmit, control, reset,formState:{errors} } = useForm();

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const onSubmit = (data) => {
    let params = {
      firstName: data.firstName,
      lastName: data.lastName,
      mobileNumber: data.mobileNumber,
      nationalCode: data.nationalCode,
      vehicleWashType: data.vehicleWashType,
      address: data.address,
      description: data.description,
    };
    setLoading(true);
    useAxios
      .post(api.ambassador.ambassadorAdd, params)
      .then((res) => {
        setLoading(false);
        notify.Success("سفیر با موفقیت افزوده شد");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <aside
        className={`dark:bg-searchBox-gradient z-[1000] relative mt-6 grid w-[95%] gap-6 rounded-2xl bg-white px-4 py-6 shadow-md xl:h-auto xl:w-[414px] dark:border-[1px] dark:border-[#ffffff46] dark:bg-white/10 dark:bg-opacity-90  dark:text-white dark:backdrop-blur-sm `}
      >
        <header>
          <h1 className="text-[#404040] xl:text-[24px] xl:font-bold dark:text-white">
            فرم ثبت‌نام سفیران
          </h1>
          <h2 className="text-[16px] font-normal text-[#434343] dark:text-white">
            همین حالا ثبت‌نام کنید!
          </h2>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <Controller
            name="firstName"
            control={control}
            rules={{  required: 'نام الزامی است',minLength:{
              value:3,
              message:'  نام  نباید کمتر از 2 کاراکتر باشد'
            },maxLength:{
              value:40,
                 message:'  نام  نباید بیشتر از 40 کاراکتر باشد'
            }}}
            render={({ field: { onChange } }) => (
              <TextBox
                onChange={onChange}
                placeholder="نام"
                className={`h-[40px] w-full rounded-[8px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#666666] xl:h-[48px] xl:rounded-[10px] xl:p-3 xl:text-[16px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {
            errors.firstName&&<ErrorMessage>{errors.firstName.message}</ErrorMessage>
          }
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'نام خانوادگی الزامی است',minLength:{
              value:3,
              message:'  نام خانوادگی نباید کمتر از 2 کاراکتر باشد'
            },maxLength:{
              value:40,
                 message:'  نام خانوادگی نباید بیشتر از 40 کاراکتر باشد'
            }}}
            render={({ field: { onChange } }) => (
              <TextBox
                onChange={onChange}
                placeholder="نام خانوادگی"
                className={`h-[40px] w-full rounded-[8px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#666666] xl:h-[48px] xl:rounded-[10px] xl:p-3 xl:text-[16px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {
            errors.lastName&&<ErrorMessage>{errors.lastName.message}</ErrorMessage>
          }
          <Controller
            name="nationalCode"
            control={control}
            rules={{ required: 'کد ملی الزامی است',pattern:{
              value:Regex.NATIONAL_CODE,
              message:'کد ملی را بدرستی وارد کنید'
            } }}
            render={({ field: { onChange } }) => (
              <TextBox
                onChange={onChange}
                placeholder="کد ملی"
                className={`h-[40px] w-full rounded-[8px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#666666] xl:h-[48px] xl:rounded-[10px] xl:p-3 xl:text-[16px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {
            errors.nationalCode&&<ErrorMessage>{errors.nationalCode.message}</ErrorMessage>
          }
          <Controller
            name="mobileNumber"
            control={control}
            rules={{ required: ' شماره تماس الزامی است' ,pattern:{
              value:Regex.MOBILE,
              message:'شماره تماس را بدرستی وارد کنید'
            } }}
            render={({ field: { onChange } }) => (
              <TextBox
                placeholder="09121******"
                onChange={onChange}
                type="phone"
                className={`h-[40px] w-full rounded-[8px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#666666] xl:h-[48px] xl:rounded-[10px] xl:p-3 xl:pl-16 xl:text-[16px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {
            errors.mobileNumber&&<ErrorMessage>{errors.mobileNumber.message}</ErrorMessage>
          }
          <Controller
            name="vehicleWashTypeEnum"
            control={control}
            rules={{ required: 'انتخاب نوع وسیله نقلیه الزامی است'}}
            render={({ field: { onChange, value } }) => (
              <Select
                // onChange={(value)=>onChange(value.value)}
                setState={(obj) => onChange(obj.value)}
                optionValue="value"
                optionTitle="label"
                placeHolder="وسیله نقلیه"
                options={types}
                className={` w-full rounded-[8px]  p-2 text-[12px] font-normal text-[#666666] xl:h-[48px] xl:rounded-[10px] xl:p-3 xl:text-[16px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
{
            errors.vehicleWashTypeEnum&&<ErrorMessage>{errors.vehicleWashTypeEnum.message}</ErrorMessage>
          }
          <Controller
            name="address"
            control={control}
            rules={{ required: '  آدرس الزامی است',minLength:{
              value:3,
              message:'  آدرس  نباید کمتر از 2 کاراکتر باشد'
            },maxLength:{
              value:40,
                 message:'  آدرس  نباید بیشتر از 40 کاراکتر باشد'
            } }}
            render={({ field: { onChange } }) => (
              <TextBox
                onChange={onChange}
                placeholder="آدرس"
                className={`h-[40px] w-full rounded-[8px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#666666] xl:h-[48px] xl:rounded-[10px] xl:p-3 xl:text-[16px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {
            errors.address&&<ErrorMessage>{errors.address.message}</ErrorMessage>
          }
          <Controller
            name="description"
            control={control}
            rules={{ required: false,minLength:{
              value:3,
              message:'    نباید کمتر از 2 کاراکتر باشد'
            },maxLength:{
              value:40,
                 message:'    نباید بیشتر از 40 کاراکتر باشد'
            }  }}
            render={({ field: { onChange } }) => (
              <textarea
                onChange={onChange}
                placeholder="توضیحات"
                className="h-[60px] w-full rounded-[10px] border-[1px] border-[#EBEBEB] pt-3 text-[#666666] outline-none focus:border-[#700B97] xl:px-3 xl:text-[16px]"
              />
            )}
          />
{
            errors.description&&<ErrorMessage>{errors.description.message}</ErrorMessage>
          }
          <Button
            loading={loading}
            className="mx-auto flex h-[40px] w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-[#CE50FF] to-[#700B97] text-[16px] font-normal text-white xl:h-[56px] xl:w-[382px] xl:rounded-lg"
          >
            {
              loading?'':'ثبت اطلاعات'
            }
          </Button>
        </form>
      </aside>
    </>
  );
}
