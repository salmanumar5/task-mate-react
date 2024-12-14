import { MdAddTask } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { LuFingerprint } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";





export const navItems = [
    { label: "Features", href: "#feature" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#" },
  ];

  export const features = [
    {
      icon: <MdAddTask />,
      text: "Intuitive Task Management",
      description:
        "Organize and prioritize tasks with ease using our simple and user-friendly task management interface.",
    },
    {
      icon: <TbUsersGroup />,
      text: "Collaborative Workspaces",
      description:
        "Work with your team in real-time to assign tasks, share resources, and keep everyone on the same page.",
    },
    {
      icon: <LuFingerprint />,
      text: "Group Creation Made Easy",
      description:
        "Create or join task groups effortlessly with unique Group IDs for streamlined collaboration.",
    },
    {
      icon: <MdOutlineDashboardCustomize />,
      text: "Customizable Dashboards",
      description:
        "Monitor progress and productivity with personalized dashboards featuring task summaries, charts, and recent activity.",
    },
    {
      icon: <RxLapTimer />,
      text: "Real-Time Updates",
      description:
        "Receive instant updates on task changes, comments, and group activity to ensure everyone stays informed.",
    },
    {
      icon: <MdOutlineDashboardCustomize />,
      text: "Analytics Dashboard",
      description:
        "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
  ];

  export const checklistItems = [
    {
        title: "Organize Tasks with Ease",
        description:
          "Streamline task management by creating, assigning, and prioritizing tasks in a few clicks. Stay focused and productive.",
      },
      {
        title: "Collaborate Seamlessly",
        description:
          "Work together with your peers in real-time, share resources, and exchange ideas to complete tasks efficiently.",
      },
      {
        title: "Track Progress Effortlessly",
        description:
          "Monitor your group's performance with detailed insights and progress tracking to ensure nothing falls through the cracks.",
      },
      {
        title: "Simplify Communication",
        description:
          "Centralize discussions with integrated comment sections and updates for every task, keeping your team on the same page.",
      },    
  ];

  export const pricingOptions = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Private board sharing",
        "5 Gb Storage",
        "Web Analytics",
        "Private Mode",
      ],
    },
    {
      title: "Pro",
      price: "$10",
      features: [
        "Private board sharing",
        "10 Gb Storage",
        "Web Analytics (Advance)",
        "Private Mode",
      ],
    },
    {
      title: "Enterprise",
      price: "$200",
      features: [
        "Private board sharing",
        "Unlimited Storage",
        "High Performance Network",
        "Private Mode",
      ],
    },
  ];

  export const resourcesLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
  ];
  
  export const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
  ];
  
  export const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
  ];