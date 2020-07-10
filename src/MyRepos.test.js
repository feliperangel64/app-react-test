import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyRepos from './MyRepos'

test('Deve ser possível adicionar novos repositórios', () => {
    //Renderização do componente
    const { getByTestId } = render(<MyRepos />);

    //Buscar o elemento input
    const inputRepo = getByTestId("novo-repo-input");

    //Preencher algum valor no input
    const nameRepo = 'Novo Repo Teste';
    fireEvent.change(inputRepo, { target: { value: nameRepo } });

    //Dispara evento submit no form
    const formRepo = getByTestId("novo-repo-form");
    fireEvent.submit(formRepo);

    //Verificar se o elemnto adicionado existe no DOM
    expect(!!getByTestId(nameRepo)).toBe(true)
});