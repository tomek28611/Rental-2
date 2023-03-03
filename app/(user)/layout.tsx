import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        {/* <Header /> */}
        <Banner />
        {children}
        <div>
        <Reviews />
        <Footer />
          
        </div>
      </body>
    </html>
  );
}
