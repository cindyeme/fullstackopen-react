import React from "react";

// Header
const Header = ({ name }) => <h1>{name}</h1>;

// Parts
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

// Total
const Total = ({ total }) => (
  <p>
    <b>Total of {total} exercises</b>
  </p>
);

// Content
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((item) => (
        <div key={item.id}>
          <Part name={item.name} exercises={item.exercises} />
        </div>
      ))}
      <Total
        total={parts
          .map(el => el.exercises)
          .reduce((prev, curr) => prev + curr, 0)}
      />
    </>
  );
};

// Course
export default function Courses({ courses }) {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
}
