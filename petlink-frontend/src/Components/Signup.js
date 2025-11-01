import Navbar from "./Navbar.js"

export default function Signup() {

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

    return (
        <div className='signup '>
        <Navbar/>
        
        <div className='mt-10 mx-auto  flex flex-col h-[70vh] self-center justify-center'>
            <h1 className='text-3xl mb-2'>User Signup Form</h1>
            <form onSubmit={addUser}>
                 <div className="flex flex-row justify-self-center items-center">
                    <label htmlFor="name" className="block text-2xl font-medium text-gray-900 dark:text-white"> Enter name: </label>
                    <input id="name" name="name" type="text" placeholder="janesmith" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none text-2xl dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"/>
                </div> 


                <div className="flex flex-row justify-self-center items-center">
                    <label htmlFor="email" className="block text-2xl font-medium text-gray-900 dark:text-white"> Enter email: </label>
                    <input id="email" name="email" type="text" placeholder="janesmith@gmail.com" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none text-2xl dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"/>
                </div> 

                <div className="flex flex-row justify-self-center items-center">
                    <label htmlFor="password" className="block text-2xl font-medium text-gray-900 dark:text-white"> Enter password: </label>
                    <input id="password" name="password" type="password"  className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none text-2xl dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"/>
                </div> 

                <div className="mt-1 flex justify-self-center justify-end gap-x-6">
                    <button type="button" className="text-xl font-semibold text-gray-900 dark:text-white">
                    Cancel
                    </button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500">
                    Save
                    </button>
                </div>
            </form>
        </div>
        
        </div>
    );
}