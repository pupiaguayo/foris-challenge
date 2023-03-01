/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Header } from "../../components/header";

test("render header", () => {
  render(<Header />);
});
