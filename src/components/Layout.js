import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
                <div className="main-wrapper">{children}</div>
            </main>
            <Footer />
        </div>
    );
}