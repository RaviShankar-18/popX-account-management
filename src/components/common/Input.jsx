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
    <div className="mb-5">
      <label className="block text-primary text-xs font-semibold mb-2">
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
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white text-gray-800 placeholder-gray-400 text-sm"
      />
    </div>
  );
};

export default Input;
