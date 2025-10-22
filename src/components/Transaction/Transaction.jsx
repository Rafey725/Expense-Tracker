import { useState, useEffect } from "react"
import InputTransaction from "./InputTransaction"
import TransactionElements from "./TransactionElements"

export default function Transaction({ transactionData, handleHover, handleLeave, hoveredId, deleteTransaction, setTransactionData, addTransactionBox, editTransactionBox, removeTransactionBox, inputTransaction,handleEditedInput }) {

    // Save data to local storage whenever state updated
    useEffect(() => {
        localStorage.setItem("Transactions", JSON.stringify(transactionData))
    }, [transactionData])


    // Handle submit
    function handleInput(e) {
        e.preventDefault();
        let formData = new FormData(e.target)
        let data = Object.fromEntries(formData.entries())
        data.id = Date.now()
        // Save to data to state
        setTransactionData(prevData => [...prevData, data])

        removeTransactionBox()
    }

    return (
        <main className="bg-[#0b0b0b] w-full h-full rounded-lg overflow-y-auto flex flex-col">
            <div className="px-2.5 sm:px-6 py-4 border-b border-white/30 flex justify-between items-center">
                {/* Heading */}
                <h1 className="text-xl sm:text-3xl font-bold font-[sans-serif]">Transactions</h1>

                {/* Add income button */}
                <button onClick={addTransactionBox}
                    className="flex items-center gap-1 text-[13px] h-7 font-medium text-[#ffffffcc] cursor-pointer transition duration-200 bg-[#26252568] hover:bg-[#262525] px-2 rounded-md text-nowrap">
                    <span className="text-[16px] mb-1">+</span>
                    <span>Add new transaction</span>
                </button>

                {/* Add new transaction */}
                {inputTransaction === "new" && <InputTransaction event={"new"} removeTransactionBox={removeTransactionBox} handleInput={handleInput} />}
            </div>

            <div className="h-full bg-[#a8a8a80a] px-2.5 sm:px-6 py-3 sm:py-6  flex flex-col gap-4">
                <TransactionElements transactionData={transactionData} handleHover={handleHover} handleLeave={handleLeave} deleteTransaction={deleteTransaction} hoveredId={hoveredId} editTransactionBox={editTransactionBox} removeTransactionBox={removeTransactionBox} inputTransaction={inputTransaction} handleEditedInput={handleEditedInput}/>
            </div>
        </main>
    )
}