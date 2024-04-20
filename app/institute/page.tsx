// import React, { useEffect } from 'react';
// // import Swiper from 'swiper';

// // Import Swiper styles
// import 'swiper/swiper-bundle.min.css';

// // CSS styles as a string (you may replace this with CSS Modules or Styled Components later)
// const styles = `
// /* Your CSS styles here */
// /* Google Fonts - Poppins */
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: 'Poppins', sans-serif;
// }
// body{
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #000;
// }
// .slide-container{
//   max-width: 1120px;
//   width: 100%;
//   padding: 40px 0;
// }
// .slide-content{
//   margin: 0 40px;
//   overflow: hidden;
//   border-radius: 25px;
// }
// .card{
//   border-radius: 25px;
//   background-color: #FFF;
// }
// .image-content,
// .card-content{
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 10px 14px;
// }
// .image-content{
//   position: relative;
//   row-gap: 5px;
//   padding: 25px 0;
// }
// .overlay{
//   position: absolute;
//   left: 0;
//   top: 0;
//   height: 100%;
//   width: 100%;
//   background-color: #03c03c;
//   border-radius: 25px 25px 0 25px;
// }
// .overlay::before,
// .overlay::after{
//   content: '';
//   position: absolute;
//   right: 0;
//   bottom: -40px;
//   height: 40px;
//   width: 40px;
//   background-color: #03c03c;
// }
// .overlay::after{
//   border-radius: 0 25px 0 0;
//   background-color: #FFF;
// }
// .card-image{
//   position: relative;
//   height: 150px;
//   width: 150px;
//   border-radius: 50%;
//   background: #FFF;
//   padding: 3px;
// }
// .card-image .card-img{
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   border-radius: 50%;
//   border: 4px solid #03c03c;
// }
// .name{
//   font-size: 18px;
//   font-weight: 500;
//   color: #333;
// }
// .description{
//   font-size: 14px;
//   color: #707070;
//   text-align: center;
// }
// .button{
//   border: none;
//   font-size: 16px;
//   color: #FFF;
//   padding: 8px 16px;
//   background-color: #03c03c;
//   border-radius: 6px;
//   margin: 14px;
//   cursor: pointer;
//   transition: all 0.3s ease;
// }
// .button:hover{
//   background: green;
// }

// .swiper-navBtn{
//   color: #EFEFEF;
//   transition: color 0.3s ease;
// }
// .swiper-navBtn:hover{
//   color: #03c03c;
// }
// .swiper-navBtn::before,
// .swiper-navBtn::after{
//   font-size: 35px;
// }
// .swiper-button-next{
//   right: 0;
// }
// .swiper-button-prev{
//   left: 0;
// }
// .swiper-pagination-bullet{
//   background-color: #03c03c;
//   opacity: 1;
// }
// .swiper-pagination-bullet-active{
//   background-color: #03c03c;
// }

// .form__icon {
//   object-fit: contain;
//   width: 30px;
//   margin: 0 5px;
//   opacity: 1;
//   transition: 0.15s;
// }
// .form__icon:hover {
//   opacity: 0.5;
//   transition: 0.15s;
//   cursor: pointer;
// }

// @media screen and (max-width: 768px) {
//   .slide-content{
//     margin: 0 10px;
//   }
//   .swiper-navBtn{
//     display: none;
//   }
// }
// `;

// const YourComponent: React.FC = () => {
//   useEffect(() => {
//     const swiper = new Swiper('.slide-content', {
//       slidesPerView: 3,
//       spaceBetween: 25,
//       loop: true,
//       centerSlide: true,
//       fade: true,
//       grabCursor: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         520: {
//           slidesPerView: 2,
//         },
//         950: {
//           slidesPerView: 3,
//         },
//       },
//     });

//     return () => {
//       swiper.destroy();
//     };
//   }, []);

//   return (
//     <div className="slide-container swiper-container">
//       <div className="slide-content">
//         <div className="card-wrapper swiper-wrapper">
//           {/* Your card content here */}
//           {/* Repeat the following card structure as needed */}
//           <div className="card swiper-slide">
//             <div className="image-content">
//               <span className="overlay"></span>
//               <div className="card-image">
//                 <img src="images/profile1.jpg" alt="" className="card-img" />
//               </div>
//             </div>
//             <div className="card-content">
//               <h2 className="name">David Dell</h2>
//               <p className="description">Title in the company</p>
//               <br />
//               <br />
//               <div className="form__icons">
//                 <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
//                   <img className="form__icon" src="images/google.png" alt="Google" />
//                 </a>
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                   <img className="form__icon" src="images/facebook.png" alt="Facebook" />
//                 </a>
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                   <img className="form__icon" src="images/instagram.png" alt="Instagram" />
//                 </a>
//                 <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
//                   <img className="form__icon" src="images/github.png" alt="GitHub" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* End of card content */}
//         </div>
//       </div>
//       <div className="swiper-button-next swiper-navBtn"></div>
//       <div className="swiper-button-prev swiper-navBtn"></div>
//       <div className="swiper-pagination"></div>
//     </div>
//   );
// };

// export default YourComponent;

// // nshuticlem

// // bTdAq0LuM7pjlcSi
