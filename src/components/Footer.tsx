const Footer = () => (
    <footer className="pt-30 bg-black text-white px-6">
    <div className="max-w-[1100px] mx-auto">

    <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-3">
      <img src="home\desktop\logo-light.png" className="w-40"/>
    </div>
    <nav className="hidden md:flex gap-6 text-sm text-gray-200">
      <a className="hover:underline cursor-pointer">OUR COMPANY</a>
      <a className="hover:underline cursor-pointer">LOCATIONS</a>
      <a className="hover:underline cursor-pointer">CONTACT</a>
    </nav>
  </div>
  <hr className="border-t border-white/20 my-6" />
      <div className="flex items-center  justify-between:flex-row md:justify-between gap-6">
              <div>
                <p className="text-sm text-gray-400">Designo Central Office</p>
                <p className="text-sm text-gray-400">3886 Wellington Street</p>
                <p className="text-sm text-gray-400">Toronto, Ontario M9C 3J5</p>
                </div>
                <div>
                <p className="text-sm text-gray-400 ">Contact Us (Central Office)</p>
                <p className="text-sm text-gray-400">P : +1 253-863-8967</p>
                <p className="text-sm text-gray-400">M : contact@designo.co</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8"><img src="shared\desktop\icon-facebook.svg" /></div>
                <div className="w-8 h-8"><img src="shared\desktop\icon-youtube.svg"/></div>
                <div className="w-8 h-8"><img src="shared\desktop\icon-twitter.svg"/></div>
                <div className="w-8 h-8"><img src="shared\desktop\icon-pinterest.svg"/></div>
                <div className="w-8 h-8"><img src="shared\desktop\icon-instagram.svg"/></div>
                </div>
            </div>
            <div className="mt-6 text-sm text-gray-500">© 2025 Designo. All Rights Reserved.</div>
            </div>
            </footer>      
)

export default Footer