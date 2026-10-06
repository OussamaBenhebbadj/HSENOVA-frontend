export default function AuthLeft() {
  return (
    <div>
        <div className="flex flex-row">
                <img src="/logo.svg" alt="Logo" className="w-16 h-16 ml-8 mt-16" />
                <div className="flex flex-col">
                    <h1 className="ml-4 mt-16 font-bold font-primary text-white text-xl">HSENova</h1>
                    <p className="ml-4">SAFETY MANAGEMENT PLATFORM</p>
                </div>    
            </div>
            <div className="flex flex-col">
                <h1 className="text-5xl ml-8 mt-16 font-bold font-primary text-white mt-4"><span className="bg-linear-gradient bg-clip-text text-transparent">Protect</span> what <br /> matters most <span className="text-primary">.</span></h1>
                <p className=" ml-8 mt-4 text-grey font-secondary">HSENova centralizes your safety operations, <br /> 
                    from incident detection to corrective action.
                </p>
            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-row">
                        <img src="/realtime.svg" alt="Login" className="w-8 h-8 ml-8 mt-4" />
                        <p className="ml-4 mt-5 font-primary text-white font-primary">Real-time incident tracking.</p>
                    </div>
                    <div className="flex flex-row">
                        <img src="/iso.svg" alt="Login" className="w-8 h-8 ml-8 mt-4" />
                        <p className="ml-4 mt-5">ISO 45001 & OSHA compliance.</p>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-row">
                        <img src="/risk.svg" alt="Login" className="w-8 h-8 ml-8 mt-4" />
                        <p className="ml-4 mt-5">Proactive risk identification.</p>
                    </div>
                    <div className="flex flex-row">
                        <img src="/ca.svg" alt="Login" className="w-8 h-8 ml-8 mt-4" />
                        <p className="ml-4 mt-5">Automated corrective actions.</p>
                    </div>
                </div>  
            </div>  
            <div className="ml-12 mt-8 flex h-24 w-[525px] flex-row items-center justify-around rounded-xl border border-primary bg-[#282828]">
  
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-primary">
                    98%
                    </h1>
                    <p className="text-base text-grey">
                    Incident Reduction
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-primary">
                    +200
                    </h1>
                    <p className="text-base text-grey">
                    Sites monitored
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-primary font-primary">
                    ISO
                    </h1>
                    <p className="text-base text-grey">
                    Certified ready
                    </p>
                </div>

            </div>
    </div>
  );
}