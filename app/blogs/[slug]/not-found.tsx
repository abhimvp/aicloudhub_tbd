// app/blogs/[slug]/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FileQuestion className="w-24 h-24 text-orange-400 mx-auto mb-8" />

        <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
          Blog Not Found
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          Sorry, we couldn't find the blog post you're looking for. It may have
          been moved or deleted.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/blogs">
            <Button
              size="lg"
              className="bg-linear-to-r from-orange-500 to-yellow-400 text-black font-bold hover:scale-105 transition-transform"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to All Blogs
            </Button>
          </Link>

          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
