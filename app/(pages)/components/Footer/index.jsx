"use client";
import Image from "next/image";
function Footer() {
  return <>
  <section className="flex  xl:w-[1295px] w-[90%] h-auto mx-auto bg-white xl:rounded-[15px] xl:h-[250px]">
<section className="xl:w-[291px]">
<Image
              alt=""
              width={99}
              height={41}
              src="/images/icons/logo.svg"
              className="dark:hidden"
            />
</section>
  </section>
  </>;
}

export default Footer;
