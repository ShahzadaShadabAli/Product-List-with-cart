import Card from "./Card";
import foodItems from "../assets/data/data.json";

const LeftSection = () => {
  return (
    <div className="flex-1 max-sm:w-full">
      <h1 className="heading-text font-bold text-[#190803] text-3xl mb-7">
        Desserts
      </h1>
      <div className="flex flex-wrap gap-[3%]">
        {foodItems.map((f) => (
          <Card foodItem={f} />
        ))}
     
      </div>
    </div>
  );
};

export default LeftSection;
