import React from 'react'
import Navbar from './components/navbar'
import styles from '@/styles/About.module.css'
import Footer from './components/footer'
import {IoMdCheckmark} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

const Companystatement = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.statementbg}>
            <p>Home <IoIosArrowForward size={10}/> Company Statement</p>
            <h3 className={styles.headertext}>Company Statement</h3>
            <div className={styles.textborder}/>
        </div>
        <div className={styles.vision}>
            <div>
                <h3 className={styles.mission}>OUR VISION</h3>
                <div className={styles.missionborder}/>
                <p className='my-3'>To be recognized as the global leader in innovation, setting the benchmark for disruptive solutions across industries. We envision a future where Alphaden Technologies remains at the forefront of technology, driving positive change, and empowering businesses worldwide to achieve unparalleled success.</p>
            </div>
            <div className='my-5'>
                <h3 className={styles.mission}>MISSION STATEMENT</h3>
                <div className={styles.missionborder}/>
                <p className='my-3'>To lead the way in transforming industries through cutting-edge innovation, empowering businesses with disruptive software and hardware solutions that drive progress and elevate global standards.</p>
            </div>
            <div className='mb-5'>
                <h3 className={styles.mission}>CORE VALUES</h3>
                <div className={styles.missionborder}/>
                <div>
                <div className='d-flex mt-5 align-items-center mb-2'>
                    <div className={styles.checker}><IoMdCheckmark size={25} /></div>
                <div className={styles.corevalues}>Integrity</div>
                </div>
                <div className='mx-5'>Upholding the highest ethical standards, we believe in transparency, honesty, and accountability in all our endeavors, fostering trust with our clients, partners, and stakeholders.</div>
                </div>
                <div>
                <div className='d-flex mt-5 align-items-center mb-2'>
                    <div className={styles.checker}><IoMdCheckmark size={25} /></div>
                <div className={styles.corevalues}>Knowledge</div>
                </div>
                <div className='mx-5'>Embracing a culture of continuous learning and development, we thrive on knowledge sharing and skill enhancement, ensuring our team remains at the forefront of technological advancements.</div>
                </div>
                <div>
                <div className='d-flex mt-5 align-items-center mb-2'>
                    <div className={styles.checker}><IoMdCheckmark size={25} /></div>
                <div className={styles.corevalues}>Service</div>
                </div>
                <div className='mx-5'>We prioritize delivering exceptional service, understanding industry needs' unique needs, and providing tailor-made solutions that exceed expectations</div>
                </div>
             
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Companystatement