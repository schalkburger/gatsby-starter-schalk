import { graphql, Link } from 'gatsby';
import * as React from 'react';
import 'typeface-italianno';
import 'typeface-source-sans-pro';
import '../styles/index.scss';
import Logo from './logo';

interface LayoutPageTemplateProps {
    hasFooter?: boolean;
}

export default class Layout extends React.Component<LayoutPageTemplateProps, {}> {

    public render() {

        const hasFooter = location.pathname === '/';

        return (

            <>
                <div className="layout">
                    <div className="header">
                        <header className="container header">
                            <a href="/"><Logo /></a>
                            <nav>
                                <Link to="/about">About</Link>
                                <Link to="/portfolio">Portfolio</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </header>
                    </div>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
                {hasFooter ? '' : (
                    <div className="footer">
                        <footer className="container footer">
                            <div className="footer-copy">
                                <p>Copyright © 2019 Kirsten Noelle. All rights reserved</p>
                            </div>
                            <nav>
                                <Link to="/about">About</Link>
                                <Link to="/portfolio">Portfolio</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </footer>
                    </div>
                )}
            </>
        );
    }
}
