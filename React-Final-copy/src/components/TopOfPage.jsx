import AddFoodModal from "./AddFoodModal"
import { useState } from "react"
import { Link } from "react-router-dom"
import './TopOfPageStyling.css'

const TopOfPage = ( ) => {

      const [showModal, setShowModal] = useState(false)
      
      return (

            <div>
                  
                  <div className="grid md:grid-cols-11 flex-auto text-center w-full bg-cyan-100 font-bold ">

                        <Link to='/' 
                        className="top-title-link flex-auto w-full col-start-4 col-end-9 text-4xl text-center font-bold pt-2 pb-2 bg-cyan-100 "> 
                        Calorie Counter 
                        </Link>

                  </div>

                  <div className="top-nav-bar grid grid-cols-5 w-full flex-auto text-center bg-cyan-100 font-bold text-base border-b-2 border-gray-400 drop-shadow-md pb-0.5">

                        <button 
                        className="quick-log-button flex-auto col-start-2 hover:bg-cyan-200 p-0.5 rounded hover:cursor-pointer"
                        onClick={() => setShowModal(true)}> Quick Log </button>

                        <Link to='/HowItWorks' 
                        className="how-it-works-link flex-auto col-start-3 hover:bg-cyan-200 p-0.5 rounded "> How it works </Link>

                        <Link to='/CalorieHistory' 
                        className="history-link flex-auto col-start-4 hover:bg-cyan-200 p-0.5 rounded history-link"> Calorie History </Link>

                  </div>

                  {showModal && (<AddFoodModal onClose={() => setShowModal(false)}/>)}

            </div>
      )
}

export default TopOfPage