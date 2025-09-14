import { render, screen } from "@testing-library/react";
import RestaurantCard , { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted label ",()=>{
    // Home Work - test HOC : withPromtedLabel()

    // render(
    //     <withPromotedLabel resData={MOCK_DATA}/>
    // )

    // const promoted = screen.getByText("Promoted");
    // expect(promoted).toBeInTheDocument();
})