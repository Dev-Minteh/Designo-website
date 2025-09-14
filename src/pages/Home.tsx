// import HeroSection from "../components/HeroSection";
// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <div className="p-6">
//       <Navbar />
//       <HeroSection />
//       <div className="flex gap-5 p-8 my-10">
//         {/* Web Design Card */}
//         <div className="relative w-full max-w-md">
//           <img
//             src="/home/desktop/image-web-design-large.jpg"
//             alt="Web Design"
//             className="h-auto rounded-lg"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-white rounded-lg">
//             <h1 className="text-3xl font-bold mb-2">Web Design</h1>
//             <span className="text-lg underline cursor-pointer">View Projects</span>
//           </div>
//         </div>
//         {/* App & Graphic Design Cards */}
//         <div className="flex flex-col gap-4">
//           {/* App Design Card */}
//           <div className="relative  max-w-md ">
//             <img
//               src="/home/desktop/image-app-design.jpg"
//               alt="App Design"
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-40 rounded-lg">
//               <h1 className="text-xl font-bold mb-1">App Design</h1>
//               <span className="text-base underline cursor-pointer">View Projects</span>
//             </div>
//           </div>
//           {/* Graphic Design Card */}
//           <div className="relative max-w-md ">
//             <img
//               src="/home/desktop/image-graphic-design.jpg"
//               alt="Graphic Design"
//               className="w-full h-40 object-cover rounded-lg"   
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-40 rounded-lg">
//               <h1 className="text-xl font-bold mb-1">Graphic Design</h1>
//               <span className="text-base underline cursor-pointer">View Projects</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// import HeroSection from "../components/HeroSection";
// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <div className="font-sans text-gray-800">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-[#E7816B] text-white px-6 py-16 md:px-20 flex flex-col md:flex-row items-center justify-between rounded-lg mt-6">
//         <div className="max-w-lg">
//           <h1 className="text-3xl md:text-5xl font-bold mb-6">
//             Award-winning custom designs and digital branding solutions
//           </h1>
//           <p className="mb-6 leading-relaxed">
//             With over 10 years in the industry, we are experienced in creating
//             fully responsive websites, app design, and engaging brand
//             experiences. Find out more about our services.
//           </p>
//           <button className="bg-white text-[#E7816B] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
//             Learn More
//           </button>
//         </div>
//         <div className="mt-10 md:mt-0 md:ml-12">
//           <img
//             src="/home/desktop/image-hero-phone.png"
//             alt="Hero"
//             className="w-64 md:w-80"
//           />
//         </div>
//       </section>

//       {/* Design Categories */}
//       <section className="px-6 md:px-20 my-20">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Web Design */}
//           <div className="relative flex-1">
//             <img
//               src="/home/desktop/image-web-design-large.jpg"
//               alt="Web Design"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 rounded-lg">
//               <h2 className="text-3xl font-bold mb-2">Web Design</h2>
//               <span className="text-lg underline cursor-pointer">
//                 View Projects
//               </span>
//             </div>
//           </div>

//           {/* App & Graphic */}
//           <div className="flex flex-col gap-6 flex-1">
//             {/* App Design */}
//             <div className="relative">
//               <img
//                 src="/home/desktop/image-app-design.jpg"
//                 alt="App Design"
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 rounded-lg">
//                 <h2 className="text-2xl font-bold mb-2">App Design</h2>
//                 <span className="text-base underline cursor-pointer">
//                   View Projects
//                 </span>
//               </div>
//             </div>
//             {/* Graphic Design */}
//             <div className="relative">
//               <img
//                 src="/home/desktop/image-graphic-design.jpg"
//                 alt="Graphic Design"
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 rounded-lg">
//                 <h2 className="text-2xl font-bold mb-2">Graphic Design</h2>
//                 <span className="text-base underline cursor-pointer">
//                   View Projects
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="px-6 md:px-20 my-20 text-center grid md:grid-cols-3 gap-12">
//         <div>
//           <img src="/icons/passionate.png" alt="Passionate" className="mx-auto mb-6 w-20 h-20" />
//           <h3 className="text-xl font-bold mb-4">Passionate</h3>
//           <p className="text-gray-600 leading-relaxed">
//             Each project starts with an in-depth brand research to ensure we
//             only create products that serve a purpose. We merge art, design,
//             and technology into exciting solutions.
//           </p>
//         </div>
//         <div>
//           <img src="/icons/resourceful.png" alt="Resourceful" className="mx-auto mb-6 w-20 h-20" />
//           <h3 className="text-xl font-bold mb-4">Resourceful</h3>
//           <p className="text-gray-600 leading-relaxed">
//             Everything that we do has a strategic purpose. We use our resources
//             wisely and apply them to every project we undertake. We are always
//             looking ahead to the future.
//           </p>
//         </div>
//         <div>
//           <img src="/icons/friendly.png" alt="Friendly" className="mx-auto mb-6 w-20 h-20" />
//           <h3 className="text-xl font-bold mb-4">Friendly</h3>
//           <p className="text-gray-600 leading-relaxed">
//             We are a group of enthusiastic folks who know how to put people
//             first. Our success depends on our customers, and we strive to give
//             them the best experience a company can provide.
//           </p>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#E7816B] text-white px-6 py-16 md:px-20 rounded-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between">
//         <div className="max-w-xl">
//           <h2 className="text-3xl font-bold mb-4">Let’s talk about your project</h2>
//           <p className="leading-relaxed mb-6">
//             Ready to take it to the next level? Contact us today and find out
//             how our expertise can help your business grow.
//           </p>
//         </div>
//         <button className="bg-white text-[#E7816B] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
//           Get In Touch
//         </button>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-white px-6 md:px-20 py-12 mt-20">
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
//           <div>
//             <h2 className="text-2xl font-bold tracking-widest mb-4">DESIGNO</h2>
//             <p className="text-gray-400">Designo Central Office</p>
//             <p className="text-gray-400">3886 Wellington Street</p>
//             <p className="text-gray-400">Toronto, Ontario M9C 3J5</p>
//           </div>
//           <div>
//             <p className="text-gray-400 mb-2">Contact Us (Central Office)</p>
//             <p className="text-gray-400">P : +1 253-863-8967</p>
//             <p className="text-gray-400">M : contact@designo.co</p>
//           </div>
//           <div className="flex gap-4 text-gray-400">
//             <i className="fab fa-facebook cursor-pointer hover:text-white"></i>
//             <i className="fab fa-youtube cursor-pointer hover:text-white"></i>
//             <i className="fab fa-twitter cursor-pointer hover:text-white"></i>
//             <i className="fab fa-pinterest cursor-pointer hover:text-white"></i>
//             <i className="fab fa-instagram cursor-pointer hover:text-white"></i>
//           </div>
//         </div>
//         <div className="mt-10 text-center text-gray-500 text-sm">
//           © 2025 Designo. All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import DesignCategory from "../components/DesignCategory";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-gray-900 font-sans">
      <div className="max-w-[1100px] mx-auto px-6 py-8">
        <Navbar />
       <HeroSection />
        
        {/* DESIGN CATEGORIES (exact layout) */}
            <section className="mt-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2 lg:h-[500px]">
                 <DesignCategory
                   image="/home/desktop/image-web-design-large.jpg"
                    title="Web Design"
                    link="/web-design"   
                    extraClasses="lg:row-span-2"
                
                />
       
                <DesignCategory
                image="/home/desktop/image-app-design.jpg"
                title="App Design"
                link="/app-design"
                extraClasses=""
                />
                 <DesignCategory
                image="/home/desktop/image-graphic-design.jpg"
                title="Graphic Design"
                link="/graphic-design"
                extraClasses=""
                />
            </div>
            </section>



        {/* FEATURES ROW */}
        <section className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="mx-auto relative w-50 h-50  flex items-center justify-center mb-6">
            <img
                src="/home/desktop/illustration-passionate.svg"
                alt="illustration"
                className="absolute inset-0 w-full h-full  object-contain"
            />

            <img
                src="/home/desktop/bg-pattern-hero-home.svg"
                alt="pattern"
                className="relative object-contain"
            />
            </div>
            <h4 className="font-semibold mb-3">PASSIONATE</h4>
            <p className="text-sm text-gray-600">
                Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                art, design, and technology into exciting new solutions.
            </p>
          </div>
          <div>
            <div className="mx-auto relative w-50 h-50  flex items-center justify-center mb-6">
            <img
                src="/home/desktop/illustration-resourceful.svg"
                alt="illustration-resourceful"
                className="absolute inset-0 w-full h-full  object-contain"
            />

            <img
                src="/home/desktop/bg-pattern-hero-home.svg"
                alt="pattern"
                className="relative object-contain"
            />
            </div>
            <h4 className="font-semibold mb-3">RESOURCEFUL</h4>
            <p className="text-sm text-gray-600">
            Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
            collaboration. It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
          <div>
             <div className="mx-auto relative w-50 h-50  flex items-center justify-center mb-6">
            <img
                src="home/desktop\illustration-friendly.svg"
                alt="illustration-friendly"
                className="absolute inset-0 w-full h-full  object-contain"
            />

            <img
                src="/home/desktop/bg-pattern-hero-home.svg"
                alt="pattern"
                className="relative object-contain"
            />
            </div>
            <h4 className="font-semibold mb-3 ">FRIENDLY</h4>
            <p className="text-sm text-gray-600">
             We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
             strive to give them the best experience a company can provide.
            </p>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="mt-14">
          <div className="bg-[#E7816B] rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Let's talk
                about your project</h3>
              <p className="text-sm md:text-base text-white/90">
                Ready to take it to the next level? Contact us today and find out
                how our expertise can help your business grow.
              </p>
            </div>
            <button className="bg-white text-black/45 font-bold px-5 py-3 rounded-md shadow-sm">
              GET IN TOUCH
            </button>
          </div>
        </section> */}
       <CTA />

      </div>
      <Footer />
    </div>
  );
}

