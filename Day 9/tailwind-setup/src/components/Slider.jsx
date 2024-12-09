

export default function Slider() {
    return (
        <div className="carousel w-full h-1/2">
            <div id="slide1" className="carousel-item relative w-full h-1/2">
                <img
                    src="https://img.freepik.com/free-vector/set-electric-mosquito-killer-banner_105738-583.jpg?ga=GA1.1.92654373.1727852577&semt=ais_hybrid"
                    className="w-full h-1/2" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-1/2">
                <img
                    src="https://img.freepik.com/free-vector/realistic-sunscreen-ad_52683-43837.jpg?ga=GA1.1.92654373.1727852577&semt=ais_hybrid"
                    className="w-full h-1/2" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-1/2">
                <img
                    src="https://img.freepik.com/free-vector/realistic-ad-with-product-landing-page_52683-70870.jpg?ga=GA1.1.92654373.1727852577&semt=ais_hybrid"
                    className="w-full h-1/2" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-1/2">
                <img
                    src="https://img.freepik.com/free-vector/beauty-skin-care-background_52683-728.jpg?ga=GA1.1.92654373.1727852577&semt=ais_hybrid"
                    className="w-full h-1/2" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
