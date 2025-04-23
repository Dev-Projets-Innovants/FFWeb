
export interface PortfolioItemData {
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
  showDetails?: boolean;
}

export const portfolioItems: PortfolioItemData[] = [
  {
    title: "Visa and Passport Management System",
    category: "administrative",
    imageUrl: "lovable-uploads/4535e058-acc9-488b-91b0-f685927c823e.png",
    projectUrl: "https://ae.dgdifrance.fr/",
    showDetails: true
  },
  {
    title: "African Health Organization",
    category: "health",
    imageUrl: "lovable-uploads/74cab153-bc32-4ee0-a9bb-48580fd82f65.png",
    projectUrl: "https://ankafya.com/",
    showDetails: true
  },
  {
    title: "ExpertConnect",
    category: "landing-page", // Updated category
    imageUrl: "lovable-uploads/7a438d7e-ea84-4425-98d1-c3bd560a8efc.png",
    projectUrl: "https://expert-connect-your-consulting-landing-page-84xeiv.flutterflow.app/",
    showDetails: true
  }
];
