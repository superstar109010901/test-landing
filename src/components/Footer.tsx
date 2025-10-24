export default function Footer() {
    return (
      <footer className="bg-[#030C08] w-full py-8 px-8 md:px-20 lg:px-80">
        <div className="max-w-[1280px] mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-8">
            {/* Left Section */}
            <div className="flex-1 max-w-[448px]">
              {/* Logo */}
              <div className="mb-6">
                <img
                  src="/logo.svg"
                  alt="RoCart Logo"
                  className="w-32 h-8"
                />
              </div>
  
              {/* Disclaimer */}
              <div className="mb-3">
                <h3 className="text-white text-sm font-medium leading-5 mb-3">
                  Disclaimer
                </h3>
                <p className="text-[#7B7B7B] text-sm font-medium leading-[22.75px]">
                  RoCart is not affiliated, endorsed by, or in any way associated
                  with ROBLOX Corporation, Roblox.com, or any of its subsidiaries
                  or affiliates.
                </p>
              </div>
  
              {/* Copyright */}
              <p className="text-[#7B7B7B] text-xs font-medium leading-4">
                © 2025 Rocart All rights reserved.
              </p>
            </div>
  
            {/* Right Section - Link Columns */}
            <div className="flex gap-8 lg:gap-12">
              {/* Social Media Column */}
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-sm font-semibold leading-5 mb-1">
                  Social Media
                </h4>
                <nav className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-[#999] text-sm font-normal leading-5 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-[#999] text-sm font-normal leading-5 hover:text-white transition-colors"
                  >
                    YouTube
                  </a>
                  <a
                    href="#"
                    className="text-[#999] text-sm font-normal leading-5 hover:text-white transition-colors"
                  >
                    TikTok
                  </a>
                  <a
                    href="#"
                    className="text-[#999] text-sm font-normal leading-5 hover:text-white transition-colors"
                  >
                    Discord
                  </a>
                </nav>
              </div>
  
              {/* About Us Column */}
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-sm font-semibold leading-5 mb-1">
                  About Us
                </h4>
                <nav className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-[#999] text-sm font-normal leading-5 hover:text-white transition-colors"
                  >
                    How We Work
                  </a>
                  <a
                    href="#"
                    className="text-[#999] text-sm font-normal leading-5 hover:text-white transition-colors"
                  >
                    Why Us
                  </a>
                  <a
                    href="#"
                    className="text-[#999] text-sm font-normal leading-5 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </nav>
              </div>
  
              {/* Platform Column */}
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-sm font-semibold leading-5 mb-1">
                  Platform
                </h4>
                <nav className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-[#999] text-sm font-normal leading-5 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </nav>
              </div>
            </div>
          </div>
  
          {/* Bottom Section - Social Icons & Payment Methods */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 border-t border-[#1a1a1a]">
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/Twittericon.svg"
                  alt="Twitter"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/YouTubeicon.svg"
                  alt="YouTube"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/TikTokicon.svg"
                  alt="TikTok"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/Discordicon.svg"
                  alt="Discord"
                  className="w-12 h-12"
                />
              </a>
            </div>
  
            {/* Payment Methods */}
            <div className="flex gap-3">
              <div className="w-12 h-8 rounded-md bg-white/0 shadow-sm">
                <img
                    src="/Visalogo.svg"
                    alt="Visa"
                  className="w-12 h-auto"
                />
              </div>
              <div className="w-12 h-8 rounded-md bg-white/0 shadow-sm">
                <img
                  src="/Amexlogo.svg"
                  alt="Amex"
                  className="w-12 h-auto"
                />
              </div>
              <div className="w-12 h-8 rounded-md bg-white/0 shadow-sm">
                <img
                  src="/Mastercardlogo.svg"
                  alt="Mastercard"
                  className="w-12 h-auto"
                />
              </div>
              <div className="w-12 h-8 rounded-md bg-white/0 shadow-sm">
                <img
                  src="/Applepaylogo.svg"
                  alt="Apple Pay"
                  className="w-12 h-auto"
                />
              </div>
              <div className="w-12 h-8 rounded-md bg-white/0 shadow-sm">
                <img
                  src="/Paypallogo.svg"
                  alt="PayPal"
                  className="w-12 h-auto"
                />
              </div>
              <div className="w-12 h-8 rounded-md bg-white/0 shadow-sm">
                <img
                  src="/Discoverlogo.svg"
                  alt="Discover"
                  className="w-12 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  