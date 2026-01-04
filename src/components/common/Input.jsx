const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  name,
}) => {
  return (
    <div className="mb-5 relative">
      <label
        htmlFor={name}
        className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-semibold text-primary"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        id={name}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-800 text-sm"
      />
    </div>
  );
};

export default Input;
