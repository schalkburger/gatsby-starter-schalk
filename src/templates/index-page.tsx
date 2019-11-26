import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import BlogRoll from '../components/blogroll';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';

interface IndexPageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
      };
    }
    markdownRemark: {
      frontmatter: {
        title: string;
        templateKey: string;
        hero: {
          heading: string;
        };
      };
    };
  };
}

class IndexPageTemplate extends React.Component<IndexPageTemplateProps, {}> {

  public render() {

    const post = this.props.data.markdownRemark;
    const name = this.props.data.site.siteMetadata.name;

    return (
      <Layout {...this.props} hasFooter={false}>
        <PageMeta title="" titleSeparator="" templateKey={post.frontmatter.templateKey} />
        <div className="container page index home">
          <div className="hero">
            <h1>{post.frontmatter.hero.heading}</h1>
            <p>{name}</p>
            <a href="/contact" className="button">Contact Me</a>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPageTemplate;

export const indexPageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        name
        titleSeparator
      }
    },
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      html
      frontmatter {
        templateKey
        path
        title
        hero {
          heading
        }
      }
    }
  }
`;
