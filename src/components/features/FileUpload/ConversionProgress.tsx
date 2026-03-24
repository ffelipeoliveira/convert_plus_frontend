import { useColors } from '../../../hooks/useColors';

interface ConversionProgressProps {
  converting: boolean;
  progress: number;
}

export const ConversionProgress: React.FC<ConversionProgressProps> = ({ converting, progress }) => {
  const colors = useColors();

  if (!converting) return null;

  return (
    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: colors.accent.primary }}>
          Converting... Do not panic if it seems stuck
        </span>
        <span className="text-sm font-medium green-pulse" style={{ color: colors.accent.primary }}>
          {progress}%
        </span>
      </div>
      <div className="w-full rounded-full h-3 overflow-hidden" style={{ backgroundColor: colors.bg.tertiary }}>
        <div
          className="h-3 rounded-full transition-all duration-300"
          style={{ 
            width: `${progress}%`,
            backgroundColor: colors.accent.primary,
            boxShadow: `0 0 10px ${colors.accent.primary}`
          }}
        />
      </div>
    </div>
  );
};