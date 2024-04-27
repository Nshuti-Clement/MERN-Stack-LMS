
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { styles } from "../styles/style";

const About = () => {
  const data = [
    {
      name: `John Morgan`,
      img: `/students/John_Morgan.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Ellie Anderson`,
      img: `/students/Ellie_Anderson.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Nia Adebayo`,
      img: `/students/Nia_Adebayo.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Rigo Louie`,
      img: `/students/Rigo_Louie.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Mia Williams`,
      img: `/students/Mia_Williams.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">HealthEdu</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Are you ready to take your programming skills to the next level? Look
          no further than HealthEdu, the premier programming community dedicated
          to helping new programmers achieve their goals and reach their full
          potential.
          <br />
          <br />
          As the founder and CEO of HealthEdu, I know firsthand the challenges
          that come with learning and growing in the programming industry.
          That&apos;s why I created HealthEdu &ndash; to provide new programmers
          with the resources and support they need to succeed.
          <br />
          <br />
          Our YouTube channel is a treasure trove of informative videos on
          everything from programming basics to advanced techniques. But that&apos;s
          just the beginning. Our affordable courses are designed to give you
          the high-quality education you need to succeed in the industry,
          without breaking the bank.
          <br />
          <br />
          At HealthEdu, we believe that price should never be a barrier to
          achieving your dreams. That&apos;s why our courses are priced low
          &ndash; so that anyone, regardless of their financial situation, can
          access the tools and knowledge they need to succeed.
          <br />
          <br />
          But HealthEdu is more than just a community &ndash; we&apos;re a
          family. Our supportive community of like-minded individuals is here
          to help you every step of the way, whether you&apos;re just starting
          out or looking to take your skills to the next level.
          <br />
          <br />
          With HealthEdu by your side, there&apos;s nothing standing between you
          and your dream job. Our courses and community will provide you with
          the guidance, support, and motivation you need to unleash your full
          potential and become a skilled programmer.
          <br />
          <br />
          So what are you waiting for? Join the HealthEdu family today and let&apos;s
          conquer the programming industry together! With our affordable
          courses, informative videos, and supportive community, the sky&apos;s
          the limit.
        </p>
        <br />
        <span className="text-[22px]">BIGIRIMANA J </span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of HealthEdu
        </h5>
        <br />
        <br />
        <br />

        <div className='w-3/4 m-auto'>
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d) => (
                <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
                  <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                    <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p className="text-center">{d.review}</p>
                    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
