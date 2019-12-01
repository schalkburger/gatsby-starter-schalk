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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.216046098518!2d-88.00676898455184!3d42.102843579204944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbb2857c0b105%3A0x63cc0cb3a38fc641!2s3255%20W%20Thomas%20St%2C%20Arlington%20Heights%2C%20IL%2060004%2C%20USA!5e0!3m2!1sen!2sza!4v1575181195149!5m2!1sen!2sza" width="100%" height="auto" />
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
