import { Link } from 'react-router-dom';
import banner from '../assets/images/checkout/checkout.png'
import { FaGreaterThan } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className="relative">
            <img src={banner} alt="" />
            <div className='absolute top-0 w-full h-full bg-gradient-to-r from-[#000000] to-[#15151500]'>
                <h3 className='absolute left-10 top-[44%] text-4xl font-bold'>Service</h3>
                <div className='flex items-center justify-center font-semibold absolute bottom-0 w-full '>
                    <div className='bg-warning text-black flex items-center justify-center gap-x-2 rounded-t-3xl py-4 px-9'>
                        <Link to='/'>Home</Link>
                        <FaGreaterThan className='inline' size={16}></FaGreaterThan>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;