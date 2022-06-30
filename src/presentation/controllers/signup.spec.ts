import {SignUpController} from "./signup"

describe('Nome do componente - SignUP Controller', () =>{
  test('Should return 400 if not name is provided', () =>{
    // sut - sistem undent test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        email: 'any email',
        password: 'any password',
        passwordConfirmation: 'any password',
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})