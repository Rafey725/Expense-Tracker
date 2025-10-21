import ExpenseElements from "./ExpenseElements";
import InputExpense from "./InputExpense";
import { useState, useEffect } from "react";

export default function Expense({ expenseData, setExpenseData, handleHover, handleLeave, hoveredId, deleteExpense }) {
    // Add income sources and display them
    let [inputExpense, setInputExpense] = useState(false)


    // Save data to local storage whenever state updated
    useEffect(() => {
        localStorage.setItem("Expenses", JSON.stringify(expenseData))
    }, [expenseData])

    // Add and Remove income box
    function addExpenseBox() {
        setInputExpense(true);
    }
    function removeExpenseBox() {
        setInputExpense(false);
    }

    // Handle submit
    function handleInput(e) {
        e.preventDefault();
        let formData = new FormData(e.target)
        let data = Object.fromEntries(formData.entries())

        // Save to data to state
        data.id = Date.now()
        setExpenseData(prevData => [...prevData, data])

        setInputExpense(false)
    }

    return (
        <main className="bg-[#0b0b0b] w-full h-full rounded-lg overflow-y-auto flex flex-col">
            <div className="px-2.5 sm:px-6 py-4 border-b border-white/30 flex justify-between items-center">
                {/* Heading */}
                <h1 className="text-xl sm:text-3xl font-bold font-[sans-serif]">Expenses</h1>

                {/* Add new expense */}
                <button onClick={addExpenseBox}
                    className="flex items-center gap-1 text-[13px] h-7 font-medium text-[#ffffffcc] cursor-pointer bg-[#26252568] transition duration-200 hover:bg-[#262525] px-2 rounded-md">
                    <span className="text-[16px] mb-1">+</span>
                    <span>Add new expense</span>
                </button>

                {/* Add new expense */}
                {inputExpense && <InputExpense removeExpenseBox={removeExpenseBox} handleInput={handleInput} />}
            </div>

            {/* Expense Content */}
            <div className="h-full bg-[#a8a8a80a] px-2.5 sm:px-6 py-3 sm:py-6  flex flex-col gap-4">
                <ExpenseElements expenseData={expenseData} handleHover={handleHover} handleLeave={handleLeave} deleteExpense={deleteExpense} hoveredId={hoveredId}/>
            </div>
        </main>
    )
}