import { VNode } from "preact"

interface Props{
    children?:VNode|VNode[]
}
export default function ({children}:Props) {
    return (
        <div className="p-4 text-yellow-850">
      {children}
    </div>
    )
}