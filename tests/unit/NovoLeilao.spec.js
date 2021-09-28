import NovoLeilao from '../../src/views/NovoLeilao'
import { mount } from '@vue/test-utils'
import { createLeilao } from '@/http'

jest.mock('@/http')

const $router = {
  push: jest.fn()
}

describe('Um novo Leilão deve ser criado', () => {
  test('dado o formulário preenchido, um leilão deve ser criado', () => {
    createLeilao.mockResolvedValueOnce()

    const wrapper = mount(NovoLeilao, {
      mocks: {
        $router
      }
    })

    wrapper.find('.produto').setValue('Um livro')
    wrapper.find('.descricao').setValue('Descrição teste')
    wrapper.find('.valor').setValue(50)
    wrapper.find('form').trigger('submit')

    expect(createLeilao).toHaveBeenCalled()
  })
})
