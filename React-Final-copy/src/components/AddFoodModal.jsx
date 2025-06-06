import { useState, useRef } from 'react'
import { addFood } from './foodStorage'

// When onClose is equal to true, AddFoodModal will close

const AddFoodModal = ({ onClose }) => {

	const [foodName, setFoodName] = useState("");
	const [calories, setCalories] = useState("")
	const [protein, setProtein] = useState("")
	const [carbs, setCarbs] = useState("")
	const [fat, setFat] = useState("")


	const modalRef = useRef();

	// Closes AddFoodModal if clicked outside of the AddFoodModal
	const closeModal = (event) => {
		if(modalRef.current === event.target)
		onClose()
	}

	// Handle's submit
	const handleSubmit = (event) => {
		event.preventDefault(); 

		const newItemLogged = {
		foodName: foodName,
		calories: Number(calories),
		protein: Number(protein),
		carbs: Number(carbs),
		fat: Number(fat),
		};

		addFood(newItemLogged);
		
		// Clear's form after submit
		setFoodName("");
		setCalories("");
		setProtein("");
		setCarbs("");
		setFat("");
		
		onClose();
	};
		
	return (
		// modalRef is now equal to the AddFoodModal Backdrop
	<div ref={modalRef} 
	onClick={closeModal}
	className="flex fixed inset-0 backdrop-blur-sm items-center justify-center z-50">
			
		<div className="grid grid-row-6 bg-zinc-50 p-6 rounded-lg shadow-xl w-[550px] max-w-[1000px] border">

			<form id='Log Food Item' onSubmit={handleSubmit} className="flex flex-col gap-1">

				<h2 className="text-xl font-semibold text-center"> Log Food </h2>

				

				<label className="font-bold flex flex-col text-md mb-1"> 
				Name of food:
					<input type="text"
					value={foodName}
					placeholder="Required"
					onChange={(event) => setFoodName(event.target.value)}
					required
					className="mt-1 p-1 rounded-md border border-zinc-300 "/>
				</label> 
				
				<label className="font-bold flex flex-col text-md"> Calories:  
					<input type="number"
					value={calories} 
					placeholder="Required"
					onChange={(event) => setCalories(event.target.value)}
					required
					className="mt-1 p-1 rounded-md border border-zinc-300 "/>
				</label>

				<h2 className="text-center font-bold mt-4 mb-2 "> Macro's </h2>


				<div className="grid grid-cols-3 text-center mb-2">

					<label className="font-bold flex flex-col text-md mb-1 "> 
					Protein
					<input type="number"
					value={protein}
					placeholder="Optional"
					onChange={(event) => setProtein(event.target.value)}
					className="mt-1 p-1 rounded-md border border-zinc-300 text-shadow-white" />
					</label>
					
					<label className="font-bold flex flex-col text-md mb-1">
					Carbs
					<input type="number"
					value={carbs}
					placeholder="Optional"
					onChange={(event) => setCarbs(event.target.value)}
					className="mt-1 p-1 rounded-md border border-zinc-300 "/>
					</label>

					<label className="font-bold flex flex-col text-md mb-1">
					Fats
					<input type="number"
					value={fat}
					placeholder="Optional"
					onChange={(event) => setFat(event.target.value)} 
					className="mt-1 p-1 rounded-md border border-zinc-300 "/>
					</label>

				</div>

					<hr className="mb-1 border-t border-zinc-300 opacity-50" />

					<input type="submit" value="Submit" className="mt-2 px-4 py-2 bg-blue-500 text-white shadow-md rounded hover:cursor-pointer hover:bg-blue-600 hover:scale-101"/>

					<button
					onClick={onClose}
					className="mt-2 px-4 py-2 bg-red-500 text-white shadow-md rounded hover:bg-red-600 hover:scale-101">
					Close
					</button>

			</form>

		</div>
	</div>
	)
}

export default AddFoodModal;