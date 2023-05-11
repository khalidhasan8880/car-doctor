import signUpImg from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const {createUser, updateUserData} = useContext(AuthContext)

    const signUpHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        createUser(email, password)
        .then(res=>{
            updateUserData(name)
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col md:flex-row">
                <img className='w-1/2 mx-auto' src={signUpImg} alt="" />
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <form onSubmit={signUpHandler}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                           
                            <p className='text-center mt-3'>
                                <small>
                                    Already have account Please  <Link to="/login" className='text-blue-500'>Login</Link>
                                </small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;