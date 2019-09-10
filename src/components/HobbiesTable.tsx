import React from "react";
import { IHobby } from "../models/hobby";

interface IProps {
  hobbies: IHobby[];
}

const TableStyle = {
  margin: "50px auto",
  width: "600px",
};

export const HobbiesTable: React.FC<IProps> = ({
  hobbies,
}) => (
  <table style={TableStyle}>
    <tbody>
      { hobbies && hobbies.map((hobby: IHobby) => (
        <tr key={hobby.id}>
          <td>{ hobby.passion }</td>
          <td>{ hobby.name }</td>
          <td>{ hobby.year }</td>
        </tr>
      ))}
    </tbody>
  </table>
);
