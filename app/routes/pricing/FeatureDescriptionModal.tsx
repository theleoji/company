import type { ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const FeatureDescriptionModal = ({
  name,
  description,
  open,
  setOpen,
}: {
  name: string;
  description: ReactElement;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        onClose={() => setOpen(false)}
        className="fixed inset-0 overflow-y-auto"
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        </Transition.Child>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="relative z-10 w-screen h-screen flex flex-col justify-center items-center">
            <div className="p-4 bg-white text-gray-900 dark:bg-brand-primary-950 dark:text-brand-white max-w-2xl">
              <Dialog.Title
                as="h3"
                className="text-xl md:text-2xl font-futura leading-6 text-gray-900 dark:text-brand-white mb-2"
              >
                {name}
              </Dialog.Title>
              <Dialog.Description
                as="p"
                className="text-sm md:text-md leading-6 text-gray-500 dark:text-gray-400 mb-4"
              >
                {description}
              </Dialog.Description>
              <button
                className="text-center text-sm font-medium leading-6 text-gray-900 dark:text-brand-white underline"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
