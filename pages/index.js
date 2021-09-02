import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@material-ui/core";
import HomeBox from "../Components/HomeBox/homeBox";
import Container from "../Containers/Container";
import { boxes, texts } from "../Data/datas";
import HomeWrapper from "../Wrappers/HomeWrapper";

export default function Home() {
  return (
    <div>
      <Container>
        <HomeWrapper>
          <div className="home">
            <div className="black"></div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-10">
                  <div className="box py-5 px-4 pb-4">
                    <h1>Фирма Viessmann - ваш партнер во всех областях</h1>
                    <p>
                      Компания Viessmann Group является одним из ведущих в мире
                      производителей систем отопления/охлаждения и промышленных
                      установок.
                    </p>
                    <Button className="btn">О нас</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HomeBox />
          <div className="section_padding firma">
            <div className="container">
              <h2 className="fw-bold text-center">
                Фирма Viessmann - ваш партнер во всех областях
              </h2>
              <hr />
              <p className="fs-6 mt-5">
                Компания Viessmann Group является одним из ведущих в мире
                производителей систем отопления/охлаждения и промышленных
                установок. Фирма Viessmann, выпуская полный комплект
                оборудования, предлагает индивидуальные решения и эффективные
                системы в диапазоне мощности от 1,5 до 120 000 кВт для любых
                областей применения и всех энергоносителей.
              </p>
              <div className="row">
                {texts.map((value, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <div className="my-5">
                        <h5 className="fw-bold">
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faAngleRight}
                          />
                          {value.title}
                        </h5>
                        <p>{value.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="boxes section_padding">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                {boxes.map((value, index) => {
                  return (
                    <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                      <div className="card mb-5 ">
                        <img className="w-100" src={value.img} alt="rasm" />
                        <div className="text-center mx-2">
                          <h2 className="fw-bold fs-5 my-4">{value.title}</h2>
                          <p className="fs-6">{value.subtitle}</p>
                          <Link href={value.href}>
                            <a className="text-dark d-flex align-items-center justify-content-center text-decoration-none links">
                              <FontAwesomeIcon
                                className="me-2 fs-4"
                                icon={faAngleRight}
                              />
                              {value.link}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </HomeWrapper>
      </Container>
    </div>
  );
}
