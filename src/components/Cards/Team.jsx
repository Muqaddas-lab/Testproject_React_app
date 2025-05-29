import React from 'react';
import Header from "@/components/Header/Header"; 
import RowTeam from "@/components/layout/RowTeam"; 

function Team() {
  return (
    <div className='flex flex-wrap justify-center gap-10 m-4'>

      {/*  Card 1 - Liverpool vs Man City */}
      <div className='max-w-[330px] w-full text-black'>
        <div className='flex flex-col'>
          <div className='bg-purple-900 relative h-[190px]' style={{ borderRadius: '20px 20px 0px 0px' }}>
            <div className='pl-3 flex absolute items-center gap-3 bottom-[40px]'>
              <img src='/red-shirt.jpeg' alt='Red Shirt' className='w-[100px] h-[100px] rounded-full object-cover bg-white p-2' />
               <p className='text-white text-xl font-bold'>vs</p>
              <img src='/blue_shirt.jpg' alt='blue shirt' className='w-[100px] h-[100px] rounded-full object-cover bg-white p-2' />
            </div>
          </div>
          <div className='bg-white' style={{ borderRadius: '0px 0px 20px 20px' }}>
            <div className='flex flex-col p-3 mt-[50px]'>
              <p><span className='bg-blue-300 rounded-2xl py-[2px] px-[10px] text-[14px]'>Premier League</span></p>
              <h3 className='text-[18px]'>Liverpool vs Man City</h3>
              <span>📍 Anfield Stadium</span>
              <div className='flex gap-2 mt-2'>
                <span>📅 Thu 07 Dec</span>
                <span>🕒 07:00 PM</span>
              </div>
              <div className='flex items-center justify-between mt-3'>
                <h3><b>$399</b></h3>
                <button className='bg-purple-900 text-white py-1 px-3 rounded-lg'>Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2  */}
      <div className='max-w-[330px] w-full text-black'>
        <div className='flex flex-col'>
          <div className='bg-red-800 relative h-[190px]' style={{ borderRadius: '20px 20px 0px 0px' }}>
            <div className='pl-3 flex absolute items-center gap-3 bottom-[40px]'>
              <img src='/red-shirt.jpeg' alt='Chelsea' className='w-[100px] h-[100px] rounded-full object-cover bg-white p-2' />
              <p className='text-white text-xl font-bold'>vs</p>
              <img src='/blue_shirt.jpg' alt='Man Utd' className='w-[100px] h-[100px] rounded-full object-cover bg-white p-2' />
            </div>
          </div>
          <div className='bg-white' style={{ borderRadius: '0px 0px 20px 20px' }}>
            <div className='flex flex-col p-3 mt-[50px]'>
              <p><span className='bg-red-300 rounded-2xl py-[2px] px-[10px] text-[14px]'>Premier League</span></p>
              <h3 className='text-[18px]'>Chelsea vs Man United</h3>
              <span>📍 Old Trafford Stadium</span>
              <div className='flex gap-2 mt-2'>
                <span>📅 Fri 08 Dec</span>
                <span>🕒 08:00 PM</span>
              </div>
              <div className='flex items-center justify-between mt-3'>
                <h3><b>$450</b></h3>
                <button className='bg-red-500 text-white py-1 px-3 rounded-lg'>Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🟢 Card 3 - Arsenal vs Tottenham */}
      <div className='max-w-[330px] w-full text-black'>
        <div className='flex flex-col'>
          <div className='bg-green-800 relative h-[190px]' style={{ borderRadius: '20px 20px 0px 0px' }}>
            <div className='pl-3 flex absolute items-center gap-3 bottom-[40px]'>
              <img src='/red-shirt.jpeg' alt='Arsenal' className='w-[100px] h-[100px] rounded-full object-cover bg-white p-2' />
              <p className='text-white text-xl font-bold'>vs</p>
              <img src='/blue_shirt.jpg' alt='Tottenham' className='w-[100px] h-[100px] rounded-full object-cover bg-white p-2' />
            </div>
          </div>
          <div className='bg-white' style={{ borderRadius: '0px 0px 20px 20px' }}>
            <div className='flex flex-col p-3 mt-[50px]'>
              <p><span className='bg-green-300 rounded-2xl py-[2px] px-[10px] text-[14px]'>Premier League</span></p>
              <h3 className='text-[18px]'>Arsenal vs Tottenham</h3>
              <span>📍mEmirates Stadium</span>
              <div className='flex gap-2 mt-2'>
                <span>📅 Sat 09 Dec</span>
                <span>🕒 06:30 PM</span>
              </div>
              <div className='flex items-center justify-between mt-3'>
                <h3><b>$420</b></h3>
                <button className='bg-green-500 text-white py-1 px-3 rounded-lg'>Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Team;