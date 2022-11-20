import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchAllEvents } from "../events/eventsSlice";

function FeaturedEvents() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const filteredEvents = [...events]
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.end);
    })
    ?.filter((event) => {
      if (event.tag.includes("holidays") && event.status === "approved") {
        return event;
      }
    })
    .filter((a) => new Date(a.start) - new Date() > 0);

  const first = filteredEvents[0];

  const exclude1 = filteredEvents.filter((event) => {
    if (event.id !== filteredEvents[0].id) {
      return event;
    }
  });

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <div className="container" align="center">
      <h2 className="underline">Featured Events</h2>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="4500"
            key={first?.id}
          >
            <img
              className="d-block w-100"
              style={{ width: "200px", height: "600px", padding: "10px" }}
              src={first?.image}
              alt="..."
            />
            <div align="center">
              <h3 className="underline">{first?.title}</h3>
              <h4>{moment(first?.date).format("dddd, MMMM Do, YYYY")}</h4>
            </div>
          </div>
          {exclude1?.map(({ id, image, title, start, end }) => (
            <div key={id} className="carousel-item" data-bs-interval="4500">
              <img
                style={{ width: "200px", height: "600px", padding: "10px" }}
                className="d-block w-100"
                src={image}
                alt="..."
              />
              <div align="center">
                <h3 className="underline">{title} </h3>
                <h4>
                  {moment(start).format("dddd, MMMM Do YYYY, h:mm:ss a")}-
                  {moment(end).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default FeaturedEvents;