import React, { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { X } from 'lucide-react';

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-4xl h-[80vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="h-full p-8">
          <Viewer fileUrl="/resume.pdf" />
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;