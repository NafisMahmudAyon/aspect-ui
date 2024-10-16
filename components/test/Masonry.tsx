import { Masonry } from '@/app/src/components/Masonry';
import React from 'react';

const MasonryDemo: React.FC = () => {
  const items = [
    { id: 1, height: 100, color: 'bg-red-500' },
    { id: 7, height: 210, color: 'bg-indigo-500' },
    { id: 2, height: 150, color: 'bg-blue-500' },
    { id: 3, height: 200, color: 'bg-green-500' },
    { id: 5, height: 180, color: 'bg-purple-500' },
    { id: 6, height: 130, color: 'bg-pink-500' },
    { id: 8, height: 160, color: 'bg-gray-500' },
    { id: 4, height: 120, color: 'bg-yellow-500' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Masonry Layout Example</h1>
      <Masonry columnCount={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={2}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`w-full ${item.color} rounded-md border border-dashed flex items-center justify-center`}
            style={{ height: `${item.height}px` }}
          >
            Item {item.id}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryDemo;