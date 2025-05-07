import { VNode } from 'preact'

interface Props {
  children?: VNode | VNode[]
}
export default function Block({ children }: Props) {
  return (
    <div className=" p-4 text-orange-75 flex-grow basis-0">
      {children}
    </div>
  )
}
