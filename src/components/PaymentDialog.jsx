import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/components/ui/dialog";
import { Button } from "../ui/components/ui/button";

const PaymentDialog = ({ open, onClose, success, message }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <DialogTitle className={success ? "text-green-600" : "text-red-600"}>
            {success ? "Payment Successful" : "Payment Failed"}
          </DialogTitle>
          <DialogDescription className="text-base text-black mt-2">
            {message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button onClick={onClose}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
