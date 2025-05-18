import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardTitle } from "../ui/components/ui/card";
import { Button } from "../ui/components/ui/button";
import icons from "../data/icons";
import { FaCheckCircle } from "react-icons/fa";

const formatBillType = (type) => {
  return type
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const BillCard = ({ bill }) => {
  const navigate = useNavigate();

  const dueDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(bill.due_date));

  return (
    <Card className="w-full md:max-w-[90%] mx-auto softrgrey shadow-md border rounded-lg p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:basis-1/3 w-full md:w-auto">
          <img
            src={icons[bill.organization]}
            alt={`${bill.bill_type} icon`}
            className="w-16 h-16 object-contain"
          />
          <div>
            <CardTitle className="text-xl text-[#050521] font-semibold">
              {bill.organization}
            </CardTitle>
            <p className="text-base mt-1 text-muted-foreground">
              {formatBillType(bill.bill_type)}
            </p>
          </div>
        </div>

        <div className="md:basis-1/3 w-full md:w-auto">
          <p className="text-base text-[#050521]">
            <span className="font-semibold">Amount:</span> {bill.amount} Taka
          </p>
          <p className="text-base text-[#050521]">
            <span className="font-semibold">Due:</span> {dueDate}
          </p>
        </div>

        <div className="w-full md:w-auto md:basis-1/3 flex justify-end">
          {bill.isPaid ? (
            <Button
              disabled
              variant="outline"
              className="text-green-600 border-green-600 flex items-center gap-2"
            >
              <FaCheckCircle className="w-5 h-5" />
              Paid
            </Button>
          ) : (
            <Button onClick={() => navigate(`/bills/${bill.id}`)}>Pay</Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default BillCard;
