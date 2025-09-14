import CTA from "../components/CTA";
import Layout from "../components/Layout";


const About = () => (
  <Layout>
    <div className="max-w-[1100px] mx-auto px-6 py-8">
     <section className="flex rounded-2xl overflow-hidden h-[300px] min-h-[400px] mb-30">
        <div className="bg-[#E7816B] text-white p-12 px-15 flex flex-col justify-center w-1/2 ">
         <h1 className="font-medium text-2xl mb-4">About us</h1>
         <p className="">
         Founded in 2010, we are a creative agency that produces lasting
        results for our clients. We’ve partnered with many startups,
        corporations, and nonprofits alike to craft designs that make real
        impact. We’re always looking forward to creating brands, products, and
        digital experiences that connect with our clients' audiences.
        </p>
        </div>
        <div className="w-1/2 h-full">
        <img src="about/desktop/image-about-hero.jpg" alt="about-hero" className="object-cover w-full h-full"/>
        </div>
      </section>

      <section className="flex rounded-2xl overflow-hidden h-[300px] min-h-[400px] mt-8">
        <div className="w-1/2 h-full">
            <img src="about/desktop/image-world-class-talent.jpg" alt="world-class" className="object-fit w-full h-full"/>
        </div>
         <div className="bg-[#ffad9859] t p-12 px-15 flex flex-col justify-center w-2/3">
        <h1 className="font-medium text-2xl mb-4 text-[#E7816B]">World-class talent</h1>
        <p className="text-sm">
         We are a crew of strategists, problem-solvers, and
        technologists. Every design is thoughtfully crafted from concept to
        launch, ensuring success in its given market. We are constantly updating
        our skills in a myriad of platforms.
        </p>
        <p className="mt-4">
        Our team is multi-disciplinary and we are not merely interested in form
        — content and meaning are just as important. We give great importance to
        craftsmanship, service, and prompt delivery. Clients have always been
        impressed with our high-quality outcomes that encapsulates their brand’s
        story and mission.
      </p>
        </div>
      </section>
      
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
          <h4 className="font-semibold mb-3">Canada</h4>
          <button className="text-sm text-gray-600">
            See location
          </button>
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
          <h4 className="font-semibold mb-3"> Australia</h4>
          <button className="text-sm text-gray-600">
          See location
          </button>
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
          <h4 className="font-semibold mb-3 ">United Kingdom</h4>
          <button className="text-sm text-gray-600">
           See location
          </button>
        </div>
      </section>
      <section>
        The real deal As strategic partners in our clients’ businesses, we are
        ready to take on any challenge as our own. Solving real problems require
        empathy and collaboration, and we strive to bring a fresh perspective to
        every opportunity. We make design and technology more accessible and
        give you tools to measure success. We are visual storytellers in
        appealing and captivating ways. By combining business and marketing
        strategies, we inspire audiences to take action and drive real results.
      </section>
      <CTA />
    </div>
  </Layout>
);

export default About;
