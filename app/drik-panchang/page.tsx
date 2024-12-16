"use client";

const DrikPanchangPage = () => {
  return (
    <div className="h-full font-vietnam text-secondaryLight p-10 px-20 pb-20 border-b-8 border-secondaryLight">
      <h1 className="text-4xl  font-semibold text-center mb-10 uppercase">
        Drik Panchanga
      </h1>
      <div className=" mx-auto">
        <img
          src="/drik-panchang.svg"
          alt="Drik Panchanga"
          className="w-full h-auto mb-16 object-cover"
        />
        <section className="mb-10 ">
          <h2 className="text-[1.5rem] font-[500]  mb-6 pl-3 leading-[3.2rem] w-full pr-[400px] bg-gradient-to-r from-[#290523] to-[#45133C]">
            1. Basic Components of a Drik Panchanga:
          </h2>
          <ul className="list-disc text-[1.3rem] pl-12 space-y-2">
            <li>
              <strong>Tithi:</strong> The lunar day. There are 30 Tithis in a
              lunar month, divided into Shukla Paksha (waxing phase) and Krishna
              Paksha (waning phase).
            </li>
            <li>
              <strong>Nakshatra:</strong> The lunar mansion. The Moon's position
              is categorized into one of 27 Nakshatras.
            </li>
            <li>
              <strong>Yoga:</strong> A calculation based on the positions of the
              Sun and Moon, indicating favorable and unfavorable times.
            </li>
            <li>
              <strong>Karana:</strong> Half of a Tithi, used to determine the
              timing of rituals and ceremonies.
            </li>
            <li>
              <strong>Vara:</strong> The weekday (Sunday to Saturday).
            </li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-[1.5rem] font-[500]  mb-6 pl-3 leading-[3.2rem] w-full pr-[400px] bg-gradient-to-r from-[#290523] to-[#45133C]">
            2. Importance of Drik Panchanga:
          </h2>
          <ul className="list-disc text-[1.3rem] pl-12 space-y-2">
            <li>
              <strong>Determining Auspicious Days:</strong> Drik Panchanga is
              used to select Shubh Muhurta (auspicious time) for important
              events like weddings, housewarming ceremonies, and other rituals.
            </li>
            <li>
              <strong>Festival Dates:</strong> It provides the precise dates and
              times for observing Hindu festivals, fasts, and rituals, such as
              Diwali, Navaratri, and Ekadashi.
            </li>
            <li>
              <strong>Daily Rituals:</strong> Helps in determining the best
              times for performing daily prayers and rituals.
            </li>
            <li>
              <strong>Astrological Predictions:</strong> It is used to create
              and interpret horoscopes (Janma Kundali), which are crucial in
              making life decisions, especially in marriage and career.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-[1.5rem] font-[500]  mb-6 pl-3 leading-[3.2rem] w-full pr-[400px] bg-gradient-to-r from-[#290523] to-[#45133C]">
            3. Calculation Methods:
          </h2>
          <ul className="list-disc text-[1.3rem] pl-12 space-y-2">
            <li>
              <strong>Drik Siddhanta:</strong> Drik Panchanga uses precise
              astronomical calculations (Drik Siddhanta) to predict the
              positions of celestial bodies. This is more accurate compared to
              traditional methods and is used for precise timekeeping.
            </li>
            <li>
              <strong>Location-Specific:</strong> Drik Panchanga calculations
              can vary based on geographic location, as the position of
              celestial bodies differs from place to place. Therefore, a Drik
              Panchanga is often customized for a specific region or city.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DrikPanchangPage;
