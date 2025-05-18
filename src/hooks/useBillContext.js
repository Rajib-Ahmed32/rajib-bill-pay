export function useBillContext() {
  const context = useContext(BillContext);
  if (!context) {
    throw new Error("useBillContext must be used within a BillProvider");
  }
  return context;
}
