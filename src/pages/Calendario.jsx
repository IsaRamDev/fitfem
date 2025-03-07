import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarioEmoticos() {
  const [date, setDate] = useState(new Date());
  const [emoticos, setEmoticos] = useState({});
  const [emoji, setEmoji] = useState("");

  const handleDayClick = (selectedDate) => {
    const formattedDate = selectedDate.toDateString();
    const newEmoticos = { ...emoticos, [formattedDate]: emoji };
    setEmoticos(newEmoticos);
    setEmoji("");
  };

  return (
    <div className="p-4">
      <div className="p-4 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Calendario Anual con Emoticos</h1>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDayClick}
          tileContent={({ date, view }) =>
            view === "month" && emoticos[date.toDateString()] ? (
              <span className="text-lg">{emoticos[date.toDateString()]}</span>
            ) : null
          }
          className="border rounded shadow-md p-2"
        />
        <div className="mt-4">
          <h2 className="text-xl mb-2">Seleccionar Emoji:</h2>
          <input
            type="text"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            placeholder="Escribe un emoji (ej. 🎉)"
            className="border p-2 rounded w-full"
          />
          <p className="mt-2">
            Día seleccionado: <strong>{date.toDateString()}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CalendarioEmoticos;
