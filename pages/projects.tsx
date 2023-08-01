import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from '@/styles/About.module.css'
import {IoIosArrowForward} from 'react-icons/io';
import Image from 'next/image';


const Projects = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.projectsbg}>
            <p>Home <IoIosArrowForward size={10}/> Our Projects</p>
            <h3 className={styles.headertext}>Our Projects</h3>
            <div className={styles.textborder}/>
        </div>
        <div>
          <div className={styles.projectparagrapghs}>
            <h3 className={styles.projectheaders}>Alpha Smart Pipes</h3>
            <p className={styles.projecttexts}>Alpha Smart Pipe is an advanced and innovative solution designed to revolutionize gas processing operations. This cutting-edge technology offers real-time monitoring and control of gas pipelines, providing unparalleled insights into gas flow, pressure, and temperature. With its intelligent analytics capabilities, Alpha Smart Pipe optimizes gas transportation, enhances operational efficiency, and ensures the smooth and reliable flow of gas throughout the network. Its state-of-the-art features make it a game-changer in the gas processing industry, empowering operators to make data-driven decisions, detect anomalies, and proactively address potential issues. Embrace the future of gas processing with Alpha Smart Pipe and unlock the full potential of your gas infrastructure.</p>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-6'>
            <Image src='/smartpipes.jpg' alt='globe' width={400} height={250} layout='responsive'/>
            </div>
            <div className='col-12 col-lg-6'>
            <Image src='/pipes.jpg' alt='globe' width={400} height={250} layout='responsive'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-6'>
            <Image src='/regulators.jpg' alt='globe' width={400} height={250} layout='responsive'/>
            </div>
            <div className='col-12 col-lg-6 mt-5'>
            <Image src='/smartpipes.jpg' alt='globe' width={700} height={500} />
            </div>
          </div>
          <div className={`${styles.projectparagrapghs} my-5`}>
            <h3 className={styles.projectheaders}>Smart Regulators</h3>
            <p className={styles.projecttexts}>Introducing Smart Regulators, a revolutionary solution that brings unmatched intelligence to gas regulation and distribution. Smart Regulators leverage advanced IoT technologies, enabling precise and automated control of gas pressure at various points in the distribution network. With real-time data insights and remote management capabilities, Smart Regulators optimize gas supply, reduce waste, and enhance system stability. Our cutting-edge regulators ensure that gas is distributed efficiently, responding dynamically to demand fluctuations and maintaining a constant supply to consumers. Embrace Smart Regulators to elevate your gas distribution infrastructure, enhance safety, and deliver a seamless gas supply experience to end-users.</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Projects