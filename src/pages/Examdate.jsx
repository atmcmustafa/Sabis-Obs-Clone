import Card from "../components/Card";

const Examdate = () => {
  return (
    <div className="bg-activeBackground pt-16 section-height px-3">
      <div className="py-5 px-3">
        <Card className={`w-full`}>
          <h1 className="border-b pb-4 font-[500] text-base ">Sınav Takvimi</h1>
          <div className="breakingSection mt-4 p-8 shadow-2xl shadow-red-600">
            <h1 className=" pb-4 font-[500] text-base ">Bilgi</h1>
            <p className="text-grayText/80">Sınav bilgisi bulunamadı</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Examdate;
