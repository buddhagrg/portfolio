import { Inter } from "next/font/google";
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/Header";
import { Container } from "react-bootstrap";
import Footer from "@/components/Footer";
import '../assets/prism-one-dark.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buddha Gurung",
  description: "Buddha Gurung - Personal site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Container className="root-container">
          <Header />
          <div className="content-wrapper">
            {children}
          </div>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
