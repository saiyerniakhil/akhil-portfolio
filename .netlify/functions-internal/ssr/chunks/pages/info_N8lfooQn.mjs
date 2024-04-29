/* empty css                         */
import { c as createComponent, r as renderTemplate, i as renderComponent, d as createAstro, m as maybeRenderHead } from '../astro_Ygjjh97y.mjs';
import 'kleur/colors';
import 'html-escaper';
import { I as Icons, $ as $$Header, L as LinkButton, a as $$Footer, b as $$Layout } from './index_d07c3rCw.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import React from 'react';

const SocialMediaLinks = ({ handles }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 ml-auto sm:grid-cols-2 gap-2 m-4", children: handles.map((item, itemIndex) => /* @__PURE__ */ jsxs(
    "a",
    {
      href: item.href,
      className: "rounded-sm flex items-center py-4 px-4 hover:text-white hover:bg-emerald hover:transition hover:ease-in hover:duration-100",
      children: [
        /* @__PURE__ */ jsx("span", { className: "mr-2", children: /* @__PURE__ */ jsx(Icons, { type: item.type }) }),
        /* @__PURE__ */ jsx("span", { children: item.username })
      ]
    },
    itemIndex
  )) }) });
};

const WorkExperienceStepper = ({ workDetails }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("ul", { className: "py-4", children: workDetails.map((workItem, workItemIndex) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxs("li", { className: "p-2 flex items-start gap-4", children: [
      /* @__PURE__ */ jsx("span", { className: "flex items-center h-8 w-8 rounded-[50%] p-2 border-[3px] bg-emerald text-white border-emerald border-solid", children: workItemIndex + 1 }),
      /* @__PURE__ */ jsx("span", { className: "flex flex-col", children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("strong", { children: workItem.role }) }),
        /* @__PURE__ */ jsxs("li", { className: "text-xs py-1", children: [
          /* @__PURE__ */ jsx("strong", { children: workItem.company }),
          " · ",
          workItem.location,
          " |",
          " ",
          `${workItem.fromDuration} - ${workItem.toDuration || "Present"}`
        ] }),
        /* @__PURE__ */ jsx("li", { className: "font-medium py-2", children: workItem.technologies.join(" · ") }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: /* @__PURE__ */ jsx("p", { children: workItem.description }) })
      ] }) })
    ] }),
    workItemIndex !== workDetails?.length - 1 && /* @__PURE__ */ jsx("hr", { className: "text-apple mx-6 mb-4 opacity-50" })
  ] }, workItemIndex)) }) });
};

const $$Astro = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  const workExperience = [
    {
      company: "UW-Milwaukee",
      fromDuration: "Oct 2022",
      toDuration: "Present",
      role: "Student Web Developer",
      description: "I work as a student web developer at Marketing and Communications department of UWM, which is responsible for active maintenance of uwm.edu website.",
      technologies: [
        "Wordpress",
        "JavaScript",
        "HTML",
        "CSS",
        "PhP",
        "Node.js"
      ],
      location: "Milwaukee, WI"
    },
    {
      company: "UW-Milwaukee",
      fromDuration: "Sep 2022",
      toDuration: "Present",
      role: "Supplemental Instruction Leader",
      description: "As a Supplemental Instruction Leader for COMPSCI250:Introductory Computer Programming (Java), I help undergrads master the basics of Java programming, navigate the complexities of exam preparation, and I often teach COMPSCI251: Intermediate Computer Programming (Java) too.",
      technologies: [
        "Java",
        "Object Oriented Programming"
      ],
      location: "Milwaukee, WI"
    },
    {
      company: "Accuknox Inc.",
      fromDuration: "Aug 2021",
      toDuration: "Dec 2022",
      role: "React.js Developer",
      description: "I primarily worked on building the UI part of SaaS platform built with React.js that enables zero trust runtime security on multiple workloads such as Kubernetes and VMs which includes building Responsive and custom components in an Agile manner. I have also been managing the UI team for two months now, ensuring the code quality through code reviews  and the quick release of the features every sprint. I have been a part of interviews helping my company hire React developers and trainees.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind",
        "React-Query",
        "Redux"
      ],
      location: "Chennai, India"
    },
    {
      company: "Tyutee",
      fromDuration: "April 2021",
      toDuration: "July 2021",
      role: "Frontend Engineer",
      description: "I have worked on developing the company's website and also in the process I have collaborated with UX designers and other developers to convert the figma designs into responsive UI on time. I have also worked on integrating a Razorpay payment gateway and worked with Zoho CRM's webforms to collate leads and contacts together to the CRM. Have converted all the forms across the site which were using PHP to collect user data to make the forms capture the user data and store into Zoho CRM.I have worked on developing the company's website and also in the process I have collaborated with UX designers and other developers to convert the figma designs into responsive UI on time. I have also worked on integrating a Razorpay payment gateway and worked with Zoho CRM's webforms to collate leads and contacts together to the CRM. Have converted all the forms across the site which were using PHP to collect user data to make the forms capture the user data and store into Zoho CRM.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS"],
      location: "Bengaluru \xB7 Remote"
    },
    {
      company: "Publicis Sapient",
      fromDuration: "Jan 20, 2020",
      toDuration: "March 5, 2021",
      role: "Graduate Engineer Trainee, Associate Technology L1",
      description: "I worked on a commerce intelligence platform that offered key insights for the partner brands based on data scraped from e-commerce sites and used Java, Spring Boot, Python, and Airflow as and was responsible for code coverage of 50% for an entire microservice starting from scratch and have also deployed Airflow DAGs to automate the data collection process. I worked with React, React-Router, Redux, and Styled-Components to redesign a client's e-commerce website, whereas as a part of the team I made a line-clamp utility, which was used throughout the entire application. I was also part of the training phase where I worked on Java, Spring Boot and React.js.",
      technologies: [
        "Spring Boot",
        "Java",
        "Python",
        "JavaScript",
        "React.js",
        "Microsoft Azure"
      ],
      location: "Gurgaon, India"
    },
    {
      company: "Sathybama Coding Club",
      fromDuration: "Sep, 2018",
      toDuration: "Sep, 2019",
      role: "Moderator",
      technologies: ["HTML", "CSS", "JavaScript"],
      location: "Chennai, India"
    }
  ];
  const socialHandles = [
    {
      type: "linkedIn",
      username: "Sai Yerni Akhil",
      href: "https://www.linkedin.com/in/sai-yerni-akhil-madabattula/"
    },
    {
      type: "twitter",
      username: "@sai_yerni",
      href: "https://twitter.com/sai_yerni"
    },
    {
      type: "github",
      username: "@saiyerniakhil",
      href: "https://github.com/saiyerniakhil"
    },
    {
      type: "instagram",
      username: "@sai_yerni_akhil",
      href: "https://instagram.com/sai_yerni_akhil"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sai Yerni Akhil | Info" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="text-emerald"> <div class="flex justify-between items-center"> <div class="text-emerald flex items-center"> <span class="mr-2"> ${renderComponent($$result2, "Icons", Icons, { "type": "work" })} </span> <h3 class="font-semibold underline">Work Experience</h3> </div> ${renderComponent($$result2, "LinkButton", LinkButton, { "type": "link", "iconType": "download", "iconHover": false, "buttonText": "Resume", "external": true, "href": "https://drive.google.com/file/d/1aZV6qREvbl_0EF96U33GHHRLLbZRQkPU/view?usp=drive_link" })} </div> ${renderComponent($$result2, "WorkExperienceStepper", WorkExperienceStepper, { "workDetails": workExperience })} <div class="text-emerald flex items-center"> <span class="mr-2"> ${renderComponent($$result2, "Icons", Icons, { "type": "connect" })} </span> <h3 class="font-semibold underline text-emerald">Connect with me</h3> </div> ${renderComponent($$result2, "SocialMediaLinks", SocialMediaLinks, { "handles": socialHandles })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "/Users/saiyerniakhilmadabattula/akhil-portfolio/src/pages/info.astro", void 0);

const $$file = "/Users/saiyerniakhilmadabattula/akhil-portfolio/src/pages/info.astro";
const $$url = "/info";

export { $$Info as default, $$file as file, $$url as url };
