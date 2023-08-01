import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import {IoIosArrowForward} from 'react-icons/io';

const Aboutus = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.herobg}>
            <p>Home <IoIosArrowForward size={10}/> About Us</p>
            <h3 className={styles.headertext}>About Us</h3>
            <div className={styles.textborder}/>
        </div>
        <div className={`${styles.about} row `}>
        <div className={`${styles.aboutsection} col-12 col-lg-5 px-5 my-4`}>
            <Image src='/teamwork.jpg' width={400} height={200} alt='about us' />
        </div>
        <div className={`${styles.sectionto} col-12 col-lg-7 px-5 my-4`}>
            <p className={styles.sectiontwo}>Join us on the journey of innovation and transformation. Let Alphaden Technologies be your partner in creating a future where technology empowers businesses and individuals to thrive. Together, we can reshape industries and unlock the full potential of your enterprise. Contact us today to explore the possibilities!</p>
        </div>
        </div>
        <div className={styles.aboutspace}>
            <p className='mt-5 px-5'> At Alphaden Technologies, we pride ourselves on being a leading force in the development of disruptive software and hardware solutions, catering to a diverse range of industries. With our expertise spanning the oil and gas industry, logistics, fintech services, surveillance/security technologies, and retail payment platforms, we are on a mission to revolutionize these sectors and propel them to unprecedented heights.</p>
            <p className='mt-4 px-5'>Our unwavering commitment to innovation drives us to explore new frontiers and push the boundaries of technological advancement. In the oil and gas industry, Alphaden Technologies is at the forefront of transformation, leveraging advanced analytics, artificial intelligence, and Internet of Things (IoT) to optimize exploration, drilling, production, and distribution processes. The result? Enhanced efficiency and a safer, more sustainable environment.</p>
            <p className='mt-4 px-5' >In the logistics industry, our innovative solutions redefine supply chain management. By harnessing state-of-the-art technologies like blockchain and machine learning, we streamline operations, reduce costs, and provide end-to-end visibility, empowering businesses and individuals to make data-driven decisions with confidence.</p>
            <p className='my-4 px-5' >Simplifying the payment experience is central to our ethos. With our retail payment platforms, businesses can offer fast, secure, and flexible payment options to their customers. We accommodate various payment methods, seamlessly integrate with existing systems, and ensure customer data remains protected, allowing merchants to provide frictionless checkout experiences.</p>
            <p className='my-4 px-5' >At Alphaden Technologies, we combine technical prowess with a passion for innovation, reliability, and simplicity. We are driven by a vision to empower industries with groundbreaking solutions, and our unwavering commitment to excellence ensures that our clients stay ahead in today's fast-paced world. Join us on this transformative journey as we shape the future of technology together.





</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Aboutus