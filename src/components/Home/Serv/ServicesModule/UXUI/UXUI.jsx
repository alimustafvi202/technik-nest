// import React from "react";
// import Navbar from '../../../../Home/Navbar/NavBar';
// import Footer from "../../../../Home/Footer/footer";
// import HeroImage from '../../../../../assets/Services/uxui/hero.jpg';
// import Img1 from '../../../../../assets/Services/uxui/1.png';
// import Img2 from '../../../../../assets/Services/uxui/2.png';
// import Img3 from '../../../../../assets/Services/uxui/3.jpg';
// import Img4 from '../../../../../assets/Services/uxui/4.jpg';
// import Img5 from '../../../../../assets/Services/uxui/5.jpg';
// import Img6 from '../../../../../assets/Services/uxui/6.jpg';
// import Img7 from '../../../../../assets/Services/uxui/7.jpg';
// import Img8 from '../../../../../assets/Services/uxui/8.jpg';
// import Img9 from '../../../../../assets/Services/uxui/9.jpg';
// import Img10 from '../../../../../assets/Services/uxui/10.jpg';

// const UXUIPage = () => {
//   const features = [
//     { name: "User Research & Analysis", description: "Understand user needs to craft better experiences.", img: Img1 },
//     { name: "Wireframing & Prototyping", description: "Visualize your app with interactive prototypes.", img: Img2 },
//     { name: "Responsive Design", description: "Ensure seamless user experience across all devices.", img: Img3 },
//     { name: "Mobile App UI/UX Design", description: "Create intuitive and engaging mobile interfaces.", img: Img4 },
//     { name: "Web App UI/UX Design", description: "Design compelling and user-friendly web apps.", img: Img5 },
//     { name: "Interaction Design", description: "Enhance user engagement with thoughtful interactions.", img: Img6 },
//     { name: "Design Systems", description: "Develop consistent and scalable design systems.", img: Img7 },
//     { name: "Usability Testing", description: "Identify and solve usability challenges effectively.", img: Img8 },
//     { name: "Visual Design", description: "Craft visually stunning designs that captivate users.", img: Img9 },
//     { name: "Accessibility Design", description: "Design inclusive experiences for all users.", img: Img10 },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <section
//         className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
//         style={{ backgroundImage: `url(${HeroImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative text-center z-10">
//           <h2 className="text-4xl font-bold mb-4">Deliver Exceptional User Experiences</h2>
//           <p className="text-lg mb-6">Innovative UX/UI design solutions tailored to your business needs.</p>
//         </div>
//       </section>
//       <section className="container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold text-center mb-8">Our UX/UI Design Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
//             >
//               <img src={feature.img} alt={feature.name} className="w-full h-48 object-cover group-hover:opacity-80 transition" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default UXUIPage;
