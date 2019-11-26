import { graphql } from 'gatsby';
import * as React from 'react';
import BlogRoll from '../../components/blogroll';
import Layout from '../../components/layout';
import { PageMeta } from '../../components/pagemeta';
import '../../styles/index.scss';

interface BlogIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        titleSeparator: string;
      },
    },
    markdownRemark: {
      frontmatter: {
        title: string;
        templateKey: string;
      };
    };
  };
  title: string;
}

export const BlogIndexPageQuery = graphql`
  query BlogIndexPageQuery {
    site {
      siteMetadata {
        name
        titleSeparator
      }
    },
    markdownRemark(frontmatter: {templateKey: {eq: "blog-post"}}) {
      frontmatter {
        templateKey
        path
        title
      }
    }
  }
`;

export default class BlogIndexPage extends React.Component<BlogIndexPageProps, {}> {

  public render() {

    const title = 'Blog';
    const blogClass = 'blog-page';
    const separator = this.props.data.site.siteMetadata.titleSeparator;

    return (
      <Layout {...this.props}>
        {/* tslint:disable-next-line: max-line-length */}
        <PageMeta title={title} titleSeparator={separator} templateKey={blogClass} />
        <div className="blog">
          <BlogRoll />
        </div>
      </Layout>
    );
  }
}
