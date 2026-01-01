import React, { useEffect, useState } from 'react';

type MetricsData = {
  totalCarbs: string;
  maxBG: string;
  minBG: string;
  countCarbs: number;
  basalIncrease: number;
  basalDecrease: number;
};

type UserMetrics = {
  username: string;
  data: MetricsData | null;
  error: string | null;
};

const getTodayDateString = (): string => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const ReportDashboard: React.FC = () => {
  const [userMetrics, setUserMetrics] = useState<UserMetrics[]>([]);

  useEffect(() => {
    const usernames = ['00g', '00j']; // Replace with your actual usernames
    const date = getTodayDateString();

    Promise.all(
      usernames.map(async (username) => {
        const url = `/data/${username}/${date}_transformed_data.json`;
        
        try {
          console.log(url);
          const res = await fetch(url);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data: MetricsData = await res.json();
          return { username, data, error: null };
        } catch (err: any) {
          return { username, data: null, error: err.message };
        }
      })
    ).then(setUserMetrics);
  }, []);


  return (
    <div>
      <h2>Daily Metrics</h2>
      {userMetrics.map(({ username, data, error }) => (
        <div key={username} style={{ marginBottom: '1.5rem' }}>
          <h3>User: {username}</h3>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!data && !error && <p>Loading...</p>}
          {data && (
            <ul>
              <li>Total Carbs: {data.totalCarbs}</li>
              <li>Max BG: {data.maxBG}</li>
              <li>Min BG: {data.minBG}</li>
              <li>Carb Entries: {data.countCarbs}</li>
              <li>Basal Increase: {data.basalIncrease}</li>
              <li>Basal Decrease: {data.basalDecrease}</li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReportDashboard;


 // return (
//<div className="w-screen h-screen bg-[#E7EBDE] text-[#453a44] flex items-center justify-center">
 // <div className="w-[70%] h-[85%] bg-[#fffff0] border border-gray-300 rounded-lg shadow-md hover:shadow-xs transition p-8">
  //  <h1 className="mt-5  text-4xl text-[#786577] text-center ">Daily Report</h1>
  //  <div className="mt-5 font-bold border-b-4 border-[#786577]"/>
   // <div className="grid grid-cols-2 gap-4">
    //  <p className="mt-10 ml-10 text-[#786577] text-left ">Total Daily Insulin:</p>
     // <p className="mt-10  text-[#786577] text-left">Total Daily Carbs:</p>
     // <p className="mt-5 ml-10 text-[#786577] text-left">Highest BG:</p>
    //  <p className="mt-5  text-[#786577] text-left"># of carb boluses:</p>
    //  <p className="mt-5 ml-10 text-[#786577] text-left">Lowest BG:</p>
    //  <p className="mt-5  text-[#786577] text-left">Percent of day with basal increased:</p>
   // </div>
   // </div>
  //</div>

 // );
//};

///export default ReportDashboard;
