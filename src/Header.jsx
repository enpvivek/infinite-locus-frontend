import React from 'react'
const User = 'User'
const Header = () => {
    return (
        <div className='flex flex-row h-auto w-full border-2 justify-center items-center '>
            <div className="flex ">
                <p className='text-3xl'> Welcome {User}</p>
            </div>


        </div>
    )
}

export default Header