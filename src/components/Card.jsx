const Card = ({ children, className }) => {
  return (
    <div
      className={`p-7 rounded-md flex flex-col bg-white shadow-2xl w-fit ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
