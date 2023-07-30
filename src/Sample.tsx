import React from "react";
import { useQuery, gql } from "@apollo/client";

const years = gql`
{
  years {
    emperorName
    generation
  }
}
`;

export const Sample = () => {
  const { loading, error, data } = useQuery(years);
  
  if (loading) return <>'ロード中....'</>;
  if (error) return <>`Error ${error.message}`;</>;

  return (
    <>
      <select>
        <option selected></option>
        {data.years.map((year: any) =>(
          <option value="{year.generation}">{year.emperorName}</option>
        ))}
      </select>
    </>
  );
};
