import { useContext } from "react";
import Card from "../components/Card";
import { ButtonContext } from "../context/ButtonContext";
import Button from "../components/Button";
import { AiOutlineUser } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import profilPic from "../images/profile-pic.jpg";
const Mainpage = () => {
  const data = [
    {
      img: profilPic,
      name: "MUSTAFA ATMACA",
      faculty: "İŞLETME FAKÜLTESİ",
      programName: "YÖNETİM BİLİŞİM SİSTEMLERİ BÖLÜMÜ",
      program: "YÖNETİM BİLİŞİM SİSTEMLERİ PR.",
      maxTime: "Azami Süre Aşılmadı",
    },
  ];

  const notice = [
    {
      date: "18 Ekim, 00:00",
      header: "Yemek Bursu Başvurusu",
      content:
        "2022-2023 Öğretim yılı Yemek Bursu müracaatları 17-26 Ekim tarihileri arasında yapılacaktır.",
      link: "kultur.sakarya.edu.tr",
    },
    {
      date: "18 Ekim, 00:00",
      header: "Yemek Bursu Başvurusu",
      content:
        "2022-2023 Öğretim yılı Yemek Bursu müracaatları 17-26 Ekim tarihileri arasında yapılacaktır.",
      link: "kultur.sakarya.edu.tr",
    },
    {
      date: "18 Ekim, 00:00",
      header: "Yemek Bursu Başvurusu",
      content:
        "2022-2023 Öğretim yılı Yemek Bursu müracaatları 17-26 Ekim tarihileri arasında yapılacaktır.",
      link: "kultur.sakarya.edu.tr",
    },
  ];

  const { profileToggle, setProfileToggle } = useContext(ButtonContext);

  return (
    <div className="px-3 bg-activeBackground min-h-screen  section-height pt-16 w-full z-40">
      <div
        onClick={() => setProfileToggle((prev) => !prev)}
        className={`left-0 top-0 right-0 bottom-0 bg-black/20 duration-300 z-30 fixed ${
          profileToggle ? "block" : "hidden"
        } `}
      ></div>
      <div
        className={`${
          profileToggle ? "left-0" : "-left-[999px] "
        } fixed top-0  duration-300 w-64 min-h-screen bg-white shadow-2xl z-40`}
      >
        {data.map((card, index) => (
          <Card key={index} className={"items-center gap-1 min-h-screen "}>
            <RxCross1
              onClick={() => setProfileToggle((prev) => !prev)}
              className="absolute top-4 right-4 cursor-pointer"
              size={20}
            />

            <img className="w-32 h-32 mx-auto" src={card.img} />
            <h1 className="mt-4 font-semibold cursor-pointer hover:text-blueText text-lg">
              {card.name}
            </h1>
            <span className="text-grayText text-xs ">B211306001</span>
            <span className="text-grayText/70 font-[500] mt-4">
              {card.faculty}
            </span>
            <span className="text-grayText/70 font-[500]">
              {card.programName}
            </span>
            <span className="text-grayText/70 font-[500]">{card.program}</span>
            <div className="w-full h-5 border-b-2 border-dashed "></div>
            <span className="text-grayText/70 font-[500] mt-2 mb-4">
              {card.maxTime}
            </span>
          </Card>
        ))}
      </div>

      <div className="py-5 px-3">
        <Button
          onClick={() => setProfileToggle((prev) => !prev)}
          className={
            "bg-grayTextLight/10 text-grayBackground/80 mb-4 lg:hidden flex items-center justify-center gap-2"
          }
        >
          <AiOutlineUser size={16} />
          Profil Detayları
        </Button>
        <div className="flex gap-5">
          {data.map((card, index) => (
            <Card
              key={index}
              className={
                "items-center gap-1 h-fit min-w-[325px] lg:flex hidden"
              }
            >
              <img className="w-32 h-32 mx-auto rounded-md" src={card.img} />
              <h1 className="mt-4 font-semibold cursor-pointer hover:text-blueText text-lg">
                {card.name}
              </h1>
              <span className="text-grayText text-xs ">B211306001</span>
              <span className="text-grayText/70 font-[500] mt-4">
                {card.faculty}
              </span>
              <span className="text-grayText/70 font-[500]">
                {card.programName}
              </span>
              <span className="text-grayText/70 font-[500]">
                {card.program}
              </span>
              <div className="w-full h-5 border-b-2 border-dashed "></div>
              <span className="text-grayText/70 font-[500] mt-2 mb-4">
                {card.maxTime}
              </span>
            </Card>
          ))}

          <Card className={"flex-1"}>
            <h1 className="border-b pb-4 font-[500] text-lg">Duyurular</h1>
            {notice.map((not, index) => (
              <div
                key={index}
                className="relative h-50 md:h-36 my-6 flex items-center "
              >
                <div className="absolute h-full w-1.5 bg-grayTextLight/40 z-10 after:absolute after:bg-orange-400 after:content-[''] after:h-1.5 after:w-1.5 flex items-center after:rounded-full  before:absolute before:bg-grayTextLight/70 before:z-20 before:content-[''] before:h-1.5 before:w-4 before:flex before:-ml-[0.28rem] before:justify-center before:top-0 before:rounded-full"></div>
                <div className="ml-10 w-full  ">
                  <span className="text-grayTextLight mb-1 block">
                    {not.date}
                  </span>
                  <div className="bg-grayTextLight/20 rounded-md p-4 relative before-arrow">
                    <h1 className="text-orange-400">{not.header}</h1>
                    <p className="font-[500]">{not.content}</p>
                    <p className="font-[500]">
                      Detaylı bilgi için
                      <a className="text-blueText ml-1" href={not.link}>
                        {not.link}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
