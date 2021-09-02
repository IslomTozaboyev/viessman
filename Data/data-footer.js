import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const facebook = [
  <FontAwesomeIcon className="footer__link fs-3 mt-3 me-4" icon={faFacebook} />,
  <FontAwesomeIcon
    className="footer__link fs-3 mt-3 me-4"
    icon={faInstagram}
  />,
  <FontAwesomeIcon className="footer__link fs-3 mt-3 " icon={faYoutube} />,
];

export default [
  {
    colProps: "col-md-6 col-lg-3 mt-5",
    title: (
      <img
        className="w-50"
        src="https://viessmann.vercel.app/images/viessman%20logo.png"
        alt=""
      />
    ),
    list: [
      {
        title: <h1 className="fs-5">Социальные сети</h1>,
      },
      { title: facebook, url: "#Templates" },
    ],
  },
  {
    colProps: "col-md-6 col-lg-3 mt-5",
    title: "Оборудование",
    list: [
      {
        title: <p className="footer__link">Частные дома и квартиры</p>,
        url: "/НОВОСТИ",
      },
      {
        title: <p className="footer__link">Бизнес и производство</p>,
        url: "/НОВОСТИ",
      },
      {
        title: <p className="footer__link">Крупные индустриальные объекты</p>,
        url: "/НОВОСТИ",
      },
      {
        title: <p className="footer__link">Центральное отопление</p>,
        url: "/НОВОСТИ",
      },
    ],
  },
  {
    colProps: "col-md-6 col-lg-3 mt-5",
    title: "Домовладельцам",
    list: [
      {
        title: <p className="footer__link">Где купить?</p>,
        url: "/НОВОСТИ",
      },
      {
        title: <p className="footer__link">Бесплатная консультация</p>,
        url: "/НОВОСТИ",
      },
      {
        title: <h3 className="fw-bold">Дистанционное управление</h3>,
        url: "/НОВОСТИ",
      },
      {
        title: <p className="footer__link">Smart-home</p>,
        url: "/НОВОСТИ",
      },
      {
        title: <p className="footer__link">Приложения Viessmann</p>,
        url: "/НОВОСТИ",
      },
    ],
  },
  {
    colProps: "col-md-6 col-lg-3 mt-5",
    title: "Новости",
    list: [
      {
        title: <h5 className="fw-bold">Сервис</h5>,
        url: "/НОВОСТИ",
      },
      {
        title: <h5 className="fw-bold">О нас</h5>,
        url: "/НОВОСТИ",
      },
      {
        title: <h5 className="fw-bold">Контакты</h5>,
        url: "/НОВОСТИ",
      },
    ],
  },
];
