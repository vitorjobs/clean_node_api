import {SignUpController} from "./signup"
import {MissingParamError} from '../errors/missing-param-error'
// import {} from ""

/**
 * TESTE 01
 * VALIDAÇÕES DO RETURN
 * SE EXISTE O RETORNO 400
 * SE EXISTE O BODY
 */

describe('TESTE 01 - Nome do componente - SignUP Controller', () =>{
  test('Should return 400 if not name is provided', () =>{
    // sut - sistem undent test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'any name',
        email: 'any email',
        password: 'any password',
        passwordConfirmation: 'any password',
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})

/**
 * TESTE 02
 * VALIDAÇÕES DO ...
 * SE EXISTE O ...
 * SE EXISTE O ...
 */

 describe('TESTE 02 - Nome do componente - SignUP Controller', () =>{
  test('Should return 400 if not email is provided', () =>{
    // sut - sistem undent test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        // email: 'any email',
        password: 'any password',
        passwordConfirmation: 'any password',
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})