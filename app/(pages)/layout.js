import "./globals.css";
import localFont from "next/font/local";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import TopLoader from "../common/TopLoader";
import { Toaster } from "react-hot-toast";
const yekanbakh = localFont({
  display: "block",
  variable: "--font-yekanbakh",
  src: [
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "  نام سایت | صفحه اصلی",
  description: "توضیحات",
};
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function RootLayout({ children }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${yekanbakh.variable} font-yekanbakh dark:bg-black`}
    >
      <body>
        {/*  <ScrollTop /> */}
        <TopLoader />
        <Header />
        <Toaster />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
