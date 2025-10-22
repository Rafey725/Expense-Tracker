export default function InputTransaction({ event, removeTransactionBox, handleInput,handleEditedInput }) {

    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/70 flex flex-col justify-center items-center">
            <div className='sm:min-h-100 sm:min-w-120 px-3 py-3 bg-white/5 text-white/70 rounded-lg relative z-10'>
                <div className='py-2 flex justify-between items-center border-b border-white/30'>
                    <h2 className='text-xl sm:text-3xl font-bold'>{event === "new" ? "New Transaction" : "Edit Transaction"}</h2>
                    <button onClick={removeTransactionBox}
                        className='text-[#00d8c4] pb-0.5 flex items-center text-[16px] h-7 font-medium cursor-pointer transition duration-200 bg-[#262525e5] hover:bg-[#353434] px-2 rounded-md text-nowrap'>X</button>
                </div>

                <form onSubmit={event === "new" ? handleInput : (e) => handleEditedInput(e, "transaction")} className='py-4 flex flex-col gap-5 opacity-100'>
                    <label htmlFor="title" className='flex flex-col sm:flex-row items-start sm:items-center justify-between text-[15px] sm:text-[18px] font-bold gap-y-1 gap-x-4'>Title
                        <input type="text" id="title" name='title' className='h-12 w-[270px] sm:w-[370px]  bg-white/30 rounded-[4px] outline-none px-1 text-[16px] font-semibold text-white' placeholder='Enter title' />
                    </label>
                    <label htmlFor="type" className='flex flex-col sm:flex-row items-start sm:items-center justify-between text-[15px] sm:text-[18px] font-bold gap-y-1 gap-x-4'>Type
                        <input type="text" id="type" name='type' className='h-12 w-[270px] sm:w-[370px]  bg-white/30 rounded-[4px] outline-none px-1 text-[16px] font-semibold text-white' placeholder='Enter type' />
                    </label>
                    <label htmlFor="category" className='flex flex-col sm:flex-row items-start sm:items-center justify-between text-[15px] sm:text-[18px] font-bold gap-y-1 gap-x-4'>Category
                        <input type="text" id="category" name='category' className='h-12 w-[270px] sm:w-[370px]  bg-white/30 rounded-[4px] outline-none px-1 text-[16px] font-semibold text-white' placeholder='Optional' />
                    </label>
                    <label htmlFor="number" className='flex flex-col sm:flex-row items-start sm:items-center justify-between text-[15px] sm:text-[18px] font-bold gap-y-1 gap-x-4'>Amount
                        <input type="number" name='amount' className='h-12 w-[270px] sm:w-[370px]  bg-white/30 rounded-[4px] outline-none px-1 text-[16px] font-semibold text-white' placeholder='Enter amount' />
                    </label>
                    <label htmlFor="date" className='flex flex-col sm:flex-row items-start sm:items-center justify-between text-[15px] sm:text-[18px] font-bold gap-y-1 gap-x-4'>Date
                        <input type="date" name='date' className='h-12 w-[270px] sm:w-[370px] bg-white/30 rounded-[4px] outline-none px-1 text-[16px] font-semibold text-white' />
                    </label>

                    <button className='bg-[#00d8c2ef] hover:bg-[#00d8c2cd] transition duration-100 mt-5 text-white font-bold text-xl rounded-[4px] py-3 cursor-pointer'>Save Transaction</button>
                </form>
            </div>
        </div>
    )
}