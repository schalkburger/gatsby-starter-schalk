import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';

interface PortfolioPageTemplateProps {
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

class PortfolioPageTemplate extends React.Component<PortfolioPageTemplateProps, {}> {

  public render() {

    const post = this.props.data.markdownRemark;

    return (
      <Layout {...this.props}>
        <PageMeta title={post.frontmatter.title} />
        <div className="page portfolio">
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
    markdownRemark(frontmatter: {templateKey: {eq: "portfolio-page"}}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
