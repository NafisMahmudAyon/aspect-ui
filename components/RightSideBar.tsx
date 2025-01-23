'use client'
import { Typography } from '@/app/src';
import { cn } from '@/app/src/utils/cn';
import React, { useEffect, useState } from 'react';

interface RightSideBarItem {
  id: string;
  title: string;
}

interface RightSideBarProps {
  children?: React.ReactNode;
  id?: string;
  data?: RightSideBarItem[];
}

const RightSideBar: React.FC<RightSideBarProps> = ({ id = "" }) => {
  const [data, setData] = useState<RightSideBarItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Fetch all elements with the class 'section-title'
    const sectionTitles = document.querySelectorAll('.section-title');
    const newData: RightSideBarItem[] = Array.from(sectionTitles).map((element, index) => ({
      id: element.id || `section-${index}`,
      title: (element.textContent || 'Untitled').replace('#', ''),
    }));
    setData(newData);

    // Set the active ID based on the current URL hash
    const currentHash = window.location.hash.substring(1); // Remove the '#' from the hash
    setActiveId(currentHash);
  }, []);

  const handleClick = (id: string) => {
    setActiveId(id);
  };

  return (
    <aside id={id} className="hidden h-[calc(100vh-100px)] lg:col-span-3 lg:block xl:col-span-2 pt-2 border-slate-950 dark:border-slate-300/60 pr-5 sticky top-[80px]">
      <Typography variant='h4' className="text-lg font-bold pt-3 pl-3 pb-4">ON THIS PAGE</Typography>
      <div className="border-l border-l-primary-100 dark:border-l-primary-800">
        {data.map((item) => (
          <a
            key={item.id}
            className={cn("-ml-px text-sm my-2 block px-2 pl-4 border-l border-l-transparent py-1 border-gray-300 dark:border-gray-500   transition-all duration-300 hover:border-l hover:border-primary-500 dark:hover:border-white",
              item.id === activeId ? "border-primary-500! dark:border-white!" : ""
            )}
            href={`#${item.id}`}
            onClick={() => handleClick(item.id)}
          >
            {item.title}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default RightSideBar;