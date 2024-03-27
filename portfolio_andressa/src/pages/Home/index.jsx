import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'
import livros from '../../assets/livros.jpg'
import dois from '../../assets/dois.jpg'
import tres from '../../assets/tres.jpg'
import quatro from '../../assets/quatro.jpg'
import logo2 from '../../assets/logo2.jpg'
import '../../App.css'

function Home() {

const slides = [livros, dois, tres, quatro];

  return (
  
    <>
      <header className='cabecalho'>
        <div className='logo'>
          <img className='logoImage' src={logo2}/> 
          <div className='cabecalho_links'>
          <a>Página Inicial</a>
          <a>Sobre mim</a>
          <a>Estudos</a>
          <a>Certificações DEV</a>
          <a>Contatos</a>
          </div>
        </div>
      </header>

      <div className='slider' >
        <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        loop
        >
          {slides.map(slides =>(
            <SwiperSlide>
                <img src={slides} alt={slides}></img>
            </SwiperSlide>

          ))}

        </Swiper>
        <div> 
         <a className='botao' href='https://wa.me/5511962556392'>Entre em contato</a>
      </div>
      </div>
     
      
    </>

  )
}

export default Home
