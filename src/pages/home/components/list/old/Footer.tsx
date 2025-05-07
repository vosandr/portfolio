import {
    IconBrandWhatsapp,
    IconBrandTelegram,
    IconMail,
    IconPhone,
} from '@tabler/icons-preact'
import { useEffect, useState } from 'preact/hooks'
import { atom, useAtom } from 'jotai'

export default function () {
    const totalCheckBoxes = 2
    const [checkedBoxes, setCheckedBoxes] = useState<string[]>([])
    const [isContentDisabled, setIsContentDisabled] = useState(true)
    const handleCheckBoxChange = (event: Event) => {
        const target = event.target as HTMLElement | null
        if (target && target instanceof HTMLInputElement) {
            if (target.checked) {
                setCheckedBoxes([...checkedBoxes, target.name])
            } else {
                setCheckedBoxes(
                    checkedBoxes.filter((box) => box !== target.name)
                )
            }
        }
    }
    useEffect(() => {
        setIsContentDisabled(checkedBoxes.length !== totalCheckBoxes)
    }, [checkedBoxes])

    return (
        <footer className="bg-gray-800 text-white p-4 flex flex-col justify-center items-center">

            <div className="p-4 grid justify-center">
                Ознакомьтесь с документами, чтобы увидеть контакты:
                <div className="justify-center flex">
                    <input
                        type="checkbox"
                        name="offer"
                        onChange={handleCheckBoxChange}
                    ></input>
                    <a href="/docs/offer/" className="btn">
                        Оферта
                    </a>
                </div>
                <div className="flex justify-center">
                    <input
                        type="checkbox"
                        name="privacy_policy"
                        onChange={handleCheckBoxChange}
                    ></input>
                    <a href="/docs/privacy_policy/" className="btn">
                        Политика конфиденциальности
                    </a>
                </div>
            </div>
            <div
                id="contacts"
                className={`w-fit p-4 ${isContentDisabled ? 'opacity-50 pointer-events-none' : ''}`}
            >
                <p>Ссылки на мои контакты:</p>
                {/* <h1>Контакты</h1> */}
                <ul className="menu menu-horizontal">
                    <li>
                        <a href="https://wa.me/+79191011717">
                            <IconBrandWhatsapp />
                            {/* WhatsApp */}
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/bsova_en">
                            <IconBrandTelegram />
                            {/* Telegram */}
                        </a>
                    </li>
                    <li>
                        <a href="mailto:lena2580@bk.ru">
                            <IconMail />
                            {/* Mail */}
                        </a>
                    </li>
                    <li>
                        <a href="tel:+79263825658">
                            <IconPhone />
                            {/* Phone */}
                        </a>
                    </li>
                </ul>
            </div>
            <p hidden={isContentDisabled} className="text-xs pt-10">Сделано Vosandr</p>
        </footer>
    )
}
