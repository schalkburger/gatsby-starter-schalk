import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';

interface AboutPageTemplateProps {
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

class AboutPageTemplate extends React.Component<AboutPageTemplateProps, {}> {

  public render() {

    const post = this.props.data.markdownRemark;

    return (
      <Layout {...this.props}>
        <PageMeta title={post.frontmatter.title} />
        <div className="page about">
          <h1>{post.frontmatter.title}</h1>
          <p>About page content</p>
        </div>
      </Layout>
    );
  }
}

export default AboutPageTemplate;

export const AboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
