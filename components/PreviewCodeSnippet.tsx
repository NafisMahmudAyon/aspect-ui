import React from 'react';

interface PreviewCodeSnippetProps {
  content?: {
    [key: string]: string;
  };
  lang?: string;
  styles?: string;
  headerStyles?: string;
  bodyStyles?: string;
  children?: React.ReactNode;
}

const PreviewCodeSnippet: React.FC<PreviewCodeSnippetProps> = ({ children, content = {}, lang, styles, headerStyles, bodyStyles }) => {
  return (
    <div >
    </div>
  );
};

export default PreviewCodeSnippet;