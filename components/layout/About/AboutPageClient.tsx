'use client';

import React from "react";
import * as motion from "motion/react-client";
import ClientLogos from "@/components/layout/ClientLogos/ClientLogos";
import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  Rocket,
  Globe,
  Brain,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Users,
  Zap,
  Heart,
  Handshake,
  BookOpen,
  Lightbulb,
  Star,
  Award
} from "lucide-react";

const AboutPageClient = () => {
  const { actualTheme } = useTheme();

  const leaders = [
    {
      name: "Roshi Jambula",
      title: "Chief Executive Officer",
      icon: <Users className="w-6 h-6" />,
      description:
        "A visionary leader with over 25 years of techno-functional expertise, Roshi drives aiCloudHub's mission to revolutionize IT services through innovation, agility, and customer-centric transformation. She leads digital initiatives across Retail, Telecom, and E-commerce, empowering clients with scalable, AI-powered solutions.",
      image: "/categories-AI-ML.jpg",
    },
    {
      name: "Rama Raju",
      title: "Chief Technology Officer",
      icon: <Brain className="w-6 h-6" />,
      description:
        "With more than 25 years of experience, Rama leads aiCloudHub's technology vision—architecting secure, scalable, and future-ready solutions across AI, Cloud, and IoT. His focus on innovation ensures clients stay ahead in an ever-evolving digital landscape.",
      image: "/categories-cloud-computing.jpg",
    },
  ];

  const coreValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agility",
      description: "Quick adaptation to changing business needs",
      color: "from-orange-500 to-yellow-400",
      bg: "bg-orange-500/10",
      text: "text-orange-500"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Integrity",
      description: "Honesty and transparency in every interaction",
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-500/10",
      text: "text-blue-500"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaboration",
      description: "Teamwork across domains and disciplines",
      color: "from-purple-500 to-pink-400",
      bg: "bg-purple-500/10",
      text: "text-purple-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning",
      description: "Continuous growth and skill development",
      color: "from-green-500 to-emerald-400",
      bg: "bg-green-500/10",
      text: "text-green-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Outstanding Quality",
      description: "Excellence in every solution we deliver",
      color: "from-yellow-500 to-orange-400",
      bg: "bg-yellow-500/10",
      text: "text-yellow-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Uniqueness",
      description: "Innovative approaches to complex challenges",
      color: "from-indigo-500 to-purple-400",
      bg: "bg-indigo-500/10",
      text: "text-indigo-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Dedication",
      description: "Committed to client success and impact",
      color: "from-red-500 to-pink-400",
      bg: "bg-red-500/10",
      text: "text-red-500"
    },
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Building intelligent systems that drive automation and innovation.",
      icon: <Brain className="w-10 h-10" />,
    },
    {
      title: "Cloud & DevOps",
      description: "Designing secure, scalable, and high-performance infrastructures.",
      icon: <Cloud className="w-10 h-10" />,
    },
    {
      title: "Cybersecurity",
      description: "Safeguarding data, applications, and operations across platforms.",
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      title: "Quality Engineering",
      description: "Ensuring reliability and performance through automation.",
      icon: <CheckCircle2 className="w-10 h-10" />,
    },
    {
      title: "Data & Analytics",
      description: "Turning information into actionable insights for strategic decisions.",
      icon: <BarChart3 className="w-10 h-10" />,
    },
    {
      title: "IT Staffing & Training",
      description: "Empowering teams with future-ready digital skills.",
      icon: <Users className="w-10 h-10" />,
    },
  ];

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${actualTheme === "dark"
        ? "bg-linear-to-r from-gray-950 via-slate-950 to-zinc-950"
        : "bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50"
        }`}
    >
      {/* Hero Section */}
      <section
        className={`relative pt-28 pb-16 overflow-hidden transition-colors duration-300 ${actualTheme === "dark"
          ? "bg-linear-to-r from-gray-950 via-slate-950 to-zinc-950"
          : "bg-linear-to-br from-orange-50 via-white to-yellow-50"
          }`}
      >
        {/* Tech Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Animated floating shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Animated gradient overlay for dark mode */}
        {actualTheme === 'dark' && (
          <div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300 z-1">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border bg-opacity-50 backdrop-blur-sm shadow-sm"
              style={{
                borderColor: actualTheme === "dark" ? "rgba(249, 115, 22, 0.3)" : "rgba(249, 115, 22, 0.2)",
                backgroundColor: actualTheme === "dark" ? "rgba(249, 115, 22, 0.1)" : "rgba(255, 237, 213, 0.5)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className={`text-sm font-medium ${actualTheme === "dark" ? "text-orange-300" : "text-orange-700"}`}>
                Who We Are
              </span>
            </motion.div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance ${actualTheme === "dark" ? "text-white" : "text-zinc-900"
                }`}
            >
              Driving Digital Transformation. <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Delivering Trusted Value.
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl font-medium leading-relaxed text-balance max-w-2xl mx-auto ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"
                }`}
            >
              We partner with businesses worldwide to build smart, secure, and
              scalable technologies that transform the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Card */}
      <section className="py-12 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-xl border rounded-3xl p-8 md:p-10 shadow-2xl ${actualTheme === "dark"
              ? "bg-zinc-900/50 border-white/5 shadow-black/20"
              : "bg-white/70 border-zinc-200 shadow-zinc-200/50"
              }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-4 ${actualTheme === "dark" ? "text-white" : "text-zinc-900"
                    }`}
                >
                  <span className="text-orange-500">aiCloudHub</span>: Global leader
                  in IT services & corporate training
                </h2>
                <div
                  className={`space-y-4 text-base leading-relaxed ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"
                    }`}
                >
                  <p>
                    Since 2018, we&apos;ve been helping enterprises accelerate digital
                    transformation while strengthening IT capabilities through
                    practical, hands-on learning experiences. Headquartered in{" "}
                    <span className="text-orange-500 font-semibold">
                      Atlanta, GA
                    </span>
                    , we specialize in AI/ML, Cloud, Cybersecurity, DevSecOps,
                    Quality Engineering, and IT Staffing.
                  </p>
                </div>
              </div>
              <div className={`md:w-1/3 p-6 rounded-2xl ${actualTheme === "dark" ? "bg-zinc-800/50" : "bg-orange-50"
                }`}>
                <p
                  className={`font-semibold text-lg italic ${actualTheme === "dark" ? "text-zinc-200" : "text-zinc-800"
                    }`}
                >
                  &quot;We bridge innovation with enablement—helping organizations adopt the right
                  technologies and develop the right talent.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
              <div
                className={`relative h-full backdrop-blur-md border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${actualTheme === "dark"
                  ? "bg-zinc-900/80 border-white/10 hover:border-orange-500/30"
                  : "bg-white border-zinc-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100"
                  }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${actualTheme === 'dark' ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h2 className={`text-2xl font-bold ${actualTheme === "dark" ? "text-white" : "text-zinc-900"}`}>
                    Our Mission
                  </h2>
                </div>
                <p className={`text-lg leading-relaxed ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}>
                  To <span className="text-orange-500 font-semibold">empower organizations and individuals</span> through innovative technology solutions and hands-on learning—enabling faster growth, smarter decisions, and sustainable success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
              <div
                className={`relative h-full backdrop-blur-md border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${actualTheme === "dark"
                  ? "bg-zinc-900/80 border-white/10 hover:border-blue-500/30"
                  : "bg-white border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
                  }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${actualTheme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Globe className="w-8 h-8" />
                  </div>
                  <h2 className={`text-2xl font-bold ${actualTheme === "dark" ? "text-white" : "text-zinc-900"}`}>
                    Our Vision
                  </h2>
                </div>
                <p className={`text-lg leading-relaxed ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}>
                  To be a <span className="text-blue-500 font-semibold">trusted global leader</span> in digital transformation, driving innovation and building capabilities that help businesses and communities succeed in a rapidly evolving world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className={`py-16 relative transition-colors duration-300 ${actualTheme === "dark"
          ? "bg-zinc-950"
          : "bg-zinc-50/50"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className={`text-sm font-bold tracking-wider uppercase mb-2 block ${actualTheme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
              What We Do
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${actualTheme === "dark" ? "text-white" : "text-zinc-900"
                }`}
            >
              Technology Expertise & Human Enablement
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"
                }`}
            >
              We deliver end-to-end IT services and upskilling programs designed for the modern enterprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className={`group p-6 rounded-2xl border transition-all duration-300 ${actualTheme === "dark"
                  ? "bg-zinc-900 border-zinc-800 hover:border-orange-500/30 hover:bg-zinc-800/50"
                  : "bg-white border-zinc-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5"
                  }`}
              >
                <div className={`mb-4 inline-flex p-3 rounded-xl transition-colors duration-300 ${actualTheme === 'dark'
                  ? 'bg-zinc-800 text-zinc-300 group-hover:bg-orange-500/20 group-hover:text-orange-400'
                  : 'bg-zinc-100 text-zinc-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                  }`}>
                  {service.icon}
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${actualTheme === "dark" ? "text-white" : "text-zinc-900"
                    }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"
                    }`}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 relative overflow-hidden">
        {/* Decorative background elements */}
        {actualTheme === 'dark' && (
          <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-t from-zinc-900 to-transparent opacity-50 pointer-events-none" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-3 ${actualTheme === "dark" ? "text-white" : "text-zinc-900"
                }`}
            >
              Leadership Team
            </h2>
            <p
              className={`text-lg ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"
                }`}
            >
              Guided by experience. Driven by innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${actualTheme === "dark"
                    ? "bg-zinc-900 border-zinc-800 hover:border-orange-500/30"
                    : "bg-white border-zinc-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5"
                    }`}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 ${actualTheme === "dark"
                      ? "bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"
                      : "bg-gradient-to-t from-white via-white/20 to-transparent"
                      }`} />

                    <div className="absolute bottom-4 left-6">
                      <div className={`inline-flex items-center justify-center p-2 rounded-full mb-2 backdrop-blur-md ${actualTheme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/10 text-white'
                        }`}>
                        {leader.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 pt-2">
                    <h3
                      className={`text-2xl font-bold mb-1 ${actualTheme === "dark" ? "text-white" : "text-zinc-900"
                        }`}
                    >
                      {leader.name}
                    </h3>
                    <p className="text-orange-500 font-medium mb-4 text-sm uppercase tracking-wide">
                      {leader.title}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"
                        }`}
                    >
                      {leader.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Women Empowerment Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div
              className={`relative overflow-hidden rounded-3xl p-8 md:p-10 border text-center ${actualTheme === "dark"
                ? "bg-gradient-to-br from-purple-900/20 to-zinc-900 border-purple-500/20"
                : "bg-gradient-to-br from-purple-50 to-white border-purple-100"
                }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${actualTheme === "dark" ? "text-white" : "text-zinc-900"
                    }`}
                >
                  Women-Empowered Organization
                </h3>
                <p
                  className={`text-lg leading-relaxed max-w-2xl mx-auto mb-6 ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"
                    }`}
                >
                  At <span className="text-purple-500 font-bold">aiCloudHub</span>, we believe in the power of diverse leadership. Our CEO, Roshi Jambula, exemplifies our commitment to empowering women in technology.
                </p>

                <span className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full ${actualTheme === 'dark' ? 'bg-purple-500/10 text-purple-300' : 'bg-purple-100 text-purple-700'
                  }`}>
                  Building Tomorrow&apos;s Technology, Today
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ClientLogos />

      {/* Core Values */}
      <section
        className={`py-16 relative transition-colors duration-300 ${actualTheme === "dark"
          ? "bg-zinc-950"
          : "bg-zinc-50/50"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${actualTheme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
              Our Core Values
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${actualTheme === "dark" ? "text-zinc-400" : "text-zinc-600"
                }`}
            >
              At aiCloudHub, our values guide every decision, partnership, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className={`p-5 rounded-2xl border text-center transition-all duration-300 ${actualTheme === "dark"
                  ? "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700"
                  : "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-md"
                  }`}
              >
                <div className={`mx-auto w-12 h-12 flex items-center justify-center rounded-xl mb-3 ${value.bg} ${value.text}`}>
                  {value.icon}
                </div>
                <h3
                  className={`text-base font-bold mb-1 ${actualTheme === "dark" ? "text-white" : "text-zinc-900"
                    }`}
                >
                  {value.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${actualTheme === "dark" ? "text-zinc-500" : "text-zinc-500"
                    }`}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPageClient;
