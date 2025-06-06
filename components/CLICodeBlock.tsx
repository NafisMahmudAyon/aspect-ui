
import React, { useState } from 'react';
import { Copy, Check, Terminal, Code as CodeIcon, Zap } from 'lucide-react';

interface CLICodeBlockProps {
  command: string;
  description?: string;
  variant?: 'terminal' | 'minimal' | 'neon' | 'card';
}

const CLICodeBlock: React.FC<CLICodeBlockProps> = ({
  command,
  description,
  variant = 'terminal'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Terminal style (original)
  if (variant === 'terminal') {
    return (
      <Code className="w-full max-w-4xl mx-auto">
        {description && (
          <p className="text-gray-300 mb-4 text-center text-lg">{description}</p>
        )}
        <div className="relative group">
          <div className="bg-gray-900 rounded-lg  border border-gray-700 overflow-hidden backdrop-blur-sm">
            <div className="flex items-center justify-between px-4 py-3 bg-primary-100 dark:bg-primary-900 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center ml-4 text-gray-400">
                  <Terminal size={16} className="mr-2" />
                  <span className="text-sm font-medium">Terminal</span>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition-all duration-200 text-gray-300 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-400" />
                    <span className="text-sm text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-green-400 select-none">$</span>
                <div className="flex-1 break-all">
                  {command}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl transform scale-105"></div>
        </div>
      </Code>
    );
  }

  // Minimal style
  if (variant === 'minimal') {
    return (
      <div className="w-full max-w-4xl mx-auto">
        {description && (
          <p className="text-gray-300 mb-4 text-center text-lg">{description}</p>
        )}
        <div className="relative group">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-600/50 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-700/30 border-b border-gray-600/30">
              <div className="flex items-center text-gray-400">
                <Code size={16} className="mr-2" />
                <span className="text-sm">Command</span>
              </div>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded hover:bg-gray-600/50 transition-colors text-gray-400 hover:text-white"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
            <div className="p-4 font-mono text-sm">
              <code className="text-gray-200 break-all">{command}</code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Neon style
  if (variant === 'neon') {
    return (
      <div className="w-full max-w-4xl mx-auto">
        {description && (
          <p className="text-cyan-300 mb-4 text-center text-lg font-medium">{description}</p>
        )}
        <div className="relative group">
          <div className="bg-black rounded-lg border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-cyan-900/20 border-b border-cyan-500/30">
              <div className="flex items-center text-cyan-400">
                <Zap size={16} className="mr-2" />
                <span className="text-sm font-bold">NEON TERMINAL</span>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-200 text-cyan-300 hover:text-cyan-100 text-sm font-medium"
              >
                {copied ? "COPIED!" : "COPY"}
              </button>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-cyan-400 select-none font-bold">➤</span>
                <code className="text-cyan-100 break-all font-medium">{command}</code>
              </div>
              <div className="flex items-center mt-3">
                <span className="text-cyan-400 select-none font-bold">➤</span>
                <div className="ml-2 w-3 h-5 bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-lg bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
        </div>
      </div>
    );
  }

  // Card style
  if (variant === 'card') {
    return (
      <div className="w-full max-w-4xl mx-auto">
        {description && (
          <p className="text-gray-300 mb-4 text-center text-lg">{description}</p>
        )}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Installation Command</h3>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-white border border-white/20"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-400" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
              <code className="text-gray-100 break-all">{command}</code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CLICodeBlock;