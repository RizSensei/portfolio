import { Tab } from "@headlessui/react";
import AboutMeTab from "@/components/Tabs/AboutMeTab";
import ContactMeTab from "@/components/Tabs/ContactMeTab";
import ProjectsTab from "@/components/Tabs/ProjectsTab";
import SkillsTab from "@/components/Tabs/SkillsTab";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const tabs = [
    { title: "About me", content: <AboutMeTab /> },
    { title: "Skills", content: <SkillsTab /> },
    { title: "Projects", content: <ProjectsTab /> },
    { title: "Contact Me", content: <ContactMeTab /> },
  ];

  return (
    <div className="w-full 2xl:max-w-3xl px-2 pt-10 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-darkPurple p-1">
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:outline-none",
                  selected
                    ? "bg-white text-darkPurple shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("rounded-xl p-3 focus:outline-none")}
            >
              <div key={idx}>{tab.content}</div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
