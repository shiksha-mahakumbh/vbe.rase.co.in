'use client';
import { useState, useEffect } from 'react';
import Footer from '../Component/Footer'
import HomePage from '../Component/HomePage'
import Notification from '../Component/Notification'

export default function Home() {
  return (
   <div className = "min-h-screen">
  
<HomePage/>
<Footer/>
   </div>
  );
}
