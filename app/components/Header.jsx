import Link from 'next/link'

export default function Header() {

    return (
        <div className="w-60 m-auto">
            <Link href='/'><h1 className=" text-4xl text-center text-gray-900 font-bold p-2 pb-6">IELTS Speaking practice</h1></Link>
            <nav className="flex justify-around ">
                <Link href='/part1'><h2>Part 1</h2></Link>
                <Link href='/part2'><h2>Part 2</h2></Link>
                <Link href='/part3'><h2>Part 3</h2></Link>
            </nav>
        </div>
    )
}  


