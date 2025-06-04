import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "GymBeam Store",
  description: "Simple e-commerce store built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
