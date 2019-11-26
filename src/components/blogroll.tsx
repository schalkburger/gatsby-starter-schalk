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
      };
    };
  };
}

class BlogRoll extends React.Component<BlogRollProps, {}> {
  public render() {

    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="blogroll">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="blog-post">
              <h4>{post.frontmatter.title}</h4>
              <p>{post.excerpt}</p>
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
                excerpt(pruneLength: 50)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
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
