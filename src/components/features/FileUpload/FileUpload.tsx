import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useColors } from '../../../hooks/useColors';
import { Card, Button, Select } from '../../common/StyledComponents';
import { truncateFilename } from '../../../utils/StringUtils';
import { formatFileSize, SUPPORTED_FORMATS } from '../../../utils/fileUploadUtils';
import { useFileConversion } from '../../../hooks/useFileConversion';
import { UploadArea } from './UploadArea';
import { ConversionProgress } from './ConversionProgress';
import { ErrorMessage } from '../../common/ErrorMessage';

import "../../../assets/css/fileupload/fileupload.css";

interface FileUploadProps {
  onConversionComplete?: (downloadUrl: string) => void;
  maxFileSize?: number; // in bytes
  allowedFormats?: string[];
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onConversionComplete,
  maxFileSize = 50 * 1024 * 1024, // 50MB default
  allowedFormats = SUPPORTED_FORMATS.map(f => f.value)
}) => {
  const colors = useColors();
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState('pdf');
  const [error, setError] = useState<string | null>(null);
  
  const { converting, progress, handleConvert } = useFileConversion({
    file,
    targetFormat,
    onConversionComplete,
    onError: setError
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      
      // Validate file size
      if (selectedFile.size > maxFileSize) {
        setError(`File size exceeds ${formatFileSize(maxFileSize)} limit`);
        return;
      }
      
      setFile(selectedFile);
      setError(null);
    }
  }, [maxFileSize]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: maxFileSize,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'text/html': ['.html', '.htm'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'application/vnd.oasis.opendocument.text': ['.odt']
    }
  });

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  return (
    <Card className="max-w-2xl mx-auto p-8">
      {/* Format Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
          Target Format
        </label>
        <Select
          value={targetFormat}
          onChange={(e) => setTargetFormat(e.target.value)}
          style={{ 
            backgroundColor: colors.bg.tertiary,
            color: colors.text.primary,
          }}
        >
          {SUPPORTED_FORMATS.map((option) => (
            <option 
              key={option.value} 
              value={option.value} 
              disabled={!allowedFormats.includes(option.value)}
              style={{ backgroundColor: colors.bg.tertiary }}
            >
              {option.label}
            </option>
          ))}
        </Select>
      </div>

      {/* Upload Area */}
      <UploadArea
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
        file={file}
        onRemove={removeFile}
        formatFileSize={formatFileSize}
        truncateFilename={truncateFilename}
      />

      {/* Error Message */}
      <ErrorMessage error={error} />

      {/* Conversion Progress */}
      <ConversionProgress converting={converting} progress={progress} />

      {/* Convert Button */}
      <Button
        onClick={handleConvert}
        disabled={!file || converting}
        variant="primary"
        size="lg"
        className="w-full mt-8"
      >
        {converting ? 'Converting...' : 'Convert File'}
      </Button>

      {/* Footer Note */}
      <p className="text-xs text-center mt-4" style={{ color: colors.text.muted }}>
        Supported formats: {SUPPORTED_FORMATS.map(f => f.label).join(', ')}
        <br />
        Max file size: {formatFileSize(maxFileSize)}
      </p>
    </Card>
  );
};

export default FileUpload;