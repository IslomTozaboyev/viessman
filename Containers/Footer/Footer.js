import React, { Component } from "react";
import FooterWrapper from "./FooterWrapper";

class Column extends Component {
  render() {
    const {
      column: { title, list, colProps },
    } = this.props;
    console.log(title, list);

    return (
      <div
        className={
          colProps || `col-6 col-sm-6 col-md-4 col-lg-2 py-5 mb-4 mt-5`
        }
      >
        <ul className="fw-bold text-white list-unstyled list-group">
          <li className="title">{title}</li>
          {list.map((value, index) => {
            return (
              <li key={index}>
                <a
                  href={value.url}
                  className={`d-block my-1 link ${value.className}`}
                >
                  {value.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default class Footer extends Component {
  render() {
    const { colProps, data } = this.props;

    return (
      <>
        <FooterWrapper className="footer">
          <div className="container py-3">
            <div className="row">
              {this.props.data.map((column, index) => {
                return (
                  <Column
                    key={index}
                    column={column}
                    colProps={colProps}
                  ></Column>
                );
              })}
            </div>
          </div>
          <div className="finish_footer">
            <div className="container">
              <p>© OOO Viessmann, 100052, Toshkent, Salar Bo'yi 7</p>
            </div>
          </div>
        </FooterWrapper>
      </>
    );
  }
}
