import ReactDOM from "react-dom/client";

/*
 * React Functional Component
 * - A JavaScript function that returns JSX  or a react element.
 * - Component names must start with a CAPITAL letter.
 */
const Heading = () => {
  return <h1>Hello World from Function 1</h1>;
};

/*
 * Functional component using the implicit return syntax.
 * No 'return' keyword is needed because there are no {} braces.
 */
const Heading2 = () => <h1>Hello World from Function 2</h1>;

/*
 * Functional component with JSX attributes.
 */
const Heading3 = () => <h1 id="heading3">Hello World from Function 3</h1>;

/*
 * Component Composition
 *Calling a component inside another component is Component Composition.
 * Here, Heading4 is the parent component.
 * Heading, Heading2, and Heading3 are child components.
 */
const Heading4 = () => {
  return (
    <>
      {/* React Fragment (<>...</>)
          Groups multiple elements without creating an extra HTML element. */}

      <Heading />
      <Heading2 />
      <Heading3 />
    </>
  );
};

/*
 * Create a React Root.
 * This connects React with the HTML root element.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
 * Render the root React component.
 * React starts rendering from Heading4,
 * which in turn renders Heading, Heading2, and Heading3.
 */
root.render(<Heading4 />);
