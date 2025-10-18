export default function () {
    return (
        <main className="bg-[#0b0b0b] w-full h-full rounded-lg overflow-y-auto px-8 py-6 flex flex-col gap-8">
            {/* Heading */}
            <h1 className="text-3xl font-bold font-[sans-serif]">Dashboard</h1>

            {/* Total Status */}
            <div className="flex justify-center">
                <div className="flex max-w-[500px] w-full justify-between">
                    <div className="flex items-center justify-center gap-3">
                        <div className="py-4 px-4 rounded-full bg-white/5">
                            <img src="../src/assets/totalBalance.png" alt="Total balance"
                                className="w-[35px] h-[35px] invert mt-1 ml-1" />
                        </div>
                        <div>
                            <h3>Total Balance</h3>
                            <p>$999</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="py-6 px-6 rounded-full bg-white/5">
                            <img src="../src/assets/totalIncome.png" alt="Total income"
                                className="w-[25px] h-[25px] invert" />
                        </div>
                        <div>
                            <h3>Total Income</h3>
                            <p>$999</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="py-5 px-5 rounded-full bg-white/5">
                            <img src="../src/assets/expense.svg" alt="Total expense"
                                className="w-[30px] h-[30px] ml-1 invert" />
                        </div>
                        <div>
                            <h3>Total Expense</h3>
                            <p>$999</p>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}