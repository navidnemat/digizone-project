import React from "react";

interface HamburgerButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}

const HamburgerButton = React.forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  ({ isOpen, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className="relative w-8 h-8 flex flex-col justify-center items-center group"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-0.5 bg-[#445D54] transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-[#445D54] my-1 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-[#445D54] transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>
    );
  }
);

HamburgerButton.displayName = "HamburgerButton";
export default HamburgerButton;