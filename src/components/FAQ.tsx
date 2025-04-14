
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const faqItems = [
    {
      question: "What is FlutterFlow and why use it for websites and web applications?",
      answer: "FlutterFlow is a powerful visual development platform that allows for the creation of beautiful, high-performance websites, landing pages, and web applications. It combines the speed of visual development with the performance of Flutter, resulting in digital solutions that are not only aesthetically pleasing but also fast and responsive."
    },
    {
      question: "How long does it take to build a website or web application with FlutterFlow?",
      answer: "The timeframe depends on the complexity of your project. Simple landing pages can be completed in as little as 1-2 weeks, while more complex websites and web applications with custom features typically take 3-6 weeks. We'll provide you with a specific timeline after understanding your requirements."
    },
    {
      question: "Can I update the content of my website or web application myself after it's built?",
      answer: "Absolutely! We can set up a content management system that allows you to easily update text, images, and other content without needing technical skills. For more complex changes, we offer maintenance packages to ensure your website or web application stays up-to-date."
    },
    {
      question: "Do FlutterFlow websites and web applications work well on mobile devices?",
      answer: "Yes, all our FlutterFlow projects are fully responsive and optimized for mobile devices. They look and perform excellently across desktops, tablets, and smartphones of all sizes."
    },
    {
      question: "Can you integrate my existing tools and systems?",
      answer: "Yes, we can integrate your FlutterFlow website, landing page, or web application with a wide range of third-party tools and APIs including payment processors, CRM systems, analytics tools, marketing automation platforms, and custom databases."
    },
    {
      question: "What about SEO? Will my FlutterFlow website rank well?",
      answer: "All our websites, landing pages, and web applications are built with SEO best practices in mind. We implement proper meta tags, semantic HTML, optimized images, and ensure fast loading times - all critical factors for good search engine rankings."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading text-center">
          Frequently Asked <span className="text-flutter-primary">Questions</span>
        </h2>
        
        <p className="section-subheading text-center mb-12">
          Got questions about our FlutterFlow websites, landing pages, or web applications? Find answers to the most common inquiries below.
        </p>
        
        <div className="opacity-0" data-animate="true">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium hover:text-flutter-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
