import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'
import livros from '../src/assets/livros.jpg'
import dois from '../src/assets/dois.jpg'
import tres from '../src/assets/tres.jpg'
import quatro from '../src/assets/quatro.jpg'
import './App.css'

function App() {

const slides = [livros, dois, tres, quatro];

  return (
  
    <>
      <header className='cabecalho'>
        <div className='logo'>
          <img className='logoImage' src='./src/assets/logo2.jpg'/> 
          <div className='cabecalho_links'>
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

export default App
