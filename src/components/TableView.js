import React from "react";
import millify from "millify";

const TableView = ({ header, rowData }) => {
  return (
    <div className="table">
      <div className="table-header">
        {header.map((column) => (
          <div
            className={column.Header === "Name" ? "th-head-name" : "th-head"}
          >
            {column.Header}
          </div>
        ))}
      </div>
      <div>
        {rowData.slice(0, 5).map((data, index) => (
          <div className={index === 4 ? "table-row-border" : "table-row"}>
            <div style={{ paddingLeft: "20px" }} className="th-head-data">
              {index + 1}.
            </div>
            <div className="th-head-name">
              <div
                style={{ marginTop: "-8px" }}
                className="dashboard-box-icon mr-2"
              >
                <img className="crypto-image" src={data.iconUrl} alt="img" />
              </div>
              {data.name}
            </div>
            <div className="th-head-data">{data.symbol}</div>
            <div className="th-head-data">{millify(data.price)}</div>
            <div
              style={data.change > 0 ? { color: "#199253" } : { color: "red" }}
              className="th-head-data"
            >
              {data.change}
            </div>
            <div className="th-head-data">{millify(data.marketCap)}</div>
            <div className="th-head-data">{millify(data.btcPrice)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableView;
