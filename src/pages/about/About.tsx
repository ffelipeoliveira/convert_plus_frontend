import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import Logo from '../../components/common/Logo';
import { 
  FiShield, 
  FiZap, 
  FiGlobe, 
  FiLock, 
  FiGithub,
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiLibreoffice } from 'react-icons/si';

const About = () => {
  const features = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Fast & Efficient',
      description: 'Powered by LibreOffice for quick, reliable conversions'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Secure & Private',
      description: 'Files are automatically deleted after conversion'
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: 'No Registration',
      description: 'Convert files instantly without creating an account'
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: 'Free Forever',
      description: 'No hidden costs, no premium tiers, completely free'
    }
  ];

  const techStack = [
    { name: 'React', icon: <FaReact className="w-8 h-8" />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, color: '#339933' },
    { name: 'LibreOffice', icon: <SiLibreoffice className="w-8 h-8" />, color: '#18A303' },
    { name: 'Docker', icon: <FaDocker className="w-8 h-8" />, color: '#2496ED' }
  ];

  const team = [
    {
      name: 'Felipe Oliveira',
      role: 'Scrum Master & Front-End Developer',
      description: 'Loves creating beautiful interfaces and the best user experience',
      github: 'https://ffelipeoliveira/',
    },
    {
      name: 'Nícolas Pereira',
      role: 'Back-End Developer',
      description: 'Passionate about solid, secure and reliable software',
      github: 'https://github.com/Nicolas-P-S',
    },
    {
      name: 'Fernando José',
      role: 'Back-end Developer',
      description: 'Avid developer focused on security and reliability',
      github: 'https://github.com/Nandinhojos26',
    },
    {
      name: 'Augusto Nunes',
      role: 'Project Owner & Back-End Developer',
      description: 'Passionate about creating useful tools for everyone',
      github: 'https://github.com/AugNuneS',
    }
    ,
    {
      name: 'Kayky Cajuí',
      role: 'Back-End Developer & Tester',
      description: 'Focused on code safety first',
      github: 'https://github.com/KaykyCajui07',
    }
  ];

  return (
    <>
      <SEO
        title="About Convert+ | Free File Converter"
        description="Learn about Convert+ - a free, secure, and fast online file converter powered by modern technology."
        keywords="about, file converter, free tool, document conversion"
      />

      <div className="container mx-auto mt-20 px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--accent-primary)' }}>
            About <Logo/>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Making file conversion simple, fast, and accessible for everyone
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16 p-8 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Our Mission
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We believe that file conversion should be simple, free, and accessible to everyone. 
            No hidden fees, no registration required, just pure functionality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Why Choose <Logo/>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              >
                <div className="flex justify-center mb-4" style={{ color: 'var(--accent-primary)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Built With Modern Tech
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              >
                <div className="flex justify-center mb-4" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
              Free
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Always free, no hidden costs
            </p>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
              7+
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Supported formats
            </p>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
              50MB
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Max file size
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Behind the Tool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold"
                  style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent-primary)' }}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {member.name}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--accent-primary)' }}>
                  {member.role}
                </p>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  {member.description}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-colors hover:bg-[var(--accent-muted)]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 rounded-xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Ready to Convert?
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Start converting your files now, it's free and easy
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--button-primary-text)'
            }}
          >
            Get Started
            <span>→</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;