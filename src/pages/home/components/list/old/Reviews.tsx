import Carousel from 'widgets/Carousel/Carousel'

const images: Image[] = [{ src: '/reviews/rev1.jpg' }, { src: '/reviews/rev2.jpg' }]
export default function () {
    return (
        <>
            <h1 className="text-center">Отзывы</h1>
            <Carousel images={images} />
        </>
    )
}
