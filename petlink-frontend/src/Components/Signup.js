import {useEffect, useState} from "react";
import Navbar from "./Navbar.js"

export default function Signup() {

    const [formType, setFormType] = useState(null);

    let addUser = (event) => {
        event.preventDefault();
        let form = event.target;
        let email = form.email.value;
        let name = form.name.value;
        let password = form.password.value;

        fetch("http://localhost:8080/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email, password, name})
        });
    }

    let addShelter = (event) => {
        event.preventDefault();
        let form = event.target;
        let name = form.name.value;
        let email = form.email.value;
        let address = form.address.value;
        let state = form.state.value;
        let password = form.password.value;

        fetch("http://localhost:8080/api/shelters", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, email, address, state, password})
        });
    }

    return (
        <div className='signup'>
            <Navbar/>
        
            <div className='flex items-center self-center w-[70%] h-[70vh] justify-center justify-self-center'>
                <div className>
                    <img src="./images/petcollage2.png" style={{width: "65vw", height: "50vh"}}></img>
                </div>

                <div className='flex flex-col w-[35%]'>

                    {formType == null && (
                     <div>
                     <h1 className='text-3xl mb-2'>Select Registration Type</h1>

                     <div className="mt-[-25px] flex justify-self-center justify-end gap-x-6">
                            <button type="button" onClick={() => setFormType("user")} className="mt-[30px] w-[125px] tracking-widest rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500">
                            Register User
                            </button>
                            <button type="button" onClick={() => setFormType("shelter")} className="mt-[30px] w-[125px] tracking-widest rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500">
                            Register Shelter
                            </button>
                        </div>
                    </div>
                    )}

                    {formType == "user" && (
                    <form onSubmit={addUser}>
                        <h1 className='text-3xl mb-2'>User Signup Form</h1>

                        <div className='input-field'>
                            <input id="name" name="name" type="text" placeholder="Enter name" className="gray-input ml-1 text-sm"/>
                        </div>
                        <div className='input-field'>
                            <input id="email" name="email" type="text" placeholder="Enter email" className="gray-input ml-1 text-sm"/>
                        </div>
                        <div className='input-field'>
                            <input id="password" name="password" type="password"  placeholder="Enter password" className="gray-input ml-1 text-sm"/>
                        </div>
                        <div className="mt-1 flex justify-self-center justify-end gap-x-6">
                            <button type="button" onClick={() => setFormType(null)} className="mt-[30px] tracking-widest rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500">
                            Cancel
                            </button>
                            <button type="submit" className="mt-[30px] tracking-widest rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500">
                            Save
                            </button>
                        </div>
                    </form>
                    )}

                    {formType == "shelter" && (
                    <form onSubmit={addShelter}>
                        <h1 className='text-3xl mb-2'>Shelter Registration</h1>

                        <div className='input-field'>
                            <input id="name" name="name" type="text" placeholder="Enter shelter name" className="gray-input ml-1 text-sm"/>
                        </div>

                        <div className='input-field'>
                            <input id="email" name="email" type="text" placeholder="Enter shelter email" className="gray-input ml-1 text-sm"/>
                        </div>

                        <div className='input-field'>
                            <input id="address" name="address" type="text" placeholder="Enter street address" className="gray-input ml-1 text-sm"/>
                        </div>
                        <div className='input-field'>
                            <input id="state" name="state" type="text" placeholder="Enter state" className="gray-input ml-1 text-sm"/>
                        </div>
                        <div className='input-field'>
                            <input id="password" name="password" type="password"  placeholder="Enter password" className="gray-input ml-1 text-sm"/>
                        </div>
                        <div className="mt-1 flex justify-self-center justify-end gap-x-6">
                            <button type="button" onClick={() => setFormType(null)} className="mt-[30px] tracking-widest rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500">
                            Cancel
                            </button>
                            <button type="submit" className="mt-[30px] tracking-widest rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500">
                            Save
                            </button>
                        </div>
                    </form>
                    )}

                       
                </div>
            </div>

        
        </div>
    );
}