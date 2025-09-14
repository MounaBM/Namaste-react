import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

it("Should render Header button with login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)

const loginButton = screen.getByRole('button',{name:'Login'});

expect(loginButton).toBeInTheDocument();
});

it("Should render Header button with Cart item 0",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)

const CartItems = screen.getByText("Cart- (0 items)");

expect(CartItems).toBeInTheDocument();
});

it("Should render Header button with Cart",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)

const CartItems = screen.getByText(/Cart/);

expect(CartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)

const loginButton = screen.getByRole('button',{name:'Login'});

fireEvent.click(loginButton);

const logoutButton = screen.getByRole('button',{name:'Logout'})

expect(logoutButton).toBeInTheDocument();
});