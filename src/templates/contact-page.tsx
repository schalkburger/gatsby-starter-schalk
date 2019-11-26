import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';

interface ContactPageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
      };
    }
    markdownRemark: {
      frontmatter: {
        title: string;
      };
    };
  };
}

class ContactPageTemplate extends React.Component<ContactPageTemplateProps, {}> {

  public render() {

    const post = this.props.data.markdownRemark;

    return (
      <Layout {...this.props}>
        <PageMeta title={post.frontmatter.title} />
        <div className="page contact">
          <h1>{post.frontmatter.title}</h1>
          <p>Contact page content</p>
        </div>
      </Layout>
    );
  }
}

export default ContactPageTemplate;

export const contactPageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
