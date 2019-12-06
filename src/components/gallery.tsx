import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import '../../src/styles/index.scss';
import Img from 'gatsby-image';

interface GalleryProps {
  data: {
    allFile: {
      nodes: any[];
    };
  };
}

class Gallery extends React.Component<GalleryProps, {}> {
  public render() {
    const { data } = this.props;
    const { nodes: images } = data.allFile;
    return (
      <div className='gallery'>
        {images &&
          images.map(({ childImageSharp: image }) => (
            <div key={image.id} className='gallery-item'>
              <a href={image.fluid.src} target='_blank'>
                <Img fluid={image.fluid} />
              </a>
            </div>
          ))}
      </div>
    );
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      query galleryQuery {
        allFile(
          filter: { absolutePath: { regex: "/portfolio-photo/" } }
          sort: { fields: name, order: ASC }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 460) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    // tslint:disable-next-line: jsx-no-lambda
    render={(data) => <Gallery data={data} />}
  />
);
