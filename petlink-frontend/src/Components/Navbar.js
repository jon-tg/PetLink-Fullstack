import "../App.css";


function Navbar() {
    return (
        <div className='navbar bg-blue items-center justify-self-center w-[100%] h-[8vh] bg-gray-800 flex'>
            <h1 className=' ml-20 mr-1 text-white header-title'> Pet-Link</h1>
            <img src="./images/paw2.png" className='mr-7 w-[40px] h-[40px] mt-1'></img>
            <a href="./"><p className='mr-5 text-white header-item'>Home</p></a>
            <p className='mr-5 text-white header-item'>Shelters</p>
            <p className='mr-5 text-white header-item'>Pets</p>
            <div className='2xl:w-[46%] xl:w-[38%] lg:w-[24%] md:w-[2%]'></div>
            <p className='mr-5 text-white header-item'>Login</p>
            <a href="./signup"><p className='mr-5 text-white header-item'>Sign Up</p></a>         

        </div>

    );
}

export default Navbar;