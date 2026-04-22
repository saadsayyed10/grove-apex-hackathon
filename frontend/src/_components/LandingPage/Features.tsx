import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">
          Designed for Modern Governance
        </h2>
        <p className="text-gray-600 mt-2">
          Bridging legal complexity with digital efficiency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* AI Extraction */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">AI Extraction</h3>
            <p className="text-gray-600 text-sm">
              Automatically identify eligibility criteria from complex tender
              documents using AI-powered parsing.
            </p>

            <div className="mt-6 h-48 bg-gray-900 rounded-lg" />
          </CardContent>
        </Card>

        {/* Evidence Based */}
        <Card className="bg-blue-900 text-white">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">
              Evidence-Based Scoring
            </h3>
            <p className="text-sm opacity-90">
              Every decision is backed by document snippets. No black-box AI.
            </p>

            <div className="mt-6 p-4 bg-blue-800 rounded text-xs">
              “Section 4.2 confirms ISO compliance as evidenced on page 34.”
            </div>
          </CardContent>
        </Card>

        {/* Audit */}
        <Card className="md:col-span-2">
          <CardContent className="p-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Full Auditability</h3>

              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Cryptographic hashing of evaluation states</li>
                <li>• Immutable logs</li>
                <li>• Export-ready reports</li>
              </ul>
            </div>

            <div className="h-48 bg-gray-900 rounded-lg" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
