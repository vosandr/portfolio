// import { h, Fragment } from 'preact';
// import { Dialog, Transition } from '@headlessui/react';
// import { XIcon } from '@heroicons/react/outline';

// interface ImageZoomerProps {
//   isOpen: boolean;
//   imageUrl: string | null;
//   altText?: string;
//   onClose: () => void;
// }

// export function ImageZoomer({
//   isOpen,
//   imageUrl,
//   altText = '',
//   onClose,
// }: ImageZoomerProps) {
//   if (!imageUrl) return null;

//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
//         <div className="min-h-screen px-4 text-center">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
//           </Transition.Child>

//           {/* Это сам блок с изображением */}
//           <span className="inline-block h-screen align-middle" aria-hidden="true">
//             ​
//           </span>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//               <button type="button" className="absolute top-0 right-0 p-2 mt-6 mr-6 inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onClose}>
//                 <XIcon className="w-6 h-6" aria-hidden="true" />
//               </button>
//               <img src={imageUrl} alt={altText} className="object-scale-down h-full max-h-[80vh]" />
//             </div>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };