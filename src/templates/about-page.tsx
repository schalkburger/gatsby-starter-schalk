import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';
import Img from 'gatsby-image';

interface AboutPageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        titleSeparator: string;
      };
    }
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        templateKey: string;
        heading: string;
      };
    };
    profile: any;
  };
}

class AboutPageTemplate extends React.Component<AboutPageTemplateProps, {}> {
  public render() {

    const post = this.props.data.markdownRemark;
    const separator = this.props.data.site.siteMetadata.titleSeparator;
    const data = this.props.data;

    return (
      <Layout {...this.props}>
        <PageMeta title={post.frontmatter.title} titleSeparator={separator} templateKey={post.frontmatter.templateKey} />
        <div className="container page about">
          <section className="grid grid-padding">
            <div className="grid-item grid-item-tablet-4">
              <div className="profile">
                <Img fluid={data.profile.childImageSharp.fluid} alt="Penny Pace" />
              </div>
            </div>
            <div className="grid-item grid-item-tablet-6">
              <h2>{post.frontmatter.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
export default AboutPageTemplate;

export const AboutPageQuery = graphql`
query AboutPageTemplate {
    site {
    siteMetadata {
      name
      titleSeparator
    }
  },
  markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
    html
    frontmatter {
      templateKey
      path
      title
      heading
    }
  },
  profile: file(relativePath: {eq: "penny-pace.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 512, grayscale: true) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
`;
