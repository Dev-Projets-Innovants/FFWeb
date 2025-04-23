
export interface PortfolioItemData {
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
  showDetails?: boolean;
}

export const portfolioItems: PortfolioItemData[] = [
  {
    title: "Modern E-commerce Store",
    category: "e-commerce",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    projectUrl: "https://flutterflow.io"
  },
  {
    title: "Corporate Business Site",
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    projectUrl: "https://flutterflow.io"
  },
  {
    title: "Health and Wellness Portal",
    category: "health",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    projectUrl: "https://flutterflow.io"
  },
  {
    title: "Visa and Passport Management System",
    category: "administrative",
    imageUrl: "lovable-uploads/4535e058-acc9-488b-91b0-f685927c823e.png", // Removed the leading slash
    projectUrl: "https://ae.dgdifrance.fr/",
    showDetails: true
  },
  {
    title: "Administrative Dashboard",
    category: "administrative",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    projectUrl: "https://flutterflow.io",
    showDetails: true
  },
  {
    title: "Restaurant Booking System",
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    projectUrl: "https://flutterflow.io"
  },
  {
    title: "Professional Landing Page",
    category: "landing-page",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    projectUrl: "https://flutterflow.io"
  }
];
