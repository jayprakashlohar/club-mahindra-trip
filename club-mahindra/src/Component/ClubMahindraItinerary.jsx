import { useState, useEffect } from "react";
import "../Styles/ClubMahindraItinerary.css";
const ClubMahindraItinerary = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 5 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleDay = (dayNum) => {
    setActiveDay(activeDay === dayNum ? null : dayNum);
  };

  const resortImages = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
    "/img5.jpeg",
    "/img6.jpeg",
  ];

  const weatherData = [
    { date: "25 Apr", tempRange: "18°C - 28°C", condition: "Mostly Sunny" },
    { date: "26 Apr", tempRange: "17°C - 27°C", condition: "Partly Cloudy" },
    { date: "27 Apr", tempRange: "16°C - 26°C", condition: "Light Showers" },
  ];

  const dayPlans = [
    {
      dayNum: 0,
      date: "24th April, 2025",
      events: [
        { time: "20:00 Hrs", description: "Assemble at TNS office" },
        {
          time: "21:00 Hrs",
          description: "Departure from TNS office to Kandaghat",
        },
        { time: "23:30 Hrs", description: "Dinner at Murthal" },
      ],
    },
    {
      dayNum: 1,
      date: "25th April, 2025",
      events: [
        { time: "01:00 Hrs", description: "Proceed to Kandaghat" },
        { time: "03:30 Hrs", description: "Enroute tea/coffee break" },
        {
          time: "07:00 Hrs",
          description: "Arrival at CLUB MAHINDRA RESORT KANDAGHAT",
        },
        { time: "07:30 Hrs", description: "Breakfast at Resort" },
        {
          time: "After Breakfast",
          description:
            "Check in to the resort\nTime at leisure / Explore activities at Resort",
        },
        { time: "12:30 Hrs", description: "Lunch at Resort" },
        { time: "13:30 Hrs", description: "Depart for Mohan Shakti Park" },
        { time: "16:00 Hrs", description: "Return to resort" },
        { time: "17:00 Hrs", description: "Team building activities" },
        { time: "18:00 Hrs", description: "Tea/coffee Break" },
        {
          time: "19:30 Hrs",
          description: "Guitarist at Lawn followed by dinner",
        },
        { time: "After Dinner", description: "Overnight at Resort" },
      ],
    },
    {
      dayNum: 2,
      date: "26th April, 2025",
      events: [
        { time: "07:30 Hrs", description: "Breakfast at hotel" },
        {
          time: "09:30 Hrs",
          description: "Depart for Shimla (1.30 Hrs Drive)",
        },
        { time: "11:00 Hrs", description: "Arrival Shimla, Enjoy Mall road" },
        { time: "13:00 Hrs", description: "Lunch at Indian restaurant" },
        { time: "After Lunch", description: "Visit JHAAKU TEMPLE" },
        { time: "15:30 Hrs", description: "Return to Kandaghat" },
        { time: "19:00 Hrs", description: "DJ & dinner at resort" },
        { time: "After Dinner", description: "Overnight at Resort" },
      ],
    },
    {
      dayNum: 3,
      date: "27th April, 2025",
      events: [
        { time: "07:30 Hrs", description: "Breakfast at hotel" },
        {
          time: "09:00 Hrs",
          description: "Check out & proceed to Pijnore Garden (02 Hours Drive)",
        },
        { time: "11:00 Hrs", description: "Visit Pijnore Garden" },
        { time: "12:30 Hrs", description: "Depart for lunch at Ambala" },
        { time: "13:30 Hrs", description: "En Route Lunch" },
        { time: "15:00 Hrs", description: "Depart for Delhi" },
        { time: "20:00 Hrs", description: "Arrival at TNS office" },
      ],
    },
  ];

  return (
    <div className="container">
      {/* Logo Container */}
      <div className="logo-container">
        <div className="company-logo">CEOITBOX</div>
        <div className="tns-logo">
          TNS
          <br />
          <span className="tns-tagline">Technology Never Sleeps</span>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <h1 className="resort-title">Club Mahindra Kandaghat Resort</h1>
        <p className="subtitle">Adventure Awaits in the Himalayan Foothills</p>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <div className="info-box">
          <h3>📍 Kandaghat, Himachal Pradesh</h3>
          <p>
            Distance from Chattarpur, New Delhi:{" "}
            <strong>380 km (7-8 hours drive)</strong>
          </p>
        </div>
        <div className="info-box">
          <h3>🌤️ Weather Forecast</h3>
          <div className="weather-days">
            {weatherData.map((day, idx) => (
              <div key={idx} className="weather-day">
                <p>
                  <strong>{day.date}</strong>
                </p>
                <p>{day.tempRange}</p>
                <p>{day.condition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel">
        <img src={resortImages[currentSlide]} alt="Resort View" />
        <div className="carousel-dots">
          {resortImages.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${currentSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            ></div>
          ))}
        </div>
        <div
          className="arrow left"
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? resortImages.length - 1 : prev - 1
            )
          }
        >
          &lt;
        </div>
        <div
          className="arrow right"
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === resortImages.length - 1 ? 0 : prev + 1
            )
          }
        >
          &gt;
        </div>
      </div>

      {/* Itinerary Days */}
      {dayPlans.map((day) => (
        <div key={day.dayNum} className="day">
          <div className="day-header" onClick={() => toggleDay(day.dayNum)}>
            <span>
              DAY {day.dayNum} - {day.date}
            </span>
            <span>{activeDay === day.dayNum ? "-" : "+"}</span>
          </div>
          <div
            className={`day-content ${
              activeDay === day.dayNum ? "active" : ""
            }`}
          >
            {day.events.map((event, idx) => (
              <div key={idx} className="event">
                <div className="event-time">{event.time}</div>
                <div className="event-description">{event.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Contact Info */}
      <div className="contact-info">
        <p>
          <strong>
            For any assistance please get in touch with Sakshi @ ‪+91 82870
            80665‬
          </strong>
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Created for CEOITBOX & TNS</p>
      </div>
    </div>
  );
};

export default ClubMahindraItinerary;
