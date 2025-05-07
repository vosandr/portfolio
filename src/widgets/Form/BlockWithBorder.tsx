import { VNode } from 'preact'

interface Props {
  children?: VNode | VNode[]
}
export default function Block({ children }: Props) {
  return (
    <div className="sm:min-w-[40rem] rounded-3xl border-2 border-yellow-850 p-4 text-yellow-850 flex-grow basis-0">
      {children}
    </div>
  )
}
