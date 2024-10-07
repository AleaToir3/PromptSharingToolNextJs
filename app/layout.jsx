import Nav from '@components/Nav';
import '@styles/globals.css';
 
export const metadata = {
    title : 'Prompt Master',
    description: "Save and share prompt for chatgtp"
}
const RootLayout = ( {children}) => {
  return (
    <html>
        <body>
            <div className = 'main'>
                <div className="gradient"/>            
            </div> 
            <main className='app'>
            <Nav />
                {children}
            </main>
        </body>
    </html>  )
}

export default RootLayout