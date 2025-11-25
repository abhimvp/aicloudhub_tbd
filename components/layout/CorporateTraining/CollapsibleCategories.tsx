"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import {
  ChevronDown,
  BrainCircuit,
  CloudCog,
  GitBranch,
  Shield,
  BookOpen,
  LucideIcon,
} from "lucide-react";

interface TrainingCategory {
  title: string;
  description: string;
  topics: string[];
  whyItMatters: string;
  iconName: string;
}

interface CollapsibleCategoriesProps {
  categories: TrainingCategory[];
}

// Icon mapping - maps icon names to actual icon components
const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  CloudCog,
  GitBranch,
  Shield,
  BookOpen,
};

export default function CollapsibleCategories({
  categories,
}: CollapsibleCategoriesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="grid gap-6 lg:gap-8">
      {categories.map((category, index) => {
        const CategoryIcon = iconMap[category.iconName] || BookOpen; // Fallback to BookOpen if icon not found
        const isExpanded = expandedIndex === index;

        return (
          <motion.article
            key={index}
            className="relative bg-white dark:bg-white/5 rounded-3xl border border-orange-100 dark:border-white/10 shadow-lg dark:shadow-none overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Clickable Header */}
            <button
              onClick={() => toggleCategory(index)}
              className="relative w-full p-6 lg:p-8 text-left focus:outline-none rounded-t-3xl active:bg-transparent"
              aria-expanded={isExpanded}
              aria-controls={`category-content-${index}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-orange-500 to-yellow-400 text-white shadow-xl transition-transform duration-300 flex-shrink-0">
                  <CategoryIcon className="w-7 h-7" />
                </div>

                {/* Title and Description */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                      {index + 1}. {category.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                    </motion.div>
                  </div>
                  <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </button>

            {/* Collapsible Content */}
            <motion.div
              id={`category-content-${index}`}
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="overflow-hidden"
            >
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 space-y-4">
                {/* Training Topics */}
                <div className="relative">
                  <p className="font-semibold text-slate-900 dark:text-white mb-3">
                    Training Topics Include:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic, topicIndex) => (
                      <motion.span
                        key={topicIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: isExpanded ? 1 : 0,
                          scale: isExpanded ? 1 : 0.9,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isExpanded ? topicIndex * 0.05 : 0,
                        }}
                        className="inline-block bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-lg text-sm font-medium border border-orange-200 dark:border-orange-800"
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Why It Matters */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    y: isExpanded ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: isExpanded ? 0.2 : 0,
                  }}
                  className="relative border-l-4 border-yellow-400 dark:border-yellow-500 pl-4 py-2 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-r-lg"
                >
                  <p className="text-slate-700 dark:text-zinc-200 italic">
                    <strong className="text-yellow-600 dark:text-yellow-400">
                      Why it matters:
                    </strong>{" "}
                    {category.whyItMatters}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.article>
        );
      })}
    </div>
  );
}
