

const Header=()=>{
    const today = new Date().toDateString();
    return(
        <div className='flex items-center justify-center mt-10 '>
            <div className='flex justify-between items-center shadow-2xl  bg-white w-[80%]  p-4 font-bold text-2xl rounded-2xl'>
                <div className='flex items-center gap-1'>
                    <i class="fa-solid fa-atom fa-lg" style={{color: 'rgb(22, 22, 22)'}}></i>
                    <h1 className='lg:text-2xl md:text-2xl text-lg'>Counter Dashboard</h1>
                </div>
                
                <h2 className="lg:text-sm md:text-sm text-xs">{today}</h2>
                
            </div>
            
        </div>
    )
}
export default Header