import Link from 'next/link'

export default function Header() {

    return (
        <>
            <Link href='/'><h1 className="text-3xl text-gray-900 font-bold pb-2">IELTS Speaking practice</h1></Link>
            <nav>
                <Link href='/part1'><h2>Part 1</h2></Link>
                <Link href='/part2'><h2>Part 2</h2></Link>
                <Link href='/part3'><h2>Part 3</h2></Link>
            </nav>
        </>
       
    )
}  


