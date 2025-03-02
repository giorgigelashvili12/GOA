import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import React from 'react'

export default function DisclosureMenu() {
  return (
    <div className="h-screen w-full pt-32 px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              What is your refund policy?
            </span>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              Do you offer technical support?
            </span>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  )
}