"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
 const pathname = usePathname();

  return (
    <div className='basis-[10%] shadow-2xl fixed top-0 left-0 h-screen w-[10%]'>
        <div>
          <div className='px-5 py-2'>
            <h2 className='text-2xl font-bold text-[#5FA7EE]'>SEPOLTURE</h2>
            <p className='text-xs -mt-2.5'>Admin panel</p>
          </div>
          <nav className='px-5 py-10'>
              <ul className='flex flex-col gap-4'>
                  <li><Link className={`hover:text-[#5FA7EE] duration-300 ${pathname === "/" && "underline decoration-4"}`} href={"/"}>users</Link></li>
                  <li><Link className={`hover:text-[#5FA7EE] duration-300 ${pathname === "/dashboard" && "underline decoration-4"}`} href={"/dashboard"}>dashboard</Link></li>
                  <li><Link className={`hover:text-[#5FA7EE] duration-300 ${pathname === "/orders" && "underline decoration-4"}`} href={"/orders"}>orders</Link></li>
                  <li><Link className={`hover:text-[#5FA7EE] duration-300 ${pathname === "/settings" && "underline decoration-4"}`} href={"/settings"}>settings</Link></li>
              </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar