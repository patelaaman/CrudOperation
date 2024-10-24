import {BrowserRouter, Route, Routes,} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"
import Search from "./Pages/Search"
import EditData from "./Pages/EditData"
import Update from "./Pages/Update"
function App() {
  

  return (
    <>
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="insert" element={<Insert></Insert>}></Route>
                <Route path="display" element={<Display></Display>}></Route>
                <Route path="search" element={<Search></Search>}></Route>
                <Route path="editdata/:empid" element={<EditData></EditData>}></Route>
                <Route path="update" element={<Update></Update>}></Route>
            </Route>
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
