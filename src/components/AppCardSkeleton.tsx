// AppCardSkeleton.tsx (এটি আগের মতোই থাকবে)
import React from 'react';

const AppCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4">
            {/* Image Skeleton */}
            <div className="flex items-start gap-4">
                <div className="skeleton w-16 h-16 rounded-xl flex-shrink-0"></div>
                <div className="flex flex-col flex-1 gap-2">
                    <div className="skeleton h-5 w-3/4 rounded-md"></div>
                    <div className="skeleton h-4 w-1/2 rounded-md"></div>
                    <div className="skeleton h-5 w-12 rounded-md"></div>
                </div>
            </div>
            {/* Description */}
            <div className="skeleton h-4 w-full rounded-md"></div>
            <div className="skeleton h-4 w-5/6 rounded-md"></div>
            {/* Bottom */}
            <div className="flex justify-between mt-auto pt-4 border-t">
                <div className="skeleton h-4 w-12 rounded-md"></div>
                <div className="skeleton h-9 w-20 rounded-lg"></div>
            </div>
        </div>
    );
};

export default AppCardSkeleton;