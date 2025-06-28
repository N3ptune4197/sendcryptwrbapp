import Check from './../assets/vector-check.svg';
import Wallet from './../assets/vector-wallet.svg';
import Info from './../assets/vector-info.svg';


export default function SectionTwo() {

 


  return (
    <div className='flex flex-col flex-wrap gap-x-18 gap-y-7 md:flex-row items-center justify-center max-w-[1250px] mx-auto font-poppins'>

        <div className="card w-80 lg:w-80 h-72 shadow-sm justify-center align-middle items-center border font-poppins">
              <img src={Check} alt="Strong Security" className='w-[65px] h-[65px] mt-10' />
            <div className="card-body items-center">
              <h2 className="card-title text-3xl mb-1 mt-3 text-center font-semibold">Strong Security</h2>
              <p className='text-center text-[#787A8D]'>Secure transaction and record information with 2-factor authentication (2FA)</p>
            </div>
        </div>

        <div className="card w-80 lg:w-80 h-72 shadow-sm justify-center align-middle items-center border font-poppins">
            <img src={Wallet} alt="Strong Security" className='w-[65px] h-[65px] mt-10' />

            <div className="card-body items-center">
              <h2 className="card-title text-3xl mb-3 mt-3 text-center font-semibold">Payment Options</h2>
              <p className='text-center text-[#787A8D]'>Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer</p>
            </div>
        </div>

        <div className="card w-80 lg:w-80 h-72 shadow-sm justify-center align-middle items-center border font-poppins">
            <img src={Info} alt="Strong Security" className='w-[65px] h-[65px] mt-10' />

            <div className="card-body items-center">
              <h2 className="card-title text-3xl mb-3 mt-3 text-center font-semibold">Market Updated</h2>
              <p className='text-center text-[#787A8D]'>The most accurate and trusted source for market cap, valuation, and cryptocurrency information</p>
            </div>
        </div>
    </div>
  );
}