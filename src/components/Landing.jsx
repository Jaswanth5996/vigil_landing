
import React, { useState, useEffect, useRef } from 'react';
import { Shield, MapPin, Heart, ArrowRight, Menu, X, Zap, Hand, Watch, User, Phone, Mail, Globe, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useScroll, useTransform } from 'motion/react';
import { GoogleGeminiEffect } from './ui/google-gemini-effect';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

import LOGO_URL from '../images/LOGO1.png';
import STATS_MAP_URL from '../images/Picture1.png'
import STATS_CRIMES_URL from '../images/Picture2.png'
import landing from '../images/LandingImg.jpeg'
import heart from '../images/heart.jpeg'

// The distinctive dark blue/indigo color from the logo, used for inline styles
const PRIMARY_DARK_COLOR = '#1B243B';

// --- Reusable Components (Icons & Styles) ---

const IconCard = ({ Icon, title, description, color }) => (
  <div className="p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
    <div className={`p-3 inline-flex items-center justify-center rounded-xl bg-${color}-100 text-${color}-600 mb-4`}>
      <Icon size={30} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ButtonPrimary = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    // Ensures the arrow aligns perfectly
    className={`flex items-center justify-center px-10 py-4 text-xl font-bold rounded-xl bg-pink-600 text-white shadow-lg shadow-pink-600/30 transition duration-300 transform hover:bg-pink-700 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-pink-500/50 ${className}`}
  >
    {children}
  </button>
);

const LogoImage = () => (
  <img
    src={LOGO_URL}
    alt="VigilVave Logo - Target icon with text"
    className="h-8 md:h-10 w-auto" // Control size through classes
    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x30/1B243B/FFFFFF?text=VIGIL+VAVE"; }} // Fallback
  />
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  // --- Data based on the provided document ---

  const FEATURES = [
    {
      Icon: Watch,
      title: "Discreet Design",
      description: "Stylish, subtle, and stigma-free wearable, ensuring continuous protection without drawing attention.",
      color: "pink",
    },
    {
      Icon: Zap,
      title: "Instant Activation",
      description: "Faster than fear: immediate, silent alerts to contacts and authorities, bypassing the need for a phone.",
      color: "purple",
    },
    {
      Icon: MapPin,
      title: "Real-Time GPS & Biometrics",
      description: "Crucial location and data sent instantly upon alert, guaranteeing a faster, more effective response.",
      color: "teal",
    },
    {
      Icon: Shield,
      title: "Comprehensive Layering",
      description: "Supports preventive, defensive, and reactive safety for all vulnerable moments and environments.",
      color: "blue",
    },
  ];

  const TESTIMONIALS = [
    {
      name: "Aanya Thapar, 19",
      role: "College Student",
      quote: "Last semester, I was walking back from my evening class when a man started following me near the hostel road. I gripped my phone, pretending to call someone, but my hands were shaking so badly that I couldn’t even unlock it. That night I realized — in danger, you don’t always get time to act. If VigilVave had been there — a simple voice command and a locked safety ring alerting police instantly — I wouldn’t have felt so helpless.",
      color: 'pink-500',
    },
    {
      name: "Sneha Singh, 28",
      role: "Working Professional",
      quote: "I work late shifts at a marketing firm, and my cab rides home often stretch past midnight. Once, when the driver took an unfamiliar route, I froze. I kept sharing my live location with my friend, but what if the network had dropped? VigilVave could have silently locked, alerted authorities, and given me peace of mind — even when I couldn’t reach my phone.",
      color: '-500',
    },
    {
      name: "Meera Roy, 42",
      role: "Mother",
      quote: "I still remember the day my daughter came home scared after being followed from her tuition. I felt anger, but mostly helplessness — I can’t always be there to protect her. A device like VigilVave would mean she carries not just technology, but assurance that someone will respond instantly when she can’t.",
      color: 'pink-500',
    },
  ];

  const FAQS = [
    {
      q: "Why does VigilVave exist?",
      a: "Women in India face rising harassment, stalking, and violent crimes. NCRB 2022 reports 4,45,256 cases, averaging 51 every hour, including one rape every 16 minutes. Current solutions are often slow, unreliable, or stigmatized. VigilVave exists to provide discreet, instant, and reliable safety.",
    },
    {
      q: "What is VigilVave?",
      a: "VigilVave is a smart wearable safety device for women and girls. Its layered innovation supports preventive, defensive, and reactive safety approaches, integrating discreet design and real-time connectivity to trusted contacts and authorities.",
    },
    {
      q: "Who is VigilVave for?",
      a: "Primarily for women and girls aged 10–49 in urban, semi-urban, and rural India. Secondarily for parents, guardians, educational institutions, NGOs, and law enforcement agencies.",
    },
    {
      q: "When is VigilVave used?",
      a: "Anytime a user feels unsafe—during late-night commutes, isolated walks, ride-hailing trips, or travel in unfamiliar areas. It's designed to be used when quick action is needed most.",
    },
    {
      q: "Where does VigilVave operate?",
      a: "Across urban, semi-urban, and rural areas of India, wherever women face potential safety risks.",
    },
    {
      q: "Why choose VigilVave over other solutions?",
      a: "It is discreet, stylish, and stigma-free, activates instantly, sends real-time alerts with location and biometric data, and provides reassurance that help is on the way—addressing the key limitations of existing apps and devices.",
    },
  ];

  const NAV_ITEMS = [
    { name: 'Target', href: '#target-audience' },
    { name: 'Reality', href: '#ground-reality' },
    { name: 'Features', href: '#features' },
    { name: 'Mission', href: '#about' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Stories', href: '#stories' },
  ];

  const CONTACT = {
    email: "deepak.behera1974a@gmail.com",
    phone: "8328334930",
  };

  // --- Hero Section ---
  const HeroSection = () => (
    <div className="relative min-h-screen overflow-hidden pt-20">
      {/* Animated gradient background - Light colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
        {/* Animated orbs - Light pastel colors - Reduced on desktop */}
        <div className="absolute top-1/4 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-pink-200/30 lg:bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 lg:w-[400px] h-80 lg:h-[400px] bg-blue-200/20 lg:bg-blue-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 lg:w-[500px] h-96 lg:h-[500px] bg-purple-200/15 lg:bg-purple-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay for depth - Lighter on desktop */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,255,.03)_1px,transparent_1px)] lg:bg-[linear-gradient(rgba(100,100,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-16 lg:py-20">

          {/* Left: Content with floating elements */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 relative">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-pink-200 text-pink-600 text-sm font-semibold mb-4 animate-fade-in shadow-sm">
              <Shield size={16} className="animate-pulse" />
              <span>India's Smart Safety Revolution</span>
            </div>

            {/* Main heading with gradient text - Adjusted sizing */}
            <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter animate-fade-in-up">
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 lg:mb-4">
                VigilVave
              </span>
              <span className="block text-gray-800 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold">
                Safety That
              </span>
              <span className="block text-gray-800 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span className="relative">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Stays
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 4 50 8 100 4C150 0 150 4 200 4" stroke="url(#gradient)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                With You.
              </span>
            </h1>

            {/* Subheading with icons - Better spacing */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl lg:text-xl text-gray-700 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A <span className="text-gray-900 font-bold">discreet, stylish wearable</span> that delivers instant protection when you need it most.
              </p>

              {/* Feature highlights - Adjusted sizing */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-yellow-200 shadow-sm">
                  <Zap size={14} className="text-yellow-600" />
                  <span className="text-gray-800 font-medium text-xs">Instant Alert</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-teal-200 shadow-sm">
                  <MapPin size={14} className="text-teal-600" />
                  <span className="text-gray-800 font-medium text-xs">Real-Time GPS</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-pink-200 shadow-sm">
                  <Heart size={14} className="text-pink-600" />
                  <span className="text-gray-800 font-medium text-xs">24/7 Protection</span>
                </div>
              </div>
            </div>

            {/* CTA with stats - Better spacing */}
            <div className="space-y-4 lg:space-y-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <ButtonPrimary className="mx-auto lg:mx-0 group text-base lg:text-lg px-8 py-3">
                Pre-Order Now & Secure Peace of Mind
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </ButtonPrimary>

              {/* Trust indicators - Adjusted sizing */}
              <div className="flex items-center gap-6 justify-center lg:justify-start text-gray-700 text-xs lg:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="font-medium">Trusted by 10K+ Women</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-blue-500" />
                  <span className="font-medium">Certified Safe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product showcase with 3D effect - Reduced effects on desktop */}
          <div className="relative animate-fade-in lg:scale-90" style={{ animationDelay: '0.3s' }}>
            {/* Glowing ring background - Light colors, reduced on desktop */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-r from-pink-200/30 to-blue-200/30 lg:from-pink-200/20 lg:to-blue-200/20 blur-3xl animate-pulse"></div>
            </div>

            {/* Main product image with floating animation */}
            <div className="relative z-10 perspective-1000">
              <div className="relative group">
                {/* Decorative elements - Lighter on desktop */}
                <div className="absolute -top-8 -right-8 w-24 h-24 lg:w-20 lg:h-20 bg-pink-300/25 lg:bg-pink-300/15 rounded-full blur-2xl group-hover:scale-125 lg:group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 lg:w-24 lg:h-24 bg-blue-300/25 lg:bg-blue-300/15 rounded-full blur-2xl group-hover:scale-125 lg:group-hover:scale-110 transition-transform duration-700"></div>

                {/* Image container with glass morphism - Lighter on desktop */}
                <div className="relative bg-white/80 lg:bg-white/70 backdrop-blur-xl rounded-[3rem] p-2 border border-pink-200 lg:border-pink-100 shadow-[0_0_60px_rgba(236,72,153,0.2)] lg:shadow-[0_0_40px_rgba(236,72,153,0.15)] group-hover:shadow-[0_0_80px_rgba(236,72,153,0.3)] lg:group-hover:shadow-[0_0_50px_rgba(236,72,153,0.2)] transition-all duration-500 group-hover:scale-[1.02]">
                  <img
                    src={landing}
                    alt="VigilVave smart wearable device"
                    className="w-full h-auto rounded-[2.5rem] relative z-10"
                  />

                  {/* Floating info cards - Hidden on smaller laptops, shown on larger screens */}
                  <div className="absolute top-8 -left-12 bg-white backdrop-blur-sm p-3 rounded-xl shadow-lg border border-pink-200 animate-float hidden xl:block">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <Shield className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold text-xs">Active Protection</p>
                        <p className="text-gray-600 text-[10px]">24/7 Monitoring</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 -right-12 bg-white backdrop-blur-sm p-3 rounded-xl shadow-lg border border-blue-200 animate-float hidden xl:block" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <Zap className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold text-xs">Instant Response</p>
                        <p className="text-gray-600 text-[10px]">&lt;2s Alert Time</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rotating text around image - Lighter on desktop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-80 lg:opacity-50">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                    <defs>
                      <path id="circle" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                    </defs>
                    <text className="text-[10px] lg:text-[8px] fill-pink-400/40 lg:fill-pink-400/30 font-bold uppercase tracking-widest">
                      <textPath href="#circle">
                        • Protect • Empower • Secure • Protect • Empower • Secure
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-20 lg:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white" style={{ filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.03))' }}></path>
        </svg>
      </div>
    </div>
  );

  // --- Target Audience Section ---
  const TargetAudienceSection = () => (
    <section id="target-audience" className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-pink-600 border border-pink-200 bg-pink-50 px-4 py-1.5 rounded-full mb-4 inline-block shadow-md">
          Who We Protect
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 max-w-5xl mx-auto tracking-tight">
          A Seamless Safety Solution for Every Woman in India.
        </h2>
        <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto">
          VigilVave is designed for <span className="font-bold">women and girls aged 10–49</span> across all regions, empowering independence and confidence where it matters most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-indigo-50 rounded-2xl shadow-xl border-b-4 border-pink-600 transition duration-300 hover:shadow-2xl hover:-translate-y-1">
            <User size={40} className="text-pink-600 mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">Ages 10–49</h3>
            <p className="text-gray-600 mt-2">Students, commuters, and professionals who need daily, immediate assurance.</p>
          </div>
          <div className="p-8 bg-indigo-50 rounded-2xl shadow-xl border-b-4 border-purple-600 transition duration-300 hover:shadow-2xl hover:-translate-y-1">
            <Globe size={40} className="text-purple-600 mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">Urban to Rural Reach</h3>
            <p className="text-gray-600 mt-2">Reliable connectivity built to function across all geographical areas within India.</p>
          </div>
          <div className="p-8 bg-indigo-50 rounded-2xl shadow-xl border-b-4 border-teal-600 transition duration-300 hover:shadow-2xl hover:-translate-y-1">
            <Hand size={40} className="text-teal-600 mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">Peace of Mind</h3>
            <p className="text-gray-600 mt-2">Serving parents, guardians, and institutions seeking proactive, reliable safety measures.</p>
          </div>
        </div>
      </div>
    </section>
  );

  // --- Ground Reality Section (Updated with Google Gemini Effect) ---
  const GroundRealitySection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
      <section
        id="ground-reality"
        ref={ref}
        className="h-[400vh] w-full relative overflow-clip"
        style={{ backgroundColor: PRIMARY_DARK_COLOR }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center mb-56 mt-[-100px]">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                The Ground Reality: The Urgency of Now
              </h2>
              <p className="text-xl md:text-2xl text-indigo-200 mb-32">
                The statistics are alarming. We built VigilVave because current solutions fail when quick, stigma-free action is needed most.
              </p>
            </div>

            {/* Text Stats for reinforcement */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto relative z-30 mt-20">
              <div className="bg-indigo-900/80 backdrop-blur-sm p-6 rounded-xl shadow-2xl border-l-4 border-pink-600">
                <p className="text-5xl font-black text-pink-400 mb-2">51</p>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Incidents Every Hour</h4>
              </div>
              <div className="bg-indigo-900/80 backdrop-blur-sm p-6 rounded-xl shadow-2xl border-l-4 border-purple-600">
                <p className="text-5xl font-black text-purple-400 mb-2">16</p>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Minutes per Crime</h4>
              </div>
              <div className="bg-indigo-900/80 backdrop-blur-sm p-6 rounded-xl shadow-2xl border-l-4 border-teal-600">
                <p className="text-5xl font-black text-teal-400 mb-2">31,516</p>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Rape Cases Reported (2022)</h4>
              </div>
            </div>
          </div>

          {/* Google Gemini Effect */}
          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
            title=""
            description=""
            className="absolute inset-0"
          />
        </div>
      </section>
    );
  };

  // --- Features Section (Updated with Image Placeholder) ---
  const FeaturesSection = () => (
    <section id="features" className={`py-24 md:py-36 bg-gray-50`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            How VigilVave Secures Your World
          </h2>
          <p className="text-xl text-gray-600">
            Discreetly designed. Instantly responsive. Layered protection for total peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Cards (Left side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => (
              <IconCard key={index} {...feature} />
            ))}
          </div>

          {/* 3D Card with Discreet Design */}
          <div className="flex justify-center">
            <CardContainer className="inter-var" containerClassName="py-0">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  VigilVave Device
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Discreet, stylish, and always protecting you
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={heart}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="VigilVave wearable device on a woman's wrist"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Learn More →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-pink-600 text-white text-xs font-bold hover:bg-pink-700 transition"
                  >
                    Pre-Order
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );

  // --- Mission/Vision Section ---
  const MissionVisionSection = () => (
    <section id="about" className={`py-24 md:py-36 bg-white`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Our Mission: Safety is a Right
            </h2>
            <p className="text-xl text-gray-700 mb-8 font-light">
              VigilVave is committed to empowering women and girls to live confidently and safely in their daily lives. We believe that personal safety should be <span className="font-bold ">seamless, reliable, and stigma-free</span>.
            </p>

            <div className="space-y-8">
              {/* Vision Card */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-xl border-l-4 border-pink-600 transition duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <Zap className="text-pink-600 mr-3" size={24} /> Our Vision
                </h3>
                <p className="text-gray-600">A world where every woman feels safe, confident, and empowered, everywhere she goes.</p>
              </div>

              {/* Mission Card */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-xl border-l-4 border-teal-600 transition duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <Heart className="text-teal-600 mr-3" size={24} /> Our Mission
                </h3>
                <p className="text-gray-600">To provide innovative, discreet, and reliable personal safety solutions that integrate technology, design, and social impact.</p>
              </div>
            </div>
          </div>

          {/* Value Proposition on the right - updated to look more premium */}
          <div className="p-10 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-700 text-white shadow-3xl transform hover:scale-[1.02] transition duration-300">
            <h3 className="text-4xl font-extrabold mb-4">Core Value Proposition</h3>
            <p className="text-lg leading-relaxed text-pink-100">
              Vigil Vave empowers women in India aged <span className="font-bold text-white">15-35</span> with an advanced safety wearable that delivers <span className="font-bold ">protection, peace of mind, health monitoring, and instant emergency response</span>.
            </p>
            <p className="mt-4 text-xl font-bold text-white">
              It's safety that stays with you, protects you, and acts the moment you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // --- FAQ Section (Dropdown Section) ---
  const FAQSection = () => {

    const toggleFAQ = (index) => {
      setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
      <section id="faqs" className={`py-24 md:py-36 bg-gray-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Immediate answers to the most common questions about VigilVave and its mission.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100">
                <button
                  className="w-full text-left p-6 flex justify-between items-center transition-colors duration-300 hover:bg-indigo-50 rounded-xl"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`text-xl font-semibold ${openFAQ === index ? 'text-pink-600' : 'text-gray-800'}`}>
                    {faq.q}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp size={24} className="text-pink-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-500 flex-shrink-0 ml-4" />
                  )}
                </button>
                {/* Answer Content - Uses max-height for smooth transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  style={{ maxHeight: openFAQ === index ? '500px' : '0' }} // Explicit max-height for transition
                >
                  <p className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  };


  // --- Testimonials Section (Real Stories) ---
  const TestimonialsSection = () => (
    <section id="stories" className={`py-24 md:py-36 bg-white`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Real Women. Real Peace of Mind.
          </h2>
          <p className="text-xl text-gray-600">
            Hear the stories of those who need a solution that reacts faster than fear.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((story, index) => (
            <div key={index} className={`bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-${story.color} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
              <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                “{story.quote}”
              </p>
              <div className="font-bold text-gray-900">
                {story.name}
              </div>
              <div className={`text-sm text-${story.color}`}>
                {story.role}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <ButtonPrimary onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Join the Movement <ArrowRight size={20} className="ml-2" />
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );

  // --- Footer/Contact Section (Cleaned up and centered) ---
  const Footer = () => (
    // FIX: Using inline style for primary background
    <footer id="contact" className={`text-white py-16`} style={{ backgroundColor: PRIMARY_DARK_COLOR }}>
      <div className="container mx-auto px-4">

        {/* Top Section: Logo and Call to Action - Centered on Mobile */}
        <div className="border-b border-indigo-700 pb-10 mb-10 flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Tagline */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <LogoImage />
            <p className="mt-3 text-indigo-300 max-w-xs text-sm mx-auto md:mx-0">Empowering independence and confidence through reliable safety solutions.</p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-pink-500 mb-3">Ready to feel safe?</h4>
            <ButtonPrimary className="px-6 py-3 text-lg">
              Pre-Order Your VigilVave <ArrowRight size={20} className="ml-2" />
            </ButtonPrimary>
          </div>
        </div>

        {/* Bottom Section: Navigation and Contact Info - Simplified Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-12">

          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">Quick Links</h4>
            <nav className="space-y-2">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-indigo-200 hover:text-pink-500 transition duration-150 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">Contact</h4>
            <div className="space-y-2">
              <div className="text-indigo-200 text-sm flex items-start">
                <Mail size={16} className="flex-shrink-0 mr-2 mt-0.5 text-indigo-400" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-pink-500 transition break-all">{CONTACT.email}</a>
              </div>
              <div className="text-indigo-200 text-sm flex items-start">
                <Phone size={16} className="flex-shrink-0 mr-2 mt-0.5 text-indigo-400" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-pink-500 transition">{CONTACT.phone}</a>
              </div>
            </div>
          </div>

          {/* Column 3: Audience */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">Target Audience</h4>
            <p className="text-indigo-200 text-sm">Women and girls aged 10–49 across urban, semi-urban, and rural India.</p>
          </div>

          {/* Column 4: Legal & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">Resources</h4>
            <div className="space-y-2">
              <p className="text-indigo-200 hover:text-pink-500 transition cursor-pointer text-sm">Privacy Policy</p>
              <p className="text-indigo-200 hover:text-pink-500 transition cursor-pointer text-sm">Terms of Service</p>
            </div>
          </div>

        </div>

        <div className="text-center text-sm text-indigo-400 mt-12 pt-6 border-t border-indigo-700">
          © {new Date().getFullYear()} VigilVave. All rights reserved.
        </div>
      </div>
    </footer>
  );

  // --- Navigation Bar ---
  const Navbar = () => (
    // FIX: Using inline style for primary background
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-xl`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-3xl font-bold tracking-wider text-pink-700">
            <LogoImage />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1">
            {NAV_ITEMS.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-pink-700 text-lg font-medium px-4 py-2 rounded-lg transition duration-150 hover:text-pink-500 lg:hover:bg-pink-50/80"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.href.substring(1)).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonPrimary className="px-5 py-2 text-base">Pre-Order</ButtonPrimary>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-pink-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <div className="pt-20 flex flex-col items-center space-y-6">
          {NAV_ITEMS.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-pink-700 text-2xl font-semibold hover:text-pink-500 transition duration-150"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById(item.href.substring(1)).scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.name}
            </a>
          ))}
          <ButtonPrimary className="mt-8">Pre-Order</ButtonPrimary>
        </div>
      </div>
    </header>
  );

  return (
    // Set min-h-screen and font-sans in the global container
    <div className="min-h-screen bg-white font-sans antialiased">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Navbar />
      <main>
        <HeroSection />
        <TargetAudienceSection />
        <GroundRealitySection />
        <FeaturesSection />
        <MissionVisionSection />
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
