import React from 'react';
import { FileText, Download } from 'lucide-react';

export const DocumentationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-[#DDE2E8] rounded-lg w-full max-w-4xl h-[90vh] shadow-lg flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center border-b border-[#DDE2E8] px-5 py-3 shrink-0">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-[#426B8A]" />

            <h2 className="text-base font-bold text-[#253449]">
              Documentation
            </h2>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-[#F7F8FA] overflow-hidden min-h-0">
          <iframe
            src="/docs.pdf"
            title="T-Test Simulator Documentation"
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#DDE2E8] flex justify-end items-center space-x-2 shrink-0 bg-white">

          {/* Download */}
          <a
            href="/docs.pdf"
            download="T-Test-Simulator-Documentation.pdf"
            className="px-4 py-1.5 rounded-md bg-[#426B8A] hover:bg-[#34556F] text-white font-medium text-xs transition flex items-center space-x-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>

          {/* Close */}
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#F0F4F8] hover:bg-[#E2E8F0] text-[#253449] font-medium text-xs transition cursor-pointer"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
};
