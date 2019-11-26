import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

interface PageMetaProps {
  title: string;
}

export const PageMeta = (props: PageMetaProps) => {
  const data = useStaticQuery(graphql`
      query PageMetaQuery {
        site {
          siteMetadata {
            name
          }
        }
      }
    `);
  const name = data.site.siteMetadata.name;
  const pageName = props.title.toLowerCase();
  const pageClass = pageName.replace(/\s/g, '-').toLowerCase();

  return (

    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title} - {name}</title>
      <body className={pageClass} />
    </Helmet>
  );
};
