import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Button from './Button.jsx'


describe("all button tests",()=>{
    test('test props', () => {
        render(<Button>children</Button>)
        expect(screen.getByRole('button')).toHaveTextContent('children')
    })
    test('test props function', () => {
        const clickFunction = jest.fn()
        const { getByRole } =  render(<Button handlerClick={clickFunction}/>)
        fireEvent.click(getByRole('button'))
        expect(clickFunction).toHaveBeenCalledTimes(1)
    })
    test('test made snapshot', () => {
     const button = render(<Button>children</Button>)
     expect(button).toMatchSnapshot()
    })
})