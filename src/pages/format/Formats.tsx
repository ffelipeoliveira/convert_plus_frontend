import { useParams } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import NotFound from '../notfound';

const formatData = {
  pdf: {
    title: 'Convert to PDF - Free PDF Converter',
    description: 'Convert Word, Excel, images and more to PDF format. Free, fast, and secure.',
    keywords: 'pdf converter, convert to pdf, pdf creator',
    formats: ['docx', 'jpg', 'png', 'txt', 'html']
  },
  docx: {
    title: 'Convert to DOCX - Free Word Document Converter',
    description: 'Convert PDF, images, and text to editable Word documents. Easy and free.',
    keywords: 'word converter, docx converter, convert to word',
    formats: ['pdf', 'txt', 'html', 'odt']
  },
  odt: {
    title: 'Convert to ODT - OpenDocument Converter',
    description: 'Convert PDF, images, and text to editable OpenDocument documents. Easy and free.',
    keywords: 'odt converter, opendocument converter, convert to odt',
    formats: ['pdf', 'txt', 'html', 'odt']
  },
  txt: {
    title: 'Convert to DOCX - Free Word Document Converter',
    description: 'Convert PDF, images, and text to editable Word documents. Easy and free.',
    keywords: 'word converter, docx converter, convert to word',
    formats: ['pdf', 'txt', 'html', 'odt']
  },
  html: {
    title: 'Convert to DOCX - Free Word Document Converter',
    description: 'Convert PDF, images, and text to editable Word documents. Easy and free.',
    keywords: 'word converter, docx converter, convert to word',
    formats: ['pdf', 'txt', 'html', 'odt']
  },
  jpg: {
    title: 'Convert to JPG - Free JPEG Image Converter',
    description: 'Convert PDF and images to jpg images. Easy and free.',
    keywords: 'jpg converter, docx converter, convert to word',
    formats: ['pdf', 'txt', 'html', 'odt']
  },
  png: {
    title: 'Convert to DOCX - Free Word Document Converter',
    description: 'Convert PDF, images, and text to editable Word documents. Easy and free.',
    keywords: 'word converter, docx converter, convert to word',
    formats: ['pdf', 'txt', 'html', 'odt']
  },
};

const Formats = () => {
  const { format } = useParams();
  const data = formatData[format as keyof typeof formatData];

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
        keywords={data.keywords} 
        url={`https://convertplus.com/format/${format}`}
      />
      
      <div className="container mx-auto px-4 py-12 mt-20">
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--accent-primary)' }}>
          Convert to {format?.toUpperCase()}
        </h1>
        
        <p className="text-xl mb-8 text-gray-300">
          {data.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2a2a2a] p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Supported Conversions</h2>
            <ul className="space-y-2">
              {data.formats.map(fromFormat => (
                <li key={fromFormat}>
                  <a 
                    href={`/convert/${fromFormat}-to-${format}`}
                    className="hover:text-[#86efac] transition-colors"
                  >
                    {fromFormat.toUpperCase()} → {format?.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#2a2a2a] p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Why Convert to {format?.toUpperCase()}?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Universal compatibility across devices</li>
              <li>Preserve formatting and layout</li>
              <li>Secure and private conversion</li>
              <li>No software installation required</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formats;