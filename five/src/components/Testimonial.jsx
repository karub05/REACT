import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>TESTIMONIAL</h2>

      <section>
        <TestimonialCard name={"karub"} feedback={"Maa Chudi Padi Hey"} />
        <TestimonialCard name={"samay"} feedback={"Life is unfair"} />
        <TestimonialCard
          name={"Abhishek Upmanyu"}
          feedback={"Toh main kya karu? Job chhod du?"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
