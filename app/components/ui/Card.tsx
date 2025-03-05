type CardProps = {
    title: string;
    description: string;
  };
  
  export default function Card({ title, description }: CardProps) {
    return (
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  