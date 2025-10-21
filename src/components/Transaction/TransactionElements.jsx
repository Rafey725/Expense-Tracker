export default function ({ transactionData, handleHover, handleLeave, hoveredId, deleteTransaction }) {
    let transactionElments = transactionData ? transactionData.map((data) => {
        return (
            <div key={data.id}
                onMouseEnter={() => handleHover(data.id)}
                onMouseLeave={handleLeave}
                className="flex justify-between items-center h-[70px] bg-[#1b1b1b73] hover:bg-[#262525] transition duration-200 rounded-md px-4" >
                <div className="w-[150px] flex items-center justify-between">
                    <div>
                        <h3 className="text-[18px] font-semibold -mb-1.5">{data.title}</h3>
                        <p className="text-white/50 text-[13px] font-semibold">{data.category}</p>
                    </div>
                    <p className="text-[12px] font-semibold">{data.date}</p>
                </div>
                <div className="flex gap-5 items-center">
                    <button onClick={() => deleteTransaction(data.id)}
                        className={`${hoveredId === data.id ? "visible" : "hidden"} cursor-pointer`}>
                        <img src="src/assets/deleteIcon.png" className="w-5 h-5 invert-70 " alt="delete" />
                    </button>
                    <div className={`${data.type.toLowerCase() === "income" ? "text-green-400 bg-green-200/15" : "text-red-600 bg-red-200/15"} h-[25px] pb-0.5  rounded-md px-1 flex items-center gap-1`}>
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
            {transactionElments}
        </>
    )
}