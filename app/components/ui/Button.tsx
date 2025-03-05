type ButtonProps = {
    text: string;
    onClick: () => void;
  };
  
  export default function Button({ text, onClick }: ButtonProps) {
    return (
      <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        {text}
      </button>
    );
  }
  