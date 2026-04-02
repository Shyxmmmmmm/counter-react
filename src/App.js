import './index.css'
import Counter from './Components/Counter'
import Header from './Components/Header'
import Footer from './Components/Footer'
const App=()=>{
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
                <Counter />
            </div>
            <Footer />
        </div>
    )
}
export default App