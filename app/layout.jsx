import './globals.css'
import Header from './components/Header'


export const metadata = {
  title: 'IELTS Speaking Practice',
  description: 'IELTS speaking practice. Prepare for the English academic language test by practicing questions from each part of the speaking section',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className='text-gray-600 p-3 m-3'>
        <Header />
        <main>{children}</main>
        <footer className='mt-4'>&copy; 2023</footer>
      </body>
      
    </html>
  )
}
