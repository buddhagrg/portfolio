---
category: "blog"
title: "Using dynamic import in React"
date: "2021-09-05"
published: true
tags: "React,Dynamic Import"
---
<br>

I have been using [ReactJS](https://reactjs.org/) for a while now. As I go on working on projects, the large size of javascript bundles makes me realize to learn different ways to reduce the issues of large bundle size at least to some extent. In this article, I am sharing some of the ways that I have learned during my development phases.
<br>

- [Splitting the chunks with Webpack](#splitting-the-chunks-with-webpack)
- [Route level splitting](#route-level-splitting)
- [Component level splitting](#component-level-splitting)

<br>
<br>

## Splitting the chunks with Webpack
In the beginning, configuring the webpack is confusing and difficult, to be honest. I believe Webpack configuration is one of the key points for Single Page Application optimization. In this blog, I am not going to show you the splitting chunk technique with webpack because it depends really on the team and application architecture but I have been using almost all of the guidance from one of the very informative blog posts which was written by _David Gilbertson_.

https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758

<br>
<br>

## Route level splitting
The need for route level splitting comes when we have really big apps. It feels unpleasant to force the users to download the entire app just to see specific routes. Like, if the user wants to see the homepage, then it's unnecessary to download the admin route or any other irrelevant routes, isn't it? This is where route level splitting shines.

[React Router](https://reactrouter.com/) is one of the most popular routing libraries used in react apps. Route level splitting can be done from React Router as follows.

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin'));

const App = () => {
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        </Suspense>
    </Router>
}
```

This example uses Suspense and lazy functionalities from react. More informations on [Lazy and Suspense](https://reactjs.org/docs/code-splitting.html#reactlazy).
<br>
<br>
<br>

## Component level splitting
Suppose we have a _User_ route that has a table containing all the list of user information like User id, First Name, Last Name, Logged in date, Active or inactive status and Action. The _action_ table column contains various actions to delete, edit, view user history, etc. If we want to view user history, we will click on the _View History_ button that shows a popup-modal component that will contain more information on user history. At this instance, we make a separate _UserHistory_ component and import in the _User_ route like this
```jsx
import React from 'react'
import UserHistory from './History'
export default function User(props){
    return(
        <></>
    )
}
```
This means the _UserHistory_ component will be imported before we even click on the _View History_ button. But do you think this is good? I was thinking what if we could import the _UserHistory_ component only when the user clicks on that button, that could be awesome. Here is where the _**dynamic import**_ comes into play. So this is one of the ways how we could do this through the use of dynamic import features.
```jsx
import React from 'react'
export default function User(props){
    const viewUserHistory = async (event) => {
        event.preventDefault();
        if (!values.UserHistory) {
            try {
                setValues(values => ({ ...values, loading: true }));
                let component = await import(/*webpackChunkName:'UserHistory'*/ './History');
                setValues(values => ({ ...values, loading: false, UserHistory: component.default }));
            } catch (error) {
                setValues(values => ({ ...values, loading: false }));
            }
        }
        setValues(values => ({ ...values, userHistoryModal: true }));
    }
    return(
        <>
            //other code to list table with user information 
            {
                values.UserHistory && <values.UserHistory
                    userHistoryModal={values.userHistoryModal}
                    {...props}
                />
            }
        </>
    )
}
```
The _viewUserHistory_ code snippet checks if the state contains _UserHistory_ component or not, if not then only it will import it dynamically. We can set some kind of loading indicator through _loading: true_ so that the user knows something is getting imported.<br>

We can do this similar stuff using React's Suspense and lazy functionalities, but in my case, dynamic import is favoured. So there is nothing hard and force rule, it depends on the developer experience and the structure of the project.
<br>
<br>

_Any feedbacks are appreciated. Thank you for taking your invaluable time to go through the article._
<br>
<br>

*References:*
<br>https://reactjs.org/docs/code-splitting.html
<br>https://webpack.js.org/guides/code-splitting/
<br>https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
<br>https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234