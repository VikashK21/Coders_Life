import React from "react";
import reactDOM from "react-dom";
import Button from "./../button";

import { render, screen, cleanup, } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement('div');
    reactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="Click here."></Button>);
    expect(getByTestId('button')).toHaveTextContent('Click here.')
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="save"></Button>);
    expect(getByTestId('button')).toHaveTextContent('save')
})