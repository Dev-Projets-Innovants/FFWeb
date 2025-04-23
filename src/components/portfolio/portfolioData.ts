
export interface PortfolioItemData {
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
  delay: number;
  showDetails?: boolean;
}

export const portfolioItems: PortfolioItemData[] = [
  {
    title: "Modern E-commerce Store",
    category: "e-commerce",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    projectUrl: "https://flutterflow.io",
    delay: 100
  },
  {
    title: "Corporate Business Site",
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    projectUrl: "https://flutterflow.io",
    delay: 200
  },
  {
    title: "Health and Wellness Portal",
    category: "health",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    projectUrl: "https://flutterflow.io",
    delay: 300
  },
  {
    title: "Visa and Passport Management System",
    category: "administrative",
    imageUrl: "/lovable-uploads/4535e058-acc9-488b-91b0-f685927c823e.png",
    projectUrl: "https://ae.dgdifrance.fr/",
    delay: 350,
    showDetails: true
  },
  {
    title: "Administrative Dashboard",
    category: "administrative",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    projectUrl: "https://flutterflow.io",
    delay: 400,
    showDetails: true
  },
  {
    title: "Restaurant Booking System",
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    projectUrl: "https://flutterflow.io",
    delay: 500
  },
  {
    title: "Professional Landing Page",
    category: "landing-page",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    projectUrl: "https://flutterflow.io",
    delay: 600
  }
];
