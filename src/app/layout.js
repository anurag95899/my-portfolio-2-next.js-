import './globals.css'

export const metadata = {
  title: "Anurag Yadav | Portfolio",
  description: "MERN Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}