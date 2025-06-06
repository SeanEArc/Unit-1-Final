import './index.css'
import Dashboard from './components/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import CalorieHistory from './components/CalorieHistory'
import TopOfPage from './components/TopOfPage'
import HowItWorks from './components/HowItWorks'

const App = () => {

  // Handles Quick Log
  const handleAddEntry = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
  };

  return (

    <div className='App'>

      <BrowserRouter>

        <TopOfPage onSubmitEntry={handleAddEntry}/>
          
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/calorieHistory'element={<CalorieHistory/>}/>
            <Route path='/howItWorks' element={<HowItWorks/>}/>
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>

        <Footer/> 

      </BrowserRouter>
      
    </div>

  )
}

export default App
