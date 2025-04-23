
interface ProjectDetails {
  features: string[];
  integrations: string[];
  tags: string[];
}

export const getProjectDetails = (title: string): ProjectDetails => {
  if (title === "Visa and Passport Management System") {
    return {
      features: [
        "Online appointment scheduling for passport and visa services",
        "Real-time availability tracking",
        "Document upload and verification system",
        "Automated email notifications",
        "User dashboard for application status tracking",
        "Admin panel for managing appointments and applications",
        "Digital form submission and processing",
        "Multiple authentication levels",
        "Secure payment integration",
        "Document validation and verification"
      ],
      integrations: [
        "Payment gateway for secure transactions",
        "Email service for notifications",
        "Cloud storage for documents",
        "Authentication service",
        "SMS gateway for alerts",
        "Document verification API",
        "Calendar service for appointments",
        "Analytics platform",
        "Customer support ticketing system",
        "Automated ID verification service"
      ],
      tags: ["Website", "Web App"]
    };
  } else if (title === "African Health Organization") {
    return {
      features: [
        "Patient Management System",
        "Telemedicine Integration",
        "Medical Records Database",
        "Appointment Scheduling",
        "Prescription Management",
        "Health Analytics Dashboard",
        "Emergency Response System",
        "Medical Inventory Management",
        "Healthcare Provider Network",
        "Patient Portal Access"
      ],
      integrations: [
        "Electronic Health Records (EHR) system",
        "Telemedicine platform",
        "Laboratory information system",
        "Pharmacy management system",
        "Medical billing service",
        "Healthcare analytics platform",
        "Patient scheduling system",
        "Medical imaging service",
        "Emergency response system",
        "Healthcare provider directory"
      ],
      tags: ["Website"]
    };
  } else if (title === "Consulting landing page") {
    return {
      features: [
        "Expert consultant matching system",
        "Advanced search and filtering",
        "Real-time availability calendar",
        "Secure messaging platform",
        "Video consultation integration",
        "Client portfolio management",
        "Consultant profiles and ratings",
        "Booking management system",
        "Payment processing integration",
        "Analytics dashboard"
      ],
      integrations: [
        "Calendar scheduling system",
        "Video conferencing platform",
        "Payment processing system",
        "Email marketing service",
        "Customer relationship management",
        "Analytics platform",
        "Document sharing service",
        "Communication platform",
        "Task management system",
        "Rating and review system"
      ],
      tags: ["Landing Page"]
    };
  }
  
  return {
    features: [],
    integrations: [],
    tags: []
  };
};
