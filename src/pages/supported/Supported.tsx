import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';

const Supported = () => {
  const formats = [
    { name: 'PDF', description: 'Portable Document Format', to: '/format/pdf' },
    { name: 'DOCX', description: 'Microsoft Word Document', to: '/format/docx' },
    { name: 'ODT', description: 'OpenDocument Text', to: '/format/odt' },
    { name: 'TXT', description: 'Plain Text', to: '/format/txt' },
    { name: 'HTML', description: 'Web Page', to: '/format/html' },
    { name: 'JPG', description: 'JPEG Image', to: '/format/jpg' },
    { name: 'PNG', description: 'PNG Image', to: '/format/png' },
  ];

  return (
    <>
      <SEO
        title="Supported Formats | ConvertPlus"
        description="See all file formats supported by ConvertPlus"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl mt-20">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: 'var(--accent-primary)' }}>
          Supported Formats
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {formats.map((format) => (
            <Link
              key={format.name}
              to={format.to}
              className="p-4 rounded-lg text-center transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="text-3xl mb-2" style={{ color: 'var(--accent-primary)' }}>
                {format.name}
              </div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {format.description}
              </p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/dashboard"
            className="inline-block px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--button-primary-text)'
            }}
          >
            Start Converting
          </Link>
        </div>
      </div>
    </>
  );
};

export default Supported;