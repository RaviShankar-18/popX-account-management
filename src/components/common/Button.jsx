const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-base";

  const variants = {
    primary:
      "bg-primary hover:bg-purple-700 text-white shadow-md hover:shadow-lg",
    secondary: "bg-purple-300 text-black shadow-sm",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={variant === "disabled"}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
