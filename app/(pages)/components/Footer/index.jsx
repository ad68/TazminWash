"use client";
import {
  IconCall,
  IconInstagram,
  IconLinkedin,
  IconLocation,
  IconMessage,
  IconTelegram,
  IconWhatsapp,
} from "@/common/icons";
import Image from "next/image";
function Footer() {
  return (
    <>
      <section className="dark:bg-searchBox-gradient rounded-t-[25px] py-[20px] gap-8 xl:gap-0 dark:backdrop-blur-sm dark:bg-opacity-90 mx-auto xl:mb-[59.71px] flex xl:flex-row flex-col h-auto  w-full border-[1px] border-solid border-[#ffffff1a] bg-white text-[#666666] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] xl:h-[250px] xl:w-[1295px] xl:rounded-[15px] xl:px-[35px] xl:pb-[39px] xl:pt-[32px] dark:text-white">
        <section className="flex flex-col gap-[14px] w-[90%] mx-auto xl:w-[291px]">
          <Image
            alt=""
            width={99}
            height={41}
            src="/images/icons/tazminmashin-end-blue.png"
            className="dark:hidden"
          />
          <Image
            alt=""
            width={99}
            height={41}
            src="/images/icons/tazminmashin-end-blue Dark.png"
            className="hidden dark:block"
          />
          <span className="text-justify text-xs leading-[20.73px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،{" "}
          </span>
        </section>
         <section className="xl:mr-[85px] flex flex-col gap-[14px] mx-auto w-[90%] xl:w-[267px]">
          <span className="text-sm font-bold leading-[24.18px] text-[#0C0C0C] dark:text-white">
            ارتباط با ما
          </span>
          <span className="flex w-full items-center gap-4 text-xs leading-[20.73px]">
            <IconCall
              width="17.98"
              color="white"
             
              className="hidden dark:block"
              height="17.98"
              viewBox="0 0 24 25"
            
            />
                <IconCall
              width="17.98"
              color="#666666"
              height="17.98"
              viewBox="0 0 24 25"
              className="dark:hidden "
            />
            <span dir="ltr" className="">
              021-44662288
            </span>
          </span>
          <span className="flex w-full items-center gap-4 text-xs leading-[20.73px]">
          <IconLocation
              width="16"
              color="white"
            
              className="hidden dark:block"
              height="21.04"
              viewBox="0 0 24 25"
            />
            <IconLocation
              width="16"
              color="#666666"
              height="21.04"
              viewBox="0 0 24 25"
              className="dark:hidden "
            />
            تهران پونک میدان پونک ساختمان 22 طبقه 2
          </span>
          <span className="flex w-full items-center gap-4 text-xs leading-[20.73px]">
            <IconMessage
              width="20"
              color="#666666"
              height="18"
              viewBox="0 0 24 25"
              className="dark:hidden "
            />
                <IconMessage
              width="20"
              color="white"
        
              className="hidden dark:block"
              height="18"
              viewBox="0 0 24 25"
            />
            tazminwash@gmail.com
          </span>
        </section>
        <section className="xl:mr-[101px] mx-auto w-[90%] flex flex-col gap-[14px] xl:w-[89px]">
          <span className="text-sm font-bold leading-[20.73px] text-[#0C0C0C] dark:text-white">
            دسترسی سریع
          </span>
          <span className="w-full text-xs leading-[20.73px]">
            رزرو نوبت کارواش
          </span>
          <span className="w-full text-xs leading-[20.73px] ">محصولات</span>
          <span className="w-full text-xs leading-[20.73px] ">مقالات</span>
          <span className="w-full text-xs leading-[20.73px] ">درباره ما</span>
        </section>
        <section className="xl:mr-[165px] xl:w-[185px] flex w-[90%] mx-auto flex-col items-center gap-[27.71px]">
          {" "}
          <section className="flex gap-8">
            <Image
              alt=""
              width={80}
              height={80}
              src="/images/icons/logo footer-l.png"
            />
            <Image
              alt=""
              width={80}
              height={80}
              src="/images/icons/logo footer-r.png"
            />
          </section>
          <section className="flex gap-[19px] ">
            <IconLinkedin
              viewBox="0 0 32 32"
              width="24"
              height="24"
              color="white"
              fill="white"
              className="hidden dark:block"
            />
            <IconLinkedin
              viewBox="0 0 32 32"
              width="24"
              height="24"
              color="#666666"
              fill="#666666"
              className="dark:hidden "
            />
            <IconInstagram
              viewBox="0 0 32 32"
              width="24"
              height="24"
              color="white"
              fill="white"
              className="hidden dark:block"
            />
            <IconInstagram
              viewBox="0 0 32 32"
              width="24"
              height="24"
              color="#666666"
              fill="#666666"
              className="dark:hidden "
            />

            <IconTelegram
              viewBox="0 0 32 32"
              width="24"
              height="24"
              color="white"
              fill="white"
              className="hidden dark:block"
            />
            <IconWhatsapp
              viewBox="0 0 32 32"
              width="24"
              height="24"
              color="white"
              fill="white"
              className="hidden dark:block "
            />
            <IconTelegram
              viewBox="0 0 32 32"
              width="24"
              height="24"
              color="#666666"
              fill="#666666"
              className="dark:hidden "
            />
            <IconWhatsapp
              viewBox="0 0 32 32"
              width="24"
              height="24"
              color="#666666"
              fill="#666666"
              className="dark:hidden "
            />
          </section>
        </section> 
      </section>
    </>
  );
}

export default Footer;
