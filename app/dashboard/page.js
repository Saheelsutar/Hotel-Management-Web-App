"use client";
import db from '@/utils/firestore';
import { useEffect, useState,Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { doc, updateDoc, collection, getDocs } from "firebase/firestore"; 
import { ClipLoader } from "react-spinners"; // Import the ClipLoader from react-spinners

function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const getRoomData = await getDocs(collection(db, "rooms"));
        const roomData = getRoomData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRooms(roomData);
      } catch (error) {
        console.error("Error fetching room data:", error);
      } finally {
        setLoading(false); // Stop loading when data is fetched
      }
    };
    fetchItems();
  }, []);

  const handleCheckIn = (roomId) => {
    router.push(`/checkin?roomId=${roomId}`);
  };

  const handleCheckOut = async (roomId) => {
    const roomRef = doc(db, "rooms", roomId);
    await updateDoc(roomRef, { Status: true });

    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, Status: true } : room
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {loading ? ( // Show the spinner while loading
          <div className="flex justify-center items-center h-full">
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          </div>
        ) : (
          <div className="overflow-x-auto transition-opacity duration-300 opacity-100">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Room Number</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Room Type</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Price per Night</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id} className="border-t">
                    <td className="py-3 px-4 text-sm text-gray-700">{room.roomNo}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{room.roomType}</td>
                    <td className={`py-3 px-4 text-sm ${room.Status ? 'text-green-500' : 'text-red-500'}`}>
                      {room.Status ? 'Available' : 'Occupied'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">₹{room['Price per Night']}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 space-x-2">
                      {room.Status ? (
                        <button
                          onClick={() => handleCheckIn(room.id)}
                          className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          Check-In
                        </button>
                      ) : (
                        <button
                          onClick={() => handleCheckOut(room.id)}
                          className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          Check-Out
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
