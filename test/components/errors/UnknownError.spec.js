import { mount } from '@vue/test-utils'
import { getSideComponents, registerAllLocalVueComponents } from '~/test/components/help/componentsRegistration'
import UnknownError from '@/components/errors/UnknownError.vue'

const errorUnknown = {
  statusCode: -1
}

registerAllLocalVueComponents()
const wrapper = mount(UnknownError, { propsData: { error: errorUnknown }, stubs: [...getSideComponents()] })

describe('UnknownError', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is statusCode displayed', () => {
    expect(wrapper.find('.status-code').text()).toContain(`${errorUnknown.statusCode}`)
  })
})
