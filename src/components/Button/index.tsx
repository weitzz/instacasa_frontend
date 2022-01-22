interface ButtonProps {
  title: string;
  
}
const Button = ({ title }: ButtonProps) => {
  return (
    <>
      <button
       
        className="
        inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
      >
        {title}
      </button>
    </>
  );
};

export default Button;
