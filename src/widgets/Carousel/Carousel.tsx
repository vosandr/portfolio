import { h } from 'preact'
import { useState } from 'preact/hooks'
import Block from 'widgets/Form/BlockWithBorder'

type Props = {
    images: Image[]
}

const Carousel = ({ images }: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        )
    }

    return (
        <div className="relative max-w-screen-lg mx-auto overflow-hidden">
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
            >
                <span class="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                    <span class="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            >
                <span class="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                    <span class="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
            </button>
            <div className="flex items-center justify-center p-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${
                            index === currentIndex ? 'block' : 'hidden'
                        } relative transition-all duration-300 ease-in-out`}
                    >
                        {/* <div className="rounded-3xl bg-yellow-850"> */}
                            <img
                                src={image.src}
                                alt={image.alt || ''}
                                className="h-[40rem] object-center pl-4 pt-4"
                            />
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
