import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, PreLoader } from "@/components";
import { ToastContainer } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YUGA",
  description: "YUGA Architectural Studio",
  icons: {
    icon: "/yuga.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AppRouterCacheProvider>
          < ToastContainer/>
          <Header/>
          <PreLoader/>
        
          {children}
          
          
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
