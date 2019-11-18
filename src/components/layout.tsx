import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import '../../src/pages/index.scss';

interface LayoutProps {
    data: {
        site: {
            siteMetadata: {
                name: string;
            },
        },
    };
}

export const LayoutQuery = graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          name
        }
      }
    }
  `;

export default class Layout extends React.Component<LayoutProps, {}> {

    public render() {

        const {
            name,
        } = this.props.data.site.siteMetadata;

        return (
            <div className="layout">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{name}</title>
                </Helmet>
                <div className="container header">
                    <header>
                        <Link to="/about">About</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </header>
                </div>
                <div className="container content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}