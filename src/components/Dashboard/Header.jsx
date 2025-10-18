import DashboardIcon from '../../assets/dashboardIcon.jsx';
import IncomeIcon from '../../assets/incomeIcon.jsx';
import ExpenseIcon from '../../assets/expenseIcon.jsx';
import TransactionIcon from '../../assets/transactionIcon.jsx';

export default function () {
    return (
        <>
            <header>
                <div className="h-[7vh] flex sm:justify-between md:justify-evenly items-center px-5">
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
                        <ul className="flex gap-5 font-[sans-serif] tracking-wider">
                            <li className="flex items-center gap-[1px] cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out">
                                <DashboardIcon /><p>Dashboard</p>
                            </li>
                            <li className="flex items-center gap-1 cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out">
                                <IncomeIcon /><p>Income</p>
                            </li>
                            <li className="flex items-center gap-1 cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out">
                                <ExpenseIcon /><p className='-ml-[9px]'>Expense</p>
                            </li>
                            <li className="flex items-center cursor-pointer hover:text-[#00d8c4] transition duration-500 ease-in-out -mt-[5px]">
                                <TransactionIcon /><p className='-ml-[2px] mt-[5px]'>Transactions</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}