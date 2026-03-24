import { useColors } from '../../hooks/useColors';
import "../../assets/css/loading/loading.css"

interface LoadingProps {
  color?: string;
  size?: number;
  className?: string;
}

function Loading({ color, size = 24, className = "" }: LoadingProps) {
  const colors = useColors();
  const fillColor = color || colors.border.primary;

  return (
    <svg 
      className={`loading ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="spinner_zWVm" x="1" y="1" width="7.33" height="7.33" fill={fillColor} />
      <rect className="spinner_gfyD" x="8.33" y="1" width="7.33" height="7.33" fill={fillColor} />
      <rect className="spinner_T5JJ" x="1" y="8.33" width="7.33" height="7.33" fill={fillColor} />
      <rect className="spinner_E3Wz" x="15.66" y="1" width="7.33" height="7.33" fill={fillColor} />
      <rect className="spinner_g2vs" x="8.33" y="8.33" width="7.33" height="7.33" fill={fillColor} />
      <rect className="spinner_ctYB" x="1" y="15.66" width="7.33" height="7.33" fill={fillColor} />
      <rect className="spinner_BDNj" x="15.66" y="8.33" width="7.33" height="7.33" fill={fillColor} />
      <rect className="spinner_rCw3" x="8.33" y="15.66" width="7.33" height="7.33" fill={fillColor} />
      <rect className="spinner_Rszm" x="15.66" y="15.66" width="7.33" height="7.33" fill={fillColor} />
    </svg>
  )
}

function FullScreenLoading() {
  return (
    <div className="fullscreen">
      <Loading size={100} />
    </div>
  )
}

export { Loading, FullScreenLoading }