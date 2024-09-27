import LoginMessage from "@/starter/components/LoginMessage";
import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();
  const user = session?.user;
  return (
    <div className="grid-cols-2 grid border border-primary-800 min-h-[400px] mb-10 ">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />

      {session?.user ? (
        <ReservationForm cabin={cabin} user={user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
