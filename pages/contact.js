import { faDochub } from "@fortawesome/free-brands-svg-icons";
import { faFan, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Back from "../Components/Back/Back";
import HomeBox from "../Components/HomeBox/homeBox";
import Container from "../Containers/Container";
import { contacts } from "../Data/datas";
import ContactWrapper from "./../Wrappers/contactWrapper";

const viesmann = `"Viessman"`;

const Contact = () => {
  return (
    <Container>
      <ContactWrapper>
        <Back title={"Контакт"} subtitle={` ООО "Viessmann" в Узбекистане`} />
        <div className="padding container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-8">
              <h3 className="fw-bold mb-3">
                Представительство Viessmann в Республике Узбекистан - ООО
                {viesmann}
              </h3>
              <p className="mb-0">Адрес: 100052, Ташкент, Салар Буйи, 7</p>
              <p className="mb-0">
                Время работы: с понедельника по пятниуе с 9-00 до 18-00,
                обеденный переыв с 13-00 до 14-00
              </p>
              <p>
                Эл. почта:
                <a className="orange ms-2" href="#">
                  info@viessmann.uz
                </a>
              </p>
              <h3 className="fw-bold my-3">Наши контакты:</h3>
              {contacts.map((value, index) => {
                return (
                  <div key={index}>
                    <p>
                      {value.title}
                      <b className="ms-2 me-2">{value.owner} телефон:</b>
                      <a className="orange " href="#">
                        {value.number} {value.gmail}
                      </a>
                    </p>
                  </div>
                );
              })}
              <h3 className="fw-bold my-3 mt-5">
                Информационно-техническая поддержка:
              </h3>
              <p>
                Сервис Менеджер
                <b className="ms-2 me-2">Кабулов Нигмон</b> телефон:
                <a className="orange ms-2" href="#">
                  +998 97 733 11 55 kbln@viessmann.com
                </a>
              </p>
              <h3 className="fw-bold mt-5">
                Склад ООО {viesmann} - в разработке
              </h3>
              <p>
                Дата отгрузки оборудования согласовывается с Отделом логистики и
                поддержки продаж ООО {viesmann} в г. Ташкент посредством
                электронной почты, либо потелефону +XXXXXXXXXX - заранее, но не
                позднее 16:00 рабочего дня, предшествующегодню планируемой
                отгрузки.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="box rounded shadow p-3 my-4">
                <p>
                  При движении по дорогам обязательно соблюдайте правила
                  дорожного движения и ограничение скоростей.
                </p>
                <h3 className="fw-bold">Планирование маршрута</h3>
                <a className="text-dark link" href="#">
                  <FontAwesomeIcon icon={faSave} /> ООО {viesmann} (офис) в
                  Google Maps
                </a>
              </div>
              <div className="box rounded shadow p-3">
                <h3 className="fw-bold">Склад ООО {viesmann}</h3>
                <a className="text-dark link" href="#">
                  <FontAwesomeIcon icon={faDochub} /> Памятка водителю (PDF 1
                  MB) Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <h3 className="fw-bold text-center mt-5">Выбор проекта</h3>
            <hr className="w-50" />
          </div>
          <HomeBox />
        </div>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
