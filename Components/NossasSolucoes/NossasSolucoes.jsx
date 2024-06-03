import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../../Style/NossasSolucoes/NossasSolucoes.css';
import Slide1 from "../../src/assets/slide1.png";
import Slide2 from "../../src/assets/slide2.png";
import Slide3 from "../../src/assets/slide3.png";
import Slide4 from "../../src/assets/slide4.png";



export default function NossasSolucoes() {
    return (
        <section id="nossasSolu">
            <h2>Nossas <span className='solu'>Soluções</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <br />
            <div className="slider">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src={Slide1} alt="slide"  className='slide'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide2} alt="slide"  className='slide'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide3} alt="slide"  className='slide'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide4} alt="slide"  className='slide'/>
                    </SwiperSlide>
                </Swiper>
                <span className='texto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <br/>
                <a href=""><button className='btn'>Acessar o Repositorio</button></a>
            </div>
        </section>
    );
}
