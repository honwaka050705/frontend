import React, { useState }  from "react";
import { useQuery, gql } from "@apollo/client";
import Form from 'react-bootstrap/Form';

const toAd = gql`
  query to_ad($emperor: String!, $nipponsYear: String!) {
    toAd(emperor: $emperor, nipponsYear: $nipponsYear)
  }
`;

export const InputNipponYearNum = (props: any) => {
  console.log("props.argEemperor: " + props.argEemperor);
  const [stNipponsYear, setStNipponsYear] = useState("");
  const [adYear, setAdYear] = useState("和暦を入力すると西暦が表示されます。");

  let { loading, error, data } = useQuery(toAd, { variables: {emperor: props.argEemperor, nipponsYear: stNipponsYear} });
  console.log(data);
  if (loading) return <>'ロード中....'</>;
  if (error) return <>`Error ${error.message}`;</>;

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStNipponsYear(e.target.value);
  }

  return (
    <>
      <Form.Control type="text" id="nipponsYear" placeholder="年" onChange={handleChangeText} value={stNipponsYear} />
      <Form.Label className="mt-3">西暦</Form.Label>
      <input className="form-control" type="text" placeholder={data.toAd ? data.toAd + '年' : adYear } aria-label="Disabled input example" disabled></input>
    </>
  );
};
