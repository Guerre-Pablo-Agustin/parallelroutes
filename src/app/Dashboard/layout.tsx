import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
  users,
  activity,
  notifications,
  orders,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  activity: React.ReactNode;
  notifications: React.ReactNode;
  orders: React.ReactNode;
}>) {
  return (
    <div>
      <article>{children}</article>
      <article className="flex flex-col md:flex-row gap-2 justify-center items-center mt-4 mb-4">
        {users}
        {activity}
        {notifications}
        {orders}
      </article>
    </div>
  );
}
