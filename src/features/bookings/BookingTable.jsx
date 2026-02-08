import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../../../../../../../../Downloads/ultimate-react-course-main/17-the-wild-oasis/final-6-final/src/ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings, isPending, count } = useBookings();

  if (isPending) return <Spinner />;

  if (!bookings.length) return <Empty resourceName={"bookings"} />;
  console.log(bookings);

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Menus>
  );
}

export default BookingTable;
