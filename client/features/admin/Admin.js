import React, { useEffect } from "react";
import { editEvent, fetchAllEvents } from "../events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

function Admin() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const pendingEvents = events?.filter((event) => {
    if (event.status === "pending") {
      return event;
    }
  });

  const editEventButton = (ev, id) => {
    dispatch(editEvent(id, ev)).then(() => {
      dispatch(fetchAllEvents());
    });
  };

  return (
    <div>
      <br />
      <h2>Pending Events Here</h2>
      <>
        <ul>
          {pendingEvents.length
            ? pendingEvents.map(({ title, id, date, status }) => {
                return (
                  <li key={id}>
                    <strong>{title}</strong>
                    <br />
                    <strong>{date}</strong>
                    <br />
                    <Button onClick={(ev) => editEventButton(ev, id)}>
                      Approve
                    </Button>
                  </li>
                );
              })
            : "No pending events remaining"}
        </ul>
      </>

      <hr />
      <h2> Edit Admin Profile</h2>
      <hr />
      <h2>Edit a User Here</h2>
    </div>
  );
}

export default Admin;
