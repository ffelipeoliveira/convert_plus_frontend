import { useColors } from '../../hooks/useColors';

interface ErrorMessageProps {
  error: string | null;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const colors = useColors();

  if (!error) return null;

  return (
    <div 
      className="mt-4 p-4 rounded-lg text-sm" 
      style={{ 
        backgroundColor: 'rgba(231, 0, 11, 0.1)',
        borderColor: colors.status.error,
        borderWidth: '1px',
        color: colors.status.error
      }}
    >
      {error}
    </div>
  );
};