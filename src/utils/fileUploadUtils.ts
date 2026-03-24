export const SUPPORTED_FORMATS = [
  { value: 'pdf', label: 'PDF', mimeType: 'application/pdf' },
  { value: 'docx', label: 'DOCX', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
  { value: 'odt', label: 'ODT', mimeType: 'application/vnd.oasis.opendocument.text' },
  { value: 'txt', label: 'TXT', mimeType: 'text/plain' },
  { value: 'html', label: 'HTML', mimeType: 'text/html' },
  { value: 'jpg', label: 'JPG', mimeType: 'image/jpeg' },
  { value: 'png', label: 'PNG', mimeType: 'image/png' },
];

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};

export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || '';
};

export const isValidFormat = (format: string): boolean => {
  return SUPPORTED_FORMATS.some(f => f.value === format);
};