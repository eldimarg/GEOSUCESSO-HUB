import React, { useState } from 'react';
import Sidebar from "./components/Sidebar/Sidebar"; 
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import ReviewsView from './components/ReviewsView';
import PostsView from './components/PostsView';
import GeoSEOView from './components/GeoSEOView';
import AnalyticsView from './components/AnalyticsView';
import SettingsView from './components/SettingsView';
import type { ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'reviews':
        return <ReviewsView />;
      case 'posts':
        return <PostsView />;
      case 'geoseo':
        return <GeoSEOView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-900">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
