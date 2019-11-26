import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';

interface ContactPageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        titleSeparator: string;
      };
    }
    markdownRemark: {
      frontmatter: {
        templateKey: string;
        title: string;
      };
    };
  };
}

class ContactPageTemplate extends React.Component<ContactPageTemplateProps, {}> {

  public render() {

    const post = this.props.data.markdownRemark;
    const separator = this.props.data.site.siteMetadata.titleSeparator;

    return (
      <Layout {...this.props}>
        <PageMeta title={post.frontmatter.title} titleSeparator={separator} templateKey={post.frontmatter.templateKey} />
        <div className="container page contact">
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
    site {
      siteMetadata {
        name
        titleSeparator
      }
    },
    markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
      html
      frontmatter {
        templateKey
        path
        title
      }
    }
  }
`;
