import { Link } from 'preact-router'

export default function () {
  return (
    <nav class="navbar bg-yellow-850 shadow">
      <div class="flex w-full items-center gap-2">
        {/* <div class="flex items-center justify-between">
                    <div class="navbar-start items-center justify-between max-md:w-full">
                        <a
                            class="link text-base-content link-neutral text-xl font-semibold no-underline"
                            href="#"
                        ></a>
                        <div class="md:hidden">
                            <button
                                type="button"
                                class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                                data-collapse="#default-navbar-collapse"
                                aria-controls="default-navbar-collapse"
                                aria-label="Toggle navigation"
                            >
                                <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                                <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                            </button>
                        </div>
                    </div>
                </div> */}
        <div className="navbar-start">
          <h2 className="relative text-xl text-orange-75">
            <span class="text-3xl">К</span>
            аждая история важна,
            <br />
            каждая жизнь уникальна
          </h2>
        </div>
        <div
          id="default-navbar-collapse"
          class="collapse navbar-end w-full grow basis-full overflow-hidden transition-[height] duration-300"
        >
          <ul class="menu menu-horizontal mt-2 gap-2 p-0 text-base prose-li:text-yellow-850">
            <li>
              <a className="hover:text-orange-750" href="/">
                Главная
              </a>
            </li>
            <li>
              <a className="hover:text-orange-750" href="/about/">
                Обо мне{' '}
              </a>
            </li>
            {/* <li>
                            <a className="hover:text-orange-750" href='/docs/'>Документы</a>
                        </li>
                        <li>
                            <a className="hover:text-orange-750" href="/contacts/">Контакты</a>
                        </li> */}
            <li>
              <a className="hover:text-orange-750" href="/price/">
                Цены
              </a>
            </li>

            {/*   */}
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar">
    //     {/* <div className="navbar-start">
    //     <li className="relative left-0 top-3 text-xs font-normal text-black">
    //         Борисова психолог лого
    //     </li>
    // </div> */}
    //     <div className="navbar-end w-fit">
    //         <ul className="menu menu-horizontal prose-a:no-underline prose-a:text-xs prose-a:font-normal prose-a:text-yellow-900">
    //             <li>
    //                 <a>Обо мне </a>
    //             </li>
    //             <li>
    //                 <a>Образование</a>
    //             </li>
    //             <li>
    //                 <a>Контакты</a>
    //             </li>
    //             <li>
    //                 <a>Прайс</a>
    //             </li>
    //             {/* <li className="top-0 h-[42px] w-[265px] rounded-md bg-[#d3876c]" /> */}
    //             {/* <li className="top-3 text-xl font-semibold uppercase text-[#fcfcfc]"></li> */}
    //             <li className="prose-a:bg-yellow-550 prose-a:text-slate-50 h-11 w-min">
    //                 <a>записаться</a>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
  )
}
