import React from 'react'
import { shallow, mount } from 'enzyme'

import Scroller from '../components/Scroller'
import './setup-dom'

jest.mock('react-responsive-carousel', () => ({
  Carousel: (props) => <div>
  </div>
}))

jest.mock('react-responsive-carousel/lib/styles/carousel.min.css', () => ({}))

test('Scroller divs', () => {
  const expectedDivCount = 5

  const wrapper = shallow(<Scroller />)
  const divs = wrapper.find('div')

  expect(divs).toHaveLength(expectedDivCount)

})
