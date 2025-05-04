import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "DEV4COM - Développement Web & Digital Solutions",
  description = "Agence de développement web spécialisée dans la création de sites web modernes, e-commerce, et solutions digitales sur mesure. Expertise en React, Node.js, et technologies web innovantes.",
  keywords = [
    "développement web",
    "création site internet",
    "agence web",
    "e-commerce",
    "site web professionnel",
    "développeur web",
    "solutions digitales",
    "web design",
    "SEO",
    "React",
    "Node.js",
    "applications web",
    "responsive design",
    "transformation digitale",
  ],
  image = "https://dev4com.com/og-image.jpg",
  url = "https://dev4com.com",
  type = "website",
  author = "DEV4COM",
  publishedTime,
  modifiedTime,
}) => {
  const siteName = "DEV4COM";
  const twitterHandle = "@dev4com";
  const locale = "fr_FR";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="React" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Article Specific Meta Tags */}
      {type === "article" && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          url: url,
          logo: image,
          sameAs: [
            "https://facebook.com/dev4com",
            "https://twitter.com/dev4com",
            "https://linkedin.com/company/dev4com",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+33-1-23-45-67-89",
            contactType: "customer service",
            availableLanguage: ["French", "English"],
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
