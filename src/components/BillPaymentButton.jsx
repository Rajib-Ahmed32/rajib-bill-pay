import React from "react";
import { Button } from "../ui/components/ui/button";

const BillPaymentButton = ({ bill, balance, selectedCardId, onPay }) => {
  if (bill.isPaid) return null;

  const isDisabled = balance < bill.amount || !selectedCardId;

  return (
    <Button
      className="w-full mt-4 flex items-center justify-center gap-2"
      onClick={onPay}
      disabled={isDisabled}
    >
      Pay Now
    </Button>
  );
};

export default BillPaymentButton;
