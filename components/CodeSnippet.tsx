'use client'

import { Button } from "@/app/src";
import { cn } from "@/app/src/utils/cn";
import React, { useEffect, useState, type JSX } from "react";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold, coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useTheme } from 'next-themes';

interface CodeSnippetProps {
  content?: {
    [key: string]: string
  };
  lang?: string;
  styles?: string;
  headerStyles?: string;
  bodyStyles?: string;
  children?: React.ReactNode
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  content = {},
  lang = "html",
  styles = "",
  headerStyles = "",
  bodyStyles = "",
  children,
}) => {
  const [copySuccess, setCopySuccess] = useState<boolean | null>(null);

  const handleCopyClick = (content: string) => {
    navigator.clipboard
      .writeText(content.trim())
      .then(() => setCopySuccess(true))
      .catch(() => setCopySuccess(false));

    // Reset copy success message after 2 seconds
    setTimeout(() => {
      setCopySuccess(null);
    }, 2000);
  };
  const [codeType, setCodeType] = useState(children ? 99 : 0)
  const [preview, setPreview] = useState(children ? true : false)

  return (
    <Code styles={cn(styles, "my-4 rounded-t-lg rounded-b-lg relative hover:shadow-md")}>
      <CodeHeader
        styles={cn(headerStyles, "flex items-center justify-between w-full gap-2 py-3 px-2 rounded-t-lg overflow-hidden")}>
        <div className="flex gap-2">
          {children && (
            <Button variant="outline" size="small"
              onClick={() => { setPreview(true); setCodeType(999) }}
              className={cn(
                'text-body-2 font-normal',
                preview === true ? 'bg-bg-light ' : '',
              )}
            >
              <span>Preview</span>
            </Button>
          )}
          {Object.keys(content).map((key, index) => (
            <Button variant="outline" size="small"
              key={key}
              onClick={() => { setPreview(false); setCodeType(index) }}
              className={cn(
                'text-body-2 font-normal',
                (!preview && codeType === index) ? 'bg-bg-light' : '',
              )}
            >
              <span>{key}</span>
            </Button>
          ))}
        </div>
        <Button variant="outline" size="small"
          onClick={() =>{
            if(!preview)
            handleCopyClick(Object.values(content)[codeType])}}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
          }
          iconClassName="text-body-2"
          className="text-body-2 cursor-pointer text-nowrap"
        >
          {
            copySuccess === null
              ? "Copy code"
              : copySuccess === true
                ? "Code copied"
                : "Failed to copy"
          }
        </Button>
      </CodeHeader>
      <CodeBody
        content={Object.values(content)[codeType]}
        language={lang}
        styles={cn(bodyStyles, "pt-1 px-4 pb-1 text-sm overflow-y-scroll !rounded-b-lg block")}
        children={children}
        preview={preview}
      />
    </Code>
  );
};

export default CodeSnippet;

interface CodeProps {
  content?: string;
  tagName?: keyof JSX.IntrinsicElements;
  languages?: string;
  styles?: string;
  children?: React.ReactNode
}

const Code: React.FC<CodeProps> = ({
  tagName = "pre",
  styles = "",
  children,
}) => {
  const CustomTag = tagName.toLowerCase() as keyof JSX.IntrinsicElements;

  return <CustomTag className={`${styles}`}>{children}</CustomTag>;
};

// * CodeHeader
interface CodeHeaderProps {
  tagName?: keyof JSX.IntrinsicElements;
  styles?: string;
  children?: React.ReactNode;
}
const CodeHeader: React.FC<CodeHeaderProps> = ({ tagName = "h4", styles = "", children }) => {
  const CustomTag = tagName.toLowerCase() as keyof JSX.IntrinsicElements;
  return <CustomTag className={`${styles}`}>{children}</CustomTag>;
};

// * CodeBody
interface CodeBodyProps {
  styles?: string;
  language?: string;
  content?: string;
  children?: React.ReactNode;
  preview?: boolean;
}

const CodeBody: React.FC<CodeBodyProps> = ({ styles = "", language, content = "", children, preview }) => {
  const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
      if (theme === 'dark') {
        setIsDarkMode(true)
      } else {
        setIsDarkMode(false)
      }
    }, [theme])
  return (
    <>
      {children && preview && <div className="w-full h-full bg-[#121c29] px-[40px] py-[20px] rounded-b-lg">{children}</div>}
      {!preview &&
        <div className="rounded-lg overflow-hidden border border-border bg-bg">
          <SyntaxHighlighter
            className={cn(styles)}
            language={language}
            style={isDarkMode ? coldarkDark : coldarkCold}
            customStyle={{
              maxHeight: "420px",
              borderRadius: "0px",
              paddingLeft: "40px",
              paddingBottom: "20px",
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "14px",
              lineHeight: "22px",
              letterSpacing: "-0.2px",
              background: "none",
            }}
          >
            {content.trim()}
          </SyntaxHighlighter>
        </div>}
    </>
  );
};