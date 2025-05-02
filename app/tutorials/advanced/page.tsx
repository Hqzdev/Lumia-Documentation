"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AdvancedTutorial() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Advanced <span className="text-blue-600">Yumi AI</span> Techniques
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Master advanced features and optimize your Yumi AI implementations.
      </p>

      <div className="space-y-8">
        {/* Custom Model Configuration */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Custom Model Configuration</span>
            </CardTitle>
            <CardDescription>Fine-tune model behavior for specific use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Create custom model configurations:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`import { YumiConfig, ModelConfig } from '@ai-sdk/Yumi';

const creativeConfig: ModelConfig = {
  temperature: 0.9,
  topP: 0.95,
  frequencyPenalty: 0.7,
  presencePenalty: 0.7,
  maxTokens: 2000
};

const technicalConfig: ModelConfig = {
  temperature: 0.3,
  topP: 0.8,
  frequencyPenalty: 0.3,
  presencePenalty: 0.3,
  maxTokens: 1000
};

export const modelConfigs = {
  creative: creativeConfig,
  technical: technicalConfig
};`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Performance Optimization */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Performance Optimization</span>
            </CardTitle>
            <CardDescription>Optimize response times and resource usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Implement caching and request batching:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`import { generateText } from '@ai-sdk/Yumi';
import { LRUCache } from 'lru-cache';

const cache = new LRUCache({
  max: 500, // Maximum number of items
  ttl: 1000 * 60 * 60 // 1 hour TTL
});

async function generateWithCache(prompt: string) {
  const cacheKey = JSON.stringify({ prompt });
  
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const response = await generateText({
    prompt,
    system: 'You are a helpful assistant.'
  });

  cache.set(cacheKey, response);
  return response;
}`}</code>
              </pre>
              <p className="text-gray-700">Implement request batching:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`class RequestBatcher {
  private queue: Array<{
    prompt: string;
    resolve: (value: any) => void;
    reject: (error: any) => void;
  }> = [];
  private timeout: NodeJS.Timeout | null = null;

  async add(prompt: string) {
    return new Promise((resolve, reject) => {
      this.queue.push({ prompt, resolve, reject });
      this.scheduleBatch();
    });
  }

  private scheduleBatch() {
    if (!this.timeout) {
      this.timeout = setTimeout(() => this.processBatch(), 50);
    }
  }

  private async processBatch() {
    const batch = this.queue;
    this.queue = [];
    this.timeout = null;

    try {
      const responses = await Promise.all(
        batch.map(({ prompt }) => 
          generateText({ prompt })
        )
      );

      batch.forEach(({ resolve }, i) => resolve(responses[i]));
    } catch (error) {
      batch.forEach(({ reject }) => reject(error));
    }
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Error Handling and Retry Logic */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Error Handling and Retry Logic</span>
            </CardTitle>
            <CardDescription>Implement robust error handling and retry mechanisms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Advanced error handling with retries:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`async function generateWithRetry(
  prompt: string,
  maxRetries = 3,
  backoffMs = 1000
) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await generateText({
        prompt,
        system: 'You are a helpful assistant.'
      });
    } catch (error) {
      if (
        attempt === maxRetries ||
        error.name === 'ValidationError' ||
        error.name === 'AuthenticationError'
      ) {
        throw error;
      }

      const delay = backoffMs * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring and Logging */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Monitoring and Logging</span>
            </CardTitle>
            <CardDescription>Track performance and debug issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Implement comprehensive logging:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`import { generateText } from '@ai-sdk/Yumi';

class AILogger {
  static async trackGeneration(prompt: string) {
    const startTime = Date.now();
    
    try {
      const response = await generateText({
        prompt,
        system: 'You are a helpful assistant.'
      });

      const duration = Date.now() - startTime;
      
      console.log({
        type: 'ai_generation',
        status: 'success',
        duration,
        promptLength: prompt.length,
        responseLength: response.text.length,
        tokenUsage: response.usage,
        timestamp: new Date().toISOString()
      });

      return response;
    } catch (error) {
      const duration = Date.now() - startTime;
      
      console.error({
        type: 'ai_generation',
        status: 'error',
        duration,
        promptLength: prompt.length,
        error: error.message,
        errorType: error.name,
        timestamp: new Date().toISOString()
      });

      throw error;
    }
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Next Steps</span>
            </CardTitle>
            <CardDescription>Continue exploring advanced features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Further areas to explore:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Custom model fine-tuning</li>
                <li>Advanced prompt engineering</li>
                <li>Integration with other services</li>
                <li>Scaling and deployment strategies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 