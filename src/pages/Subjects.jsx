import Card from "../components/Card";

const Subjects = () => {
  const years = [
    {
      year: "2022",
    },
    {
      year: "2021",
    },
    {
      year: "2019",
    },
    {
      year: "2018",
    },
    {
      year: "2017",
    },
    {
      year: "2016",
    },
    {
      year: "2015",
    },
  ];

  const term = [
    {
      semester: "Yaz",
    },
    {
      semester: "Bahar",
    },
    {
      semester: "Güz",
    },
  ];

  const examGrid = [
    {
      subjectName: "GENEL MUHASEBE",
      subjectCode: "ISL102",
      vize: "75",
      final: "90",
      letterGrade: "BB",
    },
    {
      subjectName: "PAZARLAMA YÖNETİMİ",
      subjectCode: "ISL202",
      vize: "72",
      final: "84",
      letterGrade: "BB",
    },
    {
      subjectName: "İSTATİSTİK VE UYGULAMALARI",
      subjectCode: "YBS202",
      vize: "73",
      final: "90",
      letterGrade: "CB",
    },
    {
      subjectName: "NESNEYE DAYALI PROGRAMLAMA",
      subjectCode: "YBS206",
      vize: "60",
      final: "40",
      letterGrade: "DD",
    },
    {
      subjectName: "GEREKSİNİM YÖNETİMİNE GİRİŞ",
      subjectCode: "YBS202",
      vize: "60",
      final: "85",
      letterGrade: "BA",
    },
    {
      subjectName: "LOJİSTİK VE TEDARİK ZİNCİRİ YÖNETİMİ",
      subjectCode: "YBS254",
      vize: "100",
      final: "90",
      letterGrade: "AA",
    },
  ];

  return (
    <div className="px-3 bg-activeBackground section-height pt-16">
      <div className="py-5 px-3">
        <div className="flex w-full gap-4">
          <select className="w-full p-2.5 outline-none" name="years">
            {years.map((data, index) => (
              <option key={index} value={data.year}>
                {data.year}
              </option>
            ))}
          </select>
          <select className="w-full p-2.5 outline-none" name="years">
            {term.map((data, index) => (
              <option key={index} value={data.semester}>
                {data.semester}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
          {examGrid.map((subject, index) => (
            <Card key={index} className={"w-full shadow-sm"}>
              <div className="flex gap-4 items-center">
                <span className="flex justify-center items-center font-[500] h-16 w-16 rounded-md text-blueText bg-blueCardBackground">
                  {subject.subjectCode}
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className="font-[500] text-grayText cursor-pointer text-base hover:text-blueText">
                    {subject.subjectName}
                  </h2>
                  <span className="text-grayTextLight font-[500]">
                    1. Öğretim A Grubu
                  </span>
                </div>
              </div>
              <table className="table-auto  mt-2">
                <thead>
                  <tr>
                    <th className="border-b text-grayText border-gray-200 py-2 text-start">
                      Oran
                    </th>
                    <th className="border-b text-grayText border-gray-200 py-2 text-start">
                      Çalışma Tipi
                    </th>
                    <th className="border-b text-grayText border-gray-200 py-2 text-end">
                      Not
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 py-2.5 ">70</td>
                    <td className="border-b border-gray-200 py-2.5 ">Final</td>
                    <td className="border-b border-gray-200 py-2.5 text-end">
                      {subject.vize}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b  border-gray-200 py-2.5 ">30</td>
                    <td className="border-b  border-gray-200 py-2.5 ">
                      Ara Sınav
                    </td>
                    <td className="border-b  border-gray-200 py-2.5 text-end">
                      {subject.final}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5"></td>
                    <td className="font-[500] py-2.5">Başarı Notu</td>
                    <td className="py-2.5 text-end"> {subject.letterGrade}</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
