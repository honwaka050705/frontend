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

  // const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(emperor);
  //   console.log(testField);
  //   setAdYear(e.target.value);
  // }



  return (
    <>
      <Form.Group className="mb-3 p-5">
        <Form.Label>和暦</Form.Label>
        <Form.Select id="emperor" onChange={handleSelectChange}>
          <option>Default select</option>
          {data.years.map((year: any) =>(
            <option value={year.generation}>{year.emperorName}</option>
          ))}
        </Form.Select>
        <InputNipponYearNum argEemperor={emperor} />
        {/* <Form.Control type="text" id="nipponsYear" placeholder="年" onChange={handleChangeText} />
        <Form.Text id="adYear" muted>{adYear}</Form.Text> */}
      </Form.Group>
    </>
  );
};
