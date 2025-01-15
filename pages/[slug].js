import { useRouter } from "next/router";

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Extract city name from the slug
  const city = slug?.replace("bulk-sms-service-provider-in-", "").replace(/-/g, " ");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Bulk SMS Service in {city || "Your City"}
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Enjoy abundant SMS services in {city || "your city"} with the best-in-class gateway.
      </p>
    </div>
  );
}
