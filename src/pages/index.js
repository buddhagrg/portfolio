import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import RecentBlogPosts from "../components/RecentBlogPosts";
import SEO from "../components/SEO";

export default function App() {
    return (
        <Layout >
            <SEO title="Home" />
            <Hero />
            <RecentBlogPosts />
        </Layout >
    );
}