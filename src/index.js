import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './transitions.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomePage from './pages/HomePage';
import TiskovinyPage from './pages/TiskovinyPage';
import TiskarnaPage from './pages/TiskarnaPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App()
{
    const location = useLocation();
    let pathname = location.pathname;
    pathname = pathname[pathname.length - 1] === '/' ? pathname.slice(0, -1) : pathname;

    return (
        <div>
            <Header />
            <TransitionGroup component={null}>
                <CSSTransition key={pathname} classNames='fade' timeout={400}>
                    <Routes location={location}>
                        <Route path='/dnaprint' element={<HomePage />} />
                        <Route path='/dnaprint/tiskoviny' element={<TiskovinyPage />} />
                        <Route path='/dnaprint/tiskarna' element={<TiskarnaPage />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    );
}

const Root = () => <BrowserRouter><App /></BrowserRouter>;
render(<Root />, document.getElementById('root'));