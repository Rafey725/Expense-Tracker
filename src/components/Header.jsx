import { useState } from 'react';
import DashboardIcon from '../assets/dashboardIcon.jsx';
import IncomeIcon from '../assets/incomeIcon.jsx';
import ExpenseIcon from '../assets/expenseIcon.jsx';
import TransactionIcon from '../assets/transactionIcon.jsx';

export default function ({ navigated, handleNavigation, toggleMenu, toggle }) {
    
    return (
        <>
            <header className='px-3 sm:px-10'>
                <div className="h-[7vh] flex justify-between md:justify-evenly px-3 items-center ">
                    {/* Hamburger Menu Nav*/}
                    <div className={`${toggleMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} absolute z-10 top-0 left-0 w-full h-screen transition-opacity duration-300 bg-black/90`}>
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="flex justify-center items-center ">
                                {/* Nav links */}
                                <ul className="flex flex-col text-[20px] gap-3 font-[sans-serif] tracking-wider">
                                    <li onClick={() => handleNavigation("dashboard")}
                                        className={`flex items-center ${navigated === 'dashboard' && 'text-[#00d8c4]'} gap-[1px] cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out`}>
                                        <DashboardIcon /><p>Dashboard</p>
                                    </li>
                                    <li onClick={() => handleNavigation("income")}
                                        className={`flex items-center ${navigated === 'income' && 'text-[#00d8c4]'} gap-1 cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out`}>
                                        <IncomeIcon /><p>Income</p>
                                    </li>
                                    <li onClick={() => handleNavigation("expense")}
                                        className={`flex items-center ${navigated === 'expense' && 'text-[#00d8c4]'} gap-1 cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out`}>
                                        <ExpenseIcon /><p className='-ml-[9px]'>Expense</p>
                                    </li>
                                    <li onClick={() => handleNavigation("transactions")}
                                        className={`flex items-center ${navigated === 'transactions' && 'text-[#00d8c4]'} cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out -mt-[5px]`}>
                                        <TransactionIcon /><p className='-ml-[2px] mt-[5px]'>Transactions</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center h-[40px] w-fit font-[sans-serif] cursor-default">
                        <div>
                            <p className=" text-[18px]">EXP</p>
                        </div>
                        <div>
                            <p className="text-[#00d8c4] text-[25px] pb-[5px]">ens<span className="text-[18px] opacity-60">I</span><span className="text-[26px] opacity-50">o</span></p>
                        </div>
                    </div>

                    {/* Navigation links */}
                    <nav>
                        {/* Nav links */}
                        <ul className="hidden sm:flex flex-col sm:flex-row gap-3 text-[14px] md:text-[16px] md:gap-5 font-[sans-serif] tracking-wider">
                            <li onClick={() => handleNavigation("dashboard")}
                                className={`flex items-center ${navigated === 'dashboard' && 'text-[#00d8c4]'} gap-[1px] cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out`}>
                                <DashboardIcon /><p>Dashboard</p>
                            </li>
                            <li onClick={() => handleNavigation("income")}
                                className={`flex items-center ${navigated === 'income' && 'text-[#00d8c4]'} gap-1 cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out`}>
                                <IncomeIcon /><p>Income</p>
                            </li>
                            <li onClick={() => handleNavigation("expense")}
                                className={`flex items-center ${navigated === 'expense' && 'text-[#00d8c4]'} gap-1 cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out`}>
                                <ExpenseIcon /><p className='-ml-[9px]'>Expense</p>
                            </li>
                            <li onClick={() => handleNavigation("transactions")}
                                className={`flex items-center ${navigated === 'transactions' && 'text-[#00d8c4]'} cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out -mt-[5px]`}>
                                <TransactionIcon /><p className='-ml-[2px] mt-[5px]'>Transactions</p>
                            </li>
                        </ul>

                        {/* Hamburger Menu Icon*/}
                        <div id="hamburger-container" className={`relative z-20 flex items-center sm:items-start justify-between h-full  gap-1 cursor-pointer sm:hidden`}>
                            <button onClick={toggle} className="flex items-center gap-1 text-white cursor-pointer">
                                <p className="font-bold">MENU</p>
                                {toggleMenu ?
                                    // Cross icon
                                    <div className="pt-0.5">
                                        <div className="bg-white w-[12px] h-[2px] rotate-45 "></div>
                                        <div className="bg-white w-[12px] h-[2px] rotate-135 -translate-y-[2px]"></div>
                                    </div> :
                                    // Hamburger icon
                                    <div className="hamburger flex flex-col gap-[2.5px] relative left-[51px] ">
                                        <div className="lines w-[12px]"></div>
                                        <div className="lines w-[12px]"></div>
                                        <div className="lines w-[12px]"></div>
                                    </div>}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}