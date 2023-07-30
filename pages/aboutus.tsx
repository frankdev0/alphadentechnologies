import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import {IoIosArrowForward} from 'react-icons/io';
// import {GrStatusGood} from 'react-icons/gr';
// import Image from 'next/image'

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
            {/* <h3 className={styles.aboutheader}>OUR REAL COMMITMENT REACHES BEYOND TECHNOLOGY AND IT'S APPLICATION</h3> */}
        </div>
        <div className={`${styles.sectionto} col-12 col-lg-7 px-5 my-4`}>
            <p className={styles.sectiontwo}>ALPHADEN Technologies is a fully indigenous company founded not only to service, but also dominate the Upstream and Midstream Oil & Gas sectors in Sub Saharan Africa. Alphaden is coined from ‘Alpha’s Den’ which, as the name implies, a Den of Individuals championing their various fields but also working collaboratively with a common goal in mind including, but not limited to, safe & efficient service delivery and customer satisfaction.</p>
        </div>
        </div>
        <div className={styles.aboutspace}>
            <p className='mt-5 px-5'> We have been in existence for over two (2) decades. We are modern in our operations, passionate about the environment and human relationships, and we are technically robust and competent in our service delivery.</p>
            <p className='mt-4 px-5'>We see cost control and efficiency as key to successful project execution.  We are equally aware that quality and schedule management are necessary to achieving our goals.  In line with this, we ensure that every project is delivered as scheduled and within budget whilst keeping a focus on quality service delivery.</p>
            <p className='mt-4 px-5' >We pride ourselves in our ability to deliver complex projects to various clients in the oil, gas and energy sector. We also ensure that we satisfactorily meet our clients’ needs by leveraging industry relationships and providing cost-effective and fit-for-purpose service delivery.</p>
            <p className='my-4 px-5' >Equipped with multifaceted project management capabilities and a strong diverse workforce of various disciplines, Alphaden provides a full range of services in engineering, procurement, construction, installation (EPCI); fabrication; maintenance solutions and shutdown repair service; Oilfield support services; Marine support services as well as Gas and Energy infrastructure & distribution.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Aboutus