import React from "react";
import Pop from "./Pop";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const Hero = () => {
  return (
    <div>
      {/* bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] */}
      <section class="pt-8 lg:pt-32  bg-center bg-cover">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center bg-transparent">
          <div class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
            <span class="font-inter text-xs font-medium text-gray-900 ml-3">
              Hire Developer for your project.
            </span>
            
              <Popover>
          <PopoverButton className="block font-semibold md:text-black text-white text-lg focus:outline-none data-[active]:text-indigo-500 data-[hover]:text-indigo-500 data-[focus]:outline-1 data-[focus]:outline-white">
          <a
              href="javascript:;"
              class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              </a>
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-white w-52 shadow shadow-sm text-sm/6 transition duration-500 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-indigo-500">Mobile Development</p>
                <p className="text-neutral-400">Request for a mobile app.</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-indigo-500">Website Development</p>
                <p className="text-neutral-400">Request for website creation.</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-indigo-500">Learn Programming</p>
                <p className="text-neutral-400">We teach all languages</p>
              </a>
            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-slate-200" href="#">
                <p className="font-semibold text-indigo-500">Not Sure</p>
                <p className="text-neutral-500">Find</p>
              </a>
            </div>
          </PopoverPanel>

          
        </Popover>
          </div>
          <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-6xl tracking-wide leading-[50px]">
            Technology Development for the 
            <span class="text-indigo-600">Future </span>
          </h1>
          <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
          <a
            href="javascript:;"
            class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
          >
            Create an account
            <svg
              class="ml-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <div class="flex justify-center ">
            
            <img
              src="../images/dash.png"
              alt="Dashboard image"
              class="rounded-t-3xl h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
