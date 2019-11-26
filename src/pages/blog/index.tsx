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
      },
    },
  };
  title: string;
}

export const BlogIndexPageQuery = graphql`
  query BlogIndexPageQuery {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

export default class BlogIndexPage extends React.Component<BlogIndexPageProps, {}> {

  public render() {

    const title = 'Blog';

    return (
      <Layout {...this.props}>
        <PageMeta title={title} />
        <div className="blog">
          <BlogRoll />
        </div>
      </Layout>
    );
  }
}
