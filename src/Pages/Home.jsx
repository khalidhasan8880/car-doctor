import Carousel from "../Components/Carousel/Carousel";
import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'
import { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard/ServiceCard";
import { AiOutlineArrowDown } from "react-icons/ai";


const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div>
            <Carousel></Carousel>
            {/* about section start*/}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="md:w-1/2 relative">
                        <img src={person} className="w-10/12 rounded-lg mx-auto shadow-2xl" />
                        <img src={parts} className="max-w-sm border-8 hidden md:block border-white absolute -bottom-16 right-0 rounded-lg shadow-2xl" />
                    </div>
                    <div className="md:w-1/2">
                        <h4 className="text-warning my-3 font-bold text-2xl">About Us</h4>
                        <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                        <p className="py-6">The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                        <button className="btn btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>
            {/* About section end */}
            {/* Services section start */}

            <div className="mt-40">
                <div className="text-center mx-auto w-1/2">
                    <h4 className="text-warning my-3 font-bold text-2xl">Services</h4>
                    <h1 className="text-4xl font-bold my-3">Our Service Area</h1>
                    <p className="my-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                </div>
                <div className="flex flex-wrap gap-6 p-4 rounded-lg">
                    {
                        services.map(service => <ServiceCard name="array" key={service._id} service={service}></ServiceCard>)
                    }

                </div>
                <button className="btn btn-warning mx-auto block">See More <AiOutlineArrowDown className="inline"></AiOutlineArrowDown>
                </button>
            </div>
        </div>

    );
};

export default Home;