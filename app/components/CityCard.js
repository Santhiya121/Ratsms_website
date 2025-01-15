import Link from "next/link";

export default function CityCard({ name, route }) {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-md shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{name}</h2>
      <Link href={route} className="text-sm underline hover:text-gray-200">
        Explore {name}
      </Link>
    </div>
  );
}
