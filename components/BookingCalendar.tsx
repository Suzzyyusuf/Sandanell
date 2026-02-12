
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle } from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const TIMES = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

const BookingCalendar: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('Mon');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (selectedDay && selectedTime) {
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 5000);
    }
  };

  if (isBooked) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Session Scheduled!</h3>
        <p className="text-slate-500 mb-6">
          You're all set for {selectedDay} at {selectedTime}. A confirmation has been sent to your email.
        </p>
        <button 
          onClick={() => setIsBooked(false)}
          className="text-amber-600 font-semibold hover:underline"
        >
          Book another session
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <div className="flex items-center space-x-2 mb-8">
        <CalendarIcon className="text-amber-500" size={20} />
        <h2 className="text-xl font-bold text-slate-900">Schedule Your Session</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Select Day</label>
          <div className="grid grid-cols-5 gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`py-3 rounded-xl text-sm font-medium transition-all ${
                  selectedDay === day 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Select Time</label>
          <div className="grid grid-cols-1 gap-2">
            {TIMES.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  selectedTime === time 
                    ? 'border-amber-500 bg-amber-50 text-amber-700' 
                    : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Clock size={16} />
                  <span>{time}</span>
                </div>
                {selectedTime === time && <ChevronRight size={16} />}
              </button>
            ))}
          </div>
        </div>

        <button
          disabled={!selectedTime}
          onClick={handleBooking}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
            selectedTime 
              ? 'bg-amber-500 hover:bg-amber-600 active:scale-95' 
              : 'bg-slate-200 cursor-not-allowed text-slate-400'
          }`}
        >
          Confirm Appointment
        </button>
        <p className="text-center text-xs text-slate-400">
          Available for consultations, freight audits, or styling sessions.
        </p>
      </div>
    </div>
  );
};

export default BookingCalendar;
