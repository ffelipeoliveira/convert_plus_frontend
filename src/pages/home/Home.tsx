import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import Logo from '../../components/common/Logo';
import { 
  FiUpload, 
  FiArrowRight, 
  FiClock,
  FiShield,
  FiDownload,
} from 'react-icons/fi';
import { 
  BsFileEarmarkPdf, 
  BsFileWord, 
  BsFileImage, 
} from 'react-icons/bs';
import "../../assets/css/fileupload/fileupload.css"

const Home = () => {
  const features = [
    {
      icon: <FiUpload className="w-8 h-8" />,
      title: 'Easy',
      description: 'Just drag an drop or select your file'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Fast',
      description: 'Fast file conversion powered by Open Source Software'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Secure',
      description: 'Your files are deleted from the server instantly after the conversion finishes'
    },
    {
      icon: <FiDownload className="w-8 h-8" />,
      title: 'Free',
      description: 'You don\'t need to spend a single cent'
    },
    {
      icon: <FiUpload className="w-8 h-8" />,
      title: 'Community Driven',
      description: 'Open Source code available on GitHub'
    }
  ];

  const formats = [
    { icon: <BsFileEarmarkPdf className="w-12 h-12" />, name: 'PDF', description: 'Portable Document Format' },
    { icon: <BsFileWord className="w-12 h-12" />, name: 'DOCX', description: 'Microsoft Word' },
    { icon: <BsFileImage className="w-12 h-12" />, name: 'JPG/PNG', description: 'Images' },
  ];

  return (
    <>
      <SEO
        title="Home | Convert+"
        description="Free online file converter - simple, fast, and secure."
      />
      <div className="min-h-screen" style={{ backgroundColor: '#191919' }}>
        <section className="relative overflow-hidden pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span style={{ color: '#86efac' }}>Convert</span>{' '}
                <span className="text-white">any file,</span>
                <br />
                <span className="text-white">any format</span>{' '}
                <span style={{ color: '#86efac' }}>for free</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Fast, simple, secure, reliable. No log-in, no watermark.
              </p>

              <Link
                to="/dashboard"
                className="pulse-green inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: '#86efac',
                  color: '#191919'
                }}
              >
                Convert Now
                <FiArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-sm text-gray-500 mt-4">
                ✨ Free for life • Files up to 50MB
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why choose{' '}
              <Logo/>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                  style={{ backgroundColor: '#2a2a2a' }}
                >
                  <div className="mb-4" style={{ color: '#86efac' }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4" style={{ backgroundColor: '#1f1f1f' }}>
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Supported <span style={{ color: '#86efac' }}>Formats</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {formats.map((format, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105"
                  style={{ backgroundColor: '#2a2a2a' }}
                >
                  <div className="mb-4 flex justify-center" style={{ color: '#86efac' }}>
                    {format.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {format.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {format.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/supported"
                className="inline-flex items-center gap-2 text-lg transition-colors duration-200 hover:underline"
                style={{ color: '#86efac' }}
              >
                See all supported file formats
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              How it <span style={{ color: '#86efac' }}>works </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Upload', description: 'Drag and drop or select your file' },
                { step: '2', title: 'Conversion', description: 'Choose your target format' },
                { step: '3', title: 'Download', description: 'Your file will be converted and downloaded automatically!' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                    style={{ 
                      backgroundColor: '#86efac',
                      color: '#191919'
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to convert your files?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of users who uses <Logo/> daily.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: '#86efac',
                color: '#191919'
              }}
            >
              Get Started!
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
    
  );
};

export default Home;