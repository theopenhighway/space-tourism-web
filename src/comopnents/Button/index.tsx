import { ButtonProps } from "../index";


const Button = ({
  children,
  style = 'hard',
  color = 'sky',
  className,
  onClick = () => {},
}: ButtonProps) => {
  const baseClasses = "font-bold py-2 px-4 rounded-lg transition-transform duration-300 ";
  const colorClasses: { [key: string]: { [key: string]: string } } = {
    sky: {
      hard: "bg-sky-800 hover:bg-sky-700 text-sky-50 shadow-md hover:shadow-lg",
      soft: "bg-sky-100 hover:bg-sky-200 text-sky-700 shadow-md hover:shadow-lg",
      transparent: "text-sky-700 hover:text-sky-900",
    },
    rose: {
      hard: "bg-rose-800 hover:bg-rose-700 text-rose-50 shadow-md hover:shadow-lg",
      soft: "bg-rose-100 hover:bg-rose-200 text-rose-700 shadow-md hover:shadow-lg",
      transparent: "text-rose-700 hover:text-rose-900",
    },
    stone: {
      hard: "bg-stone-800 hover:bg-stone-700 text-stone-50 shadow-md hover:shadow-lg",
      soft: "bg-stone-100 hover:bg-stone-200 text-stone-700 shadow-md hover:shadow-lg",
      transparent: "text-stone-700 hover:text-stone-900",
    },
  };
  const styleClasses = colorClasses[color][style];

  return (
    <button onClick={onClick} className={`${baseClasses} ${styleClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
