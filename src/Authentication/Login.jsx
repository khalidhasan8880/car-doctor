import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineLinkedin } from 'react-icons/ai';
import loginImg from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
    const { logIn, continueWithGoogle } = useContext(AuthContext)

    const loginHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        logIn(email, password)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const continueWithFB = () => {
        alert('Continue with Facebook are not available now')
    }
    const continueWithLinkedin = () => {
        alert('Continue with Linkedin are not available now')
    }
    const googleHandler = () => {
        continueWithGoogle()
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col md:flex-row">
                <img className='w-1/2 mx-auto' src={loginImg} alt="" />
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <form onSubmit={loginHandler}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex justify-center items-center gap-x-3 my-3'>
                                <button onClick={continueWithFB}>
                                    <AiOutlineFacebook size={44} className='hover:text-[#2146ffed]'>
                                    </AiOutlineFacebook>
                                </button>
                                <button onClick={continueWithLinkedin}>
                                    <AiOutlineLinkedin size={44} className='hover:text-[#0095ff]'></AiOutlineLinkedin>
                                </button>
                                <button onClick={googleHandler}>
                                    <AiOutlineGoogle size={44} className='hover:text-[#F29F00]'></AiOutlineGoogle>
                                </button>
                            </div>
                            <p className='text-center'>
                                <small>
                                    First to <span className='text-warning font-semibold'> Car octor</span> ? Please <Link to="/sign_up" className='text-blue-500'>Sign Up</Link>
                                </small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;