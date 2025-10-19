import { useEffect, useState } from "react";
import InputIncomeSource from "./InputIncomeSource";

export default function Income() {
    let [inputSource, setInputSource] = useState(false)
    let [hoveredId, setHoveredId] = useState()
    let [incomeData, setIncomeData] = useState(() => {
        const savedIncomes = localStorage.getItem("Incomes");
        if (savedIncomes && savedIncomes !== "undefined") {
            return JSON.parse(savedIncomes)
        } else {
            return [];
        }
    })

    // Save data to local storage whenever state updated
    useEffect(() => {
        localStorage.setItem("Incomes", JSON.stringify(incomeData))
    }, [incomeData])

    // Add and Remove income box
    function addIncomeBox() {
        setInputSource(true);
    }
    function removeIncomeBox() {
        setInputSource(false);
    }

    // Handle submit
    function handleInput(e) {
        e.preventDefault();
        let formData = new FormData(e.target)
        let data = Object.fromEntries(formData.entries())

        // Save to data to state
        data.id = Date.now()

        setIncomeData(prevData => [...prevData, data])

        setInputSource(false)
    }

    // Hovering functionality
    function handleHover(id) {
        setHoveredId(id)
    }
    function handleLeave() {
        setHoveredId()
    }

    // Income source elements 
    let incomeElments = incomeData ? incomeData.map((data) => {
        return (
            <div key={data.id}
                onMouseEnter={() => handleHover(data.id)}
                onMouseLeave={handleLeave}
                className="flex justify-between items-center h-[70px] bg-[#1b1b1b73] hover:bg-[#262525] transition duration-200 rounded-md px-4" >
                <div>
                    <h3 className="text-[18px] font-semibold">{data.title}</h3>
                </div>
                <div className="flex gap-5 items-center">
                    <button onClick={() => deleteIncome(data.id)}
                        className={`${hoveredId === data.id ? "visible" : "hidden"} cursor-pointer`}>
                        <img src="src/assets/deleteIcon.png" className="w-5 h-5 invert-70 " alt="delete" />
                    </button>
                    <div className="text-green-400 h-[25px] pb-0.5 bg-green-200/15 rounded-md px-1 flex items-center gap-1">
                        <p className="text-[15px] font-medium">+</p>
                        <p className="text-[13px] mt-[3px] font-medium">${data.amount}</p>
                        <p className="text-[17px]">↗</p>
                    </div>
                </div>
            </div >
        )
    }) : null

    // Deleting element functionality
    function deleteIncome(id) {
        setIncomeData(prevData => prevData.filter(data => data.id !== id))
    }

    // localStorage.clear()
    return (
        <main className="bg-[#0b0b0b] w-full h-full rounded-lg overflow-y-auto flex flex-col">
            <div className="px-2.5 sm:px-6 py-4 border-b border-white/30 flex justify-between items-center">
                {/* Heading */}
                <h1 className="text-xl sm:text-3xl font-bold font-[sans-serif]">Income Sources</h1>

                {/* Add income button */}
                <button onClick={addIncomeBox}
                    className="flex items-center gap-1 text-[13px] h-7 font-medium text-[#ffffffcc] cursor-pointer transition duration-200 bg-[#26252568] hover:bg-[#262525] px-2 rounded-md text-nowrap">
                    <span className="text-[16px] mb-1">+</span>
                    <span>Add new income</span>
                </button>

                {/* Add new income source */}
                {inputSource && <InputIncomeSource removeIncomeBox={removeIncomeBox} handleInput={handleInput} />}
            </div>

            {/* Income Content */}
            <div className="h-full bg-[#a8a8a80a] px-2.5 sm:px-6 py-3 sm:py-6  flex flex-col gap-4">
                {incomeElments}
            </div>
        </main >
    )
}