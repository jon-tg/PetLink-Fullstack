import Navbar from "./Navbar.js";
import "../App.css";

export default function Homepage() {
    return (
        <div>
            <header className="App-header">
                <div className='flex flex-col'>
                <Navbar/>

                <div className="flex self-center flex-row mt-[5vh] w-[90%]">

                    <div className='basis-1/2 mr-5'>
                        <div className='flex flex-col mt-[12%]'>
                        <h1 className='main-quote mb-5'>You can't change a dog's past, but you can rewrite his future.</h1>
                        <button type="button" className="w-[70%] rounded-lg bg-indigo-50 mx-auto px-3.5 py-2.5 text-[1.7vw] font-semibold text-indigo-600 tracking-widest shadow-xs hover:bg-indigo-100 dark:bg-indigo-500/20 dark:text-indigo-400 dark:shadow-none dark:hover:bg-indigo-500/30">
                        Browse Local Shelters </button>
                        </div>
                    </div>

                    <div className='basis-3/4'>
                    <video autoplay="true" muted="false" loop="false" class="background-video border-solid drop-shadow-lg border-black border-1 w-[95%]">
                            <source src="./images/doggy.mp4" />
                    </video>
                    </div>

                </div>
                </div>

            </header>
        </div>
    );
}