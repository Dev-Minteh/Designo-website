import Layout from "../components/Layout";
import CTA from "../components/CTA";
import DesignCategory from "../components/DesignCategory";

export default function WebDesign() {
  return (
    <Layout>
      <div className="max-w-[1100px] mx-auto px-6 ">
        {/* Hero Section */}
        <section className="bg-[#E7816B] text-white py-16 text-center h-60 rounded-2xl">
          {/* <img src="web-design/desktop/bg-pattern-intro-web.svg" className=" relative"/> */}

          <h1 className="text-4xl font-medium mb-4">Web Design</h1>
          <p className="max-w-xl mx-auto  px-20">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </section>
        {/*         
  
        {/* Projects */}
        <section className="max-w-6xl mx-auto py-16 grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col group">
            <img src="web-design\desktop\image-express.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
              <h1 className="font-normal text-2xl tracking-widest uppercase">Express</h1>
              <p className="mt-4 px-8">A multi-carrier shipping website for ecommerce businesses</p>
            </div>
          </div>
          <div className="group">
            <img src="web-design\desktop\image-transfer.jpg" className="rounded-t-2xl"/>
             <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
              <h1 className="font-normal text-2xl tracking-wider uppercase">Transfer</h1>
              <p className="mt-4 px-8">Site for low-cost money transfers and sending money within seconds</p>
            </div>
          </div>
          <div className="flex flex-col group">
            <img src="web-design\desktop\image-photon.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
            <h1 className="font-normal text-2xl tracking-wider uppercase">Photon</h1>
            <p className="mt-4 px-8">A state-of-the-art music player with high-resolution audio and DSP effects</p>
            </div>
          </div>
          <div className="flex flex-col group">
            <img src="web-design\desktop\image-builder.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
            <h1 className="font-normal text-2xl tracking-wider uppercase">Builder</h1>
            <p className="mt-4 px-8">Connects users with local contractors based on their location</p>
            </div>
          </div>
          <div className="group flex flex-col">
            <img src="web-design\desktop\image-blogr.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
            <h1 className="font-normal text-2xl tracking-wider uppercase">Blogr</h1>
            <p className="mt-4 px-5">Blogr is a platform for creating an online blog or publication</p>
            </div>
          </div>
          <div className="group flex flex-col">
            <img src="web-design\desktop\image-camp.jpg" className="rounded-2xl"/>
             <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
            <h1 className="font-normal text-2xl tracking-wider uppercase">Camp</h1>
            <p className="mt-4 px-8">Get expert training in coding, data, design, and digital marketing</p>
            </div>
          </div>
        </section>

        {/* Other Design Categories */}
        <section className="max-w-6xl mx-auto  grid gap-6 md:grid-cols-2 h-[250px]">
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
        </section>

        {/* CTA at bottom */}
        <CTA />
      </div>
    </Layout>
  );
}
