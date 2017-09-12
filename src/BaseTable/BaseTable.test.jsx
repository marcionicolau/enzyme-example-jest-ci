// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import BaseTable from './BaseTable';

describe('BaseTable component test', () => {
  const value = [
    {
      RUNNO: 1,
      TRNO: 1,
      R: 1,
      O: 0,
      C: 0,
      CR: 'WH',
      MODEL: 'CSCER046',
      TNAM: 'DRYLAND  - 0 KG N/HA',
      FNAM: 'KSAS0001',
      WSTA: 'KSAS8101',
      SOIL_ID: 'IBWH980018',
    },
    {
      RUNNO: 2,
      TRNO: 2,
      R: 1,
      O: 0,
      C: 0,
      CR: 'WH',
      MODEL: 'CSCER046',
      TNAM: 'DRYLAND  - 0 KG N/HA',
      FNAM: 'KSAS0001',
      WSTA: 'KSAS8101',
      SOIL_ID: 'IBWH980018',
    },
  ];
  it('renders without crashing', () => {
    shallow(<BaseTable data={value} />);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<BaseTable data={value} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test component without prop data.', () => {
    const text = 'No Data.';
    const wrapper = shallow(<BaseTable />);
    expect(wrapper.contains(text)).toEqual(true);
  });

  it('test component with prop data empty.', () => {
    const wrapper = shallow(<BaseTable data={value} />);
    // expect(wrapper.find('h1').contains('BaseTable')).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});
