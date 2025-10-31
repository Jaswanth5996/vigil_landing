import React, { useState } from 'react';
import { Shield, MapPin, Heart, ArrowRight, Menu, X, Zap, Hand, Watch, User, Phone, Mail, Globe, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

import LOGO_URL from './images/LOGO1.png';
import STATS_MAP_URL from './images/Picture1.png'
import STATS_CRIMES_URL from './images/Picture2.png'
import landing from './images/LandingImg.jpeg'
import heart from './images/heart.jpeg'

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
    // FIX: Using inline style for primary background
    <div className={`pt-32 lg:pt-48 pb-28 text-white overflow-hidden relative`} style={{ backgroundColor: PRIMARY_DARK_COLOR }}>
        {/* Subtle background pattern for visual interest */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' d='M0 0h1v1H0V0zm2 0h1v1H2V0zm2 0h1v1H4V0zm2 0h1v1H6V0zm2 0h1v1H8V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zM1 2h1v1H1V2zm1 4h1v1H2V6zm0 2h1v1H2V8zm0 2h1v1H2v-1zM1 12h1v1H1v-1zm1 2h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z' opacity='0.05'/%3E%3C/svg%3E\")"}}></div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter animate-fade-in-up">
              <span className="block text-pink-400">VigilVave.</span> 
              Safety That Stays With You.
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-10 animate-fade-in delay-200">
              Your <span className="font-bold text-white">discreet smart wearable</span> for <span className="font-bold text-white">seamless, reliable, and stigma-free</span> personal safety. Live confidently, every day.
            </p>
            <ButtonPrimary className="mx-auto lg:mx-0">
              Pre-Order Now & Secure Peace of Mind <ArrowRight size={20} className="ml-2" />
            </ButtonPrimary>
        </div>

        {/* Product Visual Placeholder (Right Aligned) */}
        <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <img 
                src={landing} 
                alt="Placeholder image of VigilVave smart wearable device"
                // Adjusted shadow intensity
                className="w-full max-w-lg h-auto rounded-3xl shadow-[0_15px_40px_rgba(236,72,153,0.3)] border-4 border-pink-500 transform transition duration-500 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(236,72,153,0.5)]" 
            />
        </div>
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

  // --- Ground Reality Section (Updated with User Images) ---
  const GroundRealitySection = () => (
    // FIX: Using inline style for primary background
    <section id="ground-reality" className={`py-24 md:py-36 text-white`} style={{ backgroundColor: PRIMARY_DARK_COLOR }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            The Ground Reality: The Urgency of Now
          </h2>
          <p className="text-xl text-indigo-200">
            The statistics are alarming. We built VigilVave because current solutions fail when quick, stigma-free action is needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image 1: India Rape Cases by State */}
            <div className="flex justify-center">
                <img 
                    src={STATS_MAP_URL} 
                    alt="Map of India showing rape cases by state in 2022"
                    className="w-full max-w-lg h-auto rounded-2xl shadow-2xl border-4 border-indigo-700 object-cover"
                />
            </div>

            {/* Image 2: Sexual Crimes Infographic */}
            <div className="flex justify-center">
                <img 
                    src={STATS_CRIMES_URL} 
                    alt="Infographic on Sexual Crimes Against Women reported in 2022"
                    className="w-full max-w-lg h-auto rounded-2xl shadow-2xl border-4 border-indigo-700 object-cover"
                />
            </div>
        </div>

        {/* Text Stats for reinforcement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12 max-w-5xl mx-auto">
            <div className="bg-indigo-900 p-6 rounded-xl shadow-2xl border-l-4 border-pink-600">
                <p className="text-5xl font-black text-pink-400 mb-2">51</p>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Incidents Every Hour</h4>
            </div>
             <div className="bg-indigo-900 p-6 rounded-xl shadow-2xl border-l-4 border-purple-600">
                <p className="text-5xl font-black text-purple-400 mb-2">16</p>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Minutes per Crime</h4>
            </div>
             <div className="bg-indigo-900 p-6 rounded-xl shadow-2xl border-l-4 border-teal-600">
                <p className="text-5xl font-black text-teal-400 mb-2">31,516</p>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Rape Cases Reported (2022)</h4>
            </div>
        </div>
      </div>
    </section>
  );

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

            {/* Placeholder Image: Discreet Design */}
            <div className="flex justify-center">
                <img 
                    src={heart}
                    alt="Placeholder image of the discreet VigilVave wearable device on a woman's wrist"
                    className="w-full max-w-lg h-auto rounded-2xl shadow-2xl border-4 border-purple-300"
                />
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
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                        <Mail size={16} className="flex-shrink-0 mr-2 mt-0.5 text-indigo-400"/>
                        <a href={`mailto:${CONTACT.email}`} className="hover:text-pink-500 transition break-all">{CONTACT.email}</a>
                    </div>
                    <div className="text-indigo-200 text-sm flex items-start">
                        <Phone size={16} className="flex-shrink-0 mr-2 mt-0.5 text-indigo-400"/>
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
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm shadow-xl`} style={{ backgroundColor: `${PRIMARY_DARK_COLOR}F2` }}> {/* F2 is for 95% opacity */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-3xl font-bold tracking-wider text-white">
            <LogoImage />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1"> 
            {NAV_ITEMS.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-white text-lg font-medium px-4 py-2 rounded-lg transition duration-150 hover:text-pink-500 lg:hover:bg-indigo-700/50" 
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
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 
          ${isMenuOpen ? 'opacity-100 visible bg-gray-900' : 'opacity-0 invisible'}`}> 
        <div className="pt-20 flex flex-col items-center space-y-6">
          {NAV_ITEMS.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-2xl font-semibold hover:text-pink-500 transition duration-150"
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
