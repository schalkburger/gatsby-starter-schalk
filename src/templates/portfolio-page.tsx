import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';

interface PortfolioPageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        titleSeparator: string;
      };
    }
    markdownRemark: {
      frontmatter: {
        title: string;
        templateKey: string;
      };
    };
  };
}

class PortfolioPageTemplate extends React.Component<PortfolioPageTemplateProps, {}> {

  public render() {

    const post = this.props.data.markdownRemark;
    const separator = this.props.data.site.siteMetadata.titleSeparator;

    return (
      <Layout {...this.props}>
        <PageMeta title={post.frontmatter.title} titleSeparator={separator} templateKey={post.frontmatter.templateKey} />
        <div className="container page portfolio">
          <h1>{post.frontmatter.title}</h1>
          <p>Portfolio page content</p>
        </div>
      </Layout>
    );
  }
}

export default PortfolioPageTemplate;

export const portfolioPageQuery = graphql`
  query PortfolioPageTemplate {
    site {
      siteMetadata {
        name
        titleSeparator
      }
    },
    markdownRemark(frontmatter: {templateKey: {eq: "portfolio-page"}}) {
      html
      frontmatter {
        templateKey
        path
        title
      }
    }
  }
`;
