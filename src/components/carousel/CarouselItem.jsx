import './_carousel.scss';
import Carousel from 'react-bootstrap/Carousel';

const CarouselItem =({catImages})=>{

    if (!catImages || catImages.length === 0) {
        return null;
    }
    return(
        <>
            <Carousel data-bs-theme="dark">
                {catImages.map((cats)=>(
                    <Carousel.Item>
                    <img  className='d-block w-100' text="First slide" key={cats.id} src={cats.url} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default CarouselItem;