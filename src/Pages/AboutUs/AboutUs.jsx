import React from 'react';
import CEO from '../../assets/Junaied-Hossen.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen text-black bg-white px-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={CEO} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">S.M. JUNAID HOSSAIN</h1>
                        <p className="mt-3 font-semibold font-serif">CEO, Bids 4 Rent Cars</p>
                        <p className="py-6">Bids 4 Rent Cars is more than just a ride-sharing platform; it's a community-driven solution revolutionizing the way we travel. With a commitment to sustainability, convenience, and camaraderie, we bring together passengers and drivers to embark on shared journeys. Whether you're looking to reduce your carbon footprint, save on transportation costs, or simply connect with like-minded travelers, Bids 4 Rent Cars offers a seamless and reliable platform to facilitate your travels. Join us in creating a greener, more connected world—one ride at a time
                        </p>
                        
                        <p className='flex gap-1 btn bg-white border-black text-black btn-sm btn-outline'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillOpacity="0" d="M12 11L4 6H20L12 11Z"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><rect width="18" height="14" x="3" y="5" strokeDasharray="64" strokeDashoffset="64" rx="1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></rect><path strokeDasharray="24" strokeDashoffset="24" d="M3 6.5L12 12L21 6.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="24;0"/></path></g></svg>
                         ceo@bids4rentcars.com
                        </p>
                    </div>
                </div>
            </div>

            {/* ...............Location.......... */}
            <div className='lg:flex bg-white lg:px-16 text-black px-6 lg:justify-around items-center lg:pb-10'>
                {/* address */}
                <div className='grid justify-center'>
                    <h1 className='text-2xl text-center lg:text-start font-bold font-serif mb-5'>Our Address</h1>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mt-1' width="24" height="24" viewBox="0 0 24 24"><path fill="#B20404" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" /></svg>
                        <p className='text-lg ml-3'>Daffodil International University <br />Daffodil Smart City (DSC),<br /> Birulia, Savar, Dhaka-1216.</p>
                    </div>
                    <div className='flex items-center mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#B20404"><path d="M22 12A10.002 10.002 0 0 0 12 2v2a8.003 8.003 0 0 1 7.391 4.938A8 8 0 0 1 20 12h2ZM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10Z" /><path d="M17.543 9.704A5.99 5.99 0 0 1 18 12h-1.8A4.199 4.199 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704Z" /></g></svg>
                        <p className='text-lg ml-3'>+880 1626191275</p>
                    </div>
                    <div className='flex items-center mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="#B20404" d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5zm-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07z" /></svg>
                        <p className='text-lg ml-3'> bids4rentcars@gmail.com</p>
                    </div>
                </div>

                {/* map view of location */}
                <div className="mapouter grid justify-center mt-8 lg:mt-20">
                    <div className="gmap_canvas"><iframe src="https://maps.google.com/maps?q=daffodil%20international%20university,%20birulia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" className='lg:w-[510px] w-full lg:h-[300px] h-full' ></iframe><a href="https://blooketjoin.org"></a></div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;