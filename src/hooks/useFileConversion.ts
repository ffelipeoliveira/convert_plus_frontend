import { useState } from 'react';
import axios from 'axios';

interface UseFileConversionProps {
  file: File | null;
  targetFormat: string;
  onConversionComplete?: (downloadUrl: string) => void;
  onError?: (error: string) => void;
}

export const useFileConversion = ({ 
  file, 
  targetFormat, 
  onConversionComplete,
  onError 
}: UseFileConversionProps) => {
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleConvert = async () => {
    if (!file) return;

    setConverting(true);
    setProgress(0);
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        `http://localhost:3000/convert?format=${targetFormat}`,
        formData,
        {
          responseType: 'blob',
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percentCompleted);
            }
          },
        }
      );

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `converted.${targetFormat}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url); // Clean up
      
      setProgress(100);
      onConversionComplete?.(url);
      
      setTimeout(() => {
        setConverting(false);
        setProgress(0);
      }, 1000);
      
    } catch (err) {
      console.error('Error during conversion:', err);
      onError?.('The conversion failed, please try again or check your files.');
      setConverting(false);
    }
  };

  return {
    converting,
    progress,
    handleConvert
  };
};