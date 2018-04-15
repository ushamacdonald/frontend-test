import React from 'react'
import { shallow, mount } from 'enzyme'

import Form from '../components/Form'
import './setup-dom'

test('Form divs', () => {
  const expectedDivCount = 16

  const wrapper = shallow(<Form />)
  const divs = wrapper.find('div')

  expect(divs).toHaveLength(expectedDivCount)

})
