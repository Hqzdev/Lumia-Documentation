import { CodeBlock } from "@/components/code-block"

export function TextPromptingPage() {
  const basicPromptCode = `const response = await Lumia.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      role: "user",
      content: "Explain quantum computing in simple terms"
    }
  ]
});`

  const systemPromptCode = `const response = await Lumia.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant that explains complex topics in simple terms."
    },
    {
      role: "user",
      content: "What is machine learning?"
    }
  ]
});`

  const fewShotCode = `const response = await Lumia.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      role: "system",
      content: "Classify the sentiment of the following text as positive, negative, or neutral."
    },
    {
      role: "user",
      content: "I love this product!"
    },
    {
      role: "assistant",
      content: "positive"
    },
    {
      role: "user",
      content: "This is terrible."
    },
    {
      role: "assistant",
      content: "negative"
    },
    {
      role: "user",
      content: "The weather is okay today."
    }
  ]
});`

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Text and Prompting</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Learn how to craft effective prompts to get the best results from Lumia's language models. Good prompting is
          key to building successful AI applications.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Basic Prompting</h2>
        <p className="text-gray-600 mb-4">The simplest way to interact with the API is to send a user message:</p>
        <div className="mb-8">
          <CodeBlock language="javascript" code={basicPromptCode} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">System Messages</h2>
        <p className="text-gray-600 mb-4">Use system messages to set the behavior and personality of the assistant:</p>
        <div className="mb-8">
          <CodeBlock language="javascript" code={systemPromptCode} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Few-Shot Learning</h2>
        <p className="text-gray-600 mb-4">Provide examples to help the model understand the desired output format:</p>
        <div className="mb-8">
          <CodeBlock language="javascript" code={fewShotCode} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>Be specific and clear in your instructions</li>
          <li>Use system messages to set context and behavior</li>
          <li>Provide examples for complex tasks</li>
          <li>Break down complex tasks into smaller steps</li>
          <li>Use delimiters to separate different parts of your prompt</li>
          <li>Test and iterate on your prompts</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Patterns</h2>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Classification</h3>
          <p className="text-gray-600 mb-3">
            "Classify the following text into one of these categories: [list categories]"
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Summarization</h3>
          <p className="text-gray-600 mb-3">"Summarize the following text in 2-3 sentences:"</p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Translation</h3>
          <p className="text-gray-600">"Translate the following text from English to Spanish:"</p>
        </div>
      </div>
    </div>
  )
}
