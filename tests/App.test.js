import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../components/App'
import './setup-dom'

jest.mock('../sass/styles.scss', () => ({}))

jest.mock('react-responsive-carousel/lib/styles/carousel.min.css', () => ({}))

test('App divs', () => {
  const expectedDivCount = 2

  const wrapper = shallow(<App />)
  const divs = wrapper.find('div')

  expect(divs).toHaveLength(expectedDivCount)

})
