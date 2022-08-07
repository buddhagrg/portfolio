import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="main-wrapper">{children}</div>
            </main>
            <Footer />
        </div>
    );
}