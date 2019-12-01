import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { PageMeta } from '../components/pagemeta';
import { ContactForm } from '../components/contactform';

interface ContactPageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        titleSeparator: string;
      };
    }
    markdownRemark: {
      frontmatter: {
        templateKey: string;
        title: string;
        heading: string;
        subtitle: string;
        email: string;
        phone: string;
        address: string;
      };
    };
  };
}

class ContactPageTemplate extends React.Component<ContactPageTemplateProps, {}> {

  public render() {

    const post = this.props.data.markdownRemark;
    const separator = this.props.data.site.siteMetadata.titleSeparator;

    return (
      <Layout {...this.props}>
        <PageMeta title={post.frontmatter.title} titleSeparator={separator} templateKey={post.frontmatter.templateKey} />
        <div className="container page contact">
          <section className="grid grid-padding">
            <div className="grid-item grid-item-tablet-6">
              <div className="contact-info">
                <h2>{post.frontmatter.heading}</h2>
                <p>{post.frontmatter.subtitle}</p>
                <div className="contact-info">
                  <div><strong>Email:</strong> <p>{post.frontmatter.email}</p></div>
                  <div><strong>Phone:</strong> <p>{post.frontmatter.phone}</p></div>
                  <div><strong>Address:</strong> <p>{post.frontmatter.address}</p></div>
                </div>
              </div>
            </div>
            <div className="grid-item grid-item-tablet-4">
              <div className="contact-form-container">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default ContactPageTemplate;

export const contactPageQuery = graphql`
  query ContactPageTemplate {
              site {
              siteMetadata {
              name
        titleSeparator
          }
        },
    markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
              html
      frontmatter {
              templateKey
        path
            title
            heading
            subtitle
            email
            phone
            address
          }
        }
      }
    `;
