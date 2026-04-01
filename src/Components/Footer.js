

const Footer = () => {
    return (
        <div className="bg-white mt-10 flex py-6 px-3 justify-between items-center">
            <h1 className="font-semibold lg:text-sm md:text-sm text-xs">Build with React and Tailwind CSS</h1>
            <div className="hidden lg:block md:block">
                <div className="flex  lg:gap-10 md:gap-10 gap-2">
                    <i class="fa-brands fa-instagram fa-lg " style={{ color: 'rgb(22, 22, 22)' }}></i>
                    <i class="fa-brands fa-twitter fa-lg " style={{ color: 'rgb(22, 22, 22)' }}></i>
                    <i class="fa-brands fa-skyatlas fa-lg " style={{ color: 'rgb(22, 22, 22)' }}></i>
                </div>
            </div>
            <h1 className="lg:text-md md:text-md text-xs">&copy; 2026 Counter Dashboard</h1>
        </div>)
}

export default Footer