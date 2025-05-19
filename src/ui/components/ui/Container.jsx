export function Container({ className, ...props }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", className)} {...props} />
  );
}
