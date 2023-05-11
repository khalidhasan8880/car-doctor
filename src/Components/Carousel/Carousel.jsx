import bannerImg1 from '../../assets/images/banner/1.jpg'
import bannerImg2 from '../../assets/images/banner/2.jpg'
import bannerImg3 from '../../assets/images/banner/3.jpg'
import bannerImg4 from '../../assets/images/banner/4.jpg'
import './Carousel.css'
const Carousel = () => {
  return (
    <div className="carousel w-full sm:h-[80vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={bannerImg1} className="w-full" />
        <div className='absolute flex flex-col justify-center items-start left-6  sm:w-[500px] top-[30%]'>
          <h1 className='text-5xl font-bold banner-title'>Affordable Price <br /> For Car Servicing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis natus totam expedita quod amet iure, vero unde voluptatum fugiat mollitia incidunt fugit, eveniet animi? Amet necessitatibus accusantium dolore sequi!</p>
          <div className='flex gap-x-8'>
            <button className="btn btn-warning inline">Discover More</button>
            <button className="btn btn-outline btn-warning inline">Latest Projects</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform gap-x-4 -translate-y-1/2 right-5 bottom-5">
          <a href="#slide4" className=" hover:bg-red-500 border-none btn btn-circle">❮</a>
          <a href="#slide2" className=" hover:bg-red-500 border-none btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannerImg2} className="w-full" />
        <div className='absolute flex flex-col justify-center items-start left-6  sm:w-[500px] top-[30%]'>
          <h1 className='text-5xl font-bold banner-title'>Affordable Price <br /> For Car Servicing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis natus totam expedita quod amet iure, vero unde voluptatum fugiat mollitia incidunt fugit, eveniet animi? Amet necessitatibus accusantium dolore sequi!</p>
          <div className='flex gap-x-8'>
          <button className="btn btn-warning inline">Discover More</button>
            <button className="btn btn-outline btn-warning inline">Latest Projects</button>
          </div>
        </div>
        <div className="absolute flex gap-x-4 justify-between transform -translate-y-1/2  right-5 bottom-5">
          <a href="#slide1" className=" hover:bg-red-500 border-none btn btn-circle">❮</a>
          <a href="#slide3" className=" hover:bg-red-500 border-none btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannerImg3} className="w-full" />
        <div className='absolute flex flex-col justify-center items-start left-6  sm:w-[500px] top-[30%]'>
          <h1 className='text-5xl font-bold banner-title'>Affordable Price <br /> For Car Servicing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis natus totam expedita quod amet iure, vero unde voluptatum fugiat mollitia incidunt fugit, eveniet animi? Amet necessitatibus accusantium dolore sequi!</p>
          <div className='flex gap-x-8'>
          <button className="btn btn-warning inline">Discover More</button>
            <button className="btn btn-outline btn-warning inline">Latest Projects</button>
          </div>
        </div>
        <div className="absolute flex gap-x-4 justify-between transform -translate-y-1/2 right-5 bottom-5">
          <a href="#slide2" className=" hover:bg-red-500 border-none btn btn-circle">❮</a>
          <a href="#slide4" className=" hover:bg-red-500 border-none btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bannerImg4} className="w-full" />
        <div className='absolute flex flex-col justify-center items-start left-6  sm:w-[500px] top-[30%]'>
          <h1 className='text-5xl font-bold banner-title'>Affordable Price <br /> For Car Servicing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis natus totam expedita quod amet iure, vero unde voluptatum fugiat mollitia incidunt fugit, eveniet animi? Amet necessitatibus accusantium dolore sequi!</p>
          <div className='flex gap-x-8'>
          <button className="btn btn-warning inline">Discover More</button>
            <button className="btn btn-outline btn-warning inline">Latest Projects</button>
          </div>
        </div>
        <div className="absolute flex gap-x-4 justify-between transform -translate-y-1/2  right-5 bottom-5">
          <a href="#slide3" className=" hover:bg-red-500 border-none btn btn-circle">❮</a>
          <a href="#slide1" className=" hover:bg-red-500 border-none btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;