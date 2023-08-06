import React, { useState }  from "react";
import { useQuery, gql } from "@apollo/client";
import Form from 'react-bootstrap/Form';
import { InputNipponYearNum } from './InputNipponYearNum';

const years = gql`
{
  years {
    emperorName
    generation
  }
}
`;

const testField = gql`
  query test_field {
    testField
  }
`;

export const InputNipponYear = () => {
  const [emperor, setEmperor] = useState("");
  
  const { loading, error, data } = useQuery(years);
  
  if (loading) return <>'ロード中....'</>;
  if (error) return <>`Error ${error.message}`;</>;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmperor(e.target.value);
  }

  return (
    <>
      <div className="container p-5">
        <h2>和暦→西暦</h2>
        <Form.Group className="p-3">
          <Form.Label>和暦</Form.Label>
          <Form.Select id="emperor" onChange={handleSelectChange}>
            <option>Default select</option>
            {data.years.map((year: any) =>(
              <option value={year.generation}>{year.emperorName}</option>
            ))}
          </Form.Select>
          <InputNipponYearNum argEemperor={emperor} />
        </Form.Group>
      </div>
    </>
  );
};
