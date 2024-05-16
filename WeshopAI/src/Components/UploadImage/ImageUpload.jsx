import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './style.css';


const ImageUpload = () => {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            if (file.size > 5 * 1024 * 1024) {
                alert('File is larger than 5MB');
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                const fileAsDataURL = reader.result;
                // You can now use the file data URL (base64 encoded) as needed
                console.log(fileAsDataURL);
            };
            reader.readAsDataURL(file);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

    return (
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>click to select files (Max size: 5MB)</p>
            )}
        </div>
    );
};

export default ImageUpload;
