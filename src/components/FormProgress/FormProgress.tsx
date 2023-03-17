import { FormProgressProps } from "./types";
import { stagesElement } from "@/data";
import { Stages } from "@/types";
import { useMemo } from "react";
import { toast } from "react-hot-toast";

const FormProgress: React.FC<FormProgressProps> = ({
  active,
  available,
  onClick,
}) => {
  const handleOnClick = (item: Stages) => {
    if (available.includes(item)) {
      onClick(item);
      return;
    }
    toast.remove();
    // toast.custom((t) => {

    // })
    toast.error("Please complete this step before continuing", {
      duration: 3000,
    });
    return;
  };

  const left = useMemo(() => {
    const totalItems = stagesElement.length;
    const indexOfActive = stagesElement.findIndex(
      (item) => item.value === active
    );

    return `${(indexOfActive / totalItems) * 100}%`;
  }, [active]);

  const width = useMemo(() => {
    const totalItems = stagesElement.length;
    return `${(1 / totalItems) * 100}%`;
  }, []);

  return (
    <nav className="w-full relative border-b border-b-black">
      <ul className="w-full grid grid-cols-3 text-sm md:text-xl xl:text-2xl font-bold">
        {stagesElement.map((stage) => {
          return (
            <li key={stage.value}>
              <button
                onClick={() => handleOnClick(stage.value)}
                className={`p-2 md:p-4 mb-3 transition-all ${
                  active === stage.value
                    ? "text-primary-orange"
                    : "text-inactive-grey"
                }`}
              >
                {stage.title}
              </button>
            </li>
          );
        })}
      </ul>
      <span
        className={`top-full -translate-y-1/2 absolute h-2 md:h-3 bg-primary-orange rounded-full transition-all duration-500 ${
          active === "personal"
            ? "left-0"
            : active === "billing"
            ? "left-1/3"
            : "left-2/3"
        }`}
        style={{
          left,
          width,
        }}
      ></span>
    </nav>
  );
};

export default FormProgress;
