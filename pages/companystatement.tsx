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
                <p className='my-3'>To be the dominant EPCI service provider from Africa, delivering capital projects globally.</p>
            </div>
            <div className='my-5'>
                <h3 className={styles.mission}>MISSION STATEMENT</h3>
                <div className={styles.missionborder}/>
                <p className='my-3'>To be the dominant EPCI service provider from Africa, delivering capital projects globally.</p>
            </div>
            <div className='mb-5'>
                <h3 className={styles.mission}>CORE VALUES</h3>
                <div className={styles.missionborder}/>
                <div>
                <div className='d-flex mt-5 align-items-center mb-2'>
                    <div className={styles.checker}><IoMdCheckmark size={25} /></div>
                <div className={styles.corevalues}>Integrity</div>
                </div>
                <div className='mx-5'>Always dealing with our clients and our colleagues in a fair and ethical manner; gaining trust through our actions.</div>
                </div>
                <div>
                <div className='d-flex mt-5 align-items-center mb-2'>
                    <div className={styles.checker}><IoMdCheckmark size={25} /></div>
                <div className={styles.corevalues}>Knowledge</div>
                </div>
                <div className='mx-5'>Always dealing with our clients and our colleagues in a fair and ethical manner; gaining trust through our actions.</div>
                </div>
                <div>
                <div className='d-flex mt-5 align-items-center mb-2'>
                    <div className={styles.checker}><IoMdCheckmark size={25} /></div>
                <div className={styles.corevalues}>Service</div>
                </div>
                <div className='mx-5'>Always dealing with our clients and our colleagues in a fair and ethical manner; gaining trust through our actions.</div>
                </div>
             
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Companystatement