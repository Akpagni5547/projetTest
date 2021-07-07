import Somme from "./fonc"
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
import React from 'react'
import { render } from '@testing-library/react'
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    waitFor,
} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'


test("jeux", () => {

    const testRenderer = TestRenderer.create(<Somme />);
    const testInstance = testRenderer.root;
    //console.log(testRenderer.toJSON().children)
    expect(testInstance.findByProps({ testId: "header" }).children[0]).toBe("Mon compteur")
})
/*it('peut afficher et mettre à jour un compteur', () => {
    // Teste le premier affichage et l'appel à componentDidMount
    act(() => {
        let container = TestRenderer.create('div');
        ReactDOM.render(<Somme />, container);
        const label = container.querySelector('p');
        expect(5).toBe(5)
    });
})*/