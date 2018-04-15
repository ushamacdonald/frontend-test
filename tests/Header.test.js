import React from 'react'
import {shallow, mount} from 'enzyme'

import Header from '../components/Header'
import './setup-dom'

test('Header divs', () => {
  const expectedDivCount = 1

  const wrapper = shallow(<Header />)
  const divs = wrapper.find('div')

  expect(divs).toHaveLength(expectedDivCount)
})
