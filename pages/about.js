import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Back from "../Components/Back/Back";
import HomeBox from "../Components/HomeBox/homeBox";
import Container from "../Containers/Container";
import { aboutBox, aboutData, aboutDatas, aboutProg } from "../Data/datas";
import AboutWrapper from "./../Wrappers/aboutWrapper";

const viessman = `"Viessman"`;

const About = () => {
  return (
    <AboutWrapper>
      <Back
        title={"Информация о компании Viessmann"}
        subtitle={`Предприятие Viessmann Group является одним из ведущих в мире производителей энергетических систем.`}
      />
      <Container>
        <div className="container padding">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-7">
              <h3 className="fw-bold mb-3">
                Информация о предприятии Viessmann Group
              </h3>
              <p>
                Компания Viessmann Group является одним из ведущих в мире
                производителей систем отопления, промышленных отопительных
                установок и систем охлаждения. Основанное в 1917 году, семейное
                предприятие имеет штат персонала численностью 12 000 человек,
                товарооборот компании составляет 2,25 млрд. евро.
              </p>
              <p>
                Компания Viessmann является крупным международным концерном, в
                составе которого числятся 23 производственных предприятия в 12
                странах, сбытовые филиалы и представительства в 74 странах и 120
                торговых представительства во всех регионах мира. 56 %
                товарооборота компании приходится на зарубежные страны.
              </p>
              <a className="link" href="#">
                <FontAwesomeIcon className="me-2" icon={faArrowRight} />
                Фирма Viessmann (PDF)
              </a>{" "}
              <br />
              <a className="link" href="#">
                <FontAwesomeIcon className="me-2" icon={faArrowRight} />
                Исторические вехи развития (PDF)
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 mt-4">
              <div className="rounded shadow p-3">
                <h3 className="fw-bold">Новости компании Viessmann</h3>
                <p className="title">Новости</p>
              </div>
              <div className="rounded shadow p-3 my-4">
                <h3 className="fw-bold"> Контакт</h3>
                <p className="title">ООО {viessman} в Узбекистане</p>
              </div>
            </div>
          </div>
          <div className="padding">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/j9s5ZDJOZxw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mt-2">Корпоративный фильм Viessmann (2:30)</p>
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row padding">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <img
                  className="w-100 rounded overflow-hidden mt-4 "
                  src="https://viessmann.vercel.app/images/about1.webp"
                  alt="rasm"
                />
              </div>
              {aboutDatas.map((value, index) => {
                return (
                  <div
                    className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3"
                    key={index}
                  >
                    <h1>{value.title}</h1>
                    <p> {value.subtitle}</p>
                    <p> {value.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container padding">
          <div className="row justify-content-center">
            <h3 className="fw-bold">Основные ценности</h3>
            {aboutBox.map((value, index) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                  <div className="box rounded overflow-hidden py-3 h-100 shadow">
                    <img
                      className="w-100 photo rounded"
                      src={value.img}
                      alt="rasm "
                    />
                    <div className="text-center">
                      <h5 className="fw-bold my-4">{value.title}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row justify-content-center padding">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <img
                  className="w-100 rounded overflow-hidden "
                  style={{ marginTop: "150px" }}
                  src="https://viessmann.vercel.app/images/about2.webp"
                  alt="rasm"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3">
                <h1>Программа поставок Viessmann</h1>
                {aboutProg.map((value, index) => {
                  return (
                    <div key={index}>
                      <p>{value.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center padding">
          <h3 className="fw-bold text-center">Выбор проекта</h3>
          <hr className="w-50" />
          <HomeBox />
        </div>

        <div className="container">
          <div className="row justify-content-center padding">
            {aboutData.map((value, index) => {
              return (
                <div
                  className="col-12 col-sm-12 col-md-12 col-lg-6"
                  key={index}
                >
                  <h2 className="fw-bold">{value.title}</h2>
                  <p>{value.subtitle}</p>
                  <p>{value.desc}</p>
                </div>
              );
            })}
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <img
                className="w-100 rounded overflow-hidden shadow"
                src="https://viessmann.vercel.app/images/about4.webp"
                alt="rasm"
              />
            </div>
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row justify-content-center padding">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <img
                  className="w-100 rounded overflow-hidden shadow"
                  src="https://viessmann.vercel.app/images/about5.jpg"
                  alt="rasm"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3">
                <h3 className="fw-bold mt-5">Аэродром Аллендорф (Эдер)</h3>
                <p>
                  Аэродром Аллендорф (Эдер) был построен в 1966 г и в 2005 г.
                  капитально модернизирован и расширен, в результате чего он
                  теперь удовлетворяет всем требованиям коммерческих воздушных
                  сообщений. Кроме того, он служит базой для Эдерского
                  авиационно-спортивного клуба, который использует его в
                  основном для работы с молодежью.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AboutWrapper>
  );
};

export default About;
