import TransactionElements from "../Transaction/TransactionElements"
import IncomeElements from "../Income/IncomeElements"
import ExpenseElements from "../Expense/ExpenseElements"

export default function Dashboard({ goToTransactionPage, goToIncomePage, goToExpensePage, transactionData, incomeData, expenseData, handleHover, handleLeave, hoveredId, deleteTransaction, deleteIncome, deleteExpense, editIncomeBox, removeIncomeBox, inputSource, editTransactionBox, removeTransactionBox, inputTransaction, editExpenseBox, removeExpenseBox, inputExpense, handleEditedInput }) {

    let totalIncome = incomeData.reduce((acc, cur) => acc + Number(cur.amount), 0)
    let totalExpense = expenseData.reduce((acc, cur) => acc + Number(cur.amount), 0);
    let totalBalance = totalIncome - totalExpense

    return (
        <main className="bg-[#0b0b0b] w-full h-full rounded-lg overflow-x-hidden  flex flex-col">
            <div className="px-2.5 sm:px-6 py-4 border-b border-white/30">
                {/* Heading */}
                <h1 className="text-xl sm:text-3xl font-bold font-[sans-serif]">Dashboard</h1>
            </div>

            <div className="h-full bg-[#a8a8a80a] px-2.5 sm:px-6 py-3 sm:py-6 flex flex-col gap-4 overflow-y-auto">
                {/* Total Status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-5">
                    <div className="flex items-center justify-start bg-[#0b0b0b] rounded-lg py-2 px-2 gap-3">
                        <div className="py-4 px-4 rounded-full bg-white/5">
                            <img src="../src/assets/totalBalance.png" alt="Total balance"
                                className="w-[35px] h-[35px] invert mt-1 ml-1" />
                        </div>
                        <div className="">
                            <h3 className="text-white/50">Total Balance</h3>
                            <p className="text-[23px] font-semibold">${totalBalance}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start bg-[#0b0b0b] rounded-lg py-2 px-2 gap-3">
                        <div className="py-6 px-6 rounded-full bg-white/5">
                            <img src="../src/assets/totalIncome.png" alt="Total income"
                                className="w-[25px] h-[25px] invert" />
                        </div>
                        <div className="">
                            <h3 className="text-white/50">Total Income</h3>
                            <p className="text-[23px] font-semibold">${totalIncome}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start bg-[#0b0b0b] rounded-lg py-2 px-2 gap-3">
                        <div className="py-5 px-5 rounded-full bg-white/5">
                            <img src="../src/assets/expense.svg" alt="Total expense"
                                className="w-[30px] h-[30px] ml-1 invert" />
                        </div>
                        <div className="">
                            <h3 className="text-white/50">Total Expense</h3>
                            <p className="text-[23px] font-semibold">${totalExpense}</p>
                        </div>
                    </div>
                </div>

                {/* Recent details */}
                <div className="grid grid-rows-[repeat(3,230px)] gap-4">
                    {/* Recent Transactions */}
                    <div className="overflow-hidden w-full bg-[#0b0b0b] px-2.5 sm:px-6 pt-3 pb-4 font-[sans-serif] text-xl rounded-lg">
                        <div className="flex justify-between">
                            <h2>Recent Transactions</h2>
                            <button onClick={goToTransactionPage} className="bg-[#1b1b1b] opacity-70 text-[12px] font-semibold rounded-lg cursor-pointer py-1 px-3 hover:bg-[#262525] transition duration-300">
                                See All ➜
                            </button>
                        </div>
                        <div className="mt-5 flex flex-col gap-4">
                            <TransactionElements transactionData={transactionData} handleHover={handleHover} handleLeave={handleLeave} deleteTransaction={deleteTransaction} hoveredId={hoveredId} editTransactionBox={editTransactionBox} removeTransactionBox={removeTransactionBox} inputTransaction={inputTransaction} handleEditedInput={handleEditedInput}/>
                        </div>
                    </div>

                    {/* Recent Income */}
                    <div className="overflow-hidden w-full bg-[#0b0b0b] px-2.5 sm:px-6 pt-3 pb-4 font-[sans-serif] text-xl rounded-lg">
                        <div className="flex justify-between">
                            <h2>Recent Income Sources</h2>
                            <button onClick={goToIncomePage} className="bg-[#1b1b1b] opacity-70 text-[12px] font-semibold rounded-lg cursor-pointer py-1 px-3 hover:bg-[#262525] transition duration-300">
                                See All ➜
                            </button>
                        </div>
                        <div className="mt-5 flex flex-col gap-4">
                            <IncomeElements incomeData={incomeData} handleHover={handleHover} handleLeave={handleLeave} deleteIncome={deleteIncome} hoveredId={hoveredId} removeIncomeBox={removeIncomeBox} inputSource={inputSource} editIncomeBox={editIncomeBox} handleEditedInput={handleEditedInput} />
                        </div>
                    </div>

                    {/* Recent Expense */}
                    <div className="overflow-hidden w-full bg-[#0b0b0b] px-2.5 sm:px-6 pt-3 pb-4 font-[sans-serif] text-xl rounded-lg">
                        <div className="flex justify-between">
                            <h2>Recent Expenses</h2>
                            <button onClick={goToExpensePage} className="bg-[#1b1b1b] opacity-70 text-[12px] font-semibold rounded-lg cursor-pointer py-1 px-3 hover:bg-[#262525] transition duration-300">
                                See All ➜
                            </button>
                        </div>
                        <div className="mt-5 flex flex-col gap-4">
                            <ExpenseElements expenseData={expenseData} handleHover={handleHover} handleLeave={handleLeave} deleteExpense={deleteExpense} hoveredId={hoveredId} editExpenseBox={editExpenseBox} removeExpenseBox={removeExpenseBox} inputExpense={inputExpense} handleEditedInput={handleEditedInput}/>
                        </div>
                    </div>
                </div>

            </div>
        </main >
    )
}