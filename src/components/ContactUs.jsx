import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Seabed from './../assets/seabed.jpg'
import WhatsApp from './../assets/whatsapp.png'
import Instagram from './../assets/instagram.svg'

const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_vfl1m09', 
            'template_jfbiiee', 
            form.current, 
            'ZZKxMpLHPibQCJvnx'
        )
        .then((result) => {
            toast.success('Message successfully sent to DroNeeds (paulbimos@gmail.com)', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }, (error) => {
            console.log(error.text);
            toast.error('Message failed to sent. Try again.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        });
    };
  
    return (
        <div className='pb-16 w-full xl:w-[1280px] flex flex-col items-center'>
            <div className='text-5xl font-semibold mb-8'>
                Contact Us
            </div>
            <div className='text-xl font-semibold mb-8 px-8 w-full lg:w-4/5 xl:w-3/4 text-center'>
                Get in touch with us by sending an email. Just 
                send us your questions and requests and
                within hours we can fullfilled your needs.
            </div>
            <div className='flex flex-col lg:flex-row w-full md:px-8'>
                <div className='p-8 mr-16 text-xl w-full md:rounded-3xl bg-gray-800'>
                    <form 
                        ref={form} 
                        onSubmit={sendEmail}
                        className='flex flex-col text-gray-100'
                    >
                        <label className='py-2'>Name</label>
                        <input className='py-2 px-4 rounded-xl text-gray-800 font-semibold' type="text" required name="from_name" placeholder="Type your name here"/>
                        <label className='py-2'>Email</label>
                        <input className='py-2 px-4 rounded-xl text-gray-800 font-semibold' type="email" required name="user_email" placeholder="Type your email here"/>
                        <label className='py-2'>Message</label>
                        <textarea className='py-2 px-4 h-[150px] rounded-xl text-gray-800' required name="message" placeholder="Type your message here"/>
                        <div className='flex items-center justify-center md:justify-start'>
                            <button className='font-semibold text-dark-100 hover:text-gray-800 mt-8 py-4 w-fit px-8 md:px-16 rounded-full bg-gray-500 hover:bg-gray-300 duration-300' type="submit" value="Send">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-full mt-8 px-8 lg:mt-0 md:px-0 overflow-hidden'>
                    <img
                        src={Seabed}
                        className='h-full rounded-3xl'
                    />
                </div>
            </div>
            <div>
                <div className='text-md md:text-xl font-semibold my-8 px-8 w-full text-center'>
                    Or visit our social media platform
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
                    <a href='https://wa.me/6287840758430' target="_blank" className='hover:bg-gray-200 duration-300 flex items-center justify-center bg-white px-8 py-4 rounded-full'>
                        <div className='w-[60px]'>
                            <img
                                src={WhatsApp}
                                className=''
                            />
                        </div>
                        <div className='ml-4 text-2xl font-semibold'>
                            WhatsApp
                        </div>
                    </a>
                    <a href='https://www.instagram.com/' target="_blank" className='hover:bg-gray-200 duration-300 flex items-center justify-center bg-white px-8 py-4 rounded-full'>
                        <div className='w-[60px]'>
                            <img
                                src={Instagram}
                                className=''
                            />
                        </div>
                        <div className='ml-4 text-2xl font-semibold'>
                            Instagram
                        </div>
                    </a>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ContactUs