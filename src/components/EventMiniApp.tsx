"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  UtensilsCrossed,
  Gift,
  MapPin,
  Clock,
  Music,
  Heart,
  Sun,
  Star,
  Shirt,
  Sparkles,
  Languages
} from "lucide-react";

// --- Configuration & Data ---

const DAYS = [
  { id: "23", label: "23 Feb", day: "Mon", event: "Mehendi", theme: "emerald" },
  { id: "24", label: "24 Feb", day: "Tue", event: "Haldi", theme: "amber" },
  { id: "25", label: "25 Feb", day: "Wed", event: "Wedding", theme: "rose" },
  { id: "26", label: "26 Feb", day: "Thu", event: "Reception", theme: "violet" },
];

const UI_TEXT = {
  header_sub: { en: "GAVASKAR PARIVAR PRESENTS", mr: "गावस्कर परिवार प्रस्तुत" },
  header_title: { en: "Atul & Vaishnavi", mr: "अतुल आणि वैष्णवी" },
  location_short: { en: "Hinganghat • Chandrapur", mr: "हिंगणघाट • चंद्रपूर" },
  tabs: {
    schedule: { en: "schedule", mr: "वेळापत्रक" },
    menu: { en: "menu", mr: "मेन्यू" },
    gift: { en: "gift", mr: "भेट" },
  },
  events_suffix: { en: "Events", mr: "कार्यक्रम" },
  grand_feast: { en: "The Grand Feast", mr: "शाही भोजन" },
  feast_desc: { en: "Enjoy a curated selection of culinary delights prepared with love.", mr: "प्रेमाने बनवलेल्या स्वादिष्ट भोजनाचा आनंद घ्या." },
  send_blessings: { en: "Send Blessings", mr: "शुभेच्छा पाठवा" },
  blessings_desc: { en: "Your blessings and good wishes are the greatest gift for us. If you wish to give shagun, you can use UPI.", mr: "तुमचा आशीर्वाद आणि शुभेच्छा हीच आमच्यासाठी मोठी भेट आहे. तुम्हाला शगुन द्यायचा असल्यास, तुम्ही UPI वापरू शकता." },
  send_upi: { en: "Send via UPI", mr: "UPI द्वारे पाठवा" },
  secure_payment: { en: "Secure Payments via your App", mr: "तुमच्या ॲपद्वारे सुरक्षित व्यवहार" },
  no_menu: { en: "No specific menu for this event.", mr: "या कार्यक्रमासाठी खास मेन्यू नाही." }
};

const SCHEDULE_DATA: Record<string, { en: any[], mr: any[] }> = {
  "23": {
    en: [
      { time: "10:00 AM", event: "Inauguration Program", location: "Gavaskar Niwas", icon: Sun },
      { time: "11:00 AM", event: "Daayka Program", location: "Gavaskar Niwas", icon: Sun },
      {
        time: "1:00 PM",
        event: "Mehendi Ceremony",
        location: "Gavaskar Niwas",
        icon: Heart,
        note: "Attire: Mehendi Shirt / Mehendi Saree"
      },
      {
        time: "8:00 PM",
        event: "Sangeet Night",
        location: "Gavaskar Niwas",
        icon: Music,
        note: "Join us for a night of music & dance!"
      },
    ],
    mr: [
      { time: "सकाळी १०:००", event: "उद्घाटन कार्यक्रम", location: "गावस्कर निवास", icon: Sun },
      { time: "सकाळी ११:००", event: "दायका कार्यक्रम", location: "गावस्कर निवास", icon: Sun },
      {
        time: "दुपारी १:००",
        event: "मेहंदी सोहळा",
        location: "गावस्कर निवास",
        icon: Heart,
        note: "वेशभूषा: मेहंदी शर्ट / मेहंदी साडी"
      },
      {
        time: "रात्री ८:००",
        event: "संगीत संध्या",
        location: "गावस्कर निवास",
        icon: Music,
        note: "संगीत आणि नृत्याच्या रात्रीत सामील व्हा!"
      },
    ]
  },
  "24": {
    en: [
      {
        time: "11:00 AM",
        event: "Haldi Puja",
        location: "Gavaskar Niwas",
        icon: Sun,
        note: "Attire: Women - Ulta Pallu Saree"
      },
      {
        time: "3:00 PM",
        event: "Haldi & DJ",
        location: "Gavaskar Niwas",
        icon: Music,
        note: "Attire: Men - Yellow Kurta | Women - Nauvari"
      },
    ],
    mr: [
      {
        time: "सकाळी ११:००",
        event: "हळदी समारंभ",
        location: "गावस्कर निवास",
        icon: Sun,
        note: "वेशभूषा: महिला - उलटा पदर साडी"
      },
      {
        time: "दुपारी ३:००",
        event: "हळद आणि डीजे",
        location: "गावस्कर निवास",
        icon: Music,
        note: "वेशभूषा: पुरुष - पिवळा कुर्ता | महिला - नऊवारी"
      },
    ]
  },
  "25": {
    en: [
      { time: "6:00 AM", event: "Baraat Procession", location: "Starts from Hinganghat", icon: MapPin },
      { time: "9:00 AM - 11:30 AM", event: "Arrival at Bride's Mandap (Band & Dhumal)", location: "Chandrapur", icon: Music },
      { time: "11:30 AM", event: "The Royal Passage", location: "Shakuntala Hall, Chandrapur", icon: Music },
      { time: "11:45 AM", event: "Divine Moment (Wedding)", location: "Shakuntala Hall, Chandrapur", icon: Heart },
    ],
    mr: [
      { time: "सकाळी ६:००", event: "वरात प्रस्थान", location: "हिंगणघाट वरून", icon: MapPin },
      { time: "सकाळी ९:०० - ११:३०", event: "वधू मंडपी आगमन (बँड आणि धुमाल)", location: "चंद्रपूर", icon: Music },
      { time: "सकाळी ११:३०", event: "रॉयल एन्ट्री", location: "शकुंतला हॉल, चंद्रपूर", icon: Music },
      { time: "सकाळी ११:४५", event: "शुभ विवाह", location: "शकुंतला हॉल, चंद्रपूर", icon: Heart },
    ]
  },
  "26": {
    en: [
      {
        time: "8:00 AM",
        event: "Foam Party & DJ",
        location: "Nakshatra Lawn",
        icon: Music,
        note: "Attire: Printed Shirts / Dresses"
      },
      { time: "11:00 AM", event: "Satyanarayan Puja", location: "Gavaskar Niwas", icon: Star },
      { time: "7:00 PM", event: "Grand Reception", location: "Nakshatra Lawn", icon: Sparkles },
    ],
    mr: [
      {
        time: "सकाळी ८:००",
        event: "फोम पार्टी आणि डीजे",
        location: "नक्षत्र लॉन",
        icon: Music,
        note: "वेशभूषा: प्रिंटेड शर्ट्स / ड्रेस"
      },
      { time: "सकाळी ११:००", event: "सत्यनारायण पूजा", location: "गावस्कर निवास", icon: Star },
      { time: "संध्याकाळी ७:००", event: "स्वागत समारंभ (रिसेप्शन)", location: "नक्षत्र लॉन", icon: Sparkles },
    ]
  },
};

const MENU_DATA: Record<string, { cat: { en: string, mr: string }, items: { en: string[], mr: string[] } }[]> = {
  "23": [ // Mehendi
    {
      cat: { en: "Street Food", mr: "चाट आणि स्ट्रीट फूड" },
      items: {
        en: ["Pani Puri", "Dahi Puri", "Pav Bhaji", "Tawa Pulao"],
        mr: ["पाणीपुरी", "दहीपुरी", "पावभाजी", "तवा पुलाव"]
      }
    },
    {
      cat: { en: "Beverages", mr: "पेय" },
      items: {
        en: ["Masala Chai", "Coffee", "Mocktails"],
        mr: ["मसाला चहा", "कॉफी", "मॉकटेल्स"]
      }
    }
  ],
  "24": [ // Haldi
    {
      cat: { en: "Maharashtrian Thali", mr: "महाराष्ट्रीयन थाळी" },
      items: {
        en: ["Puran Poli", "Katachi Amti", "Batata Bhaji", "Masale Bhaat", "Kurdai"],
        mr: ["पुरण पोळी", "टाकाची आमटी", "बटाटा भाजी", "मसाले भात", "कुरडई"]
      }
    },
    {
      cat: { en: "Sides", mr: "इतर" },
      items: {
        en: ["Limbu Sarbat", "Solkadhi"],
        mr: ["लिंबू सरबत", "सोलकढी"]
      }
    }
  ],
  "25": [ // Wedding
    {
      cat: { en: "Welcome Drinks", mr: "स्वागत पेय" },
      items: { en: ["Thandai", "Fresh Fruit Juice"], mr: ["थंडाई", "फळांचा रस"] }
    },
    {
      cat: { en: "Main Course", mr: "मुख्य जेवण" },
      items: { en: ["Paneer Angara", "Dal Tadka", "Veg Kolhapuri", "Butter Naan", "Jeera Rice"], mr: ["पनीर अंगारा", "डाळ तडका", "व्हेज कोल्हापुरी", "बटर नान", "जिरा राइस"] }
    },
    {
      cat: { en: "Desserts", mr: "मिठाई" },
      items: { en: ["Gulab Jamun", "Sitaphal Basundi"], mr: ["गुलाब जामून", "सिताफळ बासुंदी"] }
    }
  ],
  "26": [ // Reception
    {
      cat: { en: "Soup & Starters", mr: "सूप आणि स्टार्टर्स" },
      items: { en: ["Manchow Soup", "Hara Bhara Kebab", "Paneer Tikka"], mr: ["मंचाव सूप", "हरा भरा कबाब", "पनीर टिक्का"] }
    },
    {
      cat: { en: "Main Course", mr: "मुख्य जेवण" },
      items: { en: ["Malai Kofta", "Methi Matar Malai", "Dal Makhani", "Veg Biryani"], mr: ["मलाई कोफ्ता", "मेथी मटर मलाई", "डाळ मखनी", "व्हेज बिर्याणी"] }
    },
    {
      cat: { en: "Desserts", mr: "मिठाई" },
      items: { en: ["Ras Malai", "Gajar Halwa", "Ice Cream"], mr: ["रस मलाई", "गाजर हलवा", "आईस्क्रीम"] }
    }
  ]
};

const THEMES: Record<string, { bg: string, text: string, accent: string, border: string, soft: string, header: string }> = {
  emerald: {
    bg: "bg-emerald-950",
    text: "text-emerald-900",
    accent: "bg-emerald-600",
    border: "border-emerald-100",
    soft: "bg-emerald-50",
    header: "from-emerald-900 to-emerald-800"
  },
  amber: {
    bg: "bg-amber-500",
    text: "text-amber-900",
    accent: "bg-amber-500",
    border: "border-amber-100",
    soft: "bg-amber-50",
    header: "from-amber-500 to-amber-400"
  },
  rose: {
    bg: "bg-rose-900",
    text: "text-rose-900",
    accent: "bg-rose-600",
    border: "border-rose-100",
    soft: "bg-rose-50",
    header: "from-rose-900 to-rose-800"
  },
  violet: {
    bg: "bg-violet-900",
    text: "text-violet-900",
    accent: "bg-violet-600",
    border: "border-violet-100",
    soft: "bg-violet-50",
    header: "from-violet-900 to-violet-800"
  },
};

export default function EventMiniApp() {
  const [activeTab, setActiveTab] = useState("schedule");

  // Default to "23" for server/initial render
  const [activeDay, setActiveDay] = useState("23");

  // Client-side only: Auto-switch date if needed
  useEffect(() => {
    const today = new Date();
    const day = today.getDate().toString();
    const month = today.getMonth(); // 0-indexed (1 is Feb)

    // Only auto-switch for Feb 24, 25, 26
    if (month === 1 && ["24", "25", "26"].includes(day)) {
      setActiveDay(day);
    }
  }, []);

  const [lang, setLang] = useState<"en" | "mr">("en");

  const t = (key: keyof typeof UI_TEXT) => {
    return (UI_TEXT[key] as any)[lang];
  };

  const currentTheme = THEMES[DAYS.find(d => d.id === activeDay)?.theme || "rose"];

  // Dynamic header text color: Amber is light, so use dark text. Others use white.
  // const headerTextColor = activeDay === "24" ? "text-amber-950" : "text-white"; 
  // NOTE: New Design uses fixed light colors for header text on dark gradients
  const headerTextColor = "text-wedding-cream";
  const headerSubColor = "text-wedding-gold";

  const listVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
    hidden: {},
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-slate-50 flex flex-col items-center font-body pb-40">

      {/* --- Dynamic Header / Hero Section --- */}
      <motion.header
        layout
        className={`w-full max-w-md mx-auto rounded-b-[2.5rem] shadow-2xl pt-10 pb-8 px-5 text-center bg-gradient-to-b ${currentTheme.header} relative overflow-hidden border-b-4 border-wedding-gold/20`}
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay pointer-events-none" />

        {/* LOGO */}
        <div className="flex justify-center mb-6 relative z-10">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-glass border border-white/30 ring-1 ring-white/10">
            <Image src="/gavaskar-logo.png" alt="Gavaskar Family Logo" width={80} height={80} className="object-contain w-full h-full drop-shadow-md" />
          </div>
        </div>

        <motion.div className="relative z-10">
          <motion.p className={`text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-wedding-gold/90`}>
            {t("header_sub")}
          </motion.p>
          <motion.h1 className={`text-5xl font-heading text-wedding-cream mb-2 drop-shadow-sm`}>
            {t("header_title")}
          </motion.h1>
          <motion.p className={`text-lg font-heading text-wedding-gold mb-4 tracking-widest`}>
            {lang === 'en' ? 'Wedding' : 'शुभ विवाह'}
          </motion.p>

          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/10 backdrop-blur-sm border border-white/10 text-wedding-cream/90 text-[10px] font-bold uppercase tracking-widest mb-6`}>
            <MapPin size={12} className="text-wedding-gold" /> {t("location_short")}
          </div>

          {/* Timer Removed as per request */}
        </motion.div>

        {/* Language Toggle */}
        <button
          onClick={() => setLang(l => l === 'en' ? 'mr' : 'en')}
          className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg active:scale-95 transition-transform border border-white/20 glass ${"bg-white/10 text-wedding-cream hover:bg-white/20"
            }`}
        >
          {lang === 'en' ? 'अ' : 'En'}
        </button>
      </motion.header>

      {/* --- Tab Navigation (Floating Glass) --- */}
      <div className="w-full max-w-md sticky top-4 z-20 px-4 mt-[-1.5rem]">
        <nav className="flex p-1.5 glass rounded-full shadow-glass backdrop-blur-md bg-white/60 border border-white/40">
          {["schedule", "menu", "gift"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 relative py-3 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors"
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-pill"
                  className={`absolute inset-0 rounded-full shadow-sm ${currentTheme.bg}`}
                />
              )}
              <span className={`relative z-10 transition-colors ${activeTab === tab ? "text-white" : "hover:text-slate-800"}`}>
                {UI_TEXT.tabs[tab as keyof typeof UI_TEXT.tabs][lang]}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="w-full max-w-md flex-1 px-4 mt-8 pb-24">
        <AnimatePresence mode="wait">

          {/* --- SCHEDULE TAB --- */}
          {activeTab === "schedule" && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {/* Day Selector */}
              {/* Day Selector - Elegant Shapes */}
              {/* Day Selector - Elegant Shapes */}
              <div className="flex gap-4 overflow-x-auto pb-6 pt-4 no-scrollbar px-2 justify-center">
                {DAYS.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setActiveDay(day.id)}
                    className={`flex-shrink-0 flex flex-col items-center justify-center w-18 h-20 rounded-2xl transition-all duration-300 relative overflow-hidden group ${activeDay === day.id
                      ? `${currentTheme.bg} text-white shadow-xl scale-110 ring-2 ring-offset-2 ring-wedding-gold`
                      : "bg-white text-slate-400 border border-slate-100 shadow-sm hover:border-wedding-gold/50"
                      }`}
                  >
                    {activeDay === day.id && (
                      <motion.div layoutId="activeDayDot" className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-0.5">{day.day}</span>
                    <span className="text-2xl font-heading font-bold leading-none">{day.id}</span>
                    <span className="text-[9px] opacity-60 mt-1">{day.label.split(" ")[1]}</span>
                  </button>
                ))}
              </div>

              {/* Event List */}
              <motion.div
                key={activeDay} // Re-animate when day changes
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <div className={`text-xs font-black uppercase tracking-widest mb-3 ${currentTheme.text} opacity-60 ml-1`}>
                  {DAYS.find(d => d.id === activeDay)?.event} {t("events_suffix")}
                </div>

                {SCHEDULE_DATA[activeDay][lang]?.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-5 relative overflow-hidden"
                  >
                    {/* Timeline Line */}
                    {i !== SCHEDULE_DATA[activeDay][lang].length - 1 && (
                      <div className="absolute left-[42px] top-16 bottom-0 w-0.5 bg-slate-100" />
                    )}

                    <div className={`mt-0.5 w-12 h-12 rounded-full ${currentTheme.soft} flex items-center justify-center shrink-0`}>
                      <item.icon size={20} className={currentTheme.text} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-heading text-slate-800 leading-tight mb-1.5">{item.event}</h3>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        <Clock size={14} /> {item.time}
                      </div>
                      <div className="text-xs text-slate-600 font-medium bg-slate-50 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg">
                        <MapPin size={12} /> {item.location}
                      </div>
                      {item.note && (
                        <div className={`mt-4 text-sm ${currentTheme.text} bg-slate-50 p-3 rounded-xl border border-slate-100 flex gap-3 items-start`}>
                          <Shirt size={16} className="shrink-0 mt-0.5 opacity-70" />
                          <span className="opacity-90 leading-snug">{item.note}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* --- MENU TAB --- */}
          {activeTab === "menu" && (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
                <div className={`w-16 h-16 mx-auto rounded-full ${currentTheme.soft} flex items-center justify-center mb-4`}>
                  <UtensilsCrossed size={32} className={currentTheme.text} />
                </div>
                <h2 className="text-xl font-heading text-slate-800 mb-2">{t("grand_feast")}</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{t("feast_desc")}</p>
              </div>

              {/* Day Selector for Menu - Reusing Logic */}
              <div className="flex gap-4 overflow-x-auto pb-6 pt-4 no-scrollbar px-2 justify-center">
                {DAYS.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setActiveDay(day.id)}
                    className={`flex-shrink-0 flex flex-col items-center justify-center w-18 h-20 rounded-2xl transition-all duration-300 relative overflow-hidden group ${activeDay === day.id
                      ? `${currentTheme.bg} text-white shadow-xl scale-110 ring-2 ring-offset-2 ring-wedding-gold`
                      : "bg-white text-slate-400 border border-slate-100 shadow-sm hover:border-wedding-gold/50"
                      }`}
                  >
                    {activeDay === day.id && (
                      <motion.div layoutId="activeMenuDayDot" className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-0.5">{day.day}</span>
                    <span className="text-2xl font-heading font-bold leading-none">{day.id}</span>
                    <span className="text-[9px] opacity-60 mt-1">{day.label.split(" ")[1]}</span>
                  </button>
                ))}
              </div>

              {MENU_DATA[activeDay] ? (
                MENU_DATA[activeDay].map((section, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                    <div className={`px-5 py-4 ${currentTheme.soft} border-b ${currentTheme.border}`}>
                      <h3 className={`text-sm font-black uppercase tracking-widest ${currentTheme.text}`}>{section.cat[lang]}</h3>
                    </div>
                    <div className="p-5 space-y-4">
                      {section.items[lang].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-slate-200 shrink-0" />
                          <span className="text-base text-slate-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-slate-400 italic">
                  {t("no_menu")}
                </div>
              )}
            </motion.div>
          )}

          {/* --- GIFT TAB --- */}
          {activeTab === "gift" && (
            <motion.div
              key="gift"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <div className={`w-24 h-24 rounded-full ${currentTheme.soft} flex items-center justify-center mb-6 shadow-sm`}>
                <Gift size={48} className={currentTheme.text} />
              </div>
              <h2 className="text-2xl font-heading text-slate-800 mb-2">{t("send_blessings")}</h2>
              <p className="text-sm text-slate-500 text-center px-8 mb-8">
                {t("blessings_desc")}
              </p>

              <button className={`flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform ${currentTheme.bg}`}>
                <span>{t("send_upi")}</span>
                <div className="bg-white/20 p-1 rounded">
                  <ChevronRight size={16} />
                </div>
              </button>
              <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-widest">{t("secure_payment")}</p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
}

// Helper component for Icons
function ChevronRight({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  )
}
