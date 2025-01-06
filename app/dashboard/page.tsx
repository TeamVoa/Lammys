'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { UserBookings } from './components/UserBookings';
import { UserProfile } from './components/UserProfile';
import { OrderHistory } from './components/OrderHistory';

export default function Dashboard() {
  const router = useRouter();
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else if (isAdmin) {
      router.push('/admindash/dashboard');
    }
  }, [user, isAdmin, router]);

  if (isAdmin) {
    return null; // Will be redirected by useEffect
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Please log in to access your dashboard
          </h2>
          <p className="mt-2 text-gray-600">
            You will be redirected to the login page...
          </p>
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user.email}
            </h1>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign out
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UserProfile user={user} />
            <UserBookings userId={user.id} />
            <OrderHistory userId={user.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
