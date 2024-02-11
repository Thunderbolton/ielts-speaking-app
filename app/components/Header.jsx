'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import useWindowResize from './useWindowResize'

export default function Header() {

    const [changedTitle, setChangeTitle] = useState('IELTS Speaking practice')
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(true);
      };

    const { deviceWidth } = useWindowResize(); 
    
    useEffect(() => {
        let title;
        if(deviceWidth >= 705) {
            title = 'IELTS Speaking practice'
        } else if(deviceWidth < 705) {
            title = 'IELTS'
        }

        setChangeTitle(title);
      });


    return (
        <div className="w-7/12 m-auto
        ">
            <Link href='/'><h1 className='text-[2em] leading-snug text-center text-gray-900 font-bold pb-4' onClick={() => setActive(false)}>{changedTitle}</h1></Link>
            
            <nav className="flex justify-evenly">
                <Link href='/part1'><h1 className={isActive ? '' : 'title'} onClick={toggleClass}>Part 1</h1></Link>
                <Link href='/part2'><h1 className={isActive ? '' : 'title'} onClick={toggleClass}>Part 2</h1></Link>
                <Link href='/part3'><h1 className={isActive ? '' : 'title'} onClick={toggleClass}>Part 3</h1></Link>
            </nav>
            {/* <hr className='border-solid border-2 border-[#007984] mb-5 mt-2' /> */}
        </div>
    )
}  


