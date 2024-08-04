import Image from "next/image";

interface cardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/assets/buyers/ourbuyers.svg",
    percent: "1M",
    heading: "Kullanıcı",
    subheading:
      "Analizlerimiz Sonucu 1 Milyon Aktif Kullanıcı Sayısına Ulaşacağız",
  },
  {
    imgSrc: "/assets/buyers/happybuyers.svg",
    percent: "5k",
    heading: "Kubbella Noktası",
    subheading:
      "Kullanıcılarımıza En İyi Hizmeti Verebilmek İçin Hedefimiz 90 Bin Kubbella Noktası",
  },
  {
    imgSrc: "/assets/buyers/projectcompleted.svg",
    percent: "80%",
    heading: "Proje Süreci",
    subheading:
      "Ülkemizin İlgili Noktalarında Kubbella Hizmetine Başlamak İçin Çabalıyoruz",
  },
  {
    imgSrc: "/assets/buyers/teammembers.svg",
    percent: "10+",
    heading: "Ekibimiz",
    subheading:
      "Birlikte Çalışmak için Sabırsızlanıyoruz, İş ve Staj Fırsatları İçin Bizi Takip Edin",
  },
];

const Buyers = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <p className="text-4xl font-semibold text-navyblue md:4px lh-96 text-center mb-4">
        Hedeflerimiz
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-8">
        {cardData.map((items, i) => (
          <div className="flex flex-col justify-center items-center" key={i}>
            <div className="flex justify-center border border-border  p-2 w-10 rounded-lg">
              <Image
                src={items.imgSrc}
                alt={items.imgSrc}
                width={30}
                height={30}
              />
            </div>
            <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
              {items.percent}
            </h2>
            <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
              {items.heading}
            </h3>
            <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
              {items.subheading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyers;
