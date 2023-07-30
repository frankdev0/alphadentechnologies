import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
         <div className={styles.footerbg}>
      <div className={styles.footeritems}>
        <div className={styles.footercolumns}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/logo.png' width={50} height={50} alt='company logo' />
          </Link>
        
        </div>
        <p className={styles.footerlinks}>09033996669</p>
        <p className={styles.footerlinks}>info@alphadentechnologies.com</p>
        </div>
        <div className={styles.footercolumns}>
          <h6>Navigation</h6>
          <Link href='/about' className={styles.footerlinks} >Home</Link>
          <Link href='/about' className={styles.footerlinks} >Services</Link>
          <Link href='/about' className={styles.footerlinks} >Projects</Link>
          <Link href='/about' className={styles.footerlinks} >About Us</Link>
          <Link href='/about' className={styles.footerlinks} >Company Profile</Link>
          <Link href='/about' className={styles.footerlinks} >Contact Us</Link>
        </div>
        <div className={styles.footercolumns}>
          <h6>Services</h6>
          <Link href='/about' className={styles.footerlinks} >Real Estate</Link>
          <Link href='/about' className={styles.footerlinks} >Drone Mapping</Link>
          <Link href='/about' className={styles.footerlinks} >Commercial</Link>
          <Link href='/about' className={styles.footerlinks} >Construction</Link>
        </div>
        <div className={styles.footercolumns}>
         <p className={styles.footertexts}>Do you need information about our products and services?</p> 
         <p className={styles.footerlinks}>Contact Us on</p>
         <input className='form-control' placeholder='send an email'/>
       
        </div>
        
      </div>
      <div className={styles.borderline}></div>
      <div className={styles.copyright}>
       <p>© 2023 Alphaden Technologies Limited. All right reserved</p> 
        </div>
     </div>
    </div>
  )
}

export default Footer