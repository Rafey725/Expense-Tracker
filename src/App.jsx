import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expense from "./components/Expense/Expense";
import Transaction from "./components/Transaction/Transaction";

export default function () {
  // State to manage navigation
  let [navigation, setNavigation] = useState("dashboard");
  let navElement =
    navigation === "dashboard" ? <Dashboard /> :
      navigation === "income" ? <Income /> :
        navigation === "expense" ? <Expense /> :
          <Transaction />;


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