import { mount } from '@vue/test-utils'
import { getSideComponents, registerAllLocalVueComponents } from '~/test/components/help/componentsRegistration'
import { AnivStatusCodes } from '@/lib/utils/HttpStatusCodes'
import ApiUnavailableError from '@/components/errors/ApiUnavailableError.vue'

const error503 = {
  message: 'Api unavailable',
  path: '',
  statusCode: AnivStatusCodes.API_UNAVAILABLE_503
}

registerAllLocalVueComponents()
const wrapper = mount(ApiUnavailableError, { propsData: { error: error503 }, stubs: [...getSideComponents()] })

describe('ApiUnavailableError', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is statusCode displayed', () => {
    expect(wrapper.find('.status-code').text()).toContain(`${error503.statusCode}`)
  })
})
