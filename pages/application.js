import React from "react";
import Container from "../Containers/Container";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import ApplicationWrapper from "./../Wrappers/applicationWrapper";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const Application = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <Container>
      <ApplicationWrapper>
        <div className="section_padding">
          <div className="container">
            <h2 className="text-center mt-5 fw-bold">
              Отопление жилых зданий | Консультационная поддержка Viessmann
            </h2>
            <hr />
            <div className="row justify-content-center align-items-center padding">
              <div className="col-md-10 offset-md-2 col-lg-8 offset-lg-2">
                <div className="d-flex align-items-center">
                  <Checkbox
                    color="primary"
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  <p className="mb-0 fw-bold">
                    Я хочу получить бесплатную консультационную поддержку
                  </p>
                </div>
                <label className="label">
                  <form onSubmit={handleSubmit}>
                    <FormControl
                      component="fieldset"
                      error={error}
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        Пожалуйста, укажите суть Вашего обращения
                      </FormLabel>
                      <RadioGroup
                        color="primary"
                        aria-label="quiz"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                        className="checkbox_row"
                      >
                        <FormControlLabel
                          color="primary"
                          value="one"
                          control={<Radio />}
                          label="Технический вопрос"
                        />
                        <FormControlLabel
                          value="two"
                          control={<Radio />}
                          label="Покупка оборудования"
                        />
                        <FormControlLabel
                          value="three"
                          control={<Radio />}
                          label="Сервисные услуги"
                        />
                        <FormControlLabel
                          value="four"
                          control={<Radio />}
                          label="Другое"
                        />
                      </RadioGroup>
                      <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
                  </form>
                </label>
                <label className="label">
                  <form onSubmit={handleSubmit}>
                    <FormControl
                      component="fieldset"
                      error={error}
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        В случае, если вы хотите приобрести оборудование,
                        пожалуйста, укажите для каких целей
                      </FormLabel>
                      <RadioGroup
                        color="primary"
                        aria-label="quiz"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                        className="checkbox_row"
                      >
                        <FormControlLabel
                          color="primary"
                          value="one2"
                          control={<Radio />}
                          label="Строительство нового здания"
                        />
                        <FormControlLabel
                          value="two2"
                          control={<Radio />}
                          label="Модернизация, реконструкция здания"
                        />
                      </RadioGroup>
                      <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
                  </form>
                </label>
                <label className="label">
                  <form onSubmit={handleSubmit}>
                    <FormControl
                      component="fieldset"
                      error={error}
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        Выберите тип оборудования
                      </FormLabel>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <input
                            className="mt-1 me-3 checkbox"
                            type="checkbox"
                          />
                          <label className="mb-0 me-5">product group 1</label>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            className="mt-1 me-3 ms-5 checkbox"
                            type="checkbox"
                          />
                          <label className="mb-0">producct group 2</label>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <input className="mt-1 me-3 checkbox" type="checkbox" />
                        <label className="mb-0">producct group 2</label>
                      </div>
                    </FormControl>
                  </form>
                </label>
                <br />
                <div className="form_control">
                  <div className="form-text mb-2 fs-6">Контактные данные</div>
                  <div className="d-flex flex-column flex-wrap">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="Ваше имя *"
                          />
                        </form>
                      </div>
                      <div className="col-md-6">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label=" Ваша фамилия *"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form_control mt-4">
                  <div className="form-text mb-2 fs-6">
                    Адрес объекта, на котором установлено (будет установлено)
                    оборудование
                  </div>
                  <div className="d-flex flex-column flex-wrap">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="Улица и номер дома "
                          />
                        </form>
                      </div>
                      <div className="col-md-6 mt-3">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="Почтовый индекс "
                          />
                        </form>
                      </div>
                      <div className="col-md-6 mt-3">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="Населенный пункт
                            "
                          />
                        </form>
                      </div>
                      <div className="col-md-6 mt-3">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="Телефон *
                            "
                          />
                        </form>
                      </div>
                      <div className="col-md-6 mt-3">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="E-mail *
                            "
                          />
                        </form>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <input className="me-3 checkbox" type="checkbox" />
                        <label>
                          У меня есть договор сервисного обслуживания со
                          специализированной фирмой
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form_control mt-4">
                  <div className="form-text mb-2 fs-6">
                    Название обслуживающей фирмы
                  </div>
                  <div className="d-flex flex-column flex-wrap">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="(по желанию)"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form_control mt-4">
                  <div className="form-text mb-2 fs-6">
                    Адрес объекта, на котором установлено (будет установлено)
                    оборудование
                  </div>
                  <div className="d-flex flex-column flex-wrap">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="Улица и номер дома "
                          />
                        </form>
                      </div>
                      <div className="col-md-6 mt-3">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="Почтовый индекс "
                          />
                        </form>
                      </div>
                      <div className="col-md-6 mt-3">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label="Населенный пункт
                            "
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form_control mt-4">
                  <div className="form-text mb-2 fs-6">Текст сообщения</div>
                  <div className="d-flex flex-column flex-wrap">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <form
                          className={classes.root}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            className="w-100"
                            id="standard-basic"
                            label=" Напишите ваш вопрос или проблему"
                          />
                        </form>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <input className="me-3 checkbox" type="checkbox" />
                        <label>Я согласен с заявлением о защите данных</label>
                      </div>
                      <div className="mt-4">
                        <p>
                          Ваши персональные данные используются нами только
                          согласно нашему заявлению о защите данных. *
                        </p>
                        <p>
                          Ваш номер телефона и, если указан, адрес электронной
                          почты будут использованы фирмой Viessmann или
                          уполномоченной фирмой Viessmann третьей стороной
                          только для связи с вами с целью решения вопросов,
                          касающихся запрошенной консультационной поддержки.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <Button className="btn me-5">Отправить</Button>
                  </div>
                  <div className="mt-3">
                    <h3 className="fw-bold">Примечание</h3>
                    <p>
                      Уведомление об отмене запроса должно быть направлено на
                      электронную почту info@viessmann.uz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ApplicationWrapper>
    </Container>
  );
};
// Технический вопрос
// Покупка оборудования
// Сервисные услуги
// Другое
export default Application;
