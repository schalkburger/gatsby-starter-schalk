declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module 'gatsby-plugin-cloudinary-image-gallery'