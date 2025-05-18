import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBillContext } from "../context/BillContext";
import { Card } from "../ui/components/ui/card";
import BillImage from "../components/BillImage";
import BillInfo from "../components/BillInfo";
import BillPaymentButton from "../components/BillPaymentButton";
import PaymentDialog from "../components/PaymentDialog";

const BillDetails = () => {
  const { id } = useParams();
  const { bills, payBill, balance } = useBillContext();
  const navigate = useNavigate();

  const bill = bills.find((b) => b.id === parseInt(id));
  const [bankCards, setBankCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogSuccess, setDialogSuccess] = useState(true);

  useEffect(() => {
    fetch("/cardsData.json")
      .then((res) => res.json())
      .then((data) => {
        setBankCards(data);
        if (data.length > 0) setSelectedCardId(data[0].id);
      })
      .catch(() => setBankCards([]));
  }, []);

  if (!bill) return <p className="text-center mt-10 text-xl">Bill not found</p>;

  const handlePayment = () => {
    const selectedCard = bankCards.find((card) => card.id === selectedCardId);

    if (!bill.isPaid && balance >= bill.amount && selectedCardId) {
      payBill(bill.id);
      setDialogMessage(
        `Paid ${bill.amount} BDT with ${selectedCard?.bank_name} (${selectedCard?.card_type})`
      );
      setDialogSuccess(true);
      setDialogOpen(true);
    } else if (balance < bill.amount) {
      setDialogMessage("Insufficient balance to pay this bill.");
      setDialogSuccess(false);
      setDialogOpen(true);
    } else {
      setDialogMessage("Please select a bank card.");
      setDialogSuccess(false);
      setDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    if (dialogSuccess) navigate("/bills");
  };

  return (
    <>
      <Card className="max-w-4xl bg-[#f2f3f8] mx-auto mt-10 p-8 md:p-8 shadow-md rounded-xl">
        <div className="flex flex-col md:flex-row items-center md:gap-10">
          <BillImage
            organization={bill.organization}
            billType={bill.bill_type}
          />
          <div className="w-full md:w-1/2">
            <BillInfo
              bill={bill}
              balance={balance}
              bankCards={bankCards}
              selectedCardId={selectedCardId}
              setSelectedCardId={setSelectedCardId}
            />
            <BillPaymentButton
              bill={bill}
              balance={balance}
              selectedCardId={selectedCardId}
              onPay={handlePayment}
            />
          </div>
        </div>
      </Card>

      <PaymentDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        success={dialogSuccess}
        message={dialogMessage}
      />
    </>
  );
};

export default BillDetails;
