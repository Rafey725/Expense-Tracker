import InputIncomeSource from "./InputIncomeSource"

export default function ({ incomeData, handleHover, handleLeave, hoveredId, deleteIncome, editIncomeBox, removeIncomeBox, inputSource, handleEditedInput }) {

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
                    {/* Edit button */}
                    <button onClick={() => editIncomeBox(data.id)}
                        className={`${hoveredId === data.id ? "visible" : "hidden"} cursor-pointer`}>
                        <img src="src/assets/editIcon.png" className="w-5 h-5 invert-50 " alt="edit" />
                    </button>
                    {/* Delete button */}
                    <button onClick={() => deleteIncome(data.id)}
                        className={`${hoveredId === data.id ? "visible" : "hidden"} cursor-pointer`}>
                        <img src="src/assets/deleteIcon.png" className="w-5 h-5 invert-50 " alt="delete" />
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
    return (
        <>
            {/* Edit income */}
            {inputSource === "edit" && <InputIncomeSource event={"edit"} removeIncomeBox={removeIncomeBox} handleEditedInput={handleEditedInput} />}
            {incomeElments}
        </>
    )
}