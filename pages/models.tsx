import { ModelCard } from "@/components/model-card"

export function ModelsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Models</h1>

      <div className="prose max-w-none mb-12">
        <p className="text-lg text-gray-600 mb-8">
          Lumia offers a diverse set of models with different capabilities and price points. Choose the right model for
          your use case based on performance, cost, and specific features.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Language Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ModelCard
            name="GPT-4"
            title="GPT-4"
            description="Most capable model, best for complex tasks"
            gradient="bg-gradient-to-br from-blue-500 to-purple-600"
          />
          <ModelCard
            name="GPT-4 Turbo"
            title="GPT-4 Turbo"
            description="Faster and more cost-effective than GPT-4"
            gradient="bg-gradient-to-br from-green-400 to-blue-500"
          />
          <ModelCard
            name="GPT-3.5 Turbo"
            title="GPT-3.5 Turbo"
            description="Fast and cost-effective for most tasks"
            gradient="bg-gradient-to-br from-orange-400 to-red-500"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Specialized Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ModelCard
            name="DALL·E 3"
            title="DALL·E 3"
            description="Advanced image generation from text"
            gradient="bg-gradient-to-br from-pink-400 to-purple-500"
          />
          <ModelCard
            name="Whisper"
            title="Whisper"
            description="Speech-to-text transcription"
            gradient="bg-gradient-to-br from-teal-400 to-blue-500"
          />
          <ModelCard
            name="TTS"
            title="Text-to-Speech"
            description="Natural sounding speech synthesis"
            gradient="bg-gradient-to-br from-indigo-400 to-purple-500"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Model Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Context Length
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Training Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GPT-4</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8,192 tokens</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to Sep 2021</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Complex reasoning, creative tasks</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GPT-4 Turbo</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">128,000 tokens</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to Apr 2023</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Long documents, analysis</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GPT-3.5 Turbo</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4,096 tokens</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to Sep 2021</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">General tasks, chatbots</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
