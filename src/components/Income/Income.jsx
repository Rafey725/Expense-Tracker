import { useEffect, useState } from "react";
import InputIncomeSource from "./InputIncomeSource";
import IncomeElements from "./IncomeElements";

export default function Income({ incomeData, setIncomeData, handleHover, handleLeave, hoveredId, deleteIncome, addIncomeBox, editIncomeBox, removeIncomeBox, inputSource, handleEditedInput }) {
    // Save data to local storage whenever state updated
    useEffect(() => {
        localStorage.setItem("Incomes", JSON.stringify(incomeData))
    }, [incomeData])

    // Handle submit
    function handleInput(e) {
        e.preventDefault();
        let formData = new FormData(e.target)
        let data = Object.fromEntries(formData.entries())

        // Save to data to state
        data.id = Date.now()
        console.log(data.id);

        setIncomeData(prevData => [...prevData, data])

        removeIncomeBox()
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
                {inputSource === "new" && <InputIncomeSource event={"new"} removeIncomeBox={removeIncomeBox} handleInput={handleInput} />}
            </div>

            {/* Income Content */}
            <div className="h-full bg-[#a8a8a80a] px-2.5 sm:px-6 py-3 sm:py-6  flex flex-col gap-4">
                <IncomeElements incomeData={incomeData} handleHover={handleHover} handleLeave={handleLeave} deleteIncome={deleteIncome} hoveredId={hoveredId} editIncomeBox={editIncomeBox} removeIncomeBox={removeIncomeBox} inputSource={inputSource} handleEditedInput={handleEditedInput} />
            </div>
        </main >
    )
}