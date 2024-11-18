import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

import React from 'react'

const Pop = () => {
  return (
    <div>
      <div className="flex w-full justify-center">
      <div className="flex md:flex-row flex-col gap-8">
        
        <Popover>
          <PopoverButton className="block font-semibold md:text-black text-white text-lg focus:outline-none data-[active]:text-indigo-500 data-[hover]:text-indigo-500 data-[focus]:outline-1 data-[focus]:outline-white">
            Sections
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">Start integrating products and tools</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover>
          <PopoverButton className="block font-semibold text-black text-lg focus:outline-none data-[active]:text-indigo-500 data-[hover]:text-indigo-500 data-[focus]:outline-1 data-[focus]:outline-white">
            Solutions
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Mobile Development</p>
                <p className="text-white/50">Request for a mobile app.</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Website Development</p>
                <p className="text-white/50">Request for website creation.</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Learn Programming</p>
                <p className="text-white/50">We teach all languages</p>
              </a>
            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Cyber Security</p>
                <p className="text-white/50">Hire Cyber security Personnel</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <div className="text-sm/6 font-semibold text-white/50">Pricing</div>
      </div>
    </div>
    </div>
  )
}

export default Pop
