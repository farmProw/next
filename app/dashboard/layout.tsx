"use client"
import React, { FC, ReactNode } from 'react'
import SideNav from '../ui/dashboard/sidenav';
import { usePathname } from 'next/navigation';

interface Props{
	children:ReactNode
}

export default function Layout({children}:Props) {
	const pathArray = usePathname().split('/');
	console.log(pathArray[pathArray.length-1]);
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* <SideNav />qwerty1 */}
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
