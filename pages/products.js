import React from "react";
import Container from "../Containers/Container";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { mybox } from "../Data/datas";
import Back from "../Components/Back/Back";
import ProductWrapper from "../Wrappers/productsWrapper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <ProductWrapper>
          <Back title={"Продукты"} />
          <AppBar className="my-5 bg-danger" position="static">
            <Tabs
              className="container"
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Жилые здания" {...a11yProps(0)} />
              <Tab label="Предприятия" {...a11yProps(1)} />
              <Tab label="Индустрия" {...a11yProps(2)} />
              <Tab label="Коммунальная техника" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="container">
              <div className="row">
                <h2 className="fw-bold">1. product group 1</h2>
                {mybox.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-5"
                    >
                      <div className="my-2 mybox">
                        <img className="w-100" src={value.img} alt="" />
                        <h6 className="my-4 fw-bold title">{value.title}</h6>
                        <p className="title">{value.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <p className="fs-4 fw-bold">
              Компания Viessmann Group является одним из ведущих в мире
              производителей систем отопления/охлаждения и промышленных
              установок.
            </p>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <p className="fs-4 fw-bold">
              Здесь вы найдете информацию о продуктах для отопления жилых
              помещений, частных и многоквартирных домов
            </p>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-5">
                  <div className="my-2 mybox">
                    <img
                      className="w-100"
                      src="https://orzu-tehnopark.s3.amazonaws.com/viessmann/visual-reverse-image-search-v2_297x176.jpg"
                      alt=""
                    />
                    <h6 className="my-4 fw-bold title">lorem</h6>
                    <p className="title">Lorem, ipsum.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </ProductWrapper>
      </Container>
    </div>
  );
}

const products = () => {
  return;
};

export { products };
