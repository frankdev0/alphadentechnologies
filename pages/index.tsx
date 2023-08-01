import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { BiSolidEdit} from 'react-icons/bi';
import { CiUmbrella} from 'react-icons/ci';
import { SlGraph} from 'react-icons/sl';
import { GiTeamIdea} from 'react-icons/gi';
import { GrTechnology} from 'react-icons/gr';
import { AiOutlineSolution} from 'react-icons/ai';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0);

  const  toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', changeWidth);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', changeWidth);
      }
    };
  },[])
  return (
    <>
      <Head>
        <title>Welcome To Alphaden Technologies -Your Gateway to Disruptive Solutions!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
     <Navbar/>

     <div  className={`${styles.heroimg} py-5 mx-auto text-center`}>
      <div className={styles.herotext}>
      <h6 className={styles.heroheader}>Welcome To Alphaden Technologies -Your Gateway to Disruptive Solutions!</h6>
      <p>Your Gayeway to Disruptive Solutions!</p>
      <div>
        <button className='btn btn-secondary'>Our Services</button>
      </div>
      </div>
     </div>
     {/* ABOUT THE COMPANY */}

     <div>
     <div className='text-center my-5'>
      <h3 className={styles.welcome}>ALPHADEN TECHNOLOGIES -EMPOWERING YOUR FUTURE </h3>
      <div className='d-flex justify-content-center'>
        <p className={styles.subtexts}>At Alphaden Technologies, we are a cutting-edge innovation powerhouse, specializing in the development of disruptive software and hardware solutions for a wide range of industries.</p>
      </div>
     </div>
     <div className={`${styles.visionx} row`}>
      <div className={`${styles.visionright} col-12 col-lg-6`}>
        <div>
          <h3 className={styles.welcome}>WE ARE A SOLUTION DRIVEN INDUSTRY</h3>
          <p className='my-3'>With a strong emphasis on the oil and gas industry, logistics industry, fintech services, surveillance/security technologies, and retail payment platforms, we are poised to revolutionize these sectors and take them to new heights.</p>
          <p>Through a combination of visionary strategies, advanced technologies, and a dedicated team, we are committed to revolutionizing these sectors. Join us on this journey as we empower industries and drive unparalleled progress. Together, we will shape a brighter and more prosperous future!</p>
        </div>
        <div className={styles.csrcontainer}>
        <div className={styles.csrbox}>
          <div className='d-flex'>
            <div><BiSolidEdit size={25}/></div>
            <h3 className={styles.csr}>Innovative</h3>
          </div>
          <div className={styles.csrtext}>At Alphaden Technologies, we embody innovation at its core.</div>
        </div>
        <div className={styles.csrbox}>
          <div className='d-flex'>
            <div><CiUmbrella size={25}/></div>
            <h3 className={styles.csr}>Simple</h3>
          </div>
          <div className={styles.csrtext}> Crafting simple and intuitive solutions.</div>
        </div>
        <div className={styles.csrbox}>
          <div className='d-flex'>
            <div><SlGraph size={25}/></div>
            <h3 className={styles.csr}>Reliable</h3>
          </div>
          <div className={styles.csrtext}>Delivering reliable and robust technologies.</div>
        </div>
        </div>
        
      </div>
      <div className={`${styles.visionleft} col-12 col-lg-6`}>
      <Image src='/statement.jpg' alt='office' width={600} height={550} className='px-4' />
      </div>
     </div>
     </div>
     <div className='d-flex justify-content-center text-center my-5'>
      <div>
      <h4>Our Expertise</h4>
      <h6>Solutions that we provide at Alphaden Technologies</h6>
      </div>
      </div>
      <div className='mx-auto d-flex justify-content-center'>
      <div className={styles.boxcontainer}>
        <div className={styles.box}>
            <div className={styles.globe}>
            {/* <Image src='/innovat.jpg' alt='globe' width={100} height={100} /> */}
            <GrTechnology size={40} />
            </div>
            <div>
            <h6 className={styles.boxheader}>Innovative Disruption</h6>
            <p>We thrive on innovation and are committed to challenging the status quo. Our disruptive solutions will revolutionize your industry and give you a competitive edge.</p>
            </div>
        </div>
        <div className={styles.box}>
            <div className={styles.globe}>
            {/* <Image src='/team.jpg' alt='globe' width={100} height={100} /> */}
            <GiTeamIdea size={40}  style={{ color: 'black' }}/>
            </div>
            <div>
            <h6 className={styles.boxheader}>Expert Team</h6>
            <p>At Alphaden Technologies, we have a team of highly skilled professionals who are passionate about pushing boundaries and solving complex challenges.</p>
            </div>
        </div>
        <div className={styles.box}>
            <div className={styles.globe}>
            {/* <Image src='/lock.png' alt='globe' width={100} height={100} /> */}
            <AiOutlineSolution size={40}  style={{ color: 'black' }} />
            </div>
            <div>
            <h6 className={`${styles.boxheader} mt-2`}>Customized Solutions</h6>
            <p>We understand that each business has unique requirements. That's why we tailor our solutions to meet your specific needs, ensuring maximum efficiency and effectiveness.</p>
            </div>
        </div>
     
     </div>
     </div>
     <div>
      <div className='d-flex justify-content-center text-center my-5'>
        <div>        
        <h3>Other Services We Offer</h3>
        <p>We offer a wide range of services that best suites our customers Base at Alphaden Technologies</p>
        </div>
      </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div>
        <div className='row mx-auto'>
          <div className={`$ col-12 col-md-6 col-lg-4`}>
          <div className={styles.servicebox}>
          <div>
          <Image src='/oilgass.jpg' alt='globe' width={400} height={250} />
          <div className={styles.serviceheaderx}>
            <h6 className={`${styles.techheaders} py-2`}>Oil and Gas Industry</h6>
          </div>
          </div>
          <div>
            <p className={styles.serviceparagraphs}>Alphaden Technologies leads the charge in transforming the oil and gas sector. We harness the power of advanced analytics, artificial intelligence, and Internet of Things (IoT) to optimize exploration, drilling, production, and distribution processes. Our solutions not only enhance efficiency but also contribute to a safer and more sustainable environment.</p>
          </div>
        </div>
          </div>
          <div className={`$ col-12 col-md-6 col-lg-4`}>
          <div className={styles.servicebox}>
          <div>
          <Image src='/logistics.jpg' alt='globe' width={400} height={250} />
          <div className={styles.serviceheaderx}>
            <h6 className={`${styles.techheaders} py-2`}>Logistics Industry </h6>
          </div>
          </div>
          <div>
            <p className={styles.serviceparagraphs}>Our innovative logistics solutions streamline supply chains, reduce operational costs, and ensure timely deliveries. Leveraging state-of-the-art technologies such as blockchain and machine learning, we offer end-to-end visibility and real-time tracking, enabling businesses and individuals to make data-driven decisions with confidence.</p>
          </div>
        </div>
          </div>
          <div className={`$ col-12 col-md-6 col-lg-4`}>
          <div className={styles.servicebox}>
          <div>
          <Image src='/fintechh.jpg' alt='globe' width={400} height={250} />
          <div className={styles.serviceheaderx}>
            <h6 className={`${styles.techheaders} py-2`}>Fintech Services</h6>
          </div>
          </div>
          <div>
            <p className={styles.serviceparagraphs}>Alphaden Technologies drives progress in the financial technology landscape. We create secure and user-friendly platforms that facilitate seamless transactions, ensuring compliance with the highest security standards. Our fintech solutions empower businesses and consumers alike to embrace the digital economy confidently.</p>
          </div>
        </div>
          </div>
        </div>
        <div className='row my-4 mx-auto'>
          <div className={`$ col-12 col-md-6 col-lg-4`}>
          <div className={styles.servicebox}>
          <div>
          <Image src='/security.jpg' alt='globe' width={400} height={250} />
          <div className={styles.serviceheaderx}>
            <h6 className={`${styles.techheaders} py-2`}>Surveillance/Security Technologies</h6>
          </div>
          </div>
          <div>
            <p className={styles.serviceparagraphs}>Safety is paramount, and we take it seriously. With our cutting-edge surveillance and security technologies, we provide robust solutions to law enforcement for threat detection, real-time asset protection, and monitoring. Whether it's safeguarding critical infrastructure or enhancing public safety, Alphaden Technologies sets the standard for technology and data-driven systems.</p>
          </div>
        </div>
          </div>
          <div className={`$ col-12 col-md-6 col-lg-4`}>
          <div className={styles.servicebox}>
          <div>
          <Image src='/payments.jpg' alt='globe' width={400} height={250} />
          <div className={styles.serviceheaderx}>
            <h6 className={`${styles.techheaders} py-2`}>Retail Payment Platforms</h6>
          </div>
          </div>
          <div>
            <p className={styles.serviceparagraphs}>Simplifying the payment experience for businesses and consumers is at the core of what we do. Our retail payment platforms are designed to be fast, secure, and flexible, accommodating various payment methods and seamlessly integrating with existing systems. We empower merchants to offer frictionless checkout experiences while ensuring customers' data remains protected.</p>
          </div>
        </div>
          </div>
          <div className={`$ col-12 col-md-6 col-lg-4`}>
          <div className={styles.servicebox}>
          <div>
          <Image src='/health.jpg' alt='globe' width={400} height={250} />
          <div className={styles.serviceheaderx}>
            <h6 className={`${styles.techheaders} py-2`}>Health Care Technology</h6>
          </div>
          </div>
          <div>
            <p className={styles.serviceparagraphs}>In the rapidly evolving healthcare landscape, Alphaden Technologies is at the forefront of driving innovation. Our expertise in healthcare technology spans electronic health records (EHR), telemedicine solutions, medical data analytics, and patient management systems. By integrating the latest advancements in medical technology, we facilitate seamless communication between healthcare providers and patients.</p>
          </div>
        </div>
          </div>
        </div>
        </div>
      </div>
  
      

      <div className={`row ${styles.bgstretch}`}>
        <div className={`col-lg-8 col-12 d-flex justify-content-center align-items-center text-center ${styles.innerbg}`}>
          <div>
          <h3>Who we are</h3>
          <p>At Alphaden Technologies, we are a cutting-edge innovation powerhouse, specializing in the development of disruptive software and hardware solutions for a wide range of industries. With a strong emphasis on the oil and gas industry, logistics industry, fintech services, surveillance/security technologies, and retail payment platforms, we are poised to revolutionize these sectors and take them to new heights.</p>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-center align-items-center mt-5'>
        <div>
        <h4 className='text-center mb-3'>Our Partners</h4>
        <div className='text-center'>
        <Image src='/shell.png' alt='shell' width={150} height={150} />
        <Image className='mx-5' src='/total.png' alt='total' width={150} height={150} />
        <Image src='/addax.png' alt='addax' width={150} height={150} />
        <Image className='mx-5' src='/agip.png' alt='agip' width={150} height={150} />
        <Image src='/exon.png' alt='exon' width={150} height={150} />
        </div>
        </div>
      </div>

      <div className={`row ${styles.contactus}`}>
        <div className='d-flex justify-content-center my-5'>
          <div>
          <p>Have an Enquiry?</p>
          <h3>Contact Us</h3>
          </div>
         
        </div>
        <div className={`col-12 col-lg-6 d-flex justify-content-start justify-content-lg-center align-items-start align-items-lg-center ${styles.rightaddress}`}>
          <div>
          <div>
            <p>Address:</p>
            <h5>184 Main Collins Street, Toronto</h5>
          </div>
          <div>
            <p>Phone:</p>
            <h5>(+234) 909 933 3222</h5>
          </div>
          <div>
            <p>Email:</p>
            <h5>paschal@alphadentechnologies.com</h5>
          </div>
          <div>
            <p>Website:</p>
            <h5>www.alphadentechnologies.com</h5>
          </div>
          </div>
        </div>
        <div className={`col-12 col-lg-6  px-4`}>
          <form className={styles.contactform}>
            <div className=''>
              <div className='row'>
              <div className='col-12 col-lg-6'>
              <input className='form-control mx-2 my-3' name='firstName' placeholder='First Name'/>
              </div>
              <div className='col-12 col-lg-6'>
              <input className='form-control mx-2 my-3' name='lastName' placeholder='Last Name'/> 
              </div>
              </div>
              <div className='row'>
              <div className='col-12 col-lg-6'>
              <input className='form-control mx-2 my-3' name='email' placeholder='Email Address'/>
              </div>
              <div className='col-12 col-lg-6'>
              <input className='form-control mx-2 my-3' name='phoneNumber' placeholder='Phone Number'/> 
              </div>
              </div>
            </div>
           
            <div>
              <textarea className='form-control mx-2' name='message' placeholder='Your Message'/>
            </div>
            <div className='mx-2 my-3'>
              <button className='btn btn-secondary'>Send Message</button>
            </div>
          </form>
        </div>

      </div>
    
     {/* FOOTER */}
     <Footer/>
    </>
  )
}
