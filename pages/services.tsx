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
        <div className='d-flex justify-content-lg-center justify-content-start mt-5'>
            <div className='row mx-aut mt-5'>
            <div className={`$ col-12 col-md-6 col-lg-4`}>
            <div className={styles.services}>
                <div className={styles.servicesimg}>
                <Image src='/delivery.jpg' width={400} height={300} alt='services' />
                </div>
                <div className={styles.servicestext}>
                    <h3 className={styles.servicesheaders}>Digital Pipes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non deserunt, quis est dolores facere? Vel atque corrupti soluta unde earum, culpa eligendi, aut error in quaerat accusamus, praesentium eaque.</p>
                </div>
            </div>
            </div>
            <div className={`$ col-12 col-md-6 col-lg-4`}>
            <div className={styles.services}>
                <div className={styles.servicesimg}>
                <Image src='/status.jpg' width={400} height={300} alt='services' />
                </div>
                <div className={styles.servicestext}>
                    <h3 className={styles.servicesheaders}>Delivery Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non deserunt, quis est dolores facere? Vel atque corrupti soluta unde earum, culpa eligendi, aut error in quaerat accusamus, praesentium eaque.</p>
                </div>
            </div>
            </div>
            <div className={`$ col-12 col-md-6 col-lg-4`}>
            <div className={styles.services}>
                <div className={styles.servicesimg}>
                <Image src='/refer.jpg' width={400} height={300} alt='services' />
                </div>
                <div className={styles.servicestext}>
                    <h3 className={styles.servicesheaders}>Delivery Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non deserunt, quis est dolores facere? Vel atque corrupti soluta unde earum, culpa eligendi, aut error in quaerat accusamus, praesentium eaque.</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        
        <div className='mb-5 mt-4 px-lg-5 px-0'>
            <p className={`${styles.keyservices}`}>Our Key services include the following</p>
            <div className='d-flex text-left px-lg-4 px-0 mt-5'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-lg-4 px-0 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
        </div>
        <div>
        <Footer/>
        </div>
       
    </div>
  )
}

export default Services