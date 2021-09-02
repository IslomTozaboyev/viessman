import { faDochub, faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faBuilding } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faHome,
  faSave,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeIcon from "@material-ui/icons/Home";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import RecentActorsIcon from "@material-ui/icons/RecentActors";

const Pages = [
  { icon: faHome, href: "/", title: "Главная" },
  { icon: faServicestack, href: "/products", title: "Продукты" },
  { icon: faDochub, href: "/application", title: "Прием заявок" },
  { icon: faTools, href: "/services", title: "Сервис" },
  { icon: faBuilding, href: "/about", title: "О нас" },
  { icon: faAddressBook, href: "/contact", title: "Контакты" },
];

const data = [
  {
    href: "/",
    img: "https://viessmann.vercel.app/images/menu1.jpg",
    title: "Для жилья",
    subtitle: `Здесь вы найдете информацию о продуктах для отопления
    жилых помещений, частных и многоквартирных домов`,
  },
  {
    href: "/",
    img: "https://viessmann.vercel.app/images/menu2.jpg",
    title: "Для бизнеса",
    subtitle: "Эффективные отопительные системы промышленного назначения",
  },
  {
    href: "/",
    img: "https://viessmann.vercel.app/images/menu3.jpg",
    title: "Промышленное оборудование",
    subtitle:
      "Промышленные установки с возможностью выработки тепла, пара и электроэнергии",
  },
  {
    href: "/",
    img: "https://viessmann.vercel.app/images/menu4.jpg",
    title: "Центральное отопление",
    subtitle:
      "Полный ассортимент отопительного оборудования для коммунальных служб и сетей автономного отопления",
  },
];

const texts = [
  {
    title: "Системы отопления ",
    subtitle:
      "Выпускаемое нами комплектное оборудование отличается высшим качеством и устанавливает новые масштабы в отрасли. Сосредоточившись на эффективном потреблении энергии, мы добиваемся снижения затрат, одновременно экономя ресурсы и сберегая окружающую среду.",
  },
  {
    title: "Промышленные системы",
    subtitle:
      "Экономная и экологичная выработка энергии, а также высокая эксплуатационная готовность и надежность - вот основные требования, предъявляемые к энергетическим установкам.",
  },
  {
    title: "Системы охлаждения",
    subtitle: `Фирма Viessmann является одним из ведущих европейских производителей инновационной холодильной техники. Обширный ассортимент выпускаемой продукции и предоставляемых услуг содержит высокоэффективные решения для промышленного применения.
  `,
  },
];

const boxes = [
  {
    img: `https://viessmann.vercel.app/images/howbuy.png`,
    title: `Где купить?`,
    subtitle: `Партнеры ООО "Viessmann"`,
    link: `Где купить?`,
    href: "/",
  },
  {
    img: `https://viessmann.vercel.app/images/viessman.jpg`,
    title: `Новости`,
    subtitle: `Все новости можно прочитать`,
    link: `Новости`,
    href: "/",
  },
  {
    img: `https://viessmann.vercel.app/images/help.webp`,
    title: `Бесплатная консультация `,
    subtitle: `Консультационная поддержка Viessmann`,
    link: ` Прием заявок`,
    href: "/",
  },
  {
    img: `https://viessmann.vercel.app/images/smart-home.webp`,
    title: `Приложения Viessmann`,
    subtitle: `Что такое smart-home?`,
    link: `Что такое smart-home?`,
    href: "/",
  },
  {
    img: `https://viessmann.vercel.app/images/apps.webp`,
    title: `Приложения Viessmann`,
    subtitle: `Управление Viessmann через приложения`,
    link: `Приложения Viessmann`,
    href: "/",
  },
  {
    img: `https://viessmann.vercel.app/images/services.jpg`,
    title: `Сервис`,
    subtitle: `Полный ассортимент сервисных услуг компании Viessmann`,
    link: `Сервис`,
    href: "/",
  },
  {
    img: `https://viessmann.vercel.app/images/about.webp`,
    title: `О нас`,
    subtitle: `Информация о компании Viessmann`,
    link: `О нас`,
    href: "/",
  },
  {
    img: `https://viessmann.vercel.app/images/menu4back.jpg`,
    title: `Контакты`,
    subtitle: `ООО "Viessmann" в Узбекистане`,
    link: `Контакты`,
    href: "/",
  },
];

const mybox = [
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/viessmann/product2.webp",
    title: "product 2",
    subtitle: "short desc 2",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/viessmann/productback_035tyf3.webp",
    title: "product 3",
    subtitle: "short product 3",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/viessmann/%D0%96%D0%B8%D0%B4%D0%BA%D0%BE%D1%82%D0%BE%D0%BF%D0%BB%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5_%D0%BA%D0%BE%D0%BD%D0%B4%D0%B5%D0%BD%D1%81%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BA%D0%BE%D1%82%D0%BB%D1%8B.jpeg",
    title: "Жидкотопливные конденсационные котлы",
    subtitle:
      "В конденсационной технике используется не только тепло, вырабатываемое при сжигании жидкого или газового топлива, но дополнительно также и тепло, теряемое в обычных отопительных приборах.",
  },
];

const servisBox = [
  {
    img: "https://viessmann.vercel.app/images/ser1.jpg",
    title: "Сервисные Центры",
    subtitle:
      "Специалисты по монтажу, техническому и сервисному обслуживанию систем отопления Viessmann",
  },
  {
    img: "https://viessmann.vercel.app/images/ser2.webp",
    title: "Промышленный Сервис",
    subtitle:
      "Сервисная поддержка для специалистов, работающих с оборудованием Viessmann промышленного назначения.",
  },
  {
    img: "https://viessmann.vercel.app/images/ser3.webp",
    title: "Подбор запчастей (on-line)",
    subtitle:
      "Он-лайн сервис подбора запчастей. Реальный поиск запчастей по артикулу, не отходя от компьютера.",
    link: (
      <p className="text-dark mb-0 text">
        <FontAwesomeIcon icon={faArrowRight} />
        <small className="fw-bold ms-2"> продукты</small>
      </p>
    ),
  },
  {
    img: "https://viessmann.vercel.app/images/ser4.webp",
    title: "Запрос консультации",
    subtitle:
      "Вы можете задать вопрос нашим специалистам он-лайн. Для этого заполните необходимую форму. ",
    link: (
      <p className="text-dark mb-0 text">
        <FontAwesomeIcon icon={faArrowRight} />
        <small className="fw-bold ms-2">перейти</small>
      </p>
    ),
  },
];

const servisFayl = [
  {
    img: "https://viessmann.vercel.app/images/doc1.webp",
    title: "Акт претензии",
    subtitle:
      "Бланк Акта претензии. Внимание! Заполните только левую часть бланка акта претензии. Заполненный бланк акта претензии и копию гарантийного талона отправьте пожалуйста на адрес td@viessmann.ru",
  },
  {
    img: "https://viessmann.vercel.app/images/doc2.webp",
    title: "Гарантийный талон",
    subtitle: "Образец гарантийного талона",
    link: (
      <p className="text-dark mb-0 text">
        <FontAwesomeIcon icon={faSave} />
        <small className="fw-bold ms-2"> Загрузить (PDF)</small>
      </p>
    ),
  },
  {
    img: "https://viessmann.vercel.app/images/doc3.webp",
    title: "Акт претензии",
    subtitle: "Образец заполненного акта претензии",
    link: (
      <p className="text-dark mb-0 text">
        <FontAwesomeIcon icon={faSave} />
        <small className="fw-bold ms-2"> Загрузить (PDF)</small>
      </p>
    ),
  },
];

const aboutBox = [
  {
    img: "https://viessmann.vercel.app/images/q1.webp",
    title: "Ценности бренда",
  },
  {
    img: "https://viessmann.vercel.app/images/q2.webp",
    title: "Защита окружающей среды ",
  },
  {
    img: "https://viessmann.vercel.app/images/q3.webp",
    title: "Управление энергией",
  },
  {
    img: "https://viessmann.vercel.app/images/q4.webp",
    title: "Инновации",
  },
];

const aboutComponent = [
  {
    title: "Полный ассортимент сервисных услуг",
    subtitle:
      "Для поставляемого оборудования фирма Viessmann предоставляет широкий ассортимент сопроводительных услуг. Так, академия Viessmann предлагает специалистам по монтажу систем отопления, проектировщикам, архитекторам, жилищно-строительным компаниям, мастерам по очистке дымоходов, техническим учебным заведениям и собственным сотрудникам всестороннюю программу обучения и повышения квалификации. Тем самым, фирма реагирует на растущую потребность своих партнеров в получении необходимой квалификации, обусловленную структурными изменениями на рынке отопительной техники и переходом к эффективным технологиям и регенеративным системам энергоснабжения, а также связанным с этим расширением технологического спектра. По всему миру ежегодно в мероприятиях по повышению квалификации, проводимых академией Viessmann, принимают участие 92 000 специалистов.",
    desc: "Предлагаемые фирмой Viessmann сервисные услуги включают в себя, кроме того, поддержку технической службой, соответствующий спросу комплект программного обеспечения, поддержку путем рекламы и стимулирования продаж, а также удобную для пользователя систему заказов и информационной поддержки, круглосуточно работающую в Интернете.",
  },
];
const aboutData = [
  {
    title: "Интернет-форумы для специалистов по энергетическим вопросам",
    subtitle:
      "На интернет-форумах академии Viessmann регулярно встречаются ведущие специалисты по энергетическим вопросам для дискуссии и обмена мнениями. С момента проведения первого мероприятия в 2008 году до настоящего времени в них приняли участие около 2500 наших партнеров-специалистов по монтажу и эксплуатации отопительной техники, а также проектировщики, архитекторы и инженеры. Это свидетельствует о высокой потребности в профессиональной информации с освещением политических и технологических аспектов.    ",
    desc: "В ходе семинаров и конференций известные специалисты в области политики, науки и отопительной техники делятся своими знаниями и опытом, демонстрируют практические решения и участвуют в дискуссиях.   ",
  },
];

const aboutDatas = [
  {
    title: "Стабильность в практической деятельности",
    subtitle:
      "Являясь семейным предприятием, фирма Viessmann придает особое значение ответственной деятельности с перспективной направленностью, причем стабильность является одним из основных принципов предприятия. Стабильность в практической деятельности означает для фирмы Viessmann сочетание экономических и экологических аспектов с социальной ответственностью, чтобы удовлетворение нынешних потребностей не оказывало отрицательного влияния на жизненные основы будущих поколений.",
    desc: "Являясь лидером в заботе об экологии и технологическом развитии отрасли, фирма Viessmann на протяжении десятилетий разрабатывает и поставляет экологически особо чистые и энергоэффективные системы отопления, работающие на жидком и газообразном топливе, а также гелиосистемы, отопительные установки на древесном топливе и тепловые насосы. Многие разработки фирмы Viessmann считаются выдающимися достижениями в развитии отопительной техники.    ",
  },
];

const aboutProg = [
  {
    title:
      "Фирма Viessmann, выпуская полный комплект оборудования, предлагает индивидуальные решения и эффективные системы в диапазоне мощности от 1,5 до 120 000 кВт для любых областей применения и всех энергоносителей. К ним относятся настенные конденсационные котлы мощностью от 1,9 до 150 кВт, напольные конденсационные приборы мощностью от 1,9 до 6000 кВт и блочно-модульные ТЭС, вырабатывающие от 1,0 до 530 кВт электрической и от 5,3 до 660 кВт тепловой энергии. Блочно-модульные ТЭС, работающие на природном и биогазе, предлагаются в комплекте с контрактом на поставку биогаза.",
  },
  {
    title:
      "К регенеративным системам энергоснабжения относятся термические гелиоустановки с плоскими и вакуумными трубчатыми коллекторами для приготовления горячей воды, поддержки отопления и охлаждения зданий, специальные водогрейные котлы и отопительные установки мощностью от 4 кВт до 50 МВт для работы на поленьях, древесной щепе и древесном гранулированном топливе, топливные насосы мощностью от 1,7 до 2.000 кВт для использования тепла из грунта, грунтовых вод или окружающего воздуха, а также фотоэлектрические установки.  ",
  },
  {
    title:
      "Для автономных сетей отопления и поселений с отоплением на биоэнергетическом топливе фирма Viessmann предлагает все из одних рук – от первого анализа выполнимости и детального проектирования, поставок всего необходимого оборудования, в том числе биогазовых установок, теплогенераторов, блочно-модульных ТЭС, геотермальных трубопроводов и квартирных тепловых подстанций вплоть до сооружения установки и ввода ее в эксплуатацию.",
  },
  {
    title:
      "Выпуская широкий ассортимент терморегулируемых камер, высокоэффективных холодильных камер и агрегатов, холодильного оборудования для торговли продуктами питания, а также принадлежностей и услуг, компания Viessmann Group снабжает потребителей всей необходимой холодильной техникой.  ",
  },
];

const contacts = [
  {
    title: "Генеральный менеджер",
    owner: "Сабуров Бахтиёр",
    number: "+998 90 945 09 00",
    gmail: "sbrb@viessmann.com",
  },
  {
    title: "Менеджер по проектам",
    owner: "Машарипов Икрам ",
    number: " +998 97 719 95 97",
    gmail: "mshi@viessmann.com",
  },
  {
    title: "Менеджер по продажам",
    owner: "Ибрагимов Фаррух",
    number: " +998 99 806 80 20",
    gmail: "sbrb@viessmann.com",
  },
  {
    title: "Менеджер по сервису продаж",
    owner: "Исмаилова Комила",
    number: " +998 93 550 55 03",
    gmail: "ismk@viessmann.com",
  },
];

const headerPages = [
  {
    icon: <HomeIcon />,
    title: "Главная",
    href: "/",
    active: "active",
  },
  { icon: <ApartmentIcon />, title: "Продукты", href: "/product" },
  { icon: <AssessmentIcon />, title: "Прием заявок", href: "/application" },
  {
    icon: <DashboardIcon />,
    title: "Сервис",
    href: "/services",
  },
  { icon: <BuildIcon />, title: "О нас", href: "/about" },
  { icon: <RecentActorsIcon />, title: "Контакты", href: "/contact" },
];

const headerList = [
  {
    title: "Оборудование",
    links: [
      {
        link: "Частные дома и квартиры",
        href: "https://viessmann.vercel.app/category/1",
      },
      { link: "Бизнес и производство ", href: "" },
      { link: "Крупные индустриальные объекты", href: "" },
      { link: "Центральное отопление", href: "" },
    ],
  },
  {
    title: "Сервисные услуги",
    links: [
      { link: "Прием заявок (выбрать Сервисные услуги)" },
      { link: "Гарантийные обязательства" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { link: "В Контакте Viessmann RU" },
      { link: " Facebook Viessmann RU" },
      { link: " Instagram Viessmann RU" },
      { link: " YouTube Viessmann RU" },
    ],
  },
  {
    title: "Домовладельцам",
    links: [{ link: "Где купить?" }, { link: "Бесплатная консультаци" }],
  },
  {
    title: "Дистанционное управление",
    links: [{ link: "Smart-home" }, { link: "Приложения Viessmann" }],
  },
];

export {
  Pages,
  data,
  texts,
  boxes,
  mybox,
  servisBox,
  servisFayl,
  aboutBox,
  aboutComponent,
  aboutData,
  aboutDatas,
  aboutProg,
  contacts,
  headerPages,
  headerList,
};
