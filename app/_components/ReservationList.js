"use client";
import { useOptimistic } from "react";
import ReservationCard from "@/app/_components/ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          handleDelete={handleDelete}
          booking={booking}
          key={optimisticBookings.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
