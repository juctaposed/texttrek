
import React, { useState } from 'react';

interface Props {
  onFileChange: (file: File) => void;
}

const FileInput: React.FC<Props> = ({ onFileChange }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile || null);
    if (selectedFile) {
      onFileChange(selectedFile);
    }
  };

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      {file && <p>{file.name}</p>}
    </>
  );
};

export default FileInput;
