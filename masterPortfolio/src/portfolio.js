/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shubham's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shubham Kale Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Shubham Kale",
  logo_name: "Shubhamakale",
  nickname: "SK",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/shubhamkale119/Portfolio",
  githubProfile: "https://github.com/shubhamkale119",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shubhamkale119",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shubham-kale-141b48212/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shubhamkale9112@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ShubhamKale119",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Junior DevOps Engineer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Automate repetitive tasks, including testing, deployment, and infrastructure provisioning.",
        "⚡ Implement Continuous Integration/Continuous Deployment (CI/CD) pipelines.",
        "⚡ Use tools like Terraform, Ansible, or CloudFormation to manage and provision infrastructure programmatically",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/shubhamkale9112",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "MIT Academy of Engineering Alandi, Pune",
      subtitle: "B.Tech. in Electronics and Telecommunication ",
      logo_path: "mit_academy_of_engineering_logo-modified.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic Electronics and Telecommunication engineering subjects like Microcontroller and Interface,Data Structure and  Algorithms, Signals and systems, etc.",
        "⚡ Apart from this, I have done courses on DevOps, Cloud Computing and Full Stack Development.",
        "⚡Additionally, I have gained practical knowledge in Network Security, Embedded Systems, and Internet of Things (IoT).",
      ],
      website_link: "https://mitaoe.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cloud Practitioner ",
      logo_path: "aws12.png",
      certificate_link:
        "https://www.credly.com/badges/c828fa8c-e6b9-4e0f-b5a6-9a724d9a1f06/linked_in_profile",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "NPTEL-IoT",
      logo_path: "logo-m.png",
      certificate_link:
        "https://drive.google.com/file/d/1bp3bX8RR9g_4l-GNWiKxO9yH_dh5wHfp/view?usp=drivesdk",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Cloud Security",
      subtitle: "- GCP Training",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1bWYJsACinJPprfMORHC23WJaoHs4d34c/view?usp=drivesdk",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "IBM SkillBuild",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17f0xl-cn6xhrgVPQw4tdttcZW9NXo3Wy/view",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Oracle Certified Foundation Associate",
      logo_path: "oracle12.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "AWS Cloud Technical Essentials",
      logo_path: "aws12.png",
      certificate_link:
        "https://coursera.org/share/9f0ee2692826e81c953aa2a548e6ea25",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Cybersecurity",
      logo_path: "cisco_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1CKRMCARCamqB67z4aDWgud9lXaVLA0NA/view?usp=drivesdk",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      logo_path: "aws12.png",
      certificate_link:
        "https://www.credly.com/badges/fd29b5b7-57f4-4181-a9ad-0bf6d86fbe73/linked_in_profile",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Science Foundation Certification",

      logo_path: "infosys_springboard_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1CIkUBCPNNWYxAikrimQJ0jRFxZwY_T4C/view",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "AWS Educate Getting Started with Compute",
      logo_path: "aws12.png",
      certificate_link:
        "https://www.credly.com/badges/d6853149-a97c-42d4-83ff-01fd75ae8b67/linked_in_profile",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as DevOps Engineer, Cloud Engineer.I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "DevOps Engineer",
          company: "AAHENT Consulting Software Solutions",
          company_url: "https://aahent.com/",
          logo_path: "aahent12.jpg",
          duration: "Jan 2024 - Present",
          location: "Pune, India",
          description:
            "Developing Cloud Automation Framework with API's and Python.",
          color: "#000000",
        },
        {
          title: "Cloud Infra and Security",
          company: "Celebal Technologies",
          company_url: "https://legatohealthtech.com/",
          logo_path: "celebal.jpg",
          duration: "June 2023 - Aug 2023",
          location: "Online",
          description:
            "Successfully designed and deployed a scalable, efficient, and secure network infrastructure using Azure’s Hub and Spoke architecture. This project involved configuring a central hub to manage and connect multiple spoke networks, facilitating seamless communication and resource sharing. Key steps included deploying necessary resources, setting up virtual network gateways, establishing site-to-site (S2S) connections, and configuring Routing and Remote Access Service (RRAS) for secure connections. The architecture supports robust traffic management and enhanced security, contributing significantly to the organization's digital transformation goals.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create DevOps projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact me",
    profile_image_path: "shubham.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with DevOps, Cloud and Opensource Development.",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "Hadapsar Pune - 411028",
    locality: "",
    country: "India",
    region: "Asia",
    postalCode: "411028",
    streetAddress: "Magarpatta",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Magarpatta,+Hadapsar,+Pune,+Maharashtra/@18.5159876,73.9151952,15z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c18d3fd3454d:0x38ae6b1008a0d0c4!8m2!3d18.5158057!4d73.9271644!16s%2Fm%2F05zwsk3?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
