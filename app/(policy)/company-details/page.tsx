import React from "react";
import { MdOutlineLocalActivity } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { TbWorldSearch } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";

const ValueCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="border rounded-xl p-6 space-y-4">
    <div className="text-primary">
      <Icon size={24} />
    </div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const CompanyDetails = () => {
  const valueProps = [
    {
      icon: IoCreateOutline,
      title: "Travel Like a Creator",
      description:
        "Experience destinations through the lens of creators, with curated itineraries that capture the essence of each location.",
    },
    {
      icon: MdOutlineLocalActivity,
      title: "Smart Travel Packages",
      description:
        "We transform travel guides into comprehensive packages, comparing prices across 200,000+ vendors to ensure the best value.",
    },
    {
      icon: BiSupport,
      title: "24/7 Dedicated Support",
      description:
        "Our on-ground team provides round-the-clock assistance from arrival to departure, making your journey completely hassle-free.",
    },
    {
      icon: TbWorldSearch,
      title: "Global Reach",
      description:
        "Our packages are featured on major platforms like Getyourguide & Viator, reaching travelers worldwide.",
    },
    {
      icon: FaRegHandshake,
      title: "Creator Partnerships",
      description:
        "We collaborate with travel creators to bring authentic, unique experiences to life through our platform.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-8 px-4">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About Fursat</h1>
        <p className="text-lg text-muted-foreground">
          Fursat helps people travel more for less like their favourite creator
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueProps.map((prop, index) => (
          <ValueCard key={index} {...prop} />
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;
