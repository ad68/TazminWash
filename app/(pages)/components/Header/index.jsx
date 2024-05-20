"use client";
import Image from "next/image";
import DarkMode from './components/DarkMode'
export const Header = () => {
  return (
    <>
    <section className="w-full fixed  z-10 top-0 left-0">
      <section className="mx-auto dark:text-white mt-10 flex h-[41px] w-[1295px] justify-between font-medium text-[#0C0C0C] ">
        <section className="flex w-[598px] items-center justify-between">
          <Image alt="" width={99} height={41} src="/images/icons/logo.svg" className="dark:hidden"/>
          <Image alt="" width={99} height={41} src="/images/icons/logo-Dark.svg" className="dark:block hidden" />
          <span>صفحه اصلی</span>
          <span>درباره ما</span>
          <span>محصولات</span>
          <span>لیست قیمت ها</span>
          <span>وبلاگ</span>
        </section>
        <section className="flex w-[235px] items-center justify-between">
          <DarkMode />
          {/* <Image width={64} height={32} src="/images/icons/darkModeBtn.png" /> */}
          <section className="flex h-full w-[155px] items-center justify-center gap-[12.25px] rounded-lg border border-solid border-[#700B97] font-medium text-[#700B97]">
            <Image alt="" width={15.5} height={20.5} src="/images/icons/person.svg" />
            حساب کاربری
          </section>
        </section>
      </section>
      </section>
    </>
  );
};
