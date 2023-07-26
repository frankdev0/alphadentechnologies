import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from '@/styles/About.module.css'
import Image from 'next/image'

const contactus = () => {
  return (
    <div>
          <Navbar/>
          <div className={styles.contact}>
            <p>Home + Contact Us</p>
            <h3 className={styles.headertext}><span className={styles.contacts}></span>Contact <span className={styles.info}>Information</span></h3>
            <div className={styles.contactborder}/>
        </div>
        <div className={styles.bar}>
            <h3>Corporate Office:</h3>
        </div>

        <div className={`my-5 ${styles.scndsection}`}>
            <div className='d-flex'>
                <div>+</div>
                <p className='px-4'>Plot 23 Furo Ezimora Street, Lekki Phase 1, Lagos State, Nigeria.</p>
            </div>
            <div className='d-flex my-2'>
                <div>+</div>
                <div>
                <p className='px-4'>+234(0)700 257 4233</p>
                <p className='px-4'>+234(0)700 ALPHADEN</p>
                </div>
                
            </div>
            <div className='d-flex my-2'>
                <div>+</div>
                <p className='px-4'>info@alphadenenergy.com</p>
            </div>
            <div className='d-flex'>
                <div>+</div>
                <p className='px-4'>Monday – Friday 8 AM – 5 PM</p>
            </div>
            <div className='d-flex my-2'>
                <Image src='/twitter.png' alt='twitter' width={20} height={20} />
                <Image className='mx-2' src='/instagram.png' alt='instagram' width={20} height={20} />
                <Image src='/facebook.png' alt='facebook' width={20} height={20} />
            </div>
        </div>
          <Footer/>
    </div>
  )
}

export default contactus