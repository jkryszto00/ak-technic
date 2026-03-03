import { company } from '@data/company';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.website,
    logo: `${company.website}${company.logo}`,
    description: company.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: 'PL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phone,
      email: company.email,
      contactType: 'sales',
      availableLanguage: 'Polish',
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.fullName,
    url: company.website,
    logo: `${company.website}${company.logo}`,
    description: company.description,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: 'PL',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: product.url,
    brand: {
      '@type': 'Brand',
      name: 'SGL Carbon',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'SGL Carbon',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'PLN',
      seller: {
        '@type': 'Organization',
        name: company.name,
      },
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: company.name,
      url: company.website,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  publishDate: Date;
  updatedDate?: Date;
  author?: string;
}) {
  const authorName = article.author || company.name;
  const isOrganization = authorName === company.name;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.publishDate.toISOString(),
    dateModified: (article.updatedDate || article.publishDate).toISOString(),
    author: {
      '@type': isOrganization ? 'Organization' : 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${company.website}${company.logo}`,
      },
    },
  };
}

export function breadcrumbSchema(items: Array<{ label: string; href?: string }>, baseUrl: string = company.website) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  };
}
