"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Hero() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Generate Stunning Images
        </h1>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8">
          <form className="flex items-center space-x-4 mb-8">
            <Input
              className="flex-1 px-4 py-2 rounded-md border border-gray-200 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-800"
              placeholder="Enter a prompt to generate an image..."
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                const response = await fetch(
                  "https://hono-backend.rohanjhaldiyal.workers.dev?prompt=" +
                    prompt
                );
                const blob = await response.blob();
                setImage(URL.createObjectURL(blob));
              }}
            >
              Generate
            </Button>
          </form>
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <img
              alt="Generated Image"
              className="w-full h-full object-contain"
              height="500"
              src={image ? image : "/placeholder.svg"}
              style={{
                aspectRatio: "800/500",
                objectFit: "cover",
              }}
              width="800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
