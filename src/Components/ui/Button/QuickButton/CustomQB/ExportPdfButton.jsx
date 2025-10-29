import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MdOutlineFileUpload } from 'react-icons/md';
import Quickbutton from '../Quickbutton';

const ExportPdfButton = ({ data, filename = 'export.pdf', title = 'Report' }) => {
  const handleExport = () => {
    if (!data || data.length === 0) {
    //   console.error('No data provided to generate PDF.');
      alert('No data available to export');
      return;
    }

    try {
      const doc = new jsPDF();
      
      // Get headers from the first data object
      const headers = Object.keys(data[0]);

      // Map data to rows
      const body = data.map(item => 
        headers.map(header => {
          const value = item[header];
          // Handle arrays, objects, null, undefined
          if (Array.isArray(value)) return value.join(', ');
          if (value === null || value === undefined) return '';
          if (typeof value === 'object') return JSON.stringify(value);
          return String(value);
        })
      );

      // Add title
      doc.setFontSize(18);
      doc.text(title, 14, 20);

      // Add table using autoTable
      autoTable(doc, {
        startY: 30,
        head: [headers],
        body: body,
        theme: 'grid',
        styles: { fontSize: 10 },
        headStyles: { fillColor: [66, 139, 202] },
      });

      // Save the PDF
      doc.save(filename);
    } catch (error) {
    //   console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <Quickbutton 
      iconname={<MdOutlineFileUpload />} 
      tag="Export as PDF" 
      onClickFunc={handleExport} 
    />
  );
};

export default ExportPdfButton;