"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/constants";
import { useTheme } from "@/components/theme/ThemeProvider";

const FEATURED_CLIENTS = [
  "Microsoft",
  "Quadrant Technologies",
  "LTIMindtree",
  "Salesforce",
  "Altimetrik",
] as const;

const FeaturedClientLogos = () => {
  const { actualTheme } = useTheme();

  const featuredClients = FEATURED_CLIENTS.map((name) => {
    const match = clientLogos.find(
      (client) => client.name.toLowerCase() === name.toLowerCase()
    );

    if (match) return match;

    return {
      name,
      logo: "",
      scale: 1,
    };
  });

  const renderInitials = (name: string) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");

  return (
    <section
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        actualTheme === "dark" ? "bg-zinc-950" : "bg-gray-50"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            actualTheme === "dark"
              ? `radial-gradient(circle at top center, rgba(59,130,246,0.1) 0%, transparent 50%),
                 radial-gradient(circle at bottom center, rgba(249,115,22,0.08) 0%, transparent 50%)`
              : `radial-gradient(circle at top center, rgba(59,130,246,0.05) 0%, transparent 50%),
                 radial-gradient(circle at bottom center, rgba(249,115,22,0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-black mb-4 ${
              actualTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Trusted By
          </h2>
          <p
            className={`text-xl ${
              actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Industry leaders who{" "}
            <span className="text-orange-400 font-semibold">
              trust our expertise
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredClients.map((client) => {
            const hasLogo = Boolean(client.logo);
            const scale = client.scale || 1;

            return (
              <div
                key={client.name}
                className={`flex flex-col items-center justify-center rounded-2xl border shadow-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border-white/10 text-white"
                    : "bg-white border-gray-200 text-gray-900"
                }`}
              >
                <div className="relative w-full h-20 flex items-center justify-center mb-4">
                  {hasLogo ? (
                    <div
                      className="relative w-full h-full"
                      style={{ transform: `scale(${scale})` }}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain transition-opacity duration-300 hover:opacity-80"
                        sizes="200px"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-xl font-semibold text-2xl ${
                        actualTheme === "dark"
                          ? "bg-orange-500/20 text-orange-200"
                          : "bg-orange-50 text-orange-500"
                      }`}
                    >
                      {renderInitials(client.name)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClientLogos;
