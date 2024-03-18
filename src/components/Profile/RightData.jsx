import Bento from "../Basic/Bento";
import DataCount from "./RightBox/DataCount";
import DiscordGrid from "./RightBox/DiscordGrid";
import InstagramGrid from "./RightBox/InstagramGrid";
import ProfileImg from "./RightBox/ProfileImg";
import ToolsProgressBar from "./RightBox/ToolsProgressBar";

const RightData = () => {
  const GridItems = [
    {
      size: "col-span-1.5 md:col-span-1 row-span-1",
      element: <DataCount number={2} title="Months of Experience" />,
    },
    {
      size: "col-span-1 row-span-1",
      element: <DataCount number={3} title="Number of Projects" />,
    },
    { size: "col-span-3 md:col-span-2 row-span-2", element: <InstagramGrid /> },
    { size: "col-span-2 row-span-2 md:row-span-3", element: <ProfileImg /> },
    {
      size: "col-span-1 row-span-1",
      element: <DataCount number={0} title="Satisfied and Happy Clients" />,
    },
    {
      size: "col-span-1 row-span-1",
      element: <DataCount number={0} title="Number of Reviews" />,
    },
    {
      size: "col-span-3 md:col-span-2 row-span-4",
      element: <ToolsProgressBar />,
    },
    { size: "col-span-2 row-span-1", element: <DiscordGrid /> },
  ];

  return (
    <section className="tektur-regular w-full md:w-2/3">
      <div className=" relative w-max mb-10">
        <h1 className="bungee-regular text-white text-8xl opacity-10">About Me</h1>
        <div className="tektur-regular absolute bottom-0 left-1/3 text-darkPurple text-4xl">
          My Domain
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-auto gap-5">
        {GridItems.map((item, i) => {
          return (
            <Bento key={i} style={item.size} pad={i === 3 ? false : true}>
              {item.element}
            </Bento>
          );
        })}
      </div>
    </section>
  );
};

export default RightData;
