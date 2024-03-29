import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'
import livros from '../../assets/livros.jpg'
import dois from '../../assets/dois.jpg'
import tres from '../../assets/tres.jpg'
import quatro from '../../assets/quatro.jpg'
//import logo2 from '../../assets/logo2.jpg'
//import '../../App.css'
//import {Link} from 'react-router-dom'
import styles from '../Home/Home.module.css'
import Header from '../../components/Header'
import Botao from '../../components/Botao'

function Home() {

const slides = [livros, dois, tres, quatro];

  return (
  
    <>
    <Header></Header>
      <div className={styles.sliders} >
        <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        loop
        >
          {slides.map(slides =>(
            <SwiperSlide>
                <img  src={slides} alt={slides}></img>
            </SwiperSlide>

          ))}

        </Swiper>
        <div> 
              <Botao/>
        </div>
      </div>
     
      
    </>

  )
}

export default Home
