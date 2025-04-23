
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
  }
];
