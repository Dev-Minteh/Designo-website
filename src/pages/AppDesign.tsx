import Layout from "../components/Layout";
import CTA from "../components/CTA";
import DesignCategory from "../components/DesignCategory";

export default function AppDesign() {
  return (
    <Layout>
    <div className="max-w-[1100px] mx-auto px-6 ">
    
      {/* Hero Section */}
      <section className="bg-[#E7816B] text-white py-16 px-6 text-center rounded-2xl">
        <h1 className="text-4xl mb-4">App Design</h1>
        <p className="max-w-xl mx-auto px-25">
          Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
        </p>
      </section>
        

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6 grid-cols-1 md:grid-cols-3 ">
         <div className="flex flex-col group">
            <img src="app-design\desktop\image-airfilter.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
              <h1 className="font-normal text-2xl tracking-wider uppercase">Airfilter</h1>
              <p className="mt-4 px-8">Solving the problem of poor indoor air quality by filtering the air</p>
            </div>
          </div>
          <div className="group">
            <img src="app-design\desktop\image-eyecam.jpg" className="rounded-t-2xl"/>
             <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
              <h1 className="font-normal text-2xl tracking-wider uppercase">Eyecam</h1>
              <p className="mt-4 px-7">Product that lets you edit your favorite photos and videos at any time</p>
            </div>
          </div>
          <div className="flex flex-col group">
            <img src="app-design\desktop\image-faceit.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
            <h1 className="font-normal text-2xl tracking-wider uppercase">Faceit</h1>
            <p className="mt-4 px-8">Get to meet your favorite internet superstar with the faceit app</p>
            </div>
          </div>
          <div className="flex flex-col group">
            <img src="app-design\desktop\image-todo.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
            <h1 className="font-normal text-2xl tracking-wider uppercase">Todo</h1>
            <p className="mt-4 px-7">Connects users with local contractors based on their location</p>
            </div>
          </div>
            <div className="flex flex-col group">
            <img src="app-design\desktop\image-loopstudios.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
            <h1 className="font-normal text-2xl tracking-wider uppercase">Loopstudios</h1>
            <p className="mt-4 px-7">A VR experience app made for Loopstudios</p>
            </div>
          </div>
      </section>

      {/* Other Design Categories */}
      <section className="max-w-6xl mx-auto  grid gap-6 md:grid-cols-2 h-[250px]">
        <DesignCategory
          image="/home/desktop/image-web-design-large.jpg"
          title="web Design"
          link="/web-design"
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
