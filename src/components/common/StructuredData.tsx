import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface WebApplicationData {
  name?: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  [key: string]: any;
}

interface ProductData {
  name?: string;
  description?: string;
  image?: string;
  brand?: string;
  [key: string]: any;
}

interface FAQPageData {
  faqs: FAQItem[];
}

// Discriminated union for different data types
type StructuredDataProps = 
  | {
      type: 'WebApplication';
      data?: WebApplicationData;
    }
  | {
      type: 'Product';
      data?: ProductData;
    }
  | {
      type: 'FAQPage';
      data: FAQPageData;
    };

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getSchema = () => {
    switch (type) {
      case 'WebApplication':
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Convert+",
          "description": "Free online file converter",
          "applicationCategory": "Utility",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          ...(data || {})
        };
        
      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs.map((faq: FAQItem) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };
        
      case 'Product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          ...(data || {})
        };
        
      default:
        return {};
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchema())}
      </script>
    </Helmet>
  );
};