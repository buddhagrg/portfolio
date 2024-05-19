---
category: "blog"
title: "Testing React Contexts"
date: "2024-05-12"
published: true
tags: "React Context, Vitest, Vite"
---


This blog post will cover the basics about testing the react components that cosume contexts.

We will be using vitest, jsdom and React-Testing-Library during this process. The project will be bootstrapped by vite and typescript. You can check the full source code on [github](https://github.com/buddhagrg/react-theme-context) also.

## Table of Contents
- [Theme context provider](#theme-context-provider)
- [Testing component consuming context](#testing-component-consuming-context)
- [Custom RTL](#custom-rtl)

&nbsp;

## Theme context provider
```jsx
// src/context

import * as React from "react";

export type Theme = "light" | "dark";

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = React.useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme => (theme === "light") ? "dark" : "light");
    }

    React.useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
```

Here, we have a context provider that provider functionality for theme value and a function to set the theme. Theme have only two types; 'Dark' and 'Light'. We are exporting **Theme**, **ThemeContextType**, **ThemeContext** and **ThemeProvider** so that it can be used on other files too.

&nbsp;
### Consuming the context
As this is just a demo app, we have consumed the context in the **App.tsx** component. Before using the context, we need to wrap the App component with the **ThemeProvider.**

```jsx
// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

```jsx
// src/App.tsx

import * as React from "react";
import { ThemeContext, ThemeContextType } from "./context/ThemeProvider";

function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      Current Theme is: {theme}
      <br />
      <button
        type="button"
        onClick={toggleTheme}
        className="btn"
      >Switch Theme</button>
    </>
  );
}

export default App
```

&nbsp;
## Testing component consuming context
Upto this point, we have looked at the context provider and its use in the component. Now, we are going to write unit test for the **App.tsx** component using [RTL](https://testing-library.com/). RTL is a very handy tool to test the react components.

```jsx
// src/App.spec.tsx

import { render } from "@testing-library/react";
import { ThemeProvider } from "./context/ThemeProvider";
import App from "./App";

describe("<App />", () => {
    it("renders the default theme", () => {
        const expectedText = "Current Theme is: light"
        const { getByText } = render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );

        expect(getByText(expectedText)).toBeInTheDocument();
    });
});
```

> #### import { render } from "@testing-library/react";
> > _Remember this import. We are importing the render method from the library module directly._
&nbsp;

The App component is wrapped around with the ThemeProvider component as needed. As expected, the test passes with the expected text **_Current Theme is: light_**. This is just a demo app, but in large apps there could be multiple components consuming the context values. So, it is actually boring to import the context provider every time leading to code redundancy. We will utilize the functionality of the RTL and create a custom util function, this is where the util function shines.

&nbsp;
## Custom RTL
```jsx
// src/util/rtl-custom.tsx

import * as React from "react";
import { Theme, ThemeContext, ThemeContextType } from "../context/ThemeProvider";
import { RenderOptions, render } from "@testing-library/react";

interface ExtendedRenderedOptions extends RenderOptions {
    theme: Theme;
    toggleTheme: () => void;
};

const customRender = (
    ui: React.ReactElement<any>,
    options?: Omit<ExtendedRenderedOptions, "wrapper">
) => {
    const defaultValues: ThemeContextType = {
        theme: "light",
        toggleTheme: () => { }
    };

    const Wrapper = ({ children }: { children: React.ReactNode }) => {
        return (
            <ThemeContext.Provider value={{ ...defaultValues, ...options }}>
                {children}
            </ThemeContext.Provider>
        );
    }

    return render(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
export { customRender as render };
```

&nbsp;

The above custom RTL util function will accept **_ReactElement_** as first parameter and optional **_options_** as second parameter. The options will Omit the **wrapper** render option so that we can extend one of our own and use the interface that extends our context provider's theme and toggleTheme function. This is because so we can test the different cases of our **ThemeProvider.tsx** like with default values, with prop passed values, setter toggleTheme function, etc and so on. From this we are exporting everything from RTL and at last re-exporting our **customRender()** function as render which will **_override_** RTL's render method.

So, the refactored version using custom-rtl for above example [Testing component consuming context](#testing-component-consuming-context) will be as below;

```jsx
// src/App.spec.tsx

import App from "./App";
import { render } from "./util/rtl-custom";

describe("<App />", () => {
    it("renders the default theme 'light'", () => {
        const expectedText = "Current Theme is: light"
        const { getByText } = render(<App />);

        expect(getByText(expectedText)).toBeInTheDocument();
    });
});
```

> #### import { render } from "./util/rtl-custom";
> > We have exactly the same code as our previous one. The only difference is that we are using the render method from **"./util/rtl-custom"** instead of **"@testing-library/react"**.


I believe this is a  better better solution. Obviously, there are plenty of scenarios we can add for testing but this is out of our article topic.
&nbsp;

## References
- [https://testing-library.com/docs/react-testing-library/setup#custom-render](https://testing-library.com/docs/react-testing-library/setup#custom-render)
- [https://medium.com/@janesfrontenddiary/a-reusable-way-to-test-react-components-that-make-use-of-react-context-a82150344c46](https://medium.com/@janesfrontenddiary/a-reusable-way-to-test-react-components-that-make-use-of-react-context-a82150344c46)
