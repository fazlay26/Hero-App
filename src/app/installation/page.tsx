'use client'
import { installAppContext } from '@/contexts/InstallAppProvider';
import React, { useContext } from 'react';

const InstallationPage = () => {
  const context = useContext(installAppContext);
  if (!context) {
    throw new Error("MyComponent must be used within InstallAppProvider");
  }
  const { installApp } = context;

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
          Installed Apps
        </h1>
        <p className="text-base-content/60 mt-1">
          Total <span className="font-semibold text-primary">{installApp.length}</span> apps installed
        </p>
      </div>

      {/* Empty state */}
      {installApp.length === 0 ? (
        <div className="max-w-6xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="card-title text-xl">No apps installed yet</h3>
              <p className="text-base-content/60">
                Install your first app to see it here.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {installApp.map((app) => (
            <div
              key={app.id}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-base-300"
            >
              {/* Image */}
              <figure className="px-6 pt-6">
                <img
                  src={app.image}
                  alt={app.title}
                  className="rounded-2xl h-40 w-40 object-cover bg-base-200"
                />
              </figure>

              <div className="card-body items-center text-center">
                {/* Title + Company */}
                <h2 className="card-title text-lg font-bold line-clamp-1">
                  {app.title}
                </h2>
                <p className="text-sm text-base-content/60 -mt-1">
                  {app.companyName}
                </p>

                {/* Stats Row */}
                <div className="flex items-center justify-center gap-3 mt-2 flex-wrap">
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-warning">⭐</span>
                    <span className="font-semibold">{app.ratingAvg}</span>
                  </div>
                  <div className="divider divider-horizontal mx-0"></div>
                  <div className="flex items-center gap-1 text-sm">
                    <span>⬇️</span>
                    <span className="font-semibold">{app.downloads}</span>
                  </div>
                  <div className="divider divider-horizontal mx-0"></div>
                  <div className="flex items-center gap-1 text-sm">
                    <span>📦</span>
                    <span className="font-semibold">{app.size} MB</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-base-content/70 line-clamp-2 mt-2">
                  {app.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <div className="badge badge-primary badge-outline">
                    {app.reviews} Reviews
                  </div>
                  <div className="badge badge-secondary badge-outline">
                    {app.ratings.length} Ratings
                  </div>
                </div>

                {/* Action */}
                <div className="card-actions justify-center w-full mt-4">
                  <button className="btn btn-primary btn-sm flex-1">
                    Open
                  </button>
                  <button className="btn btn-ghost btn-sm">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstallationPage;