import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'

const Carousel = () => {
    return (
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
            <div className="carousel-item">
                <img
                    src={img1}
                    className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
                <img
                   src={img2}
                   className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
                <img
                    src={img3}
                    className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
                <img
                 src={img4}
                 className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
                <img
                   src={img5}
                   className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
                <img
                    src={img6}
                    className="rounded-box w-80" />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                    className="rounded-box" />
            </div>
        </div>
    );
};

export default Carousel;