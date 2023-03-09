import App from "./App";

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('o componente de cabeçalho', () => {
    test('deve ser renderizada corretamente', () => {
        expect(<App />).toMatchSnapshot()
    })
})