const Container = ({ children, variant = "top" }) => {
  const justifyClass =
    variant === "bottom" ? "justify-end pb-12" : "justify-start pt-12";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div
        className={`w-full max-w-[380px] bg-white border border-gray-300 shadow-2xl p-8 min-h-[650px] flex flex-col ${justifyClass}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
