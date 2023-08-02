const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[150px] h-10 font-[500] px-3 ${className} bg-grayButtonBackgrond rounded-md text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
