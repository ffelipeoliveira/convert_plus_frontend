export const truncateFilename = (filename: string, maxLength: number = 30): string => {
  if (filename.length <= maxLength) return filename;
  
  const extension = filename.split('.').pop() || '';
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  
  if (extension) {
    const maxNameLength = maxLength - extension.length - 3; // 3 for "..."
    if (maxNameLength < 5) {
      return filename.substring(0, maxLength - 3) + '...';
    }
    return nameWithoutExt.substring(0, maxNameLength) + '...' + extension;
  } else {
    return filename.substring(0, maxLength - 3) + '...';
  }
};
