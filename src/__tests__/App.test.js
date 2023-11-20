import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

test('displays and image of myself with alt text', () => {
    render(<App />)

    const image = screen.getByRole("img")

    expect(image).toBeInTheDocument();
});

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/i,
        exact: false,
        level: 2,
      });
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
  });

  test("A paragraph for your biography", () => {
    render(<App />)

    const paragraphText = "Your biography text goes here";
    const paragraph = screen.getByText(paragraphText);

    expect(paragraph).toBeInTheDocument();
  })

  test("Github link", () => {
    render(<App />)

    const linkText = "GitHub";
    const link = screen.getByText(linkText);

    expect(link).toBeInTheDocument();
  })

  test("LinkedIn link", () => {
    render(<App />)

    const linkText = "LinkedIn";
    const link = screen.getByText(linkText);

    expect(link).toBeInTheDocument();
  })