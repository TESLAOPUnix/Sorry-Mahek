"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Heart, Star, Shield, Gift } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const letterRef = useRef(null)
  const carouselRef = useRef(null)
  const gridRef = useRef(null)
  const cardsRef = useRef(null)

  const letterInView = useInView(letterRef, { once: true, amount: 0.2 })
  const carouselInView = useInView(carouselRef, { once: true, amount: 0.2 })
  const gridInView = useInView(gridRef, { once: true, amount: 0.2 })
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 })

  // Hero background images
  const heroImages = [
    "/Mahek_11.jpg",
    "/Mahek_12.jpg", 
    "/Mahek_1.jpg",
    "/Mahek_8.jpg",
    "/Mahek_14.jpg"
  ]

  // Carousel images with captions
  const carouselImages = [
    { src: "/Mahek_9.jpg", caption: "I still remember this smile." },
    { src: "/Mahek_15.jpg", caption: "That day meant everything to me." },
    { src: "/Mahek_5.jpg", caption: "Your laugh was my favorite sound." },
    { src: "/Mahek_3.jpg", caption: "These quiet moments were perfect." },
    { src: "/Mahek_2.jpg", caption: "Every adventure was better with you." },
    { src: "/Mahek_6.jpg", caption: "Sleeping alone without those goodnights will never be the same." }
  ]

  // Grid photos with messages
  const gridPhotos = [
    { src: "/Mahek_13.jpg", message: "I miss the way you made everything lighter." },
    { src: "/Mahek_10.jpg", message: "You brought color to my life." },
    { src: "/Mahek_4.jpg", message: "With you, I found my peace." },
    { src: "/Mahek_7.jpg", message: "Your happiness was my happiness." }
  ]

  // Card content
  const cardContent = [
    {
      title: "Sorry",
      icon: Heart,
      message: "I'm deeply sorry for the pain I caused. My actions were wrong, and I take full responsibility for hurting someone I care about so much."
    },
    {
      title: "Thank You",
      icon: Star,
      message: "Thank you for showing me what real love looks like. Thank you for your patience, your kindness, and for believing in the best parts of me."
    },
    {
      title: "Promise",
      icon: Shield,
      message: "I promise to learn from this mistake. I promise to grow, to be better, and to never take someone's trust for granted again."
    },
    {
      title: "Trust",
      icon: Gift,
      message: "I know trust takes time to rebuild. I'm willing to do whatever it takes, for however long it takes, to earn back what I've lost."
    }
  ]

  // Letter content
  const letterParagraphs = [
    "I've been staring at this blank page for hours, trying to find words that could somehow bridge the distance between us. The truth is, no words feel big enough for what I need to say, but I have to try.",
"I keep replaying everything in my mind – not just the moment I hurt you, but all the moments before that. The way you trusted me completely. The way you shared your dreams, your fears, your heart. I had something precious, and I didn't protect it the way I should have.",
"I want you to know that what happened wasn't about you not being enough. You were everything – more than I ever deserved. This was about my own failings, my own inability to be the person you needed me to be in that moment.",
"I've spent these days learning things about myself that I wish I had understood sooner. I've been going to therapy, reading, reflecting – not because I expect it to change anything between us, but because I owe it to you and to myself to become better.",
"I miss you in ways I didn't know were possible. I miss your voice in the morning, the way you'd get excited about small things, how you made even ordinary moments feel special.",
"I don't know if you'll ever be able to forgive me, and I understand if you can't. But I need you to know that you changed me for the better, even if I couldn't show that when it mattered most.",
"I will give my everything – no matter how long it takes or how much it takes – to make you understand that I care about you, that you matter, and that I trust and respect you. I will do everything I can to gain that bond back, maybe even stronger and better than before.",
  ]

  // Auto-advance hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev: number) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-700">
      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Dancing+Script:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
        
        .font-serif { font-family: 'Crimson Text', serif; }
        .font-script { font-family: 'Dancing Script', cursive; }
        .font-display { font-family: 'Playfair Display', serif; }
        
        body {
          scroll-behavior: smooth;
        }
        
        .sage-green { color: #87A96B; }
        .muted-blue { color: #6B8CAE; }
        .warm-gray { color: #8B7D6B; }
        
        .bg-sage-green { background-color: #87A96B; }
        .bg-muted-blue { background-color: #6B8CAE; }
        .bg-warm-gray { background-color: #8B7D6B; }
        
        .carousel-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .carousel-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
  <motion.div
    key={index}
    className="absolute inset-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: index === currentHeroImage ? 1 : 0 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    {/* Blurred background fill */}
    <img
      src={image || "/placeholder.svg"}
      alt=""
      className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
    />

    {/* Real image, centered */}
    <img
      src={image || "/placeholder.svg"}
      alt={`Background ${index + 1}`}
      className="relative z-10 w-full h-full object-contain"
    />

    <div className="absolute inset-0 bg-black/40" />
  </motion.div>
))}

        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            className="font-script text-6xl md:text-8xl text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            I'm sorry Mahek.
          </motion.h1>
          <motion.h2
            className="font-script text-3xl md:text-4xl text-white/90 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            And this is from the heart.
          </motion.h2>
          <motion.p
            className="font-serif text-xl md:text-2xl text-white/80 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            I hope you can feel the effort and care I've put into this.
          </motion.p>
          
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p className="font-serif text-white/70 mb-4">Scroll to begin</p>
            <ChevronDown className="text-white/70 animate-bounce" size={32} />
          </motion.div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroImage ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => setCurrentHeroImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Letter Section */}
      <section ref={letterRef} className="py-20 px-6 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-xl border border-stone-200/50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: letterInView ? 1 : 0, y: letterInView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="font-script text-5xl sage-green mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: letterInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              A Letter to You
            </motion.h2>
            
            <div className="space-y-8">
              {letterParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="font-serif text-lg leading-relaxed text-stone-600 first-letter:text-4xl first-letter:font-script first-letter:sage-green first-letter:float-left first-letter:mr-2 first-letter:mt-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: letterInView ? 1 : 0, y: letterInView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousel of Images Section */}
      <section ref={carouselRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-script text-5xl sage-green text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: carouselInView ? 1 : 0, y: carouselInView ? 0 : 30 }}
            transition={{ duration: 1 }}
          >
            Memories We Made
          </motion.h2>
          
          <motion.div
            className="flex overflow-x-auto space-x-8 pb-6 carousel-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: carouselInView ? 1 : 0, x: carouselInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {carouselImages.map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: carouselInView ? 1 : 0, scale: carouselInView ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-stone-200/50">
                  <div className="relative">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={`Memory ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <p className="absolute bottom-4 left-4 right-4 font-script text-white text-xl">
                      {item.caption}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid of 4 Photos Section */}
      <section ref={gridRef} className="py-20 px-6 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-script text-5xl sage-green text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: gridInView ? 1 : 0, y: gridInView ? 0 : 30 }}
            transition={{ duration: 1 }}
          >
            What You Meant to Me
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {gridPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: gridInView ? 1 : 0, y: gridInView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
               <Card className="relative h-80 overflow-hidden p-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-stone-200/50 mb-6">
              {/* Blurred background fill */}
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
                />
              {/* Actual image centered on top */}
                <img
                    src={photo.src || "/placeholder.svg"}
                    alt={`Grid photo ${index + 1}`}
                    className="relative z-10 h-full mx-auto object-contain"
                />
                </Card>
                <p className="font-serif text-xl warm-gray leading-relaxed">
                  {photo.message}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section with Dropdown */}
      <section ref={cardsRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-script text-5xl sage-green mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 30 }}
            transition={{ duration: 1 }}
          >
            Click Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="mb-8 px-8 py-4 text-lg font-serif bg-sage-green hover:bg-sage-green/90 text-white rounded-full shadow-lg transition-all duration-300"
            >
              {isDropdownOpen ? (
                <>
                  Hide My Heart <ChevronUp className="ml-2" size={20} />
                </>
              ) : (
                <>
                  Open My Heart <ChevronDown className="ml-2" size={20} />
                </>
              )}
            </Button>
          </motion.div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {cardContent.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-stone-200/50 bg-white/80 backdrop-blur-sm h-full">
                        <CardContent className="p-0 text-center">
                          <div className="mb-6">
                            <card.icon className="mx-auto sage-green" size={40} />
                          </div>
                          <h3 className="font-script text-3xl sage-green mb-4">
                            {card.title}
                          </h3>
                          <p className="font-serif text-stone-600 leading-relaxed">
                            {card.message}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="bg-gradient-to-r from-sage-green/10 to-muted-blue/10 rounded-2xl p-8 border border-stone-200/50"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="font-script text-2xl md:text-3xl sage-green leading-relaxed">
                    "You're the rarest person I've ever met, and I'm thankful for every second we shared."
                  </p>
                  <div className="mt-6">
                    <p className="font-serif text-lg warm-gray">
                      I care about you deeply, even when words fall short.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
