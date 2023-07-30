import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import {IoIosArrowForward} from 'react-icons/io';


const Ourteam = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.projectsbg}>
            <p>Home <IoIosArrowForward size={10}/> Our Team</p>
            <h3 className={styles.headertext}>Our Team</h3>
            <div className={styles.textborder}/>
        </div>
        <div className={styles.teamgrid}>
        <div className={styles.teamcontainer}>
            <div className={styles.teambio}>
            <Image src='/ceo.jpeg' alt='general manager' width={100} height={100} className={styles.team}/>
            <div>
                <p className={styles.teamtext}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
            </div>
            </div>
            <div className={styles.teamname}>
                <div className='d-flex'>
                <div>
                <h6 className={styles.name}>Paschal Anyanwu</h6>
                <p className={styles.rank}>Managing Director</p>
                </div>
                <div className={styles.linked}><Image src='/linkedin.png' width={70} height={70} alt='linkedIn'/></div>
                </div>
            </div>
        </div>
        <div className={styles.teamcontainer}>
            <div className={styles.teambio}>
            <Image src='/gm.jpeg' alt='general manager' width={100} height={100} className={styles.team}/>
            <div>
                <p className={styles.teamtext}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
            </div>
            </div>
            <div className={styles.teamname}>
                <div className='d-flex'>
                <div>
                <h6 className={styles.name}>Damilola Abimaje</h6>
                <p className={styles.rank}>General Manager</p>
                </div>
                <div className={styles.linked}><Image src='/linkedin.png' width={70} height={70} alt='linkedIn'/></div>
                </div>
            </div>
        </div>
        <div className={styles.teamcontainer}>
            <div className={styles.teambio}>
            <Image src='/gm.jpeg' alt='general manager' width={100} height={100} className={styles.team}/>
            <div>
                <p className={styles.teamtext}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
            </div>
            </div>
            <div className={styles.teamname}>
                <div className='d-flex'>
                <div>
                <h6 className={styles.name}>Peter Aisagbonhi</h6>
                <p className={styles.rank}>Asst General Manager</p>
                </div>
                <div className={styles.linked}><Image src='/linkedin.png' width={70} height={70} alt='linkedIn'/></div>
                </div>
            </div>
        </div>
        <div className={styles.teamcontainer}>
            <div className={styles.teambio}>
            <Image src='/ceo.jpeg' alt='general manager' width={100} height={100} className={styles.team}/>
            <div>
                <p className={styles.teamtext}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
            </div>
            </div>
            <div className={styles.teamname}>
                <div className='d-flex'>
                <div>
                <h6 className={styles.name}>Ann Nweke</h6>
                <p className={styles.rank}>Head of Operations</p>
                </div>
                <div className={styles.linked}><Image src='/linkedin.png' width={70} height={70} alt='linkedIn'/></div>
                </div>
            </div>
        </div>
        <div className={styles.teamcontainer}>
            <div className={styles.teambio}>
            <Image src='/ceo.jpeg' alt='general manager' width={100} height={100} className={styles.team}/>
            <div>
                <p className={styles.teamtext}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
            </div>
            </div>
            <div className={styles.teamname}>
                <div className='d-flex'>
                <div>
                <h6 className={styles.name}>MaryPrisca Okolie</h6>
                <p className={styles.rank}>Document Controller</p>
                </div>
                <div className={styles.linked}><Image src='/linkedin.png' width={70} height={70} alt='linkedIn'/></div>
                </div>
            </div>
        </div>
        <div className={styles.teamcontainer}>
            <div className={styles.teambio}>
            <Image src='/emeka.jpeg' alt='general manager' width={100} height={100} className={styles.team}/>
            <div>
                <p className={styles.teamtext}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
            </div>
            </div>
            <div className={styles.teamname}>
                <div className='d-flex'>
                <div>
                <h6 className={styles.name}>Nnaemeka Frank</h6>
                <p className={styles.rank}>Chief Technical Officer</p>
                </div>
                <div className={styles.linked}><Image src='/linkedin.png' width={70} height={70} alt='linkedIn'/></div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Ourteam