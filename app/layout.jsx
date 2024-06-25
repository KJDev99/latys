import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "LATYS",
  description: "LAYTS Buy & Sell Crypto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
