
import AppCardSkeleton from '@/components/AppCardSkeleton';

const Loading = () => {
    return (
        <section className="w-full bg-gray-50 py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                
                {/* হেডার স্কেলিটন */}
                <div className="text-center mb-12 flex flex-col items-center gap-4">
                    <div className="skeleton h-8 w-32 rounded-full"></div>
                    <div className="skeleton h-12 w-64 rounded-lg"></div>
                </div>

                {/* 🔥 এখানেই জাদু! ৬টি কার্ডের স্কেলিটন */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <AppCardSkeleton key={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Loading;