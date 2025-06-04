import Image from "next/image";
import s from "./styles.module.css";
import cn from "classnames";
import ClientsContent from "./ClientsContent";

const Clients = () => {
  return (
    <section className={cn(s.clientsSection, "section")}>
      <div className="container">
        <div className={cn(s.clients, "section-flex")}>
          <h2 className={cn(s.clients__title, "section-title")}>
            Нам доверяют крупные компании
            <b>комплектацию своих объектов</b>
          </h2>
          <div className={s.clients__content}>
            <ClientsContent
              content={data.map((item, i) => {
                return (
                  <div key={i} className={s.clients__picture}>
                    <div className={s.clients__pictureWrapper}>
                      <Image
                        src={item}
                        alt="Производство комплектующих к строительным лесам"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                );
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const data = [
  "/images/home/clients/1.png",
  "/images/home/clients/2.png",
  "/images/home/clients/3.png",
  "/images/home/clients/4.png",
  "/images/home/clients/5.png",
  "/images/home/clients/1.png",
  "/images/home/clients/2.png",
  "/images/home/clients/3.png",
  "/images/home/clients/4.png",
  "/images/home/clients/5.png",
  "/images/home/clients/1.png",
  "/images/home/clients/2.png",
];

export default Clients;
