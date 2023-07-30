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
        <div className={styles.servicesgrid}>
            <div className={styles.services}>
                <div className={styles.servicesimg}>
                <Image src='/delivery.jpg' width={400} height={300} alt='services' />
                </div>
                <div className={styles.servicestext}>
                    <h3 className={styles.servicesheaders}>Delivery Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non deserunt, quis est dolores facere? Vel atque corrupti soluta unde earum, culpa eligendi, aut error in quaerat accusamus, praesentium eaque.</p>
                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.servicesimg}>
                <Image src='/status.jpg' width={400} height={300} alt='services' />
                </div>
                <div className={styles.servicestext}>
                    <h3 className={styles.servicesheaders}>Delivery Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non deserunt, quis est dolores facere? Vel atque corrupti soluta unde earum, culpa eligendi, aut error in quaerat accusamus, praesentium eaque.</p>
                </div>
            </div>
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
        <div className='mb-5'>
            <p className={`${styles.keyservices} px-5`}>Our Key services include the following</p>
            <div className='d-flex text-left px-4 mt-5'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-4 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-4 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-4 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-4 mt-2'>
                <div className='mx-3'><VscDebugBreakpointLog size={25}/></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolorem cum repellendus porro ipsam magnam reiciendis </p>
            </div>
            <div className='d-flex text-left px-4 mt-2'>
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