const PassField = ({ placeholder, label, icon }) => {
  return (
    <div className="relative w-full" dir="rtl">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#EDEDED] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-right pr-10 dark:bg-black" // Added padding-right for icon space
      />
      <span>{icon}</span>

      <label className="absolute -top-3 right-3 bg-[#EDEDED] px-1 text-gray-600 text-sm dark:bg-black">
        {label}
      </label>


    </div>
  );
};

export default PassField;
