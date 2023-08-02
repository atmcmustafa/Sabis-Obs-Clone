import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ButtonSmall from "../components/ButtonSmall";
import { useEffect, useState } from "react";

const Program = () => {
  const [active, setActive] = useState(null);

  const toggleActive = (buttonId) => {
    setActive(buttonId);
    console.log(buttonId);
  };

  useEffect(() => {
    setActive(4);
  }, []);

  return (
    <div className="px-3 bg-activeBackground section-height pt-16">
      <div className="py-5 px-3 h-full">
        <div className="bg-white h-full pb-4">
          <h1 className="text-base border-b py-4 px-5">Ders Programı</h1>
          <div className="flex flex-col lg:flex-row items-center justify-between px-5 ">
            <div className="min-w-[100px] border h-9 my-4 flex ">
              <ButtonSmall className={"pl-4 px-0"}>
                <BsChevronLeft size={12} />
              </ButtonSmall>
              <ButtonSmall className={"pl-4 px-0"}>
                <BsChevronRight size={12} />
              </ButtonSmall>
            </div>
            <h1 className="font-[500] text-base">10- 16 Temmuz</h1>
            <div className="min-w-[100px] border h-9 my-4 flex  rounded">
              <ButtonSmall
                className={`${active === 1 ? "btn-active" : ""} `}
                onClick={() => toggleActive(1)}
              >
                Aylık
              </ButtonSmall>
              <ButtonSmall
                className={`${active === 2 ? "btn-active" : ""} `}
                onClick={() => toggleActive(2)}
              >
                Haftalık
              </ButtonSmall>
              <ButtonSmall
                className={`${active === 3 ? "btn-active" : ""} `}
                onClick={() => toggleActive(3)}
              >
                Günlük
              </ButtonSmall>
              <ButtonSmall
                className={`${active === 4 ? "btn-active" : ""} `}
                onClick={() => toggleActive(4)}
              >
                Ajanda
              </ButtonSmall>
            </div>
          </div>
          <div className="px-5 my-3 flex items-center justify-center bg-grayHeader/20 border border-grayTextLight rounded mx-5 h-[600px]">
            No events to display
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
