// import { Sparkles, Star } from 'lucide-react';
import React from 'react'

const ComingSoon = () => {
  return (
    <div className="bg-gradient-to-br from-primary-100 to-primary-300 dark:from-primary-900 dark:to-primary-800 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto text-white my-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary-900/20 dark:bg-primary-100/20 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2  bg-gradient-to-r from-indigo-800 to-purple-800 dark:from-indigo-400 dark:to-purple-400 rounded-full animate-pulse"></span>
              <span className="text-primary-700 dark:text-primary-200 text-sm">Coming Soon</span>
            </div>
            <h2 className="!text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-purple-800 dark:from-indigo-400 dark:to-purple-400">
              Working on this documentation
            </h2>
            <p className="text-primary-700 dark:text-primary-300 text-lg">We are currently working on this documentation. Please check back
            later for updates.</p>
          </div>
          {/* <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-slate-300">Modern and intuitive design</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-slate-300">Enhanced user experience</span>
            </div>
          </div> */}
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={onNotifyMe}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all flex items-center"
            >
              <Bell className="w-4 h-4 mr-2" />
              Get Notified
            </button> */}
            <div className="text-primary-700 dark:text-primary-300 text-sm">
              Launch Date: <span className="text-indigo-600 dark:text-indigo-300">Coming Soon</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-500 dark:to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
          <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 bg-slate-700 rounded-full w-full animate-pulse" style={{
                  animationDelay: `${i * 200}ms`,
                  width: `${100 - (i * 10)}%`
                }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon