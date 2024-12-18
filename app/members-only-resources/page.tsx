"use client";

import { useState } from "react";
import AuthGuard from "../components/AuthGuard";
import { Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const MembersOnlyResources = () => {
  const [expandedSection, setExpandedSection] =
    useState<string>("marriage-yogas");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  const resources = [
    {
      id: "marriage-yogas",
      title: "How to identify Marriage Yogas in a horoscope",
      content: (
        <div className="bg-[#F7E7CE]  py-4 px-6 rounded-lg text-[#45133c] font-vietnam font-bold">
          <strong>7th House:</strong> The primary house of marriage and
          partnerships. It indicates the nature of marriage, the spouse, and the
          marital life.
          <br />
          <strong>2nd House:</strong> Represents family and wealth, also linked
          with the continuation of the family lineage through marriage.
          <br />
          <strong>11th House:</strong> The house of gains and fulfillment of
          desires, including those related to marriage.
          <br />
          <strong>12th House:</strong> Linked to bed pleasures and the deeper
          aspects of marital relationships.
        </div>
      ),
    },
    {
      id: "preparing-marriage",
      title: "Preparing yourself for marriage",
      content: (
        <div className="bg-[#F7E7CE]  py-4 px-6 rounded-lg text-[#45133c] font-vietnam font-bold">
          <p>Content for preparing yourself for marriage section...</p>
        </div>
      ),
    },
    {
      id: "yogas-children",
      title: "Yogas regarding children and conception",
      content: (
        <div className="bg-[#F7E7CE]  py-4 px-6 rounded-lg text-[#45133c] font-vietnam font-bold">
          <p>Content for yogas regarding children and conception...</p>
        </div>
      ),
    },
    {
      id: "streedhan",
      title: "Streedhan",
      content: (
        <div className="bg-[#F7E7CE]  py-4 px-6 rounded-lg text-[#45133c] font-vietnam font-bold">
          <p>Content for Streedhan section...</p>
        </div>
      ),
    },
    {
      id: "rights-post-marriage",
      title: "Rights of Men and Women post marriage",
      content: (
        <div className="bg-[#F7E7CE]  py-4 px-6 rounded-lg text-[#45133c] font-vietnam font-bold">
          <p>Content for rights post marriage section...</p>
        </div>
      ),
    },
  ];

  return (
    <AuthGuard>
      <div className="h-full  px-20 py-10 pb-16 border-b-8 border-secondaryLight font-vietnam">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[1.5rem] font-semibold text-center text-secondaryLight mb-12">
            MEMBER ONLY RESOURCES
          </h1>

          <div className="flex justify-center mb-12">
            <img src="/qna.svg" alt="Q&A Icon" className="w-32 h-32" />
          </div>

          <div className="space-y-4">
            {resources.map((resource) => (
              <div key={resource.id} className="">
                <button
                  onClick={() => toggleSection(resource.id)}
                  className="w-full py-2 px-4 flex justify-between items-center text-secondaryLight  bg-[#290523]"
                >
                  <span className="text-[1.2rem] font-vietnam font-bold">
                    {resource.title}
                  </span>
                  {expandedSection === resource.id ? (
                    <ExpandLessIcon className="text-secondaryLight" />
                  ) : (
                    <ExpandMoreIcon className="text-secondaryLight" />
                  )}
                </button>
                <Collapse in={expandedSection === resource.id}>
                  <div className=" py-4 bg-opacity-20">{resource.content}</div>
                </Collapse>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default MembersOnlyResources;
