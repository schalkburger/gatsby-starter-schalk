import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import '../../src/styles/index.scss';

interface BlogRollProps {
  data: {
    allMarkdownRemark: {
      edges: any[];
      id: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

class BlogRoll extends React.Component<BlogRollProps, {}> {
  public render() {

    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="blogroll grid">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="blogroll-post grid-item grid-item-tablet-5">
              <a href={post.fields.slug}><h3>{post.frontmatter.title}</h3></a>
              <span className="date">{post.frontmatter.date}</span>
              <p>{post.excerpt}</p>
              <a href={post.fields.slug}>Read more →</a>
            </div>
          ))}
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 100)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "DD MMMM YYYY")
                }
              }
            }
          }
        }
      `}
    // tslint:disable-next-line: jsx-no-lambda
    render={(data) => <BlogRoll data={data} />}
  />
);
