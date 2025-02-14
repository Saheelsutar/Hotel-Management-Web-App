"use client"
import db from '@/utils/firestore';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { doc, updateDoc,addDoc,collection } from 'firebase/firestore';

function CheckIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roomId = searchParams.get('roomId');

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [aadharCard, setAadharCard] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update room status to 'Occupied' (false for boolean status)
    try {
      const roomRef = doc(db, 'rooms', roomId);
      await updateDoc(roomRef, {
        Status: false // Change the status to false (Occupied)
      });

      // You can process the form data here, e.g., send it to an API or update state
      console.log({
        firstName,
        middleName,
        lastName,
        phoneNumber,
        address,
        aadharCard,
        roomId
      });

      // Redirect to the dashboard or show a confirmation message after successful submission
      try {
        const docRef = await addDoc(collection(db, "CheckInCustomers"), {
          First_Name:firstName,
          Middle_Name:middleName,
          Last_Name:lastName,
          Phone_Number:phoneNumber,
          Address:address,
          Aadhar_Card:aadharCard,
          RoomID:roomId
        });
       
          
        
    } catch (e) {
        console.error("Error adding document: ", e);
    }
      alert('Check-in successful!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during check-in:', error);
      alert('Failed to check in. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Check-In to Room {roomId}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name</label>
            <input
              type="text"
              id="middleName"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows="3"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="aadharCard" className="block text-sm font-medium text-gray-700">Aadhaar Card Number</label>
            <input
              type="text"
              id="aadharCard"
              value={aadharCard}
              onChange={(e) => setAadharCard(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Check-In
          </button>
        </form>
      </div>
    </div>
  );
}

export default function CheckInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckIn />
    </Suspense>
  );
}
