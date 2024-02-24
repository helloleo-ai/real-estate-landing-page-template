import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import React from "react";

interface HeadlineProps {}

export default function Headline({}: HeadlineProps) {
  return (
    <section
      id="home"
      className="w-full h-auto bg-[#F4F7FC] px-4 lg:px-20 pt-8 pb-20"
    >
      <div className="h-[720px] rounded-2xl flex flex-col gap-y-4 md:gap-y-8 items-center relative bg-[url('/images/image-1.jpg')] bg-cover bg-center">
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col items-center text-center mt-28">
          Investing In Your Future <br /> One Home At A Time
        </h1>
        <p className="text-center text-[11px] md:text-base w-[260px] md:w-[360px] lg:w-[520px]">
          We'all help you find the key to your dream home. Experience the joy of
          homeownership. Let us make your home buying journey simple
        </p>
        <button
          type="button"
          aria-label="Get Started"
          className=" px-6 py-2 border border-black rounded-lg font-bold mt-10"
        >
          Get Started
        </button>
        <div className="hidden lg:block absolute w-full -bottom-10 px-14 2xl:px-28">
          <div className="flex justify-between bg-white rounded-xl px-12 py-6">
            {MENU_ITEMS_HEADLINE.map((item, index) => (
              <>
                <div key={item.title}>
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="font-light text-sm">{item.subtitle}</p>
                </div>
                <div
                  className={
                    index === MENU_ITEMS_HEADLINE.length - 1
                      ? "border-none"
                      : "border"
                  }
                />
              </>
            ))}
            <button
              type="button"
              aria-label="Search Property"
              className="bg-[#4C73FF] rounded-xl px-10 py-3 text-white font-medium"
            >
              Search Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}