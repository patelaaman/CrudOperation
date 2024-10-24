import { Outlet } from "react-router-dom"
import Header from "./Component/Header"
import Footer from "./Component/Footer"

const Layout =()=>{
    return(
        <>
        <Header></Header>
        <hr size="4px" color="yellow"></hr>
        <Outlet></Outlet>
        <hr size="4px" color="yellow"></hr>
        <Footer></Footer>
        
        </>
    )
}
export default Layout