import React from "react";
import { useBillContext } from "../context/BillContext";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/components/ui/select";

const billTypes = [
  "all",
  "electricity",
  "gas",
  "internet",
  "water",
  "credit card",
  "tuition",
  "mobile",
  "tv",
  "insurance",
  "loan",
  "maintenance",
  "streaming",
];

const BillFilterDropdown = () => {
  const { setFilter } = useBillContext();

  return (
    <Select onValueChange={setFilter} defaultValue="all">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Filter bills..." />
      </SelectTrigger>
      <SelectContent>
        {billTypes.map((type) => (
          <SelectItem key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default BillFilterDropdown;
