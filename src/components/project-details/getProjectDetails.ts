
interface ProjectDetails {
  features: string[];
  technologies: string[];
  services: string[];
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
      technologies: [
        "React.js for frontend development",
        "Node.js and Express.js backend",
        "MongoDB for database management",
        "JWT for authentication",
        "Redux for state management",
        "Tailwind CSS for styling",
        "RESTful API architecture",
        "AWS for cloud hosting",
        "Socket.io for real-time updates",
        "Docker for containerization"
      ],
      services: [
        "Passport Application Processing",
        "Visa Application Management",
        "Document Verification",
        "Appointment Scheduling",
        "Status Tracking",
        "Payment Processing",
        "Email Notifications",
        "Support Ticketing",
        "Digital Document Storage",
        "Identity Verification"
      ]
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
      technologies: [
        "React.js for frontend",
        "Node.js and Express backend",
        "MongoDB for patient records",
        "WebRTC for telemedicine",
        "AWS for cloud infrastructure",
        "Socket.io for real-time updates",
        "Redux for state management",
        "TailwindCSS for styling",
        "Jest for testing",
        "Docker deployment"
      ],
      services: [
        "Online Consultations",
        "Medical Record Management",
        "Emergency Services",
        "Healthcare Analytics",
        "Prescription Services",
        "Provider Network Access",
        "Patient Education Portal",
        "Inventory Management",
        "Appointment Management",
        "Health Monitoring"
      ]
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
      technologies: [
        "React.js for frontend",
        "Node.js backend",
        "MongoDB database",
        "WebRTC for video calls",
        "Stripe payment integration",
        "Redux for state management",
        "TailwindCSS for styling",
        "JWT authentication",
        "Socket.io for real-time features",
        "AWS hosting infrastructure"
      ],
      services: [
        "Expert Consultant Matching",
        "Business Strategy Consulting",
        "Operational Improvement",
        "Market Analysis",
        "Financial Advisory",
        "Technology Consulting",
        "Project Management",
        "Risk Assessment",
        "Performance Optimization",
        "Industry Research"
      ]
    };
  }
  
  return {
    features: [],
    technologies: [],
    services: []
  };
};
