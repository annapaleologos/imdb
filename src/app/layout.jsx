import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
