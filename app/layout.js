import { Delius } from "next/font/google";
import "./globals.css";
import HeaderToday from "./_components/HeaderToday";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";
import { TodaysProvider } from "./_lib/hooks/context/TodaysProvider";
import { BackgroundImage } from "./_components/BackgroundImage";


const delius = Delius({
  subsets: ['latin'],
  weight: '400', 
  display: 'swap',
})

export const metadata = {
  title: " ToDoeZel✏️",
  description: "Notes and Tasks Manager App", 
  icons: {
    icon: "/favicon.png",    
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
 
  return (
  <html lang="en" className="overflow-x-hidden relative overflow-hidden">
  <body
    className={`${delius.className} antialiased w-full h-full tracking-widest bg-stone-900 text-amber-50/90`}
  >
    <BackgroundImage/>
    <Header />
    <TodaysProvider>
      <HeaderToday />
    <main className="uppercase sm:m-7 m-2 rounded-xl shadow-lg shadow-stone-600 py-2 sm:py-7 bg-stone-700/25 max-h-screen text-center">
        {children}
      </main>
 
    </TodaysProvider>
    <Navigation />
  </body>
</html>
  );
}
