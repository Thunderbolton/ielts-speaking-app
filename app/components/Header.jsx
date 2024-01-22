'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {

    const [changedTitle, setChangeTitle] = useState('IELTS Speaking practice')
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);


    useEffect(() => {
        const resizeW = () => changeDeviceSize(window.innerWidth);
    
        window.addEventListener("resize", resizeW);

        let title;
        if(deviceSize >= 705) {
            title = 'IELTS Speaking practice'
        } else if(deviceSize < 705) {
            title = 'IELTS'
        }

        setChangeTitle(title);

        return () => window.removeEventListener("resize", resizeW);
      });


    return (
        <div className="w-7/12 m-auto
        ">
            <Link href='/'><h1 className='text-[2em] leading-snug text-center text-gray-900 font-bold pb-4'>{changedTitle}</h1></Link>
            
            <nav className="flex justify-evenly">
                <Link href='/part1'><h1>Part 1</h1></Link>
                <Link href='/part2'><h1>Part 2</h1></Link>
                <Link href='/part3'><h1>Part 3</h1></Link>
            </nav>
        </div>
    )
}  


