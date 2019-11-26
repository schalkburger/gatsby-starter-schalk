import { graphql, Link } from 'gatsby';
import * as React from 'react';
import 'typeface-italianno';
import 'typeface-source-sans-pro';
import '../styles/index.scss';
import Logo from './logo';

export default class Layout extends React.Component<{}> {

    public render() {

        return (
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
                <div className="container content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
