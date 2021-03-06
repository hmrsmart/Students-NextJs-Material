const getJobs = async (token) => {
  const response = await fetch(`http://localhost:4000/api/v1/job`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const createJob = async (token, jobBody) => {
  const response = await fetch(`http://localhost:4000/api/v1/job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...jobBody,
    }),
  });
  return response;
};

export { getJobs, createJob };
