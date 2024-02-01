import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'


export const metadata = {
  title: 'IELTS Speaking Practice',
  description: 'IELTS speaking practice. Prepare for the English academic language test by practicing questions from each part of the speaking section',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        <div className='wrapper'>
          <main className='w-11/12 m-auto selection:bg-[#007984] selection:text-[#eef9fb]'>{children}</main>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
