import Image from "next/image";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "Uygulanabilirlik",
    subheading:
      "Kubbella, şemsiyelere kolayca erişebileceğiniz stratejik noktalarda hizmet verir. Aniden bastıran yağmurlarda veya güneşli günlerde şemsiye bulmak hiç bu kadar kolay olmamıştı.",
  },
  {
    heading: "Ekonomik",
    subheading:
      "Kubbella, bütçenizi zorlamadan, uygun fiyatlarla şemsiye kiralama imkanı sunar. Şemsiye satın almak yerine, sadece ihtiyaç duyduğunuzda kiralayarak tasarruf edersiniz",
  },
  {
    heading: "Kalite",
    subheading:
      "Kubbella, dayanıklı ve yüksek kaliteli şemsiyeleriyle sizi her türlü hava koşuluna karşı korur. Güvenilir ve estetik ürünlerimizle her zaman yanınızdayız.",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="lg:-ml-64">
            <Image
              src="/assets/why/iPad.png"
              alt="şemsiye kirala"
              width={4000}
              height={900}
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              Neden Kubbella?
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              Kubbella; geniş ürün yelpazesiyle şehir yaşamını kolaylaştıran,
              çevreci, ekonomik ve kullanıcı odaklı bir uygulamadır. Hava
              koşullarına karşı her zaman hazırlıklı olmanızı sağlar ve
              sürdürülebilir bir geleceğe katkıda bulunur.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-32 flex items-center justify-center bg-circlebg">
                    <Image
                      src="/assets/why/check.svg"
                      alt="şemsiye kirala"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
