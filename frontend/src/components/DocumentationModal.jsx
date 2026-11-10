import React from 'react';
import { X, FileCode, Download } from 'lucide-react';

export const DocumentationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#DDE2E8] rounded-lg w-full max-w-2xl max-h-[85vh] shadow-lg p-5 space-y-5 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#DDE2E8] pb-3 shrink-0">
          <div className="flex items-center space-x-2">
            <FileCode className="w-4 h-4 text-[#426B8A]" />
            <h2 className="text-base font-bold text-[#253449]">Documentation</h2>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-[#687586] hover:text-[#253449] hover:bg-[#F0F4F8] transition cursor-pointer"
            aria-label="Close documentation"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 min-h-0 rounded-md border border-[#DDE2E8] overflow-hidden bg-[#F7F8FA]">
          <iframe
            src="/docs.pdf"
            title="T-Test Simulator Documentation"
            className="w-full h-[58vh] border-0"
          />
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#DDE2E8] flex justify-end space-x-2 shrink-0">
          <a
            href="/docs.pdf"
            download="T-Test-Simulator-Documentation.pdf"
            className="px-4 py-1.5 rounded-md bg-[#FAFAFC] hover:bg-[#F0F4F8] text-[#253449] font-medium text-xs transition flex items-center space-x-2 border border-[#DDE2E8]"
          >
            <Download className="w-3.5 h-3.5 text-[#426B8A]" />
            <span>Download</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#426B8A] hover:bg-[#34556F] text-white font-medium text-xs transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
