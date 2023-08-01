import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import {VscDebugBreakpointLog} from 'react-icons/vsc';
import {IoIosArrowForward} from 'react-icons/io';



const Services = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <div className={styles.servicesbg}>
            <p>Home <IoIosArrowForward size={10}/> Our Services</p>
            <h3 className={styles.headertext}>Our Services</h3>
            <div className={styles.textborder}/>
        </div>
        </div>
        <div className='d-flex justify-content-lg-center justify-content-start my-5'>
            <div className='row px-2 mt-5'>
            <div className={`${styles.servicewidth} col-12 col-md-6 col-lg-4`}>
            <div className={styles.services}>
                <div className={styles.servicesimg}>
                <Image src='/oil.jpg' width={400} height={300} alt='services'/>
                </div>
                <div className={styles.servicestext}>
                    <h3 className={styles.servicesheaders}>Oil and Gas Industry</h3>
                    <p>Alphaden Technologies leads the charge in transforming the oil and gas sector. We harness the power of advanced analytics, artificial intelligence, and Internet of Things (IoT) to optimize exploration, drilling, production, and distribution processes. Our solutions not only enhance efficiency but also contribute to a safer and more sustainable environment</p>
                </div>
            </div>
            </div>
            <div className={`$ col-12 col-md-6 col-lg-4`}>
            <div className={styles.services}>
                <div className={styles.servicesimg}>
                <Image src='/refer.jpg' width={400} height={300} alt='services' />
                </div>
                <div className={styles.servicestext}>
                    <h3 className={styles.servicesheaders}>Logistics Industry</h3>
                    <p>Our innovative logistics solutions streamline supply chains, reduce operational costs, and ensure timely deliveries. Leveraging state-of-the-art technologies such as blockchain and machine learning, we offer end-to-end visibility and real-time tracking, enabling businesses and individuals to make data-driven decisions with confidence.</p>
                </div>
            </div>
            </div>
            <div className={`$ col-12 col-md-6 col-lg-4`}>
            <div className={styles.services}>
                <div className={styles.servicesimg}>
                <Image src='/payment.jpg' width={400} height={300} alt='services' />
                </div>
                <div className={styles.servicestext}>
                    <h3 className={styles.servicesheaders}>Fintech Services</h3>
                    <p>Alphaden Technologies drives progress in the financial technology landscape. We create secure and user-friendly platforms that facilitate seamless transactions, ensuring compliance with the highest security standards. Our fintech solutions empower businesses and consumers alike to embrace the digital economy confidently.</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        
        <div className={`${styles.alignservices} mb-5 mt-5 px-lg-5 px-0`}>
            <p className={`${styles.keyservices}`}>Our Key services include the following</p>
            <div className='d-flex text-left px-lg-4 px-0 mt-5'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>We thrive on innovation and are committed to challenging the status quo. Our disruptive solutions will revolutionize your industry and give you a competitive edge.</p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>At Alphaden Technologies, we have a team of highly skilled professionals who are passionate about pushing boundaries and solving complex challenges. </p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>We understand that each business has unique requirements. That&rsquo;s why we tailor our solutions to meet your specific needs, ensuring maximum efficiency and effectiveness.</p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Your data and operations are crucial to us. We employ the latest security protocols to safeguard your assets and maintain uninterrupted service reliability </p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>At the core of our business philosophy lies a strong dedication to ethical and sustainable practices.Our solutions are designed to be scalable and adaptable, ensuring that you are always prepared to embrace new opportunities and navigate the evolving landscape of your industry. </p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Innovation is not a one-time event at Alphaden Technologies; it&rsquo;s a continuous journey. We invest heavily in research and development to stay ahead of the curve, anticipating industry trends and future challenges</p>
            </div>
        </div>
        <div>
        <Footer/>
        </div>
       
    </div>
  )
}

export default Services