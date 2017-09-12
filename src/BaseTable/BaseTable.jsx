// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

// class ActiveFormatter extends React.Component {
//   render() {
//     return <input type="checkbox" checked={this.props.active} />;
//   }
// }

// function activeFormatter(cell, row) {
//   return <ActiveFormatter active={cell} />;
// }

class BaseTable extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  constructor(props) {
    super(props);

    this.apiCols = this.apiCols.bind(this);
    this.priceFormatter = this.priceFormatter.bind(this);
  }

  priceFormatter = (cell, row) => {
    try {
      const val = Number.parseFloat(cell).toFixed(1);
      console.log(`The row cell: ${val}`);
      return `${val}`;
    } catch (err) {
      return `${cell}`;
    }
  };

  apiCols = info =>
    _.map(_.keys(_.head(info)), (k, index) => (
      <TableHeaderColumn
        key={k}
        isKey={index === 0}
        dataField={k}
        width='80'
        dataFormat={index > 0 ? this.priceFormatter : undefined}
      >
        {k}
      </TableHeaderColumn>
    ));

  render() {
    const { data } = this.props;
    console.log(data);
    return data !== undefined ? (
      <BootstrapTable
        data={data}
        bordered={false}
        striped
        hover
        height="400px"
        scrollTop={'Bottom'}
        options={{ noDataText: 'This is custom text for empty data' }}
        version="4"
      >
        {this.apiCols(data)}
      </BootstrapTable>
    ) : (
      <span>No Data.</span>
    );
  }
}

export default BaseTable;
