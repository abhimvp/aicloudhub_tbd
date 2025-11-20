'use client';

import React from "react";
import * as motion from "motion/react-client";
import ClientLogos from "@/components/layout/ClientLogos/ClientLogos";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";

const AboutPageClient = () => {
  const { actualTheme } = useTheme();
  const leaders = [
    {
      name: "Roshi Jambula",
      title: "Chief Executive Officer",
      emoji: "👩‍💼",
      description:
        "A visionary leader with over 25 years of techno-functional expertise, Roshi drives AiCloudHub's mission to revolutionize IT services through innovation, agility, and customer-centric transformation. She leads digital initiatives across Retail, Telecom, and E-commerce, empowering clients with scalable, AI-powered solutions.",
      image: "/categories-AI-ML.jpg",
    },
    {
      name: "Rama Raju",
      title: "Chief Technology Officer",
      emoji: "👨‍💼",
      description:
        "With more than 25 years of experience, Rama leads AiCloudHub's technology vision—architecting secure, scalable, and future-ready solutions across AI, Cloud, and IoT. His focus on innovation ensures clients stay ahead in an ever-evolving digital landscape.",
      image: "/categories-cloud-computing.jpg",
    },
  ];

  const coreValues = [
    {
      icon: "⚡",
      title: "Agility",
      description: "Quick adaptation to changing business needs",
      color: "from-orange-500 to-yellow-400",
    },
    {
      icon: "🛡️",
      title: "Integrity",
      description: "Honesty and transparency in every interaction",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Teamwork across domains and disciplines",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: "📚",
      title: "Learning",
      description: "Continuous growth and skill development",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: "💡",
      title: "Outstanding Quality",
      description: "Excellence in every solution we deliver",
      color: "from-yellow-500 to-orange-400",
    },
    {
      icon: "⭐",
      title: "Uniqueness",
      description: "Innovative approaches to complex challenges",
      color: "from-indigo-500 to-purple-400",
    },
    {
      icon: "❤️",
      title: "Dedication",
      description: "Committed to client success and impact",
      color: "from-red-500 to-pink-400",
    },
  ];

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        actualTheme === "dark" ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      <section
        className={`relative pt-32 pb-20 overflow-hidden transition-colors duration-300 ${
          actualTheme === "dark"
            ? "bg-gradient-to-b from-zinc-950 to-zinc-900"
            : "bg-gradient-to-br from-orange-50 via-yellow-50 to-white"
        }`}
      >
        {actualTheme === "dark" && (
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at top center, rgba(255,140,0,0.15) 0%, transparent 60%),
                radial-gradient(circle at bottom right, rgba(0,120,255,0.1) 0%, transparent 60%),
                linear-gradient(180deg, #0b0b0b 0%, #0a0a0a 100%)
              `,
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block mb-7"
            >
              <span
                className={`px-8 py-4 rounded-full text-2xl font-semibold ${
                  actualTheme === "dark"
                    ? "bg-orange-500/10 border border-orange-500/30 text-orange-400"
                    : "bg-orange-100 border border-orange-300 text-orange-700"
                }`}
              >
                Who We Are
              </span>
            </motion.div>

            <h1
              className={`text-4xl md:text-4xl lg:text-5xl font-black mb-6 ${
                actualTheme === "dark"
                  ? "bg-linear-to-r from-orange-400 via-yellow-200 to-white bg-clip-text text-transparent"
                  : "bg-linear-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent"
              }`}
            >
              Driving Digital Transformation. Delivering Trusted Value.
            </h1>
            <h1
              className={`text-xl md:text-xl lg:text-xl font-black mb-6 ${
                actualTheme === "dark"
                  ? "bg-linear-to-r from-orange-400 via-yellow-200 to-white bg-clip-text text-transparent"
                  : "bg-linear-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent"
              }`}
            >
              We partner with businesses worldwide to build smart, secure, and
              scalable technologies that transform the future.
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        className={`py-20 relative transition-colors duration-300 ${
          actualTheme === "dark"
            ? "bg-zinc-950"
            : "bg-gradient-to-b from-white to-orange-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-md border rounded-3xl p-8 md:p-12 ${
              actualTheme === "dark"
                ? "bg-[#111111]/80 border-white/10"
                : "bg-white/80 border-gray-200"
            }`}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                actualTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="text-orange-400">AICloudHub</span>, Global leader
              in IT services & corporate training
            </h2>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p>
                Since 2018, we've been helping enterprises accelerate digital
                transformation while strengthening IT capabilities through
                practical, hands-on learning experiences. Headquartered in{" "}
                <span className="text-orange-400 font-semibold">
                  Atlanta, GA
                </span>
                , we specialize in AI/ML, Cloud, Cybersecurity, DevSecOps,
                Quality Engineering, and IT Staffing. Our expertise also extends
                to Data & Analytics, Consulting, Application Development, and
                Managed IT Solutions, enabling clients to achieve scalability,
                security, and operational excellence.
              </p>
              <p
                className={`font-semibold text-xl pt-4 ${
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                As a forward-thinking technology partner, we bridge innovation
                with enablement—helping organizations adopt the right
                technologies and develop the right talent to lead confidently in
                the digital era.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div
                className={`relative backdrop-blur-md border rounded-3xl p-10 h-full transition-all duration-500 ${
                  actualTheme === "dark"
                    ? "bg-[#111111]/90 border-orange-500/30 hover:border-orange-500/60"
                    : "bg-white/80 border-orange-300 hover:border-orange-500"
                }`}
              >
                <div className="text-6xl mb-6">🚀</div>
                <h2
                  className={`text-3xl md:text-4xl font-black mb-6 ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Mission
                </h2>
                <p
                  className={`text-xl leading-relaxed ${
                    actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  To{" "}
                  <span className="text-orange-400 font-bold">
                    empower organizations and individuals
                  </span>{" "}
                  through innovative technology solutions and hands-on
                  learning—enabling faster growth, smarter decisions, and
                  sustainable success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div
                className={`relative backdrop-blur-md border rounded-3xl p-10 h-full transition-all duration-500 ${
                  actualTheme === "dark"
                    ? "bg-[#111111]/90 border-blue-500/30 hover:border-blue-500/60"
                    : "bg-white/80 border-blue-300 hover:border-blue-500"
                }`}
              >
                <div className="text-6xl mb-6">🌍</div>
                <h2
                  className={`text-3xl md:text-4xl font-black mb-6 ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Vision
                </h2>
                <p
                  className={`text-xl leading-relaxed ${
                    actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  To be a{" "}
                  <span className="text-blue-400 font-bold">
                    trusted global leader in digital transformation
                  </span>
                  , driving innovation and building capabilities that help
                  businesses and communities succeed in a rapidly evolving
                  world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className={`py-20 relative transition-colors duration-300 ${
          actualTheme === "dark"
            ? "bg-zinc-950"
            : "bg-gradient-to-b from-orange-50 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  actualTheme === "dark"
                    ? "bg-orange-500/10 border border-orange-500/30 text-orange-400"
                    : "bg-orange-100 border border-orange-300 text-orange-700"
                }`}
              >
                💡 What We Do
              </span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-black mb-6 ${
                actualTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Combining Technology Expertise
              <br />
              <span
                className={
                  actualTheme === "dark"
                    ? "bg-linear-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent"
                    : "bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                }
              >
                with Human Enablement
              </span>
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              We deliver end-to-end IT services and upskilling programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Intelligence & Machine Learning",
                description:
                  "Building intelligent systems that drive automation and innovation.",
                icon: "🤖",
              },
              {
                title: "Cloud & DevOps Solutions",
                description:
                  "Designing secure, scalable, and high-performance infrastructures.",
                icon: "☁️",
              },
              {
                title: "Cybersecurity & DevSecOps",
                description:
                  "Safeguarding data, applications, and operations across platforms.",
                icon: "🔒",
              },
              {
                title: "Quality Engineering",
                description:
                  "Ensuring reliability and performance through automation and continuous testing.",
                icon: "✅",
              },
              {
                title: "Data & Analytics",
                description:
                  "Turning information into actionable insights for strategic decisions.",
                icon: "📊",
              },
              {
                title: "IT Staffing & Corporate Training",
                description:
                  "Empowering teams with future-ready digital skills.",
                icon: "👥",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 group ${
                  actualTheme === "dark"
                    ? "bg-[#111111]/80 border-white/10 hover:border-orange-500/50"
                    : "bg-white/80 border-gray-200 hover:border-orange-500"
                }`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`py-20 relative overflow-hidden transition-colors duration-300 ${
          actualTheme === "dark" ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              actualTheme === "dark"
                ? `radial-gradient(circle at top left, rgba(255,140,0,0.1) 0%, transparent 50%),
                 radial-gradient(circle at bottom right, rgba(0,120,255,0.08) 0%, transparent 50%)`
                : `radial-gradient(circle at top left, rgba(249,115,22,0.08) 0%, transparent 50%),
                 radial-gradient(circle at bottom right, rgba(59,130,246,0.05) 0%, transparent 50%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl font-black mb-4 ${
                actualTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Leadership Team
            </h2>
            <p
              className={`text-xl mb-2 ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span className="text-orange-400">
                Guided by experience. Driven by innovation.
              </span>
            </p>
            <p
              className={`text-lg ${
                actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              🌟 Woman-Empowered Leadership • Building the Future Together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03, y: -12 }}
                className="relative group perspective-1000"
              >
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 via-yellow-500/10 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div
                  className={`relative backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 ${
                    actualTheme === "dark"
                      ? "bg-[#0f0f0f]/90 border-white/10 group-hover:border-orange-500/50"
                      : "bg-white/90 border-gray-200 group-hover:border-orange-500"
                  }`}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 ${
                        actualTheme === "dark"
                          ? "bg-linear-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent"
                          : "bg-linear-to-t from-white/95 via-white/50 to-transparent"
                      }`}
                    />

                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15 + 0.3,
                        duration: 0.6,
                        type: "spring",
                      }}
                      className="absolute top-6 right-6 w-16 h-16 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300"
                    >
                      {leader.emoji}
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                      className={`text-2xl md:text-3xl font-black mb-2 group-hover:text-orange-400 transition-colors duration-300 ${
                        actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {leader.name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                      className="text-orange-400 font-semibold text-lg mb-4"
                    >
                      {leader.title}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
                      className={`leading-relaxed ${
                        actualTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {leader.description}
                    </motion.p>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 max-w-5xl mx-auto"
          >
            <div
              className={`backdrop-blur-xl border rounded-3xl p-10 md:p-12 relative overflow-hidden ${
                actualTheme === "dark"
                  ? "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 border-purple-500/30"
                  : "bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 border-purple-300"
              }`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-6xl mb-6"
                >
                  👩‍💼✨
                </motion.div>

                <h3
                  className={`text-3xl md:text-4xl font-black mb-4 ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Women-Empowered Organization
                </h3>

                <p
                  className={`text-xl leading-relaxed max-w-3xl mx-auto mb-6 ${
                    actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  At <span className="text-purple-400 font-bold">AiCloudHub</span>, we believe in the power of{" "}
                  <span className="text-pink-400 font-bold">diverse leadership</span>. Our CEO, Roshi Jambula,
                  exemplifies our commitment to empowering women in technology—driving innovation, fostering
                  inclusive culture, and inspiring the next generation of tech leaders.
                </p>

                <div
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
                    actualTheme === "dark"
                      ? "bg-purple-500/20 border border-purple-500/30"
                      : "bg-purple-100 border border-purple-300"
                  }`}
                >
                  <span className="text-2xl">🚀</span>
                  <span
                    className={`font-semibold ${
                      actualTheme === "dark" ? "text-purple-300" : "text-purple-700"
                    }`}
                  >
                    Building Tomorrow's Technology, Today
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ClientLogos />

      <section
        className={`py-20 relative transition-colors duration-300 ${
          actualTheme === "dark"
            ? "bg-zinc-950"
            : "bg-gradient-to-b from-white to-orange-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span
                className={
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }
              >
                Our{" "}
              </span>
              <span
                className={
                  actualTheme === "dark"
                    ? "bg-linear-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent"
                    : "bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                }
              >
                Core Values
              </span>
            </h2>
            <p
              className={`text-xl ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Our Values Drive Every Transformation
            </p>
            <p
              className={`mt-2 ${
                actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              At AiCloudHub, our values guide every decision, partnership, and
              innovation—empowering us to deliver excellence and impact in the
              digital era.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.slice(0, 4).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
                whileHover={{ scale: 1.08, y: -8, rotate: 2 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
                />
                <div
                  className={`relative backdrop-blur-md border rounded-2xl p-6 text-center h-full transition-all duration-300 ${
                    actualTheme === "dark"
                      ? "bg-[#111111]/90 border-white/10 hover:border-white/30"
                      : "bg-white/90 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl mb-4"
                  >
                    {value.icon}
                  </motion.div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
            {coreValues.slice(4).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: (index + 4) * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
                whileHover={{ scale: 1.08, y: -8, rotate: 2 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
                />
                <div
                  className={`relative backdrop-blur-md border rounded-2xl p-6 text-center h-full transition-all duration-300 ${
                    actualTheme === "dark"
                      ? "bg-[#111111]/90 border-white/10 hover:border-white/30"
                      : "bg-white/90 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl mb-4"
                  >
                    {value.icon}
                  </motion.div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`py-20 relative transition-colors duration-300 ${
          actualTheme === "dark" ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-md border rounded-3xl p-12 ${
              actualTheme === "dark"
                ? "bg-linear-to-r from-orange-500/20 to-yellow-500/20 border-orange-500/30"
                : "bg-linear-to-r from-orange-50 to-yellow-50 border-orange-300"
            }`}
          >
            <h2
              className={`text-3xl md:text-4xl font-black mb-6 ${
                actualTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Transform Your Business?
            </h2>
            <p
              className={`text-xl mb-8 ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Let's innovate together and build solutions that drive real
              impact.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-linear-to-r from-orange-500 to-yellow-400 text-black font-bold text-lg px-12 py-6 rounded-full 
                hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
};

export default AboutPageClient;

