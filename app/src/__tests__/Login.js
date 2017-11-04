import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Login } from '../Login';

describe("Linkbar Component", () => {
  let wrapper
  beforeEach(()=>{
      wrapper = shallow(<Login />)
  })
  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1)
  });
})