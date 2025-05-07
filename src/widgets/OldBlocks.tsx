// import React from 'preact/compat'
// import { useEffect, useRef } from 'preact/hooks'
// import { JSX } from 'preact/jsx-runtime'

// type Props = {
//   isTransparentBgColor?: boolean
//   tiles: ListTile[]
//   children?: JSX.Element[] | JSX.Element
// }

// export default function ({ isTransparentBgColor, tiles, children }: Props) {
//   const blocksRef = useRef<HTMLDivElement[]>([])

//   useEffect(() => {
//     const heights = blocksRef.current.map((block) => block.offsetHeight)
//     const maxHeight = Math.max(...heights)

//     blocksRef.current.forEach((block) => {
//       block.style.height = `${maxHeight}px`
//     })
//   }, [children])
//   return (
//     <div className="">
//       <div
//         className={
//           'my-4 flex flex-1 flex-wrap items-stretch justify-evenly gap-3'
//         }
//       >
//         {
//           //     React.Children.map(children, (child, index) => React.cloneElement(child as JSX.Element, {
//           //         key: index,
//           //         ref: (el: HTMLDivElement|null) => {
//           //             if(el&&!blocksRef.current.includes(el)) {
//           //                 blocksRef.current.push(el)

//           //             }
//           //         },
//           //         className: child?.props.className+' prose-p:p-4 flex-grow basis-0'
//           //     }
//           // ))

//           tiles.map((tile, index) => (
//             <div
//               key={index}
//               className={
//                 'flex-grow basis-0 rounded-3xl border-2 text-orange-75 bg-yellow-850 text- prose-p:px-4'
//               }
//             >
//               {tile.title != null ? (
//                 <h1 className="text-orange-75">{tile.title}</h1>
//               ) : null}
//               {tile.subtitle ? <h2>{tile.subtitle}</h2> : null}
//               <p>{tile.text}</p>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }
