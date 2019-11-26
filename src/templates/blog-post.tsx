import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
      };
    }
    markdownRemark: {
      id: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps, {}> {

  public render() {

    const post = this.props.data.markdownRemark;

    return (
      <Layout {...this.props}>
        <PageMeta title={post.frontmatter.title} />
        <div className="page index home">
          <h1>{post.frontmatter.title}</h1>
          <p>Blog post content</p>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
query BlogPostByID($id: String) {
  markdownRemark(id: { eq: $id }) {
    id
      frontmatter {
        title
      }
    }
  }
`;
