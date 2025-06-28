import Coraje from './../assets/Coraje.gif';
import Laptop from './../assets/laptop.gif';
import Gato from './../assets/gatito.gif';
import Compu from './../assets/pc.gif';
import Bean from './../assets/bean.gif';
import Tecla from './../assets/push.gif';

export default function SectionFour () {

    const movies = [
        {fecha: "2021-11-04 02:02", from:"Antony", to:"Lizandro", amount:"S/. 120", message:"Hello, this is a message", gif: Coraje},
        {fecha: "2005-07-14 10:20", from:"William", to:"Fabian", amount:"S/. 150", message:"Hi bro! What's up", gif: Laptop},
        {fecha: "2025-06-24 23:12", from:"Jimmy", to:"Fabrizzio", amount:"S/. 80", message:"I like Ice cream", gif: Gato},
        {fecha: "2023-12-15 06:38", from:"Diego", to:"Daniel", amount:"S/. 100", message:"Hi! Nice to meet you", gif: Compu},
        {fecha: "2023-12-15 06:38", from:"Ana", to:"Oliver", amount:"S/. 130", message:"Are you happy?", gif: Bean},
        {fecha: "2023-12-15 06:38", from:"Juan", to:"Mirely", amount:"S/. 250", message:"Love Love Love Love", gif: Tecla},
    ]







    return(

        <>
            <div className="flex flex-col mt-8 md:mt-14 max-w-[1250px] mx-auto gap-y-14 mb-20">
                <h3 className="text-4xl font-semibold text-left md:pl-7 lg:pl-16 ">Latest Transactions</h3>
                <div className="flex flex-col flex-wrap md:gap-x-14 gap-y-7 md:flex-row items-center justify-center mx-auto font-poppins">

                    {
                        movies.map((movie, index) => (
                            <div key={index} className="card bg-[#21242D] w-80 content">
                                <img src={movie.gif} alt="" className='my-7 max-w-72 h-[180px] mx-auto object-cover px-7'/>
                                <div className="middle-300 mx-auto -mt-9 -mb-1">
                                    <span className='text-center bg-red-500 px-5 py-1 rounded-lg text-sm'>{movie.fecha}</span>
                                </div>
                                <div className="card-body">
                                    <p className='text-[#787A8D]'>From: <span className='text-white'>{movie.from}</span> </p>
                                    <p className='text-[#787A8D]'>To: <span className='text-white'>{movie.to}</span></p>
                                    <p className='text-[#787A8D]'>Amount: <span className='text-white'>{movie.amount}</span></p>
                                    <p className='text-[#787A8D]'>Message: <span className='text-white'>{movie.message}</span></p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}