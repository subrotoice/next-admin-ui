interface Props {
  name: string;
  placeholder: string;
  type?: "text" | "email" | "password";
}

const FormInput = ({ name, placeholder, type = "text" }: Props) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-0 text-sm"
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default FormInput;
