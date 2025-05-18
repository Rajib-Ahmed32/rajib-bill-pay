import React from "react";
import { useBillContext } from "../context/BillContext";
import BillCard from "../components/BillCard";
import BillFilterDropdown from "../components/BillFilterDropdown";

const Bills = () => {
  const { filteredBills } = useBillContext();

  return (
    <div className="container mx-auto px-4 py-6  min-h-screen">
      <div className="w-full flex items-center justify-between md:max-w-[90%] py-4 mx-auto">
        <h2 className="text-2xl text-[#050521] font-bold">All Bills</h2>
        <div className="w-[150px] bg-[#f2f3f8] rounded-md border border-3">
          <BillFilterDropdown className="w-[200px]" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {Array.isArray(filteredBills) &&
          filteredBills.map((bill) => <BillCard key={bill.id} bill={bill} />)}
      </div>
    </div>
  );
};

export default Bills;
