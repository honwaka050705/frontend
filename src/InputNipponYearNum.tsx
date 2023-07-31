import React, { useState }  from "react";
import { useQuery, gql } from "@apollo/client";
import Form from 'react-bootstrap/Form';

// const testField = gql`
//   query test_field {
//     testField
//   }
// `;
const toAd = gql`
  query to_ad($emperor: String!, $nipponsYear: String!) {
    toAd(emperor: $emperor, nipponsYear: $nipponsYear)
  }
`;

export const InputNipponYearNum = ({argEemperor}) => {
  const [stNipponsYear, setStNipponsYear] = useState("126");
  const [adYear, setAdYear] = useState("和暦を入力すると西暦が表示されます。");

  // const { loading, error, data } = useQuery(toAd, { variables: {emperor: argEemperor, nipponsYear: stNipponsYear} });

  // if (loading) return <>'ロード中....'</>;
  // if (error) return <>`Error ${error.message}`;</>;



  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(data.testField);
    console.log(stNipponsYear);
    console.log(argEemperor)
    setAdYear(e.target.value);
  }

  return (
    <>
      <Form.Control type="text" id="nipponsYear" placeholder="年" onChange={handleChangeText} />
      <Form.Text id="adYear" muted>{adYear}</Form.Text>
    </>
  );
};
