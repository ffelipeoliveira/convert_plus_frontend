import { useDropzone } from 'react-dropzone';
// import { Upload, File } from 'lucide-react';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    maxSize?: number;
    acceptedFormats?: string[];
}