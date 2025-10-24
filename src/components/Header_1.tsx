export default function Header_1() {
    return (
      <header className="h-[46px] px-8 flex w-full items-center justify-between bg-[#030C08]">
        {/* Select Game Dropdown */}
        <button className="w-[171px] h-[41px] rounded-[10px] border border-[#1E3126] bg-[#112118] flex items-center px-3 gap-2">
          <img src={"/gamepad.svg"} alt="Virus" />
          <span className="text-white text-[11px] font-bold leading-6 flex-1 text-center">
            Select Game
          </span>
          <img src="/arrow.svg" alt="Arrow" />
        </button>
  
        {/* Spacer */}
        <div className="flex-1" />
  
        {/* Language/Currency Selector */}
        <div className="inline-flex h-[43px] pl-[9px] pr-4 items-center gap-2 rounded-xl border border-[#6B768514] bg-[#030C08] mr-[30px]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <g clipPath="url(#clip0_1_3649)">
              <path d="M0 0H22V22H0" fill="#BD3D44" />
              <path
                d="M0 2.53516H22H0ZM0 5.91307H22H0ZM0 9.30474H22H0ZM0 12.6964H22H0ZM0 16.0881H22H0ZM0 19.4797H22H0Z"
                fill="black"
              />
              <path
                d="M0 2.53516H22M0 5.91307H22M0 9.30474H22M0 12.6964H22M0 16.0881H22M0 19.4797H22"
                stroke="white"
                strokeWidth="2.22"
              />
              <path d="M0 0H12.54V11.8479H0" fill="#192F5D" />
            </g>
            <defs>
              <clipPath id="clip0_1_3649">
                <rect width="22" height="22" rx="7" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-white text-[13px] font-bold leading-[17.5px]">
            English
          </span>
          <span className="text-[#606060] text-[10px] font-bold leading-[17.5px]">
            /
          </span>
          <span className="text-white text-[13px] font-bold leading-[27px]">
            USD
          </span>
        </div>
  
        {/* Login Button */}
        <button className="w-[159px] h-[43px] rounded-[9px] bg-gradient-to-r from-[#13E97D] to-[#0B8346] flex items-center justify-center">
          <span className="text-white text-[13px] font-bold leading-[17.5px]">
            Login
          </span>
        </button>
      </header>
    );
  }
  