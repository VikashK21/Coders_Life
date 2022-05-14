import React from "react";
import reactDOM from "react-dom";
import Button from "../Button";

it('rendering the componet correctly', () => {
    const div = document.createElement('div')
    reactDOM.render(<Button></Button>, div)
})