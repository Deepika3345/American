import React from 'react'
import logo from '../assets/images/logo.webp'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import footerLogoOne from '../assets/images/footer-logo-one.svg'

// import mastercardvisa from '../assets/images/visa-mastercard-img.png'
import footerVisa from '../assets/images/footer-visa.svg'
import { Link } from '@mui/material';
import '../Css/Footer.css'





const Footer = () => {
    return (
        <div className='visa'>
            <section className='footer-part'>
                <div className='footer-two'>
                    <div className='bags-list' >
                        <h6>
                            POPULAR SEARCHES
                        </h6>
                        <div className='category-bags'>
                            <a href=''>Luggage Bags </a>  &#124;
                            <a href=''>Cabin Bags   </a>&#124;
                            <a href=''>Laptop Bags </a>&#124;
                            <a href=''>Duffle Bags  </a>&#124;
                            <a href=''>Backpacks  </a>&#124;
                            <a href=''>Hard Trolley Bags  </a>&#124;
                            <a href=''>Lock for Bags</a> &#124;
                            <a href=''> Soft Trolley  Bags </a> &#124;
                            <a href=''>Casual Backpacks  </a>&#124;
                            <a href=''>Trekking Bags</a> &#124;
                            <a href=''>School Bags  </a>&#124;
                            <a href=''>College Bags  </a>&#124;
                            <a href=''> Office Bags </a> &#124;
                            <a href=''>Wheel Duffle Bags </a> &#124;
                            <a href=''>Briefcase Bags  </a> &#124;
                            <a href=''> Sling Bags</a> &#124;
                            <a href=''>Travel Neck  Pillow  </a> &#124;
                            <a href=''> Travel Eye Mask   </a> &#124;
                            <a href=''> Large Trolley Bags </a> &#124;
                            <a href=''>  Medium Size Trolley Bags </a> &#124;
                            <a href=''> Weekender Bags   </a> &#124;
                            <a href=''> Travel Bags for Short Trips</a> &#124;
                            <a href=''> Luggage for Long Trip  </a> &#124;
                            <a href=''>     Kids Luggage </a>
                        </div>



                    </div>

                    <p className='detailed-para'>
                        People traveling to different places often focus on selecting the perfect destination, planning activities, and choosing accommodations.
                        One aspect that they often overlook is the choice of luggage. A comfortable and well-designed suitcase is a fundamental part of any successful trip.
                        Imagine effortlessly gliding through airports,
                        maneuvering crowded streets, and neatly organizing your belongings in a thoughtfully designed suitcase.
                        A comfortable luggage trolley ensures that you can fully enjoy the journey, as it takes away the hassle and stress of managing your luggage. <br />
                        The right suitcase is not just a travel accessory; it's your reliable partner in creating memorable travel experiences.
                        Thus, American Tourister provides high-quality, lightweight, and exclusively featured travel trolley bags that can enhance your travel experience,
                        whether you are alone or with kids. <br /><br />

                        LUGGAGE BAGS TO MEET TRAVEL NEEDS <br /><br />
                        Whether you're going on a short weekend getaway or a month-long expedition, having the right luggage size is crucial.
                        For short trips and keeping your essentials close, a cabin size trolley bag is perfect.
                        To acquire a balance between space and convenience, prefer medium luggage, ideal for trips lasting several days to a week.
                        Large suitcases are generous in size; these suitcases are ideal for extended vacations, family travel, or journeys requiring extra packing space.
                        With features like TSA Lock, Expander, Double Wheels, Garment Suiter, and Eco-Friendly,
                        you can also buy trolley bags based on their type.
                        Hard luggage offers durability and impact resistance, ensuring your belongings remain secure throughout your journey.
                        On the other hand, a soft trolley suitcase is lightweight and versatile, perfect for travelers who prefer adaptability. <br /><br />

                        BACKPACKS TO LOOK PRACTICAL AND STYLISH <br /><br />
                        Whether you're exploring the urban jungle, embarking on a hiking adventure, or simply commuting to work,
                        a well-chosen backpack can make a world of difference in your journey. The beauty of backpacks lies in their practicality.
                        They come in various types and colors, each tailored to meet a specific need and style. Casual backpacks are perfect for everyday use, while laptop backpacks offer dedicated compartments to safeguard your tech gear.
                        Weekender and trekking backpacks are built to handle the rigors of outdoor exploration.
                        Additionally, backpacks often feature handy extras like rain covers and USB charge ports,
                        ensuring you stay connected and prepared while on the move. <br /><br />

                        DUFFLES TO ACQUIRE VERSATILITY <br />
                        Duffles are highly adaptable bags designed to accommodate various travel scenarios, from weekend getaways to sports activities and everything in between. Wheeled duffle bags offer the convenience of easy transportation with sturdy wheels that can handle different terrains.
                        They are perfect for travelers who want to roll their luggage effortlessly, sparing themselves the strain of carrying a heavy bag. On the other hand,
                        weekender duffle bags are compact and stylish, ideal for shorter trips or as a carry-on option for both men and women. They often come with creative designs and practical features. <br /><br />

                        FAQS <br /><br />
                        WHAT TYPES OF MATERIALS ARE COMMONLY USED IN HARD LUGGAGE? <br /><br />
                        Polypropylene and polycarbonate are common materials used in hard trolley bags online. <br />

                        WHAT IS THE PRICE OF YOUR TROLLEY BAG? <br /><br />
                        Our trolley bag price ranges from INR 2000 to INR 25000, depending on the type you choose. <br /><br />

                        WHY SHOULD I PREFER WEEKENDER/TREKKING BACKPACKS FOR TRIPS?<br /><br />
                        Weekender/trekking backpacks are designed for outdoor adventures and may include features like rain covers and eco-friendly materials. <br /><br />

                        DO YOU PROVIDE LAPTOP TROLLEY BAGS AS WELL?<br /><br />
                        Yes, we provide stylish laptop trolly bags like Chole to enhance your travel experience while you are on a business trip.
                    </p>

                </div>
                <div className='support-list'>
                    <ul className='list-one'>
                        <h6>SUPPORT</h6>
                        <li>Service and Warranty</li>
                        <li>Contact Us</li>
                        <li>TSA Lock Instructions</li>
                    </ul>
                    <ul className='list-one'>
                        <h6>QUICK LINKS</h6>
                        <li> Damage Policy</li>
                        <li> Care and Cleaning</li>
                        <li> Packing Tips</li>
                        <li> Site Map</li>
                    </ul>
                    <ul className='list-one'>
                        <h6>OUR COMPANY</h6>
                        <li>About American Tourister</li>
                    </ul>
                    <ul className='list-one'>
                        <h6>ACCOUNT</h6>
                        <li> Track Order</li>
                        <li> Sign In</li>
                        <li> Shop all products</li>
                    </ul>
                </div>

            </section>
            <div className='icon-section'>
                <img id='american-logo' src={logo} alt="" />
                <span className='footer-icons'>

                    <Link href="https://www.facebook.com/"><i><FacebookIcon id='icon-one' /></i></Link>
                    <Link href="https://www.youtube.com/"><i><YouTubeIcon id='icon-one' /></i></Link>
                    <Link href="https://www.instagram.com/"><i><InstagramIcon id='icon-one' /></i></Link>


                </span>
            </div>
            <hr />

            <div className='terms-and-condition'>
                <ul className='t_and_c'>
                    <li>Terms and Condition</li>
                    <li id='privacy'>Privacy</li>
                    <li>Personal Information Collection Statement</li>


                </ul>
                <span>
                    <img id='footerLogo' src={footerLogoOne} alt="" />

                    <img id='footerLogo' src={footerVisa} alt="" />
                </span>
                <p>India</p>

            </div>
            <h4 id='copyright'>Copyright © 2024 Developed and managed by Quadrant</h4>
        </div>
    )
}

export default Footer