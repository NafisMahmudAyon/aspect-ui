'use client'

import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from "@/app/src";
import { cn } from "@/app/src/utils/cn";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import React, { useEffect, useState, type JSX } from "react";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold, coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Check, Copy } from 'lucide-react';
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
  height?: number
  showCode?: boolean
}

const CodeSnippets: React.FC<CodeSnippetProps> = ({
  content = {},
  lang = "html",
  styles = "",
  headerStyles = "",
  bodyStyles = "",
  children,
  url,
  height = 400,
  showCode = true
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
  const [codeType, setCodeType] = useState(999)
  const [preview, setPreview] = useState((children || url) ? true : false)

  return (
    <Code styles={cn(styles, "my-4 rounded-t-lg rounded-b-lg relative hover:shadow-md")}>
      <CodeHeader
        styles={cn(headerStyles, "flex items-center justify-between w-full gap-2 py-3 px-2 rounded-t-lg overflow-hidden", !showCode && "border border-border rounded-lg mb-4")}>
        <div className="flex justify-between gap-1.5 overflow-x-auto no-scrollbar">
          {(children || url) && showCode && (
            <Button variant="outline" size="small"
              onClick={() => { setPreview(true); setCodeType(999) }}
              className={cn(
                'text-body-2 font-normal',
                preview === true ? 'bg-bg-light' : '',
              )}
            >
              <span>Preview</span>
            </Button>
          )}

          {!showCode && (
            <div className="flex items-center gap-2 ml-6">
              <span className="w-3.5 h-3.5 bg-red-500 rounded-full inline-block" />
              <span className="w-3.5 h-3.5 bg-yellow-500 rounded-full inline-block" />
              <span className="w-3.5 h-3.5 bg-green-500 rounded-full inline-block" />
            </div>
          )}

          {showCode && Object.keys(content).map((key, index) => (
            <React.Fragment key={index}>
              <Button variant="outline" size="small"
                onClick={() => { setPreview(false); setCodeType(index) }}
                className={cn(
                  'hidden md:inline-flex text-body-2 font-normal ',
                  (!preview && codeType === index) ? 'bg-bg-light' : '',
                )}
              >
                <span>{key}</span>
              </Button>
            </React.Fragment>
          ))}
          <div className="inline-flex md:hidden">
            <Dropdown>
              <DropdownAction>
                {codeType === 999 ? "Code" : Object.keys(content)[codeType]}
              </DropdownAction>
              <DropdownContent>
                <DropdownList>
                  {Object.keys(content).map((key, index) => (
                    <DropdownItem key={index} isSelected={codeType === index} onClick={() => { setPreview(false); setCodeType(index) }}>
                      {key}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        </div>
        <div className="flex gap-2 flex-1 justify-end">
          <div className={cn('gap-2 items-center hidden', preview ? ' md:flex' : 'hidden')}>
            <Button variant="outline" size="small" className={`cursor-pointer px-2 ${width == "mobile" && "bg-bg-light"} transition-colors duration-300 ease-in-out `} onClick={() => setWidth('mobile')}><Smartphone className="size-5" /></Button>
            <Button variant="outline" size="small" className={`cursor-pointer px-2 ${width == "tablet" && "bg-bg-light"} transition-colors duration-300 ease-in-out `} onClick={() => setWidth('tablet')}><Tablet className="size-5" /></Button>
            <Button variant="outline" size="small" className={`cursor-pointer px-2 ${width == "desktop" && "bg-bg-light"} transition-colors duration-300 ease-in-out `} onClick={() => setWidth('desktop')}><Monitor className="size-5" /></Button>
          </div>
          {showCode && <Button variant="outline" size="small"
            onClick={() => {
              if (!preview)
                handleCopyClick(Object.values(content)[codeType])
            }}
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
          </Button>}
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
        height={height}
        showCode={showCode}
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
  height?: number
  showCode?: boolean
}

const CodeBody: React.FC<CodeBodyProps> = ({ styles = "", language, content = "", children, preview, url, width, height = 400, showCode = true }) => {
  // const iframeRef = useRef(null);
  // const [iframeHeight, setIframeHeight] = useState(500); // default height
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExternal, setIsExternal] = useState(false)
  useEffect(() => {
    if (theme === 'dark') {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [theme])
  useEffect(() => {
    if (url)
      setIsExternal(url[0] == '/' ? false : true)
  }, [url])

  return (
    <>
      {children && preview && <div className="w-full h-full px-[40px] py-[20px] rounded-b-lg">{children}</div>}
      {url && preview && (
        <>
          <div className="py-[20px] border border-border rounded-lg px-[20px] lg:px-[30px] xl:px-[40px] overflow-auto">
            <iframe style={{ height: `${height}px` }} className={` ${width === 'mobile' ? "w-full sm:w-[460px]" : width === 'tablet' ? "w-full md:w-[600px] lg:w-[680px] xl:w-[704px]" : "w-full"} mx-auto transition-all duration-300 ease-in-out`}
              // src="https://pp01.nafisbd.com/examples/hero"
              src={isExternal ? url : process.env.NEXT_PUBLIC_BASE_URL ?
                `${process.env.NEXT_PUBLIC_BASE_URL}${url}` :
                `/${url}`
              }
            />
          </div>
        </>
      )}
      {!preview && showCode &&
        <div className="rounded-lg overflow-hidden border border-border bg-bg">
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

interface CLICodeBlockProps {
  id: number;
  isPro?: boolean;
  description?: string;
}

export const CLICodeBlock: React.FC<CLICodeBlockProps> = ({
  id,
  isPro = false
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (id: number, isPro: boolean) => {
    try {
      await navigator.clipboard.writeText(`npx -p aspect-ui@latest add https://aspect-ui.vercel.app/api/get/${id}${isPro && "?api-key=*****"}`);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <div className="relative rounded-lg shadow-lg border border-border mt-14">
      <div className='absolute bottom-full left-4 px-3 py-1 rounded-t-md border  border-border'>CLI</div>
      <div className="p-4 mr-12 flex items-center gap-2">
        {<span className="text-green-400">$ </span>}
        <pre className={`text-sm overflow-x-auto no-scrollbar`}>
          <code className="font-mono">
            npx -p aspect-ui@latest add https://aspect-ui.vercel.app/api/get/{id}{isPro && "?api-key=*****"}
          </code>
        </pre>
      </div>
      <Button variant="outline"
        onClick={() => handleCopy(id, isPro)}
        className="absolute top-1/2 -translate-y-1/2 right-4 p-2 rounded-md "
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check size={16} className="text-green-400" />
        ) : (
          <Copy size={16} className="text-gray-400" />
        )}
      </Button>
    </div>
  )
}