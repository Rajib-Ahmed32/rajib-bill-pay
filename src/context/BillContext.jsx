import React, { createContext, useContext, useState, useEffect } from "react";
import billsData from "../data/billsData.json";
import { useAuthContext } from "../context/AuthContext";

const BillContext = createContext();
export const useBillContext = () => useContext(BillContext);

export const BillProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [bills, setBills] = useState([]);
  const [balance, setBalance] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (user?.email) {
      const storedBalance = localStorage.getItem(`balance_${user.email}`);
      const storedBills = localStorage.getItem(`bills_${user.email}`);

      const initialBalance = storedBalance ? Number(storedBalance) : 10000;
      const initialBills = storedBills
        ? JSON.parse(storedBills)
        : billsData.map((bill) => ({ ...bill, isPaid: false }));

      setBalance(initialBalance);
      setBills(initialBills);
    } else {
      setBalance(0);
      setBills([]);
    }
  }, [user]);

  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(`balance_${user.email}`, balance.toString());
      localStorage.setItem(`bills_${user.email}`, JSON.stringify(bills));
    }
  }, [balance, bills, user]);

  const payBill = (id) => {
    const billToPay = bills.find((b) => b.id === id);
    if (billToPay && !billToPay.isPaid && balance >= billToPay.amount) {
      setBalance((prev) => prev - billToPay.amount);
      setBills((prev) =>
        prev.map((bill) => (bill.id === id ? { ...bill, isPaid: true } : bill))
      );
    }
  };

  const filteredBills =
    filter === "all"
      ? bills
      : bills.filter((bill) => bill.bill_type === filter);

  return (
    <BillContext.Provider
      value={{ bills, filteredBills, payBill, balance, filter, setFilter }}
    >
      {children}
    </BillContext.Provider>
  );
};
