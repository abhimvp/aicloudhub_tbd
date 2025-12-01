import {
  AppWindow,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  GraduationCap,
  UserCheck,
  // Additional icons that might be used
  Award,
  Zap,
  Users,
  Target,
  Code,
  TestTube,
  Briefcase,
  Search,
  UserPlus,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Check,
  Sparkles,
  ShoppingBag,
  Stethoscope,
  Factory,
  Banknote,
  Cpu,
  Network,
  GitBranch,
  Shield,
  Layers,
  Eye,
  Database,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Icon name to Lucide icon component mapping
 * Maps string icon names (as stored in Sanity) to actual Lucide icon components
 */
const iconMap: Record<string, LucideIcon> = {
  // Service icons
  AppWindow,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  GraduationCap,
  UserCheck,
  
  // Additional icons
  Award,
  Zap,
  Users,
  Target,
  Code,
  TestTube,
  Briefcase,
  Search,
  UserPlus,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Check,
  Sparkles,
  ShoppingBag,
  Stethoscope,
  Factory,
  Banknote,
  Cpu,
  Network,
  GitBranch,
  Shield,
  Layers,
  Eye,
  Database,
};

/**
 * Fallback icon component (using a generic icon)
 */
const FallbackIcon = BriefcaseBusiness;

/**
 * Get a Lucide icon component by name
 * @param iconName - The name of the icon (e.g., "BrainCircuit", "CloudCog")
 * @returns The corresponding Lucide icon component, or a fallback if not found
 */
export function getIconByName(iconName: string): LucideIcon {
  if (!iconName) {
    return FallbackIcon;
  }

  // Try exact match first
  const icon = iconMap[iconName];
  if (icon) {
    return icon;
  }

  // Try case-insensitive match
  const lowerIconName = iconName.toLowerCase();
  const matchedKey = Object.keys(iconMap).find(
    (key) => key.toLowerCase() === lowerIconName
  );

  if (matchedKey) {
    return iconMap[matchedKey];
  }

  // Return fallback if no match found
  return FallbackIcon;
}

/**
 * Check if an icon name exists in the mapping
 * @param iconName - The name of the icon to check
 * @returns True if the icon exists, false otherwise
 */
export function hasIcon(iconName: string): boolean {
  if (!iconName) {
    return false;
  }

  const lowerIconName = iconName.toLowerCase();
  return Object.keys(iconMap).some(
    (key) => key.toLowerCase() === lowerIconName
  );
}

