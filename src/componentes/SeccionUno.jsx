import BgImage from './../assets/bg.png'


export default function SeccionUno() {


    return(
        <>
            <div className="flex flex-col md:flex-row mt-8 md:mt-14 max-w-[1250px] mx-auto">
                <div className="part1 w-full md:w-[62%] flex flex-col justify-center pl-5 md:pl-9 lg:pl-16 pb-7">
                    <div className="title flex flex-col">
                        <h2 className='text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-semibold mb-4 pr-3' >Start Sending Crypto Currency Easily</h2>


                    </div>
                    <p className='mb-4 text-lg text-[#787A8D] font-montserrat'>Join the world largest crypto exchange</p>
                    <div>
                        <button href="/" className='btn btn-warning text-black font-semibold rounded-lg' >Connect Wallet</button>

                    </div>
                </div>

                <div className="img w-full md:w-[38%]">
                    <img src={BgImage} alt="" className='' />
                </div>
            </div>
        </>
    )
}