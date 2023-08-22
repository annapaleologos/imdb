import "./globals.css";
import Header from '@/components/Header';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
      {/* Navbar */}
      {/* Searchbox */}
      
      
      {children}</body>
    </html>
  );
}
