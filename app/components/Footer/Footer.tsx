import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* About VSM Section */}
        <div className={styles.section}>
          <h3>ABOUT VSM @</h3>
          <p>
            Vediksoulmates.com is a <Link href="#">registered</Link> and{" "}
            <Link href="#">trademarked</Link> corporation based in India. We are
            a leading international matchmaking company for singles globally.
            Through our network we want to make the process of relationship
            journey relatively effortless.
          </p>
        </div>

        {/* Company Section */}
        <div className={styles.section}>
          <h3>COMPANY</h3>
          <div className={styles.linkColumns}>
            <div>
              <Link href="/about-us">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/membership">Membership</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/media">Media</Link>
            </div>
            <div>
              <Link href="/video-resource">Videos</Link>
              <Link href="/article">Blogs</Link>
              <Link href="/drik-panchang">Drik Panchang</Link>
              {/* <Link href="/terms">Terms of Use</Link> */}
              {/* <Link href="/privacy">Privacy Policy</Link> */}
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className={styles.section}>
          <h3>FOLLOW US ON</h3>
          <div className={styles.socialLinks}>
            <Link href="#">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/pinterest.svg"
                alt="Pinterest"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className={styles.appStores}>
            <Link href="#">
              <Image
                src="/icons/playstore.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/appstore.svg"
                alt="Download on the App Store"
                width={140}
                height={42}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 WWW.VEDIKSOULMATES.COM. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
