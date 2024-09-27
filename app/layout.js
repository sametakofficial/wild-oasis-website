import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { ReservationProvider } from "@/app/_components/ReservationContext";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "@/starter/components/Header";
export const runtime = "edge";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "HArika bir şey",
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title.default}</title>
      </head>
      <body
        className={`${josefin.className} text-primary-100 bg-primary-950 flex flex-col`}
      >
        <Header>
          <Navigation />
        </Header>
        <div className="flex-1 px-7 py-12">
          <main className="max-w-7xl mx-auto ">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
