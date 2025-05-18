import React from "react";
import { CardHeader, CardTitle, CardContent } from "../ui/components/ui/card";
import { FaMoneyBillWave, FaRegCalendarAlt } from "react-icons/fa";
import { Label } from "../ui/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/components/ui/select";

const BillInfo = ({
  bill,
  balance,
  bankCards,
  selectedCardId,
  setSelectedCardId,
}) => {
  return (
    <div className="w-full space-y-4 text-[#050521]">
      {" "}
      <CardHeader className="px-0 pb-1">
        <CardTitle className="text-3xl font-semibold flex items-center gap-2">
          {bill.organization}
        </CardTitle>
        <p className="text-xl text-muted-foreground italic mt-1">
          {bill.bill_type}
        </p>
      </CardHeader>
      <CardContent className="px-0 space-y-5 text-lg w-full">
        <div className="flex items-start gap-4 w-full">
          <FaMoneyBillWave className="text-green-600 text-2xl shrink-0 mt-1" />
          <div className="">
            <span className="font-semibold">Amount: </span>
            <span className="">{bill.amount} BDT</span>
          </div>
        </div>

        <div className="flex items-start gap-4 w-full">
          <FaRegCalendarAlt className="text-blue-600 text-2xl shrink-0 mt-1" />
          <div className="">
            <span className="font-semibold">Due Date: </span>
            <span className="">
              {new Date(bill.due_date).toLocaleDateString()}
            </span>
          </div>
        </div>

        {!bill.isPaid && balance >= bill.amount && bankCards.length > 0 && (
          <div className="space-y-2 pt-2 w-full">
            <Label htmlFor="bankCard" className="text-base font-medium">
              Select Bank Card to Pay:
            </Label>
            <Select
              onValueChange={(value) => setSelectedCardId(parseInt(value))}
              value={selectedCardId ? selectedCardId.toString() : ""}
            >
              <SelectTrigger id="bankCard" className="bg-white w-full">
                <SelectValue placeholder="Choose card" />
              </SelectTrigger>
              <SelectContent>
                {bankCards.map((card) => (
                  <SelectItem key={card.id} value={card.id.toString()}>
                    {card.bank_name} {card.card_number} ({card.card_type})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default BillInfo;
