import Topbar from './components/shared/Topbar';
import LeftSidebar from './components/shared/LeftSidebar';
import RightSidebar from './components/shared/RightSidebar';
import { inter } from './layout';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main>
          <LeftSidebar />
          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>

          </section>
          <RightSidebar />
        </main>
        <Bottom />
      </body>
    </html>
  );
}
