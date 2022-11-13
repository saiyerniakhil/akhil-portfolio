import React from "react";

export interface WorkExperienceItem {
  company: string;
  fromDuration: string;
  toDuration?: string;
  description?: string;
  role: string;
  technologies: Array<string>;
  location: string;
}

export interface WorkExperienceStepperProps {
  workDetails: Array<WorkExperienceItem>;
}

const WorkExperienceStepper = ({ workDetails }: WorkExperienceStepperProps) => {
  return (
    <>
      <ul className="py-4">
        {workDetails.map((workItem, workItemIndex: number) => (
          <React.Fragment key={workItemIndex}>
            <li className="p-2 flex items-start gap-4">
              <span className="flex items-center h-8 w-8 rounded-[50%] p-2 border-[3px] bg-emerald text-white border-emerald border-solid">
                {workItemIndex + 1}
              </span>
              <span className="flex flex-col">
                <ul>
                  <li>
                    <strong>{workItem.role}</strong>
                  </li>
                  <li className="text-xs py-1">
                    <strong>{workItem.company}</strong> · {workItem.location} |{" "}
                    {`${workItem.fromDuration} - ${
                      workItem.toDuration || "Present"
                    }`}
                  </li>
                  <li className="font-medium py-2">
                    {workItem.technologies.join(" · ")}
                  </li>
                  <li className="py-2">
                    <p>{workItem.description}</p>
                  </li>
                </ul>
              </span>
            </li>
            {workItemIndex !== workDetails?.length - 1 && (
              <hr className="text-apple mx-6 mb-4 opacity-50" />
            )}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default WorkExperienceStepper;
