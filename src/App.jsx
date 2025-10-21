import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expense from "./components/Expense/Expense";
import Transaction from "./components/Transaction/Transaction";

export default function () {
  // State to identify hovered container
  let [hoveredId, setHoveredId] = useState()
  // State to manage transaction data
  let [transactionData, setTransactionData] = useState(() => {
    const savedTransactions = localStorage.getItem("Transactions");
    if (savedTransactions && savedTransactions !== "undefined") {
      return JSON.parse(savedTransactions)
    } else {
      return [];
    }
  })

  // State to manage income data
  let [incomeData, setIncomeData] = useState(() => {
    const savedIncomes = localStorage.getItem("Incomes");
    if (savedIncomes && savedIncomes !== "undefined") {
      return JSON.parse(savedIncomes)
    } else {
      return [];
    }
  })

  // State to manage expense data 
  let [expenseData, setExpenseData] = useState(() => {
    try {
      const savedExpenses = localStorage.getItem("Expenses");
      if (savedExpenses && savedExpenses !== "undefined") {
        return JSON.parse(savedExpenses)
      } else {
        return [];
      }
    } catch (err) {
      console.log("Error parsing expenses:", err);
      return []
    }
  })

  // State to manage navigation
  let [navigation, setNavigation] = useState("dashboard");
  let navElement =
    navigation === "dashboard" ?
      <Dashboard goToTransactionPage={goToTransactionPage} goToIncomePage={goToIncomePage} goToExpensePage={goToExpensePage} transactionData={transactionData} incomeData={incomeData} expenseData={expenseData} handleHover={handleHover} handleLeave={handleLeave} deleteTransaction={deleteTransaction} deleteIncome={deleteIncome} deleteExpense={deleteExpense} hoveredId={hoveredId} />

      : navigation === "income" ?
        <Income incomeData={incomeData} setIncomeData={setIncomeData} handleHover={handleHover} handleLeave={handleLeave} deleteIncome={deleteIncome} hoveredId={hoveredId} />

        : navigation === "expense" ?
          <Expense expenseData={expenseData} setExpenseData={setExpenseData} handleHover={handleHover} handleLeave={handleLeave} deleteExpense={deleteExpense} hoveredId={hoveredId} />

          : navigation === "transactions" ?
            <Transaction transactionData={transactionData} setTransactionData={setTransactionData} handleHover={handleHover} handleLeave={handleLeave} deleteTransaction={deleteTransaction} hoveredId={hoveredId} />
            : null;

  // Hovering functionality
  function handleHover(id) {
    setHoveredId(id)
  }
  function handleLeave() {
    setHoveredId()
  }

  // Deleting transaction functionality
  function deleteTransaction(id) {
    setTransactionData(prevData => prevData.filter(data => data.id !== id))
  }

  // Deleting income functionality
  function deleteIncome(id) {
    setIncomeData(prevData => prevData.filter(data => data.id !== id))
  }

  // Deleting expense functionality
  function deleteExpense(id) {
    setExpenseData(prevData => prevData.filter(data => data.id !== id))
  }

  // Function to go transaction page when see all button clicked 
  function goToTransactionPage() {
    setNavigation("transactions")
  }
  // Function to go income page when see all button clicked 
  function goToIncomePage() {
    setNavigation("income")
  }
  // Function to go expense page when see all button clicked 
  function goToExpensePage() {
    setNavigation("expense")
  }

  // Menu functionality for mobile
  let [toggleMenu, setToggleMenu] = useState(false);
  function toggle() {
    setToggleMenu(prev => !prev);
  }

  function handleNavigation(nav) {
    setNavigation(nav);
    setToggleMenu(false);
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header navigated={navigation} handleNavigation={handleNavigation} toggleMenu={toggleMenu} toggle={toggle} />
      <div className="max-w-screen h-full max-h-[93vh] mx-auto px-3 md:px-10 xl:px-45 pt-5 pb-4 overflow-hidden">
        {navElement}
      </div>
    </div >
  )
}