import React from "react";
import { data } from "../../Data/datas";
import HomeBoxWrapper from "../../Wrappers/homeBoxWrapper";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HomeBox = () => {
  return (
    <HomeBoxWrapper>
      <div className="container overflow-hidden">
        <div className="row cards justify-content-center align-items-center overflow-hiden">
          {data.map((value, index) => {
            return (
              <div key={index} className="col-md-6 col-xl-3 mb-xl-0 my-5">
                <div className="cardd my-5" key={value.href}>
                  <Link href={value.href}>
                    <a></a>
                  </Link>
                  <div className="black"></div>
                  <img src={value.img} alt="rasm" />
                  <div className="title p-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <h3 className="fw-bold fs-4  mb-0">
                        <FontAwesomeIcon
                          className="fs-3 me-2"
                          icon={faAngleRight}
                        />
                        {value.title}
                      </h3>
                    </div>
                    <p className="mt-3">{value.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </HomeBoxWrapper>
  );
};

export default HomeBox;
