import React from 'react'
import logo from "/assets/logo.svg"
import { Link } from 'react-router-dom'
import { title } from 'framer-motion/client';

const socialMediaContactsLogo = [
  "assets/footer/facebook-icon.svg",
  "assets/footer/instagram-icon.svg",
  "assets/footer/linkedin-icon.svg",
  "assets/footer/reddit-icon.svg",
  "assets/footer/Tiktok-1.svg",
  "assets/footer/X-Logo-Green.svg",
  "assets/footer/youtube-icon.svg",
]

const footerLinks = [
  {
    "Integrations": [
      { title: "Shopify", href: "/shopify" },
      { title: "Etsy", href: "/etsy" },
      { title: "WooCommerce", href: "/woocommerce" },
      { title: "BigCommerce", href: "/bigcommerce" },
      { title: "Magento", href: "/magento" },
      { title: "Wix", href: "/wix" },
      { title: "Squarespace", href: "/squarespace" },
      { title: "Weebly", href: "/weebly" },
      { title: "PrestaShop", href: "/prestashop" },
      { title: "OpenCart", href: "/opencart" },
      { title: "Volusion", href: "/volusion" },
    ]
  },
  {
    "Discover": [
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Guides", href: "/guides" },
      { title: "Webinars", href: "/webinars" },
      { title: "Podcasts", href: "/podcasts" },
      { title: "Events", href: "/events" },
      { title: "Community", href: "/community" },
      { title: "News", href: "/news" },
      { title: "Press", href: "/press" },
      { title: "Careers", href: "/careers" },
      { title: "Partners", href: "/partners" },
    ]
  },
  {
    "Start selling": [
      { title: "How to Start", href: "/how-to-start" },
      { title: "Pricing", href: "/pricing" },
      { title: "Features", href: "/features" },
      { title: "FAQ", href: "/faq" },
      { title: "Support", href: "/support" },
      { title: "Tutorials", href: "/tutorials" },
      { title: "Documentation", href: "/documentation" },
      { title: "API", href: "/api" },
      { title: "Demo", href: "/demo" },
      { title: "Free Trial", href: "/free-trial" },
      { title: "Success Stories", href: "/success-stories" },
      { title: "Consulting", href: "/consulting" },
    ]
  },
  {
    "Printify": [
      { title: "About Us", href: "/about-us" },
      { title: "Our Team", href: "/our-team" },
      { title: "Sustainability", href: "/sustainability" },
      { title: "Careers", href: "/careers" },
      { title: "Press", href: "/press" },
      { title: "Blog", href: "/blog" },
      { title: "Contact Us", href: "/contact-us" },
      { title: "Terms of Service", href: "/terms-of-service" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Cookie Policy", href: "/cookie-policy" },
      { title: "Accessibility", href: "/accessibility" },
      { title: "Affiliate Program", href: "/affiliate-program" },
      { title: "Sitemap", href: "/sitemap" }
    ]
  }
];

const footerExtraLinks = [{ title: "Intellectual Property Policy", href: "/" }, { title: "Terms of Service", href: "/" }, { title: "Privacy Policy", href: "/" }, { title: "Security", href: "/" }]

function Footer() {
  const footerHeadings = footerLinks.map((item) => Object.keys(item)[0])
  return (
    <div className='flex flex-col gap-30'>
      <div className='w-screen py-36 px-16'>
        {/* footer-section-1/3 */}
        <div className='flex items-center justify-between flex-wrap lg:gap-0 md:gap-0 gap-5'>
          <img src={logo} className='w-44' />
          <div className='flex gap-2 items-center justify-center lg:mx-0 md:mx-0 mx-28'>
            {
              socialMediaContactsLogo.map((logo, index) => <img src={logo} key={index} alt='socialMediaContactsLogo' className='w-8 h-8' />)
            }
          </div>
        </div>

        {/* footer-section-2/3 */}
        <div className='links grid lg:grid-cols-4 grid-col-2 grid-flow-col lg:grid-rows-1 grid-rows-2  lg:justify-between md:justify-normal justify-between lg:gap-40 gap-0 py-20'>
          {
            footerLinks?.map((footerLink, index) => <div key={index} className='flex flex-col'>
              <h1 className='footerHeadings'>{footerHeadings?.[index]}</h1>
              {footerLink[footerHeadings[index]].map((link, linkIndex) => (
                <Link key={linkIndex} to={link.href} className='footerLinks'>{link.title}</Link>
              ))}
            </div>)
          }
        </div>


      </div>
      {/* footer-section-3/3 */}
      <div className='bg-gray-50 w-full grid place-items-center gap-4 py-10'>
        <div className='flex lg:gap-8 gap-2 text-sm text-gray-500 flex-wrap justify-center'>
          {
            footerExtraLinks?.map(({ href, title }, index) => (
              <Link to={href} key={index} className='footerLinks'>
                {title}
              </Link>
            ))
          }
        </div>
        <div className='text-sm text-center'>© 2024 Printify, Inc. All rights reserved.</div>
      </div>

    </div>
  )
}

export default Footer