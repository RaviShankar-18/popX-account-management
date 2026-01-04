const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-primary focus:ring-primary"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;
