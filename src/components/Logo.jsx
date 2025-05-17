import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect x="2" y="2" width="28" height="28" rx="4" fill="#ca970b" />
        <path
          d="M8 10h16M8 16h10M8 22h14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 18l3 3 5-5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl font-extrabold text-[#050521]">
        Rajib<span className="text-[#ca970b]">Bill</span>Pay
      </span>
    </Link>
  );
};

export default Logo;
