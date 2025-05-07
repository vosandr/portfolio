import { h, cloneElement, VNode } from 'preact';
interface Props {
    children?: VNode | VNode[]; // Тип для children в Preact
  }
export default function Blocks({ children }: Props) {

    // const framedChildren = children.map((child, index) =>
    //     cloneElement(child, {
    //         key: child.key || index,
    //         className: 'rounded-3xl border-2 text-orange-75 bg-yellow-850'
    //     })
    // );

    return <div className="my-4 flex flex-1 flex-wrap items-stretch justify-evenly gap-3">{children}</div>;
}