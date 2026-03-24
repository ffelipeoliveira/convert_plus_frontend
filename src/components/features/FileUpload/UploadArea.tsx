import { FiUpload, FiX, FiCheckCircle } from 'react-icons/fi';
import { useColors } from '../../../hooks/useColors';
import { Tooltip } from '../../common/Tooltips';

interface UploadAreaProps {
  getRootProps: any;
  getInputProps: any;
  isDragActive: boolean;
  file: File | null;
  onRemove: () => void;
  formatFileSize: (bytes: number) => string;
  truncateFilename: (name: string, maxLength: number) => string;
}

export const UploadArea: React.FC<UploadAreaProps> = ({
  getRootProps,
  getInputProps,
  isDragActive,
  file,
  onRemove,
  formatFileSize,
  truncateFilename
}) => {
  const colors = useColors();

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer 
                  transition-all duration-300 mb-6`}
      style={{
        borderColor: isDragActive || file ? colors.accent.primary : colors.border.primary,
        backgroundColor: isDragActive ? colors.accent.muted : file ? colors.accent.muted : 'transparent',
      }}
    >
      <input {...getInputProps()} />
      
      {!file ? (
        <EmptyUploadState isDragActive={isDragActive} />
      ) : (
        <FilePreview 
          file={file}
          onRemove={onRemove}
          formatFileSize={formatFileSize}
          truncateFilename={truncateFilename}
        />
      )}
    </div>
  );
};

const EmptyUploadState: React.FC<{ isDragActive: boolean }> = ({ isDragActive }) => {
  const colors = useColors();
  
  return (
    <div>
      <FiUpload className="mx-auto h-16 w-16 mb-4" style={{ color: colors.accent.primary }} />
      <p className="text-lg mb-2" style={{ color: colors.text.secondary }}>
        {isDragActive
          ? 'Drop your file here'
          : 'Drag and drop or click to select your file'}
      </p>
      <p className="text-sm" style={{ color: colors.text.muted }}>
        Max file size: 50MB
      </p>
    </div>
  );
};

interface FilePreviewProps {
  file: File;
  onRemove: () => void;
  formatFileSize: (bytes: number) => string;
  truncateFilename: (name: string, maxLength: number) => string;
}

const FilePreview: React.FC<FilePreviewProps> = ({
  file,
  onRemove,
  formatFileSize,
  truncateFilename
}) => {
  const colors = useColors();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4 min-w-0">
        <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.accent.muted }}>
          <FiCheckCircle className="h-6 w-6" style={{ color: colors.accent.primary }} />
        </div>
        <div className="text-left min-w-0">
          <Tooltip text={file.name}>
            <span className="block truncate max-w-[200px]">
              {truncateFilename(file.name, 30)}
            </span>
          </Tooltip>
          <p className="text-sm" style={{ color: colors.text.muted }}>
            {formatFileSize(file.size)}
          </p>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="p-2 rounded-full transition-colors duration-200 flex-shrink-0"
        style={{ color: colors.status.error }}
      >
        <FiX className="h-5 w-5" />
      </button>
    </div>
  );
};