import Layout from "../components/Layout";
import CTA from "../components/CTA";
import DesignCategory from "../components/DesignCategory";

export default function GraphicDesign() {
  return (
    <Layout>
    <div className="max-w-[1100px] mx-auto px-6 py-16">
    
      {/* Hero Section */}
      <section className="bg-[#E7816B] text-white py-16 text-center h-60 rounded-2xl">
        <h1 className="text-4xl font-medium mb-4">Graphic Design</h1>
        <p className="max-w-xl mx-auto px-25">
        We deliver eye-catching branding materials that are tailored to meet your business objectives.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6 grid-cols-1 md:grid-cols-3">
     <div className="flex flex-col group">
            <img src="graphic-design\desktop\image-change.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
              <h1 className="font-normal text-2xl tracking-wider uppercase">Tim Brown</h1>
              <p className="mt-4 px-7">A book cover designed for Tim Brown’s new release, ‘Change’</p>
            </div>
          </div>
          <div className="group">
            <img src="graphic-design\desktop\image-boxed-water.jpg" className="rounded-t-2xl"/>
             <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
              <h1 className="font-normal text-2xl tracking-wider uppercase">Boxed water</h1>
              <p className="mt-4 px-7">A simple packaging concept made for Boxed Water</p>
            </div>
          </div>
          <div className="flex flex-col group">
            <img src="graphic-design\desktop\image-science.jpg" className="rounded-t-2xl" />
            <div className="py-4 text-center bg-[#ffad9859] rounded-b-2xl group-hover:bg-[#E78168] group-hover:text-white transition-colors duration-300">
            <h1 className="font-normal text-2xl tracking-wider uppercase">Science!</h1>
            <p className="mt-4 px-5">A poster made in collaboration with the Federal Art Project</p>
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
          title="App Design"
          link="/app-design"
          extraClasses=""
        />
      </section>
    </div>
      {/* CTA at bottom */}
      <CTA />
    </Layout>
  );
}
