import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Cabecalho from "./index";

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('o componente de cabeçalho', () => {
    test('deve ser renderizada corretamente', () => {
        const { container } = render(<RecoilRoot>
            <Cabecalho />
        </RecoilRoot>)

        expect(container).toMatchSnapshot()
    })
})