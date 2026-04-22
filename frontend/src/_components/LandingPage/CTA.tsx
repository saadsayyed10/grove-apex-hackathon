import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-blue-900 text-white text-center py-16 px-6">
      <h2 className="text-3xl font-semibold">
        Ready to Modernize Your Procurement Process?
      </h2>

      <p className="mt-4 opacity-80">
        Join the next generation of transparent, AI-driven governance.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <Button variant="secondary">Schedule a Demo</Button>
        <Button variant="ghost">Download Security Brief</Button>
      </div>
    </section>
  );
}
