interface ProjectDetails {
  features: string[];
  integrations: string[];
  tags: string[];
}

export const getProjectDetails = (title: string): ProjectDetails => {
  if (title === "Visa and Passport Management System") {
    return {
      features: [
        "Online passport and visa application submission",
        "Real-time appointment scheduling system",
        "Digital document upload and verification",
        "Passport information and requirements guide",
        "Schedule availability checking",
        "User-friendly appointment booking interface",
        "Application status tracking dashboard",
        "Administrative appointment management",
        "Website content management system",
        "Automated notification system",
        "Local appointment backup system (Mysql)"
      ],
      integrations: [
        "Supabase for Backend as a Service",
        "MySQL database integration",
        "Resend email service integration",
        "Carbone.io PDF generation",
        "EasyAppointment API integration"
      ],
      tags: ["Website", "Web App", "Admin Panel"]
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
