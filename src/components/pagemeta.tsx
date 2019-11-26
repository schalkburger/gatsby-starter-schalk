import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

interface PageMetaProps {
  title: string;
  titleSeparator: string;
  templateKey: string;
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

  return (

    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title} {props.titleSeparator} {name}</title>
      <body className={props.templateKey} />
    </Helmet>
  );
};
