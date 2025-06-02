"use client"
import dynamic from "next/dynamic";

// منع SSR لهذا المكون
const PortfolioClient = dynamic(() => import("@/components/PortfolioClient"), {
  ssr: false,
});

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  GraduationCap,
  User,
  Languages,
  Send,
  Download,
  Code,
  Palette,
  Globe,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [language, setLanguage] = useState("en")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const [animationValue, setAnimationValue] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const sphereRef = useRef<HTMLDivElement>(null)

  const translations: Translations = {
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      activities: "Activities",
      contact: "Contact",
      downloadCV: "Download CV",
      availableForOpportunities: "Available for Opportunities",
      creating: "Creating",
      innovation: "Innovation",
      powering: "Digital",
      success: "Experiences",
      heroDescription:
        "Passionate professional with Baccalauréat degree, bringing creativity and technical expertise to drive digital transformation.",
      getInTouch: "Get In Touch",
      learnMore: "Learn More",
      aboutMe: "About Me",
      aboutDescription: "Discover my journey and expertise",
      education: "Education",
      baccalaureat: "Baccalauréat",
      highSchoolDiploma: "High School Diploma",
      completedWithExcellence: "Completed with excellence",
      languages: "Languages",
      skillsExpertise: "Skills & Expertise",
      skillsDescription: "Technologies and tools I work with",
      learningCoding: "Development",
      learningDesign: "Design",
      learningMarketing: "Marketing",
      myProjects: "Featured Work",
      projectsDescription: "Selected projects and case studies",
      portfolioWebsite: "Portfolio Website",
      designPractice: "Design System",
      marketingCampaign: "Brand Identity",
      myActivities: "Interests",
      activitiesDescription: "What drives my passion",
      basketball: "Basketball",
      videoGames: "Gaming",
      learningDevelopment: "Learning",
      contactMe: "Let's Connect",
      letsWork: "Ready to",
      together: "Collaborate",
      contactDescription: "Let's bring your ideas to life",
      email: "Email",
      phone: "Phone",
      address: "Location",
      sendMessage: "Send Message",
      scrollToExplore: "Scroll to explore",
    },
    ar: {
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      activities: "الاهتمامات",
      contact: "التواصل",
      downloadCV: "تحميل السيرة الذاتية",
      availableForOpportunities: "متاح للفرص",
      creating: "إنشاء",
      innovation: "الابتكار",
      powering: "رقمية",
      success: "تجارب",
      heroDescription: "محترف شغوف حاصل على شهادة البكالوريا، يجلب الإبداع والخبرة التقنية لدفع التحول الرقمي.",
      getInTouch: "تواصل معي",
      learnMore: "اعرف المزيد",
      aboutMe: "نبذة عني",
      aboutDescription: "اكتشف رحلتي وخبرتي",
      education: "التعليم",
      baccalaureat: "البكالوريا",
      highSchoolDiploma: "شهادة الثانوية العامة",
      completedWithExcellence: "مكتملة بامتياز",
      languages: "اللغات",
      skillsExpertise: "المهارات والخبرة",
      skillsDescription: "التقنيات والأدوات التي أعمل بها",
      learningCoding: "التطوير",
      learningDesign: "التصميم",
      learningMarketing: "التسويق",
      myProjects: "أعمال مميزة",
      projectsDescription: "مشاريع ودراسات حالة مختارة",
      portfolioWebsite: "موقع المحفظة",
      designPractice: "نظام التصميم",
      marketingCampaign: "هوية العلامة التجارية",
      myActivities: "الاهتمامات",
      activitiesDescription: "ما يحرك شغفي",
      basketball: "كرة السلة",
      videoGames: "الألعاب",
      learningDevelopment: "التعلم",
      contactMe: "لنتواصل",
      letsWork: "مستعد",
      together: "للتعاون",
      contactDescription: "دعنا نحقق أفكارك",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      address: "الموقع",
      sendMessage: "إرسال رسالة",
      scrollToExplore: "مرر للاستكشاف",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      activities: "Intérêts",
      contact: "Contact",
      downloadCV: "Télécharger CV",
      availableForOpportunities: "Disponible pour les opportunités",
      creating: "Créer",
      innovation: "Innovation",
      powering: "Numériques",
      success: "Expériences",
      heroDescription:
        "Professionnel passionné avec un diplôme de Baccalauréat, apportant créativité et expertise technique.",
      getInTouch: "Contactez-moi",
      learnMore: "En savoir plus",
      aboutMe: "À propos de moi",
      aboutDescription: "Découvrez mon parcours et mon expertise",
      education: "Éducation",
      baccalaureat: "Baccalauréat",
      highSchoolDiploma: "Diplôme d'études secondaires",
      completedWithExcellence: "Complété avec excellence",
      languages: "Langues",
      skillsExpertise: "Compétences et expertise",
      skillsDescription: "Technologies et outils avec lesquels je travaille",
      learningCoding: "Développement",
      learningDesign: "Design",
      learningMarketing: "Marketing",
      myProjects: "Travaux Sélectionnés",
      projectsDescription: "Projets sélectionnés et études de cas",
      portfolioWebsite: "Site web portfolio",
      designPractice: "Système de design",
      marketingCampaign: "Identité de marque",
      myActivities: "Intérêts",
      activitiesDescription: "Ce qui nourrit ma passion",
      basketball: "Basketball",
      videoGames: "Jeux",
      learningDevelopment: "Apprentissage",
      contactMe: "Connectons-nous",
      letsWork: "Prêt à",
      together: "Collaborer",
      contactDescription: "Donnons vie à vos idées",
      email: "Email",
      phone: "Téléphone",
      address: "Localisation",
      sendMessage: "Envoyer un message",
      scrollToExplore: "Faites défiler pour explorer",
    },
  }

  const t = (key: string) => translations[language][key] || key

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Animation frame for the sphere
    let animationFrameId: number
    const animate = () => {
      setAnimationValue(Math.sin(Date.now() * 0.001) * 20)
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Set initial dimensions
    handleResize()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const changeLanguage = () => {
    const languages = ["en", "ar", "fr"]
    const currentIndex = languages.indexOf(language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex])
  }

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden relative"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Custom Cursor */}
      <div
        className="fixed w-4 h-4 bg-gray-900 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-gray-50/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-light tracking-wide">Abdou</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-gray-600 relative group ${
                    activeSection === item ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {t(item)}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={changeLanguage}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 text-sm font-light tracking-wide"
              >
                {language.toUpperCase()}
              </button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-6"
              >
                <Download className="h-4 w-4 mr-2" />
                {t("downloadCV")}
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gray-50/95 backdrop-blur-xl border-b border-gray-200/50 transition-all duration-500 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block text-lg font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                {t(item)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* 3D Sphere */}
        <div
          ref={sphereRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div
            className="w-96 h-96 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl transform transition-transform duration-1000 ease-out"
            style={{
              transform: `
                rotateX(${(mousePosition.y - (windowDimensions.height / 2)) * 0.01}deg)
                rotateY(${(mousePosition.x - (windowDimensions.width / 2)) * 0.01}deg)
                translateZ(${animationValue}px)
              `,
              filter: "blur(0.5px)",
            }}
          />
        </div>

        <div className="text-center z-10 max-w-5xl mx-auto px-6">
          {/* Floating Badge */}
          <div
            className={`inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border border-gray-200/50 shadow-lg transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-light tracking-wide text-gray-700">{t("availableForOpportunities")}</span>
          </div>

          <h1
            className={`text-6xl md:text-8xl font-extralight mb-8 tracking-tight transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {t("creating")} <span className="font-light text-gray-600 italic">{t("innovation")}</span>
            <br />
            {t("powering")} <span className="font-light text-gray-600 italic">{t("success")}</span>
          </h1>

          <p
            className={`text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {t("heroDescription")}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-4 font-light tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              {t("getInTouch")}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-8 py-4 font-light tracking-wide transition-all duration-300"
            >
              {t("learnMore")}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce">
            <span className="text-sm font-light text-gray-500 tracking-wide">{t("scrollToExplore")}</span>
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 tracking-tight">{t("aboutMe")}</h2>
            <p className="text-xl font-light text-gray-600 tracking-wide">{t("aboutDescription")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="bg-white border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-light tracking-wide">{t("education")}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">{t("baccalaureat")}</h4>
                      <p className="text-gray-600 font-light">{t("highSchoolDiploma")}</p>
                      <p className="text-sm text-gray-500 font-light">{t("completedWithExcellence")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Languages className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-light tracking-wide">{t("languages")}</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      { lang: "Arabic", level: 100 },
                      { lang: "English", level: 85 },
                      { lang: "French", level: 80 },
                    ].map((item) => (
                      <div key={item.lang} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-light">{item.lang}</span>
                          <span className="text-sm text-gray-500 font-light">{item.level}%</span>
                        </div>
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-900 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" />
              <div className="absolute inset-4 bg-white rounded-3xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-800 mb-2">Creative Professional</h3>
                  <p className="text-gray-600 font-light">Passionate about innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 tracking-tight">{t("skillsExpertise")}</h2>
            <p className="text-xl font-light text-gray-600 tracking-wide">{t("skillsDescription")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("learningCoding"),
                icon: Code,
                description: "Building modern web applications with cutting-edge technologies",
                skills: ["React", "TypeScript", "Node.js", "Python"],
                color: "from-blue-500 to-purple-600",
              },
              {
                title: t("learningDesign"),
                icon: Palette,
                description: "Creating beautiful and intuitive user experiences",
                skills: ["UI/UX", "Figma", "Adobe CC", "Prototyping"],
                color: "from-pink-500 to-red-600",
              },
              {
                title: t("learningMarketing"),
                icon: Globe,
                description: "Developing strategic digital marketing campaigns",
                skills: ["SEO", "Analytics", "Social Media", "Content"],
                color: "from-green-500 to-teal-600",
              },
            ].map((skill, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-light mb-4 tracking-wide">{skill.title}</h3>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 font-light px-3 py-1 rounded-full"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 tracking-tight">{t("myProjects")}</h2>
            <p className="text-xl font-light text-gray-600 tracking-wide">{t("projectsDescription")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: t("DainoBot"),
                description: "A Discord bot that can help you manage your server and automate tasks",
                image: "/daino.png",
                tags: ["Discord", "Node.js", "Next.js", "Tailwind"],
                status: "Live",
              },
              {
                title: t("Rive Team"),
                description: "A team of developers who are passionate about creating innovative solutions, Manager of the team",
                image: "/rive-banner.png",
                tags: ["Rive Inc", "Manager"],
                status: "Live",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${
                        project.status === "Live"
                          ? "bg-green-500"
                          : project.status === "In Progress"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                      } text-white font-light`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light mb-4 tracking-wide">{project.title}</h3>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 font-light px-3 py-1 rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-6 font-light tracking-wide group"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 tracking-tight">
              {t("letsWork")} <span className="text-gray-600 italic">{t("together")}</span>
            </h2>
            <p className="text-xl font-light text-gray-600 tracking-wide">{t("contactDescription")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
{ icon: Mail, label: t("email"), value: "azzoukaabdennour123@gmail.com" },
{icon : Instagram, label: t("instagram"), value: "911ditto"},
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-light text-gray-700 mb-1">{item.label}</h3>
                      <p className="text-gray-900 font-light">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-8">
                {[
{ icon: MessageCircle, href: "https://wa.me/1234567890", label: "WhatsApp" },
{ icon: Instagram, href: "https://www.instagram.com/911ditto/", label: "Instagram" },
{ icon: Mail, href: "mailto:your.email@gmail.com", label: "Email" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-full w-12 h-12 transition-all duration-300"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Name"
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl font-light"
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl font-light"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl font-light"
                  />
                  <Textarea
                    placeholder="Message"
                    rows={6}
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl font-light resize-none"
                  />
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-xl py-3 font-light tracking-wide transition-all duration-300 transform hover:scale-105">
                    <Send className="h-4 w-4 mr-2" />
                    {t("sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <p className="font-light tracking-wide">© 2024 Abdou. Crafted with passion.</p>
            <p className="font-light tracking-wide">Powered by RiveInc</p>
            <a href="https://riveq.xyz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="/logo-rive.png" alt="RiveInc Logo" className="h-8 w-auto" />
            </a>

          </div>
        </div>
      </footer>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  )
}
