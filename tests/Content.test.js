
import React from 'react'
import { shallow, mount } from 'enzyme'

import Content from '../components/Content'
import './setup-dom'

test('Content divs', () => {
  const expectedDivCount = 4

  const wrapper = shallow(<Content />)
  const divs = wrapper.find('div')

  expect(divs).toHaveLength(expectedDivCount)

})

test('Content items', () => {
  const expectedItemCount = 2

  const wrapper = shallow(<Content />)
  const items = wrapper.find('div.column.is-half')

  expect(items).toHaveLength(expectedItemCount)

  const firstItem = items.first()
  const lastItem = items.last()

  expect(firstItem.find('img').props().src).toBeTruthy()
  expect(firstItem.find('h5').text()).toBe('NZ Bush')
  expect(firstItem.find('p').text()).toBeTruthy()
  expect(firstItem.find('a').text()).toBe('Some link')

  expect(lastItem.find('h5').text()).toBe('Blue Springs')
  expect(lastItem.find('p').text()).toBeTruthy()
  expect(lastItem.find('a').text()).toBe('Some link')
})
