import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) {
    wrapper.setState(state);
  }
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking increment button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // Find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  // Find display and check value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking decrement button decrements counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // Find button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  // Find display and check value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
});

// test('decrement count does not go below zero', () => {
//   const counter = 0;
//   const wrapper = setup(null, { counter });

//   // Find button and click
//   const button = findByTestAttr(wrapper, 'decrement-button');
//   button.simulate('click');
//   wrapper.update();

//   // Find display and check value
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//   expect(counterDisplay.text()).toContain('0');
// });

test('error message shown when trying to decrement after zero', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  // Click decrement button
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  // Make sure error message is displayed
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(1);
});

test('remove error message when increment button is clicked again', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  // Click decrement button
  let button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  // Click increment button
  button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  // Make sure error message goes away
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(0);
});
