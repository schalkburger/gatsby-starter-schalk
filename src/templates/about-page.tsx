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
      frontmatter: {
        title: string;
        templateKey: string;
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
              <h2>Nice to meet you</h2>
              <p>Everything changed for me when I met my dog Birch, just kidding, sort of but more on my dogs later. In all seriousness my life changed when I met my husband Ryan, who supported me from the very start. In him I had found what I had been missing the whole time. Someone that didn’t squash my dreams, but supported them, heck he even pushed me towards them. We went through college together and then made a big move to California where my journey into photography started. It wasn’t without the push from another great man that I got my start in photography. My grandfather had been studying photography as a hobby and at a time in my life where I didn’t know where I was going next he told me that he thought I had an eye for photography and should give it a try. My spark for art that I always had came back and I decided to make the jump into photography. It’s honestly crazy what support from those we love can do for a person. But I’m a human and I still experience my ups and downs.</p>
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
    }
  },
  profile: file(relativePath: {eq: "penny-pace.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 512) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
`;
