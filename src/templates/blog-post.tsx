import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        titleSeparator: string;
      };
    };
    markdownRemark: {
      id: string;
      html: string;
      frontmatter: {
        title: string;
        templateKey: string;
        date: string;
      };
    };
  };
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps, {}> {
  public render() {
    const post = this.props.data.markdownRemark;
    const separator = this.props.data.site.siteMetadata.titleSeparator;

    return (
      <Layout {...this.props}>
        <PageMeta
          title={post.frontmatter.title}
          titleSeparator={separator}
          templateKey={post.frontmatter.templateKey}
        />
        <div className='container page blog blog-single grid'>
          <article className='grid-item grid-item-tablet-12'>
            <h1>{post.frontmatter.title}</h1>
            <span className='date'>{post.frontmatter.date}</span>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String) {
    site {
      siteMetadata {
        name
        titleSeparator
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        templateKey
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`;
