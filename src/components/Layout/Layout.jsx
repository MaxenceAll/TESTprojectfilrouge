import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import './Layout.css'

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}