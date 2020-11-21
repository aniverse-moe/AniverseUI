import { mount } from '@vue/test-utils'
import { getSideComponents, registerAllLocalVueComponents } from '~/test/components/help/componentsRegistration'
import { AnivStatusCodes } from '@/lib/utils/HttpStatusCodes'
import PageNotFoundError from '@/components/errors/PageNotFoundError.vue'

const error404 = {
  message: 'Not found',
  path: '',
  statusCode: AnivStatusCodes.NOT_FOUND_404
}

registerAllLocalVueComponents()
const wrapper = mount(PageNotFoundError, { propsData: { error: error404 }, stubs: [...getSideComponents()] })

describe('PageNotFoundError', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is statusCode displayed', () => {
    expect(wrapper.find('.status-code').text()).toContain(`${error404.statusCode}`)
  })
})
