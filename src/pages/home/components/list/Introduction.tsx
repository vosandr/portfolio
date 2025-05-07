import { Link } from 'wouter-preact'
import { baseRoute } from 'consts/baseRoute'

export default function () {
  return (
    <div className="p-4">
      <p>
        Всем привет. Данная страница предназначена для работодателей, клиентов,
        знакомых и в принципе тех, кто интересуется, чем я занимаюсь
      </p>
      <a className="link-hover text-blue-700" href={baseRoute + '/talking/'}>
        Мои хобби
      </a>
    </div>
  )
}
