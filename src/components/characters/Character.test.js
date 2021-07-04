import React from 'react';
import Character from './Character';
import { shallow } from 'enzyme';

describe('Character component', () => {
  it('renders a character component', () => {
    const wrapper = shallow(<Character photoUrl="./image.png" name="Avatar-Man" _id="12345" />); 
    expect(wrapper).toMatchSnapshot();
  });
});
