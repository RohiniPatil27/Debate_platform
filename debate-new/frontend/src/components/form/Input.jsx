const Input = ({ label, type, name, required, error, className, ...props }) => {
  return (
    <>
      <div className={`relative w-full mb-4 ${className ? className : ""}`}>
        <label
          className="block text-stone-600 text-sm font-medium mb-0.5"
          htmlFor={name}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          className="w-full relative px-4 py-2 border border-solid border-gray-300 rounded"
          id={name}
          name={name}
          required={required}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    </>
  );
};

export default Input;
