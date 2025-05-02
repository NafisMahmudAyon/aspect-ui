'use client'

import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from "@/app/src";
import { cn } from "@/app/src/utils/cn";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import React, { useEffect, useRef, useState, type JSX } from "react";

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
  url?: string
}

const CodeSnippets: React.FC<CodeSnippetProps> = ({
  content = {},
  lang = "html",
  styles = "",
  headerStyles = "",
  bodyStyles = "",
  children,
  url,
}) => {
  const [copySuccess, setCopySuccess] = useState<boolean | null>(null);
  const [width, setWidth] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

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
  const [preview, setPreview] = useState((children || url) ? true : false)

  return (
    <Code styles={cn(styles, "my-4 rounded-t-lg rounded-b-lg relative")}>
      <CodeHeader
        styles={cn(headerStyles, "flex items-center justify-between w-full bg-primary-100 dark:bg-primary-900 py-1 px-2 text-white rounded-t-lg hover:bg-primary-100 dark:hover:bg-primary-900")}>
        <div className="">
          {(children || url) && (
            <Button
              onClick={() => { setPreview(true); setCodeType(999) }}
              className={cn(
                'px-4 py-2.5 text-body2 font-normal border-b-2 rounded-none',
                preview === true ? 'border-b-primary-900 dark:border-b-primary-100 ' : 'border-b-transparent dark:border-b-transparent',
              )}
            >
              <span>Preview</span>
            </Button>
          )}
          {Object.keys(content).map((key, index) => (
            <>
              <Button
                key={index}
                onClick={() => { setPreview(false); setCodeType(index) }}
                className={cn(
                  'hidden md:inline-flex px-4 py-2.5 text-body2 font-normal border-b-2 rounded-none',
                  (!preview && codeType === index) ? 'border-b-primary-900 dark:border-b-primary-100 ' : 'border-b-transparent dark:border-b-transparent',
                )}
              >
                <span>{key}</span>
              </Button>
            </>
          ))}
          <div className="inline-flex md:hidden">
            <Dropdown>
              <DropdownAction>
                Code
              </DropdownAction>
              <DropdownContent>
                <DropdownList>
                  {Object.keys(content).map((key, index) => (
                    <DropdownItem key={index} onClick={() => { setPreview(false); setCodeType(index) }}>
                      {key}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        </div>
        <div className="flex gap-2">
          <div className={cn('gap-2 items-center hidden', preview ? ' md:flex' : 'hidden')}>
            <button className={`py-0.5 px-1 cursor-pointer border rounded-md border-gray-300/30 ${width == "mobile" ? "bg-gray-700 dark:bg-gray-200 text-inherit dark:text-primary-800" : "bg-gray-500/50 dark:bg-gray-200/30"} transition-colors duration-300 ease-in-out `} onClick={() => setWidth('mobile')}><Smartphone className="size-5" /></button>
            <button className={`py-0.5 px-1 cursor-pointer border rounded-md border-gray-300/30 bg-gray-200/30 ${width == "tablet" ? "bg-gray-700 dark:bg-gray-200 text-inherit dark:text-primary-800" : "bg-gray-500/50 dark:bg-gray-200/30"} transition-colors duration-300 ease-in-out `} onClick={() => setWidth('tablet')}><Tablet className="size-5" /></button>
            <button className={`py-0.5 px-1 cursor-pointer border rounded-md border-gray-300/30 bg-gray-200/30 ${width == "desktop" ? "bg-gray-700 dark:bg-gray-200 text-inherit dark:text-primary-800" : "bg-gray-500/50 dark:bg-gray-200/30"} transition-colors duration-300 ease-in-out `} onClick={() => setWidth('desktop')}><Monitor className="size-5" /></button>
          </div>
          <Button
            onClick={() => {
              if (!preview)
                handleCopyClick(Object.values(content)[codeType])
            }}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
            }
            iconClassName="text-body2"
            className="p-2 text-body2 rounded-none border-l-0 pr-4 cursor-pointer"
          >
            {
              copySuccess === null
                ? "Copy code"
                : copySuccess === true
                  ? "Code copied"
                  : "Failed to copy"
            }
          </Button>
        </div>
      </CodeHeader>
      <CodeBody
        content={Object.values(content)[codeType]}
        language={lang}
        styles={cn(bodyStyles, "pt-1 px-4 pb-1 text-sm overflow-y-scroll !rounded-b-lg block")}
        children={children}
        url={url}
        preview={preview}
        width={width}
      />
    </Code>
  );
};

export default CodeSnippets;

interface CodeProps {
  content?: string;
  tagName?: keyof JSX.IntrinsicElements;
  languages?: string;
  styles?: string;
  children?: React.ReactNode
}

const Code: React.FC<CodeProps> = ({
  tagName = "div",
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
  url?: string
  width?: 'mobile' | 'tablet' | 'desktop'
}

const CodeBody: React.FC<CodeBodyProps> = ({ styles = "", language, content = "", children, preview, url, width }) => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(500); // default height

  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (theme === 'dark') {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [theme])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'resize-iframe' && event.data.height) {
        setIframeHeight(event.data.height);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  // const iframe = document.querySelector('iframe');

  // if (iframe) iframe.onload = () => {
  //   const iframeDoc = iframe?.contentDocument || iframe?.contentWindow?.document;
  //   if (iframeDoc) iframeDoc.body.style.backgroundColor = 'transparent';
  // };
  useEffect(() => {
    const iframe = document.querySelector("iframe");

    if (iframe) {
      iframe.onload = () => {
        try {
          // Access the iframe's document to adjust height dynamically
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc && iframeDoc.body) {
            iframe.style.height = iframeDoc.body.scrollHeight + "px";
          }
        } catch (error) {
          console.warn("Can't access iframe content due to cross-origin restrictions", error);
        }
      };
    }
  }, []);
  return (
    <>
      {children && preview && <div className="w-full h-full bg-[#121c29] px-[40px] py-[20px] rounded-b-lg">{children}</div>}
      {url && preview && (
        <>
          <div className="py-[20px] bg-[#121c29] rounded-b-lg px-[20px] lg:px-[30px] xl:px-[40px] overflow-auto">
            <iframe ref={iframeRef} style={{ height: `${iframeHeight}px` }} className={` ${width === 'mobile' ? "w-full sm:w-[460px]" : width === 'tablet' ? "w-full md:w-[600px] lg:w-[680px] xl:w-[704px]" : "w-full"} mx-auto transition-all duration-300 ease-in-out `}
              // src="http://localhost:3000/examples/components/accordion/default-accordion"
              src={process.env.NEXT_PUBLIC_BASE_URL ?
                `${process.env.NEXT_PUBLIC_BASE_URL}${url}` :
                `/${url}`
              }
            />
          </div>
        </>
      )}
      {!preview &&
        <div className="rounded-b-lg overflow-hidden bg-primary-50 dark:bg-[#121c29] ">
          <SyntaxHighlighter
            className={cn(
              styles
            )}
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