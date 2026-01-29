import React, { useEffect, useState } from 'react';
import invertocatwhite from '../../assets/github-mark-white.svg'
import email from '../../assets/email-svgrepo-com.svg'
import Header from '../../components/NavBar';
import MiniSidebar from '../../components/MiniSidebar';
import PageTitle from '../../components/PageTitle'

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
        const url = `/data/${username}/2026-01-01_transformed_data.json`;
        
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

<body className="min-h-screen bg-[#e6e8fa]   text-[#555555]  overflow-auto">
  <Header />
  <MiniSidebar />
<section className="h-dvh bg-[#e6e8fa] mt-35">
      <div class="divider font-[Electrolize] text-xl md:text-3xl lg:text-5xl text-[#080808] ml-10 mr-10 md:ml-20 md:mr-20 lg:ml-30 lg:mr-30 mb-10">Pump Project</div> 


    <div className=" ml-10 mr-10 md:ml-20 md:mr-20 lg:ml-50 lg:mr-50 mx-auto flex flex-row  gap-x-3">
    <div className="flex-[0.5]"></div>
          <div className="flex-2 content-center">        <p className="text-md md:text-md lg:text-lg text-[#080808]  text-pretty font-[Electrolize]">
The goal of this project is to expose and provide more transparency with insulin pump data so caregivers can have more information to understand what is happening and how to make informed decision. The need for this arose as control of insulin pumps moved to personal cell phones making the access to the data more of a burden to both the patient and caregiver. With the Tandem Mobi, just like all the other insulin pumps available, there is an online data portal that provides a truncated view of the data. But data like battery percentage, last pump change and much more aren’t available when using the data portal despite being available via the API. 
This project accesses the API using and building upon an existing Github repository, ingests the data daily to AWS S3 and transforms a small set to produce the daily metrics seen here. I use Github Actions for this workflow. I’m excited to be able to iterate on this project along with share my thoughts on this and Type 1 diabetes!
 
    </p></div>
    <div className = "flex-1">
            <h2 className="text-xl md:text-2xl lg:text-4xl text-[#080808] row-span-1 mb-2">Daily Metrics</h2>

      
      {userMetrics.map(({ username, data, error }) => (
        
        <div key={username} style={{ marginBottom: '1.5rem' }}className=" rounded-md border border-gray-300 shadow-sm bg-[#f0f8ff] text-sm md:text-md lg:text-lg p-2">
        
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!data && !error && <p>Loading...</p>}
          {data && (
            
            <ul>
              <li>User: {username}</li>
              <li>Total Carbs: {data.totalCarbs}</li>
              <li>Max BG: {data.maxBG}</li>
              <li>Min BG: {data.minBG}</li>
              <li>Carb Entries: {data.countCarbs}</li>
              <li>Basal Increase: {data.basalIncrease.toFixed(3)}</li>
              <li>Basal Decrease: {data.basalDecrease.toFixed(3)}</li>
            </ul>
            
          )}
              {/*  <div className="divider divider-horizontal">word</div> */}

        </div>
        
      ))}
      </div>
 <div className="flex-[0.5]"></div>
    </div>
  <div class="divider font-[Electrolize] text-xl md:text-3xl lg:text-5xl text-[#080808] ml-10 mr-10 md:ml-20 md:mr-20 lg:ml-30 lg:mr-30 mb-10">Project Updates</div> 
      
            
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                  {/*  <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time> */}
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>title</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">children</div>
            </div>
               {/*   {siteMetadata.comments && (
              <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
          <Comments slug={slug} />
              </div>
            )} */}
            <footer>
                    {/*  <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && prev.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
        {next && next.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )} 
              </div> */}
            </footer>
          </div>
        </div>
        </article>
</section>
    </body>
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
