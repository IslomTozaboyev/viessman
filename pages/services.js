import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Back from "../Components/Back/Back";
import HomeBox from "../Components/HomeBox/homeBox";
import Container from "../Containers/Container";
import { servisBox, servisFayl } from "../Data/datas";
import ServicesWrapper from "./../Wrappers/servicesWrapper";

const viesmann = `"Viessman"`;

const Services = () => {
  return (
    <Container>
      <ServicesWrapper>
        <Back
          title={`Сервисные услуги`}
          subtitle={"Полный ассортимент сервисных услуг компании Viessmann"}
        />
        <div className="container">
          <div className="row padding">
            <div className="col-lg-7">
              <h3 className="fw-bold">
                Полный ассортимент сервисных услуг Viessmann
              </h3>
              <p>
                Оборудование Viessmann отличается высокой надежностью, при
                правильном монтаже и соблюдении условий использования оно может
                служить без сбоев многие годы. Но котел является объектом
                повышенной пожароопасности. В этой связи необходимость
                ежегодного квалифицированного технического обслуживания
                газоиспользующего оборудования очевидна и предписана
                законодательно.
              </p>
              <p>
                Только благодаря регулярному, не реже раза в год,
                квалифицированному сервисному обслуживанию можно на ранней
                стадии выявить и устранить опасные отклонения, вызываемые
                неблагоприятными факторами.
              </p>
              <p>
                Широкая сеть партнеров ООО {viesmann} обеспечивает доступность и
                оперативность сервиса, а также возможность для потребителя
                выбрать наиболее подходящую сервисную организацию. Многие
                сервисные партнеры Viessmann выступают также в качестве сбытовых
                партнеров и монтажных организаций. Это оптимальное сочетание. От
                таких компаний потребитель получает решение под ключ, начиная с
                подбора оборудования, комплектации, монтажа и заканчивая
                сервисным обслуживанием на долгие годы. Схема комплексного
                подхода прекрасно работает и позволяет {viesmann} удерживать
                значительную долю рынка.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="shadow p-3">
                <p>Вы можете получить консультацию у наших специалистов.</p>
                <h4 className="fw-bold">
                  Телефон горячей линии для Специалистов
                </h4>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+99897 123 45 67</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <h3 className="fw-bold">Сервисные услуги</h3>
            <p>Сервисное обслуживание отопительного оборудования Viessmann</p>
            {servisBox.map((value, index) => {
              return (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="box rounded overflow-hidden py-3 h-100">
                    <img className="w-100 photo" src={value.img} alt="rasm " />
                    <div className="text-center">
                      <h5 className="fw-bold my-3">{value.title}</h5>
                      <p className="fs-6">{value.subtitle}</p>
                      <a href="#">{value.link}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-7">
              <h3 className="fw-bold">Гарантийные Обязательства</h3>
              <p>
                ООО {viesmann} осуществляет гарантийное обслуживание на всей
                территории Российской Федерации через авторизованные сервисные
                организации.
              </p>
              <p className="fw-bold">
                Гарантийный период на оборудование Viessmann составляет 24
                месяца от даты ввода оборудования Viessmann в эксплуатацию, но
                не более 27 месяцев с даты отгрузки со склада ООО {viesmann}.
              </p>
              <p className="fw-bold">
                Гарантия не распространяется на оборудование Viessmann, если:
              </p>
              <ul className="p-4">
                <li>
                  на корпусе оборудования имеются механические или термические
                  повреждения, а также следы попадания жидкости, грязи и пыли,
                  которые могли быть причиной неисправности детали или
                  неработоспособности оборудования
                </li>
                <li>
                  не выполнены работы по сервисному обслуживанию оборудования,
                  что могло быть причиной неисправности детали или
                  неработоспособности оборудования
                </li>
                <li>
                  система электропитания, система подачи топлива, теплоноситель,
                  а также система отвода продуктов сгорания не обладают
                  техническими характеристиками и не подведены в полном
                  соответствии с требованиями документов, предъявляемым к
                  безопасной работе, сервисному обслуживанию и эксплуатации
                  оборудования
                </li>
              </ul>
              <p>
                Если Вам необходимо оформить гарантийный случай, необходимо
                заполнить Акт претензии.
              </p>
              <h5 className="fw-bold">
                Обратите Внимание! Вам необходимо заполнить только левую часть
                бланка акта претензии, правая часть заполняется сотрудником
                Viessmann.
              </h5>
              <h5 className="fw-bold my-3">
                Копию (скан) гарантийного талона, заполненный бланк акта
                претензии отправьте на адрес электронной почты технической
                службы Viessmann.
              </h5>
              <h6>
                E-mail: <a href="#">td@viessmann.ru</a>
              </h6>
            </div>
            <div className="col-lg-5">
              <div className="shadow p-3">
                <p>Вы можете получить консультацию у наших специалистов.</p>
                <h4 className="fw-bold">
                  Телефон горячей линии для Специалистов
                </h4>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+99897 123 45 67</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center padding">
            {servisFayl.map((value, index) => {
              return (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="box rounded overflow-hidden py-3 h-100">
                    <img className="w-100 photo" src={value.img} alt="rasm " />
                    <div className="text-center">
                      <h5 className="fw-bold my-3">{value.title}</h5>
                      <p className="fs-6">{value.subtitle}</p>
                      <a href="#">{value.link}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center">
            <h2 className="fw-bold text-center">Выбор проекта</h2>
            <hr className="w-50 mt-2" />
            <HomeBox />
            <div className="col-lg-6 my-4">
              <h2 className="fw-bold mt-5">
                Сертификаты на оборудование Viessmann
              </h2>
              <p>
                Наше оборудование регулярно проходит испытания в соответствии с
                законодательством Российской Федерации и получает
                соответствующие сертификаты и разрешения.
              </p>
              <a className="text text-dark" href="#">
                <FontAwesomeIcon icon={faArrowRight} /> Перейти в раздел
              </a>
            </div>
            <div className="col-lg-6 my-4">
              <img
                src="https://viessmann.vercel.app/images/sertificate.webp"
                alt="rasm"
              />
            </div>
          </div>
        </div>
      </ServicesWrapper>
    </Container>
  );
};

export default Services;
