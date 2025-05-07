// type Props = {
//   isTransparentBgColor?: boolean
//   tiles: TwoSubtitleTile[]
// }

// export default function ({ isTransparentBgColor, tiles }: Props) {
//   return (
//     <div className="">
//       <div className={'my-4 flex flex-wrap items-stretch justify-evenly gap-3'}>
//         {tiles.map((tile, index) => (
//           <div
//             key={index}
//             className={
//               'flex-grow basis-0 rounded-3xl border-2 border-yellow-850 text-yellow-850 prose-p:px-4'
//             }
//           >
//             {tile.title != null ? <h1 className="">{tile.title}</h1> : null}
//             {tile.firstSubtitle ? <h2>{tile.firstSubtitle}</h2> : null}
//             <p>{tile.firstText}</p>
//             {tile.secondSubtitle ? <h2>{tile.secondSubtitle}</h2> : null}
//             <p>{tile.secondText}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
