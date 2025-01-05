// src/pages/AdminDashboard.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons for hamburger and close icons
import { useNavigate } from 'react-router-dom';
import { images } from "../../constants";
import HomeTab from '../../components/admin/Home';
import AboutTab from '../../components/admin/About';
import MainSermon from '../../components/admin/Sermon/MainSermon';
import MainEvent from '../../components/admin/Events/MainEvent';
import MainBlog from '../../components/admin/Blog/MainBlog';
import MinistryTab from '../../components/admin/Ministry';
import ContactTab from '../../components/admin/Contact';
import {logoutUser} from '../../utils/api'


const tabs = [
  'Home',
  'About',
  'Events',
  'Sermons',
  'Online Giving',
  'Ministries',
  'Blog',
  'Contact',
];

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const adminUsername = "Admin"; // Replace with dynamic username fetching logic if needed
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      // Navigate to login page after successful logout
      navigate('/admin');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-0 bg-slate-800 text-white flex-shrink-0 transition-transform duration-300 md:relative md:translate-x-0 md:w-64`}
      >
        <div className="flex flex-col items-center justify-between p-4 text-2xl font-bold text-center font-headingFont my-4">
          <img src={images.Logo} alt="Logo" className="h-[40px] mr-2 mb-4" /> Admin Panel
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-white"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsSidebarOpen(false); // Close the sidebar when a tab is clicked
              }}
              className={`block w-full px-4 py-2 text-left font-linkFont ${
                activeTab === tab
                  ? 'bg-white text-black'
                  : 'text-gray-200 hover:bg-white hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-20 overflow-y-scroll">
        <header className="flex justify-between items-center border-b pb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {greeting}, {adminUsername}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-white bg-slate-800 p-2 rounded-md"
            >
              <FaBars />
            </button>
            {/* Logout Button */}
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>
        <div className="mt-6">
          {activeTab === 'Home' && <HomeTab/>}
          {activeTab === 'About' && <AboutTab/>}
          {activeTab === 'Events' && <MainEvent/>}
          {activeTab === 'Sermons' && <MainSermon/>}
          {activeTab === 'Online Giving' && <div>Coming soon...</div>}
          {activeTab === 'Ministries' && <MinistryTab/>}
          {activeTab === 'Blog' && <MainBlog />}
          {activeTab === 'Contact' && <ContactTab/>}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
