// import { Link } from "react-router";

// export default function DesignCategory({ image, title, link }) {
//   return (
    
//         <Link to={link} className="group relative rounded-2xl overflow-hidden lg:row-span-1">
//                 <img
//                     src={image}
//                     alt="Web Design"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/40" />
//                 <div className="relative z-10 h-full flex items-center justify-center lg:justify-center">
//                     <div className="text-center  lg:text-left lg:pl-14">
//                     <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-[0.08em]">
//                         {title}
//                     </h2>
//                     <span className="mt-3 inline-flex items-center gap-3 text-white/90 text-[12px] tracking-[0.35em]">
//                         VIEW PROJECTS
//                         <span className="text-[#E7816B] transition-transform duration-200 group-hover:translate-x-1">
//                         ›
//                         </span>
//                     </span>
//                     </div>
//                 </div>
//             </Link>
//   );
// }

import { Link } from "react-router";
type CategoryProps = {
    image: string;
    title: string;
    link: string;
    extraClasses: string;
}
export default function DesignCategory({ image, title, link, extraClasses }: CategoryProps)  {
  // Auto-apply row-span-2 if it's Web Design
  return (
    <Link
      to={link}
      className={`group relative rounded-2xl overflow-hidden ${extraClasses}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0  w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center lg:justify-center">
        <div className="text-center lg:text-left lg:pl-14">
          <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-[0.08em]">
            {title}
          </h2>
          <span className="mt-3 inline-flex items-center gap-3 text-white/90 text-[12px] tracking-[0.35em]">
            VIEW PROJECTS
            <span className="text-[#E7816B] transition-transform duration-200 group-hover:translate-x-1">
              ›
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
