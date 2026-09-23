import InstallButton from '@/components/InstallButton';
import { iApp } from '@/types/appTypes';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FiDownload,
  FiStar,
  FiArrowLeft,
  FiShare2,
  FiHeart,
} from 'react-icons/fi';

interface AppDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getApps = async (): Promise<iApp[]> => {
  const res = await fetch('http://localhost:3000/data.json');
  if (!res.ok) throw new Error('Failed to fetch apps');
  return res.json();
};

const AppDetailsPage = async ({ params }: AppDetailsPageProps) => {
  const { id } = await params;
  const apps = await getApps();
  const app = apps.find((a) => a.id === Number(id));

  if (!app) return notFound();

  // Calculate rating distribution total for percentage bars
  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="btn btn-ghost btn-sm gap-2 mb-4 text-base-content/70 hover:text-base-content"
        >
          <FiArrowLeft /> Back to Apps
        </Link>

        {/* Hero Card */}
        <div className="card bg-base-100 shadow-xl rounded-3xl overflow-hidden">
          {/* Gradient Banner */}
          <div className="h-32 " />

          <div className="card-body -mt-16 relative">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
              {/* App Icon */}
              <div className="avatar">
                <div className="w-32 h-32 rounded-3xl ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
                  <Image
                    src={app.image}
                    alt={app.title}
                    width={128}
                    height={128}
                    className="rounded-3xl object-cover"
                  />
                </div>
              </div>

              {/* Title & Meta */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-base-content">
                  {app.title}
                </h1>
                <p className="text-primary font-medium mt-1">
                  {app.companyName}
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-3 text-sm text-base-content/70">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-warning fill-warning" />
                    <span className="font-bold text-base-content">
                      {app.ratingAvg}
                    </span>
                    <span>({app.reviews} reviews)</span>
                  </div>
                  <div className="divider divider-horizontal mx-0" />
                  <div className="flex items-center gap-1">
                    <FiDownload />
                    <span>{app.downloads} downloads</span>
                  </div>
                  <div className="divider divider-horizontal mx-0" />
                  <div>{(app.size / 1024 / 1024).toFixed(1)} MB</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="btn btn-circle btn-ghost">
                  <FiHeart size={20} />
                </button>
                <button className="btn btn-circle btn-ghost">
                  <FiShare2 size={20} />
                </button>
                <InstallButton app={app}></InstallButton>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Description */}
          <div className="lg:col-span-2 card bg-base-100 shadow-xl rounded-3xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-2">About this app</h2>
              <p className="text-base-content/80 leading-relaxed whitespace-pre-line">
                {app.description}
              </p>

              {/* Info Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                <div className="bg-base-200 rounded-2xl p-4">
                  <p className="text-xs uppercase text-base-content/60 font-semibold">
                    Size
                  </p>
                  <p className="text-lg font-bold mt-1">
                    {(app.size / 1024 / 1024).toFixed(1)} MB
                  </p>
                </div>
                <div className="bg-base-200 rounded-2xl p-4">
                  <p className="text-xs uppercase text-base-content/60 font-semibold">
                    Downloads
                  </p>
                  <p className="text-lg font-bold mt-1">{app.downloads}</p>
                </div>
                <div className="bg-base-200 rounded-2xl p-4">
                  <p className="text-xs uppercase text-base-content/60 font-semibold">
                    Reviews
                  </p>
                  <p className="text-lg font-bold mt-1">{app.reviews}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ratings Breakdown */}
          <div className="card bg-base-100 shadow-xl rounded-3xl">
            <div className="card-body">
              <h2 className="card-title text-xl mb-2">Ratings</h2>

              {/* Big Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-primary">
                  {app.ratingAvg}
                </div>
                <div>
                  <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <input
                        key={i}
                        type="radio"
                        className="mask mask-star-2 bg-warning"
                        checked={Math.round(app.ratingAvg) === i}
                        readOnly
                      />
                    ))}
                  </div>
                  <p className="text-xs text-base-content/60 mt-1">
                    {totalRatings.toLocaleString()} total ratings
                  </p>
                </div>
              </div>

              {/* Rating Bars */}
              <div className="space-y-2">
                {app.ratings.map((rating) => {
                  const percent =
                    totalRatings > 0 ? (rating.count / totalRatings) * 100 : 0;
                  return (
                    <div key={rating.name} className="flex items-center gap-3">
                      <span className="text-xs w-6 text-right text-base-content/70">
                        {rating.name}
                      </span>
                      <progress
                        className="progress progress-primary flex-1"
                        value={percent}
                        max="100"
                      />
                      <span className="text-xs w-10 text-base-content/60">
                        {rating.count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Apps (Optional Placeholder) */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {apps
              .filter((a) => a.id !== app.id)
              .slice(0, 4)
              .map((other) => (
                <Link
                  key={other.id}
                  href={`/apps/${other.id}`}
                  className="card bg-base-100 hover:bg-base-300 transition-colors shadow-md rounded-2xl"
                >
                  <div className="card-body items-center text-center p-4">
                    <Image
                      src={other.image}
                      alt={other.title}
                      width={64}
                      height={64}
                      className="rounded-2xl"
                    />
                    <h3 className="font-semibold text-sm mt-2 line-clamp-1">
                      {other.title}
                    </h3>
                    <p className="text-xs text-base-content/60 line-clamp-1">
                      {other.companyName}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;