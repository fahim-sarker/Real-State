import React from 'react'
import  Container  from "../Components/Container"
import Logo from "../assets/logo.png"
import Signupreusable from './Signupreusable'

const Navbar = () => {
  return (
    <>
      <section className="bg-[#3758F9] py-6">
        <Container>
            <div className="flex justify-between items-center">
                <div className="w-1/5">
                    <img src={Logo} alt="Logo" className='h-20 w-20 rounded-full'/>
                </div>
                <div className="w-3/5 flex justify-center">
                    <ul className='flex gap-x-10'>
                        <li className='font-popins text-lg text-white capitalize hover:text-[#F3F4F6]'>home</li>
                        <li className='font-popins text-lg text-white capitalize hover:text-[#F3F4F6]'>about</li>
                        <li className='font-popins text-lg text-white capitalize hover:text-[#F3F4F6]'>pricing</li>
                        <li className='font-popins text-lg text-white capitalize hover:text-[#F3F4F6]'>blog</li>
                    </ul>
                </div>
                <div className="w-1/5 flex gap-x-3 justify-end">
                    <Signupreusable
                        label="sign in"
                        text="text-white"
                    />
                    <Signupreusable
                        label="sign up"
                        bgColor="bg-white"
                        text="black"
                    />
                </div>
            </div>
        </Container>
      </section>
    </>
  )
}

export default Navbar
