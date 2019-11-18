import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import './index.scss';

interface ContactPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
      },
    },
  };
}

export const ContactPageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

export default class ContactPage extends React.Component<ContactPageProps, {}> {

  public render() {
    const {
      name,
    } = this.props.data.site.siteMetadata;

    return (
      <div className="page contact">
        <Layout {...this.props}>
          <h1 className="name">{name}</h1>
          <p>Contact page content</p>
        </Layout>
      </div>
    );
  }
}
