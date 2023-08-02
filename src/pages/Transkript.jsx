import Card from "../components/Card";

const Transkript = () => {
  const termsData = [
    {
      data: [
        {
          dersAdi: "Hukuka Giriş",
          dersTipi: "Zorunlu",
          basariNotu: "DD",
          akts: "5",
        },
        {
          dersAdi: "Türk Dili",
          dersTipi: "Zorunlu",
          basariNotu: "CC",
          akts: "4",
        },
        {
          dersAdi: "Genel Matematik",
          dersTipi: "Zorunlu",
          basariNotu: "AA",
          akts: "5",
        },
        {
          dersAdi: "İktisada Giriş",
          dersTipi: "Zorunlu",
          basariNotu: "CC",
          akts: "5",
        },
        {
          dersAdi: "İşletme Bilimine Giriş",
          dersTipi: "Zorunlu",
          basariNotu: "AA",
          akts: "6",
        },
        {
          dersAdi: "BİLİŞİM SİSTEMLERİNE GİRİŞ",
          dersTipi: "Zorunlu",
          basariNotu: "AA",
          akts: "5",
        },
      ],
      toplamAktsKredi: "30",
      toplamAgirlikliOrtalama: "87",
      ortalama: "2.90",
    },
    {
      data: [
        {
          dersAdi: "İngilizce",
          dersTipi: "Zorunlu",
          basariNotu: "DC",
          akts: "4",
        },
        {
          dersAdi: "Yönetim ve Organizasyon",
          dersTipi: "Zorunlu",
          basariNotu: "CC",
          akts: "6",
        },
        {
          dersAdi: "YAZILI VE SÖZLÜ İLETİŞİM BECERİLERİ",
          dersTipi: "Zorunlu",
          basariNotu: "AA",
          akts: "4",
        },
        {
          dersAdi: "ALGORİTMA VE PROGRAMLAMAYA GİRİŞ",
          dersTipi: "Zorunlu",
          basariNotu: "AA",
          akts: "5",
        },
        {
          dersAdi: "İŞLETME MATEMATİĞİ",
          dersTipi: "Zorunlu",
          basariNotu: "CC",
          akts: "5",
        },
        {
          dersAdi: "GENEL MUHASEBE",
          dersTipi: "Zorunlu",
          basariNotu: "CC",
          akts: "6",
        },
      ],
      toplamAktsKredi: "30",
      toplamAgirlikliOrtalama: "76",
      ortalama: "2.53",
    },
    {
      data: [
        {
          dersAdi: "VERİ YAPILARI",
          dersTipi: "Zorunlu",
          basariNotu: "CC",
          akts: "5",
        },
        {
          dersAdi: "ARAŞTIRMA YÖNTEMLERİ",
          dersTipi: "Zorunlu",
          basariNotu: "BB",
          akts: "4",
        },
        {
          dersAdi: "YÖNEYLEM ARAŞTIRMASI",
          dersTipi: "Zorunlu",
          basariNotu: "AA",
          akts: "6",
        },
        {
          dersAdi: "ATATÜRK İLKELERİ VE İNKILÂP TARİHİ",
          dersTipi: "Zorunlu",
          basariNotu: "BA",
          akts: "4",
        },
        {
          dersAdi: "YÖNETİM BİLİŞİM SİSTEMLERİ",
          dersTipi: "Zorunlu",
          basariNotu: "BA",
          akts: "6",
        },
        {
          dersAdi: "EXCEL VBA PROGRAMLAMA",
          dersTipi: "Seçmeli",
          basariNotu: "BA",
          akts: "5",
        },
      ],
      toplamAktsKredi: "30",
      toplamAgirlikliOrtalama: "87",
      ortalama: "3.28",
    },

    {
      data: [
        {
          dersAdi: "İSTATİSTİK VE UYGULAMALARI",
          dersTipi: "Zorunlu",
          basariNotu: "CB",
          akts: "6",
        },
        {
          dersAdi: "GEREKSİNİM YÖNETİMİNE GİRİŞ",
          dersTipi: "Zorunlu",
          basariNotu: "BA",
          akts: "7",
        },
        {
          dersAdi: "NESNEYE DAYALI MODELLEME VE PROGRAMLAMA",
          dersTipi: "Zorunlu",
          basariNotu: "DD",
          akts: "6",
        },
        {
          dersAdi: "PAZARLAMA YÖNETİMİ",
          dersTipi: "Zorunlu",
          basariNotu: "BB",
          akts: "6",
        },
        {
          dersAdi: "LOJİSTİK VE TEDARİK ZİNCİRİ YÖNETİMİ",
          dersTipi: "Seçmeli",
          basariNotu: "AA",
          akts: "5",
        },
      ],
      toplamAktsKredi: "30",
      toplamAgirlikliOrtalama: "83.5",
      ortalama: "2.88",
    },

    {
      data: [
        {
          dersAdi: "VERİ TABANI VE VERİ TABANI YÖNETİM SİSTEMLERİ",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "7",
        },
        {
          dersAdi: "BİLGİSAYAR DONANIM VE İŞLETİM SİSTEMLERİ",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "6",
        },
        {
          dersAdi: "ÜRETİM YÖNETİMİ",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "6",
        },
        {
          dersAdi: "BİLİŞİM HUKUKU VE ETİĞİ",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "6",
        },
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "0",
        },
      ],
      toplamAktsKredi: "30",
      toplamAgirlikliOrtalama: "83.5",
      ortalama: "2.88",
    },
    {
      data: [
        {
          dersAdi: "MALİYET MUHASEBESİ",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "7",
        },
        {
          dersAdi: "SİSTEM ANALİZİ VE TASARIMI",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "6",
        },
        {
          dersAdi: "KURUMSAL KAYNAK PLANLAMA",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "6",
        },
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "6",
        },
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "0",
        },
      ],
      toplamAktsKredi: "30",
      toplamAgirlikliOrtalama: "83.5",
      ortalama: "2.88",
    },

    {
      data: [
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "",
          basariNotu: "ALMADI",
          akts: "0",
        },
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "",
          basariNotu: "ALMADI",
          akts: "0",
        },
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "",
          basariNotu: "ALMADI",
          akts: "0",
        },
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "",
          basariNotu: "ALMADI",
          akts: "6",
        },
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "",
          basariNotu: "ALMADI",
          akts: "0",
        },
      ],
      toplamAktsKredi: "30",
      toplamAgirlikliOrtalama: "83.5",
      ortalama: "2.88",
    },
    {
      data: [
        {
          dersAdi: "Bitirme çalışması",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "10",
        },
        {
          dersAdi: "İşyeri Uygulaması *",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "10",
        },
        {
          dersAdi: "Seçmeli Ders",
          dersTipi: "Zorunlu",
          basariNotu: "ALMADI",
          akts: "0",
        },
      ],
      toplamAktsKredi: "30",
      toplamAgirlikliOrtalama: "83.5",
      ortalama: "2.88",
    },
  ];

  return (
    <div className="sm:px-3 bg-activeBackground pt-16">
      <div className="py-5 pr-2 pl-1 sm:px-3 ">
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-5">
          {termsData.map((term, termIndex) => (
            <Card
              key={termIndex}
              className={"w-full !p-0 !m-0 rounded-md shadow shadow-white/50"}
            >
              <h1 className="w-full rounded-t-md bg-blueHeaderBackground text-white text-base p-5">
                {`${termIndex + 1}. Yarıyıl`}
              </h1>

              <table className="table-auto ">
                <thead>
                  <tr>
                    <th className="border text-grayText border-gray-200 p-2 text-start">
                      Ders Adı
                    </th>
                    <th className="border text-grayText border-gray-200 p-2 text-start">
                      Ders Tipi
                    </th>
                    <th className="border text-grayText border-gray-200 p-2 text-start">
                      Başarı Notu
                    </th>
                    <th className="border text-grayText border-gray-200 p-2 text-start">
                      AKTS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {term.data.map((item, index) => (
                    <tr key={index}>
                      <td className="border uppercase border-gray-200 p-2.5">
                        {item.dersAdi}
                      </td>
                      <td className="border  border-gray-200 p-2.5">
                        {item.dersTipi}
                      </td>
                      <td className="border  uppercase border-gray-200 p-2.5 text-start">
                        {item.basariNotu}
                      </td>
                      <td className="border border-gray-200 p-2.5 text-start">
                        {item.akts}
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td className="border bg-grayTextLight/20 border-gray-200 p-2.5"></td>
                    <td className="border bg-grayTextLight/20 font-[500] border-gray-200 p-2.5">
                      Toplam AKTS Kredi
                    </td>
                    <td className="border bg-grayTextLight/20 font-[500] border-gray-200 p-2.5 text-start">
                      Toplam Ağırlıklı
                    </td>
                    <td className="border font-[500] border-gray-200 bg-grayTextLight/20 p-2.5 text-start">
                      Ortalama
                    </td>
                  </tr>

                  <tr>
                    <td className="border bg-grayTextLight/20 border-gray-200 p-2.5">
                      Dönem Sonu:
                    </td>
                    <td className="border  border-gray-200 p-2.5">
                      {term.toplamAktsKredi}
                    </td>
                    <td className="border  border-gray-200 p-2.5 text-start">
                      {term.toplamAgirlikliOrtalama}
                    </td>
                    <td className="border  border-gray-200 p-2.5 text-start">
                      {term.ortalama}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          ))}
        </div>
        <Card
          className={
            "mt-4 bg-white opacity-100 z-20 shadow shadow-white/50 w-full gap-2"
          }
        >
          <h1>* Ortalamaya girmez.</h1>
          <h1>Ortalamaya girmeyen dersler</h1>
          <h1 className="ml-5">• İŞYERİ UYGULAMASI (10)</h1>
        </Card>
      </div>
    </div>
  );
};

export default Transkript;
