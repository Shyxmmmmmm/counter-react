import { useState } from 'react'

const Counter = () => {
    const [number, func1] = useState(0)
    const [touched, setTouched] = useState(false)

    const change1 = () => {
        func1(number - 1)
        setTouched(true)
    }

    const change2 = () => {
        func1(0)
        setTouched(false)
    }

    const change3 = () => {
        func1(number + 1)
        setTouched(true)
    }

    return (
        <div className='flex justify-center '>
            <div className='bg-white mt-10 lg:w-[50%] md:w-[50%] w-[65%] p-10 rounded-2xl'>
                <div className='flex justify-center md:h-[190px] h-[140px] lg:h-[200px]'>
                    <div className='bg-blue-300  lg:w-[27%] md:w-[33%] lg:h-[80%] md:h-[70%] w-[45%] h-[80%] rounded-full'>
                        <span className='flex items-center h-full justify-center text-5xl text-white'>{number}</span>
                    </div>
                </div>

                <span
                    className={`flex justify-center items-center mb-5 h-[24px]
                             ${touched
                            ? (number === 0 ? "text-red-500" : "text-green-500")
                            : "invisible"
                        }`}
                >
                    {number === 0 ? "Minimum Limit Reached" : "Dashboard Active"}
                </span>


                <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 md:gap-10 gap-2 lg:gap-16 lg:px-5'>
                    <button onClick={change3} className='border p-3 border-black bg-gradient-to-l font-semibold from-[#00BE78] to-[#00C756] text-white transition transform hover:scale-110 hover:shadow-green-600 hover:bg-gradient-r hover:from-green-500 hover:to-green-800 hover:shadow rounded-xl duration-300'><i class="fa-solid fa-plus fa-2xs pr-5" style={{ color: 'rgb(255, 255, 255)' }}></i>Increment</button>
                    <button onClick={change2} className={`${number===0 ? 'opacity-50 cursor-not-allowed':''} border p-3 border-black bg-gradient-to-l font-semibold from-[#34435A] to-[#43536A] text-white transition transform hover:scale-110 hover:shadow-gray-600 hover:bg-gradient-l hover:from-gray-500 hover:to-gray-800 hover:shadow rounded-xl duration-300`}><i class="fa-solid fa-arrows-rotate fa-2xs pr-5" style={{ color: 'rgb(255, 255, 255)' }}></i>Reset</button>
                    <button onClick={change1} disabled={number===0}  className={` ${number === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ''
                        } border p-3 border-black bg-gradient-to-l font-semibold from-[#F7338F] to-[#FA2D3D] text-white transition transform hover:scale-110 hover:shadow-red-600 hover:bg-gradient-r hover:from-red-500 hover:to-red-800 hover:shadow rounded-xl duration-300`}><i class="fa-solid fa-minus fa-2xs pr-5" style={{ color: 'rgb(255, 255, 255)' }} ></i>Decrement</button>

                </div>
            </div>
        </div>
    )
}
export default Counter