import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
export default function Layout({ children }:LayoutProps) {
    return(
        <div className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
        </div>
    )
}