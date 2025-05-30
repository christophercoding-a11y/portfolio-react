
import { Routes, Route } from 'react-router'

import Header from "./components/Header"
import Footer from './components/Footer'
import Main from './components/Main'
import Home from './components/Home'

import Error from './components/Error'

const App =()=> {


    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/projects" element={ <Main />} />
            <Route path="*" element={ <Error />} />
        </Routes>
        <Footer />
        </>
    )
}

export default App