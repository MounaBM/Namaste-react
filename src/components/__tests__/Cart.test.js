import { fireEvent, render , screen} from "@testing-library/react"
import { act } from "react";
import RestaurantMenu from "../RestarurantMenu";
import Header from '../Header';
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Cart from '../Cart';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json :()=> Promise.resolve(MOCK_DATA)
    })
})


it("Should load Restaurant Menu component",async()=>{
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
        </BrowserRouter>
    ))

    const accordionHeader = screen.getByText('Biriyani (5)')
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart- (0 items)")).toBeInDocument()

    const addBtns = screen.getAllByRole("button" , {name : 'Add +'});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart- (1 items)")).toBeInDocument();
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart- (2 items)")).toBeInDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole('button', {name:'Clear Cart'}));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText('Cart Items are empty , Please Add items to the Cart')).toBeInTheDocument();

})