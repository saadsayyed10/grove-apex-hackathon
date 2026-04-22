import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-8 py-16 items-center">
      <div>
        <Badge className="mb-4">Federal Standard Security</Badge>

        <h1 className="text-5xl font-bold leading-tight">
          Automating <span className="text-blue-700">Procurement</span>{" "}
          Integrity
        </h1>

        <p className="mt-6 text-gray-600">
          Empowering government agencies with AI-driven tender evaluation.
          Streamline compliance, eliminate bias, and ensure every taxpayer
          dollar is accounted for.
        </p>

        <div className="mt-6 flex gap-4">
          <Button size="lg">Request Demo</Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Dashboard Mock */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <div className="h-[300px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />
      </div>
    </section>
  );
}
