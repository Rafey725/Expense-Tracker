export default function Dashboard() {
    // bg-[#1b1b1b] background color
    // #0b0b0b body color
    // #383838 input color
    // #00d8c4 buttons color 
    return (
        <main className="bg-[#0b0b0b] w-full h-full rounded-lg overflow-x-hidden flex flex-col">
            <div className="px-2.5 sm:px-6 py-4 border-b border-white/30">
                {/* Heading */}
                <h1 className="text-xl sm:text-3xl font-bold font-[sans-serif]">Dashboard</h1>
            </div>

            <div className="h-full bg-[#a8a8a80a] px-2.5 sm:px-6 py-3 sm:py-6 flex flex-col gap-4">
                {/* Total Status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-5">
                    <div className="flex items-center justify-start bg-[#0b0b0b] rounded-lg py-2 px-2 gap-3">
                        <div className="py-4 px-4 rounded-full bg-white/5">
                            <img src="../src/assets/totalBalance.png" alt="Total balance"
                                className="w-[35px] h-[35px] invert mt-1 ml-1" />
                        </div>
                        <div className="">
                            <h3 className="text-white/50">Total Balance</h3>
                            <p className="text-[23px] font-semibold">$9,999</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start bg-[#0b0b0b] rounded-lg py-2 px-2 gap-3">
                        <div className="py-6 px-6 rounded-full bg-white/5">
                            <img src="../src/assets/totalIncome.png" alt="Total income"
                                className="w-[25px] h-[25px] invert" />
                        </div>
                        <div className="">
                            <h3 className="text-white/50">Total Income</h3>
                            <p className="text-[23px] font-semibold">$9,999</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start bg-[#0b0b0b] rounded-lg py-2 px-2 gap-3">
                        <div className="py-5 px-5 rounded-full bg-white/5">
                            <img src="../src/assets/expense.svg" alt="Total expense"
                                className="w-[30px] h-[30px] ml-1 invert" />
                        </div>
                        <div className="">
                            <h3 className="text-white/50">Total Expense</h3>
                            <p className="text-[23px] font-semibold">$9,999</p>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="min-h-40 h-auto w-full bg-[#0b0b0b] px-2.5 sm:px-6 py-3 font-[sans-serif] text-xl rounded-lg">
                    <div className="flex justify-between">
                        <h2>Recent Transactions</h2>
                        <button className="bg-[#1b1b1b] opacity-70 text-[12px] font-semibold rounded-lg cursor-pointer py-1 px-3 hover:bg-[#262525] transition duration-300">
                            See All ➜
                        </button>
                    </div>
                </div>
            </div>
        </main >
    )
}