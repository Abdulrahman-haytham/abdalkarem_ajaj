/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2,
  Scale,
  ShieldCheck,
  FileText,
  ArrowUpRight,
  Download,
  Menu,
  X
} from "lucide-react";

const driveFileId = "1AG29nM6gURW9_qa8PTrTTr1XRu1YDuDE";
const profileImageUrl = `https://drive.google.com/thumbnail?id=${driveFileId}&sz=w1200`;
const profileImageFallbackUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-navy-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-navy-950 flex items-center justify-center text-gold-500 font-bold text-xl rounded-xl shadow-inner">
              ع
            </div>
            <span className="text-lg md:text-xl font-bold text-navy-950 tracking-tight">الملف المهني الأكاديمي</span>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-navy-950"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {["الملف الشخصي", "المؤهلات", "السجل المهني", "المنهجية"].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${["profile", "qualifications", "experience", "methodology"][i]}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="nav-link text-navy-800 font-semibold"
              >
                {item}
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-3 bg-navy-950 text-white font-bold hover:bg-navy-800 transition-all shadow-lg shadow-navy-900/20 rounded-xl"
            >
              تواصل مهني
            </motion.a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-navy-900/5 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6 text-center">
              {["الملف الشخصي", "المؤهلات", "السجل المهني", "المنهجية"].map((item, i) => (
                <a 
                  key={item}
                  href={`#${["profile", "qualifications", "experience", "methodology"][i]}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-navy-950"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-8 py-4 bg-navy-950 text-white font-bold rounded-2xl"
              >
                تواصل مهني
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 bg-beige-50 overflow-hidden">
    <div className="absolute -top-12 -left-10 w-56 h-56 bg-gold-500/15 blur-3xl rounded-full animate-pulse-gold" />
    <div className="absolute top-24 -right-16 w-72 h-72 bg-navy-900/10 blur-3xl rounded-full animate-float-soft" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div 
          className="lg:col-span-7 text-center lg:text-right animate-reveal-up"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="h-[2px] w-12 bg-gold-600" />
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">خبير تربوي • 23 عاماً</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-950 leading-tight mb-8 tracking-tight">
            مدرس تربية إسلامية متخصص في <span className="text-gold-600">التوجيه التربوي</span>.
          </h1>
          <p className="text-lg md:text-xl text-navy-800/85 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            خبير في بناء البيئات التعليمية المنضبطة وتطوير المناهج، مرتكزاً على عمق العلوم الشرعية والخبرة الميدانية الطويلة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.a 
              href="#experience" 
              whileHover={{ scale: 1.02 }}
              className="px-10 py-4 bg-navy-950 text-white font-bold shadow-xl flex items-center justify-center gap-3 group rounded-2xl"
            >
              السجل المهني
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="https://example.com/cv.pdf" 
              target="_blank"
              whileHover={{ scale: 1.02 }}
              className="px-10 py-4 bg-gold-600 text-white font-bold shadow-xl flex items-center justify-center gap-3 rounded-2xl"
            >
              <Download className="w-5 h-5" />
              تحميل السيرة الذاتية
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 relative mt-12 lg:mt-0 animate-float-soft"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="relative z-10 aspect-[4/5] max-w-sm mx-auto bg-white p-3 shadow-2xl border border-navy-900/5 rounded-[3rem]">
            <div className="w-full h-full bg-beige-100 flex items-center justify-center overflow-hidden relative rounded-[2.5rem]">
              <img
                src={profileImageUrl}
                alt="الصورة الشخصية"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src !== profileImageFallbackUrl) {
                    img.src = profileImageFallbackUrl;
                  }
                }}
              />
              <div className="absolute bottom-4 right-4 left-4 bg-white/90 backdrop-blur-md p-3 border border-navy-900/5 shadow-lg rounded-2xl">
                <div className="text-navy-950 font-bold">الأستاذ المربي</div>
                <div className="text-gold-600 text-[10px] font-bold uppercase">خبير العلوم الشرعية</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Profile = () => (
  <section id="profile" className="py-20 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        {...fadeInUp}
      >
        <div className="lg:col-span-5">
          <h2 className="section-title">الملف الشخصي</h2>
          <div className="space-y-6 mt-10">
            <div className="p-6 bg-beige-50 border-r-4 border-gold-600 shadow-sm rounded-2xl">
              <div className="text-navy-950 font-bold text-lg mb-2">التخصص</div>
              <div className="text-navy-800/60 text-sm">الشريعة الإسلامية وأصول الفقه بمرجعية أكاديمية.</div>
            </div>
            <div className="p-6 bg-beige-50 border-r-4 border-navy-950 shadow-sm rounded-2xl">
              <div className="text-navy-950 font-bold text-lg mb-2">التركيز</div>
              <div className="text-navy-800/60 text-sm">التعليم الثانوي المتقدم والتوجيه السلوكي.</div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7">
          <div className="prose prose-lg text-navy-800 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-navy-950/80">
              خبير تربوي ومدرس متخصص في التربية الإسلامية، بمسيرة تمتد لأكثر من عقدين في المؤسسات التعليمية السورية.
            </p>
            <p className="text-navy-800/80">
              يرتكز العمل على خلفية أكاديمية تشمل إجازة في الشريعة ودراسات عليا في أصول الفقه. تم التركيز خلال سنوات العمل في الحسكة وحماة على تطوير استراتيجيات إدارة الصف العالية الانضباط.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-navy-900/5">
              <div>
                <div className="text-3xl font-bold text-navy-950 mb-1">23+</div>
                <div className="text-xs font-bold text-gold-600 uppercase tracking-widest">سنة خبرة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-950 mb-1">15k+</div>
                <div className="text-xs font-bold text-gold-600 uppercase tracking-widest">طالب</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Qualifications = () => (
  <section id="qualifications" className="py-32 bg-beige-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="mb-20" {...fadeInUp}>
        <h2 className="section-title">المؤهلات الأكاديمية</h2>
      </motion.div>
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {[
          {
            title: "إجازة في الشريعة الإسلامية",
            institution: "جامعة دمشق",
            icon: <GraduationCap className="w-8 h-8 text-gold-600" />
          },
          {
            title: "دراسات تخصصية عليا في أصول الفقه",
            institution: "جامعة الأزهر (فرع دمشق)",
            icon: <BookOpen className="w-8 h-8 text-gold-600" />
          },
          {
            title: "دبلوم التأهيل التربوي",
            institution: "جامعة دمشق",
            icon: <Award className="w-8 h-8 text-gold-600" />
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-white p-10 shadow-xl border border-navy-900/5 relative overflow-hidden group rounded-3xl"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="mb-8 p-4 bg-beige-50 w-fit rounded-2xl">{item.icon}</div>
            <h3 className="text-xl font-bold text-navy-950 mb-4 leading-tight">{item.title}</h3>
            <div className="h-0.5 w-12 bg-gold-600 mb-6 transition-all group-hover:w-24" />
            <p className="text-navy-800/70 font-bold text-sm uppercase tracking-wider">{item.institution}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="mb-20" {...fadeInUp}>
        <h2 className="section-title">السجل المهني والخبرات</h2>
      </motion.div>
      <div className="space-y-16 max-w-5xl">
        {[
          {
            period: "2011 – الوقت الحاضر",
            role: "مدرس تربية إسلامية (المرحلة الثانوية)",
            location: "مدارس محافظة حماة",
            desc: "الإشراف على العملية التعليمية والتربوية، مع التركيز على إعداد الطلاب للامتحانات العامة وتوجيههم فكرياً وسلوكياً."
          },
          {
            period: "2005 – 2007",
            role: "مدرس تربية إسلامية",
            location: "مدارس محافظة حماة",
            desc: "تطبيق مناهج التربية الإسلامية المطورة والمشاركة في لجان التوجيه التربوي المحلية."
          },
          {
            period: "2002 – 2005",
            role: "مدرس تربية إسلامية",
            location: "مدارس محافظة الحسكة",
            desc: "تأسيس الممارسات التربوية الأولى والتركيز على الضبط الصفي والوسائل التعليمية المبتكرة."
          },
          {
            period: "مستمر",
            role: "خطيب جامع عمر بن الخطاب",
            location: "قمحانة / حماة",
            desc: "تقديم التوجيه الديني والمجتمعي، ومعالجة القضايا التربوية من منظور شرعي معاصر."
          }
        ].map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="grid md:grid-cols-4 gap-12 items-start relative"
            {...fadeInUp}
          >
            <div className="text-gold-600 font-black text-lg pt-1 tracking-tighter">{exp.period}</div>
            <div className="md:col-span-3 border-r-2 border-navy-900/5 pr-12 relative">
              <div className="absolute top-2 -right-[9px] w-4 h-4 rounded-full bg-white border-4 border-gold-600" />
              <h3 className="text-2xl font-bold text-navy-950 mb-3">{exp.role}</h3>
              <div className="text-navy-800/60 text-sm font-bold mb-6 flex items-center gap-2 uppercase tracking-widest">
                <Briefcase className="w-4 h-4" />
                {exp.location}
              </div>
              <p className="text-lg text-navy-800/80 leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Methodology = () => (
  <section id="methodology" className="py-20 lg:py-32 bg-navy-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-12 relative inline-block">
            المنهجية التربوية
            <div className="absolute -bottom-4 right-0 w-16 h-1 bg-gold-500" />
          </h2>
          <div className="space-y-8">
            {[
              { title: "الضبط والانضباط", desc: "تأسيس بيئة تعليمية تحترم القوانين كجزء من التربية السلوكية." },
              { title: "العمق الأكاديمي", desc: "تقديم المادة العلمية بمرجعية شرعية دقيقة ومنهجية رصينة." },
              { title: "التوجيه الفكري", desc: "تحصين الطلاب فكرياً وتعزيز قيم الاعتدال والمسؤولية." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold-500 shrink-0 border border-white/10">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="bg-white/5 backdrop-blur-md p-10 lg:p-16 border border-white/10 relative rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Scale className="w-12 h-12 text-gold-500 mb-8" />
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed italic font-light">
            "التعليم رسالة أمانة تقتضي بناء الوعي قبل نقل المعلومة. التربية الإسلامية إطار عملي لبناء شخصية متوازنة قادرة على مواجهة التحديات."
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-10 bg-gold-500" />
            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs">الأستاذ المربي</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="mb-20 text-center" {...fadeInUp}>
        <h2 className="section-title">مجالات التعاون المهني</h2>
      </motion.div>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {[
          "تقديم محاضرات تخصصية",
          "استشارات تربوية وسلوكية",
          "تطوير الخطط الدرسية",
          "الإرشاد والتوجيه الطلابي",
          "إدارة الندوات الحوارية",
          "التدقيق العلمي للمحتوى",
          "برامج التأهيل القيمي",
          "التوجيه المجتمعي العام"
        ].map((service, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            whileHover={{ backgroundColor: "#0f172a", color: "#fff" }}
            className="p-8 border border-navy-900/10 bg-beige-50 flex flex-col gap-6 transition-all duration-300 group rounded-2xl"
          >
            <CheckCircle2 className="w-6 h-6 text-gold-600 group-hover:text-gold-500" />
            <span className="font-bold text-lg leading-tight">{service}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-white border-t border-navy-900/10 pt-32 pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-12 gap-20 mb-24">
        <div className="md:col-span-6">
          <h2 className="text-4xl font-bold text-navy-950 mb-10 tracking-tight">قنوات التواصل المهني</h2>
          <p className="text-xl text-navy-800/70 mb-12 leading-relaxed">
            متاح للتعاون مع المؤسسات التعليمية، المراكز البحثية، والهيئات التربوية التي تسعى لتعزيز جودة التعليم الديني والتوجيه السلوكي.
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-navy-950 flex items-center justify-center text-gold-500 shadow-xl shadow-navy-900/20 rounded-2xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-navy-800/60 font-black uppercase tracking-widest mb-1">الهاتف المباشر</div>
                <div className="text-xl font-bold text-navy-950" dir="ltr">0959577632</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-navy-950 flex items-center justify-center text-gold-500 shadow-xl shadow-navy-900/20 rounded-2xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-navy-800/60 font-black uppercase tracking-widest mb-1">البريد الإلكتروني</div>
                <div className="text-xl font-bold text-navy-950">info@example.com</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-6 grid sm:grid-cols-2 gap-16">
          <div>
            <h3 className="text-navy-950 font-bold mb-8 flex items-center gap-3 text-lg">
              <Globe className="w-6 h-6 text-gold-600" />
              الكفاءة اللغوية
            </h3>
            <ul className="space-y-6 text-base font-bold text-navy-800/70">
              <li className="flex justify-between border-b border-navy-900/5 pb-3">
                <span>اللغة العربية</span>
                <span className="text-gold-600">إتقان تام</span>
              </li>
              <li className="flex justify-between border-b border-navy-900/5 pb-3">
                <span>اللغة الإنجليزية</span>
                <span className="text-gold-600">مستوى أكاديمي</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-navy-950 font-bold mb-8 flex items-center gap-3 text-lg">
              <FileText className="w-6 h-6 text-gold-600" />
              روابط سريعة
            </h3>
            <ul className="space-y-4 text-base font-bold text-navy-800/70">
              {["الملف الشخصي", "المؤهلات الأكاديمية", "السجل المهني", "المنهجية التربوية"].map((link, i) => (
                <li key={link}>
                  <a 
                    href={`#${["profile", "qualifications", "experience", "methodology"][i]}`} 
                    className="hover:text-gold-600 transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gold-600 rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-navy-900/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-black text-navy-800/45 uppercase tracking-[0.3em]">
        <p>© {new Date().getFullYear()} الملف المهني الأكاديمي</p>
        <div className="flex gap-8">
          <span>الخصوصية</span>
          <span>الشروط</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="rtl min-h-screen selection:bg-gold-500/20 selection:text-navy-950 bg-beige-50">
      <Navbar />
      <AnimatePresence>
        <main>
          <Hero />
          <Profile />
          <Qualifications />
          <Experience />
          <Methodology />
          <Services />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
