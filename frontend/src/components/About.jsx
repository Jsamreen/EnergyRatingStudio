import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      window.scrollTo(0, 0);
    }
  }, [inView, controls]);

  return (
    <div className="bg-dark text-white about-page"
      style={{marginTop: -30, paddingTop: '60px', paddingBottom: '60px', position: 'relative'}}>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={scrolling ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: "url('/who_we_are.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          width: '100%',
        }}
      />

      {/* CONTENT SECTION */}
      <motion.div
        className="container bg-dark text-white py-5"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <h2 className="fw-bold mb-4">About Us</h2>
        <p className="fs-5 text-white">
          Energy Rating Studio is an industry leader in building energy assessments, delivering compliance solutions for residential and commercial developers alike.
        </p>
        <p className="fs-5 text-white">
          Our team of accredited assessors and engineers brings deep technical knowledge and a commitment to sustainability.
        </p>
        <p className="fs-5 text-white">
          Whether you're an architect, builder, or owner — we work with you from start to certification with clarity, speed, and accuracy.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
