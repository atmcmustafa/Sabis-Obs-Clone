const ButtonSmall = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full hover:bg-grayTextLight/20 hover:text-grayTextLight text-grayTextLight flex-1 px-4 flex items-center ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonSmall;
