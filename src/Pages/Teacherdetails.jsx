import React from 'react';
import Reusable from "../components/reusable/Reusable"
import Teacherpersonalinfo from '../components/Teacherpersonalinfo/Teacherpersonalinfo';


const TeacherDetails = () => {

  return (
    <>
         <Reusable
        title="Team details"
        subtitle="Home  /  Team details "
        subtitleLink="/"
      />
      <Teacherpersonalinfo/>
    </>
  );
};

export default TeacherDetails;
