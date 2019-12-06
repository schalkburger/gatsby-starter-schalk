import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import appleTouchIcon from '../images/apple-touch-icon.png';
import appleTouchIcon32 from '../images/apple-touch-icon.png';
import appleTouchIcon16 from '../images/apple-touch-icon.png';
import favicon from '../images/favicon.ico';

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
          description
        }
      }
    }
  `);
  const name = data.site.siteMetadata.name;
  const description = data.site.siteMetadata.description;

  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='description' content={description} />
      <title>
        {props.title}
        {props.titleSeparator}
        {name}
      </title>
      <link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon} />
      <link rel='icon' type='image/png' sizes='16x16' href={appleTouchIcon16} />
      <link rel='icon' type='image/png' sizes='32x32' href={appleTouchIcon32} />
      <link rel='shortcut icon' type='image/x-icon' href={favicon} />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='theme-color' content='#ffffff' />
      <body className={props.templateKey} />
    </Helmet>
  );
};
