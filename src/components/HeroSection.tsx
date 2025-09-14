// export default function HeroSection() {
//   return (
//     <section className="text-white ">
//       <div className="bg-[#FF6F61] max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 md:px-0 gap-10">
//         <div className="flex-1 px-6 md:px-8">
//           <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
//             Award-winning custom designs and digital branding solutions
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
//             With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
//           </p>
//           <button className="bg-white text-[#FF6F61] font-semibold py-3 px-6 rounded hover:bg-gray-100 transition">
//             LEARN MORE
//           </button>
//         </div>

//         <div className="flex-1 relative flex justify-center items-center">
//           <img
//             src="/home/desktop/bg-pattern-hero-home.svg"
//             alt="Pattern Background"
//             className="absolute w-full max-w-md top-0 left-0 z-0 opacity-30"
//           />
//           <img
//             src="/home/desktop/image-hero-phone.png"
//             alt="Hero Phone"
//             className="relative z-10 w-64 md:w-80 object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



const HeroSection = () => (
        <section className="relative mt-6">
          <div className="relative bg-[#E7816B] rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            {/* Decorative soft circles (subtle background shapes) */}
            <div className="pointer-events-none absolute -left-16 -top-16 w-44 h-44 bg-white/12 rounded-full blur-xl" />
            <div className="pointer-events-none absolute -right-24 bottom-[-40px] w-60 h-60 bg-white/10 rounded-full blur-xl" />

            {/* Left: Text */}
            <div className="w-full md:w-1/2 z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-4">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className="text-sm md:text-base mb-6 text-white/90">
                With over 10 years in the industry, we are experienced in creating
                fully responsive websites, app design, and engaging brand
                experiences. Find out more about our services.
              </p>
              <button className="inline-block bg-white text-[#E7816B] font-bold px-5 py-3 rounded-md shadow-sm hover:bg-white/90">
                LEARN MORE
              </button>
            </div>

            {/* Right: Phone mockup / image */}
            <div className="w-full md:w-1/2 flex justify-end z-10">
            <div className="relative w-[220px] md:w-[320px] overflow-hidden ">
            <img
            src="/home/desktop/bg-pattern-hero-home.svg"
            alt="Pattern Background"
            className="absolute w-full  max-w-md top-0 left-0  z-1 opacity-50"
            />
                <img
                  src="/home/desktop/image-hero-phone.png"
                  alt="phone mockup"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>
)

export default HeroSection