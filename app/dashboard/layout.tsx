import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
        <nav>
          <ul>
            <li><a href="/dashboard/blog" className="block py-2">Blog</a></li>
            <li><a href="/dashboard/exercises" className="block py-2">Ejercicios</a></li>
            <li><a href="/dashboard/payments" className="block py-2">Pagos</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
