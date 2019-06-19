import React from "react";
import "jest-styled-components";
import { renderWithTheme } from "../../../hoc/shallowWithTheme";
import Text from "./Text";

it("renders correctly", () => {
  const tree = renderWithTheme(
    <Text tag="p" size="xl" color="blue">
      My paragraph small and yellow
    </Text>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      color: #22d2dc;
      font-size: 1.725rem;
    }

    <p
      className="c0"
      color="blue"
      size="xl"
    >
      My paragraph small and yellow
    </p>
  `);
});
