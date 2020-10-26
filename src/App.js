import './App.css';
import React, {useState} from 'react';
import Job from './Job'
import {Container} from 'react-bootstrap'
import useFetchJobs from './useFetchJobs'
function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error} = useFetchJobs()
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error try refreshing</h1>}
      {jobs.map(job =>{
        return <Job key={job.id} job={job}/>
      })}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
