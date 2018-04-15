import React from 'react'
import { shallow, mount } from 'enzyme'

import Footer from '../components/Footer'
import './setup-dom'

test('Footer divs', () => {
  const expectedDivCount = 5

  const wrapper = shallow(<Footer />)
  const divs = wrapper.find('div')

  expect(divs).toHaveLength(expectedDivCount)

})
