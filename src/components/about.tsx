
import selfie from '../assets/IMG_3974_v1.jpeg';

export default function About() {
  return (
<div className="grid grid-cols-2 ml-15 mr-15 md:ml-15 md:mr-15 lg:ml-30 lg:mr-30 place-items-center">
    <div className="justify-items-center mr-5 md:mr-15 lg:mr-40">
    <img
      src={selfie}
      alt="Melissa's avatar"
      className="flex aspect-auto w-42 h-65 md:w-65 md:h-90 lg:w-65 lg:h-95 object-cover drop-shadow-md rounded-full  "
    />
  </div>

   {/* <div className="inline-flex bg-[#f0f8ff] mr-95   rounded-xl shadow-xl content-center"> */}
  <div className="place-content-center">
  <p className="text-md md:text-lg lg:text-2xl  mr-5 text-[#080808]  font-[Electrolize] text-left text-wrap wrap-anywhere whitespace-normal subpixel-antialiased">
      I'm a data engineer with over nine years of experience designing, building and maintaining data pipelines and infrastructure. I've built pipelines
      from the ground up including sketching out the architecture and scripting transformations along with migrating existing architecture and keeping disruptions at a minimum.       
    </p>
  <div class="divider font-[Electrolize] text-md md:text-lg lg:text-2xl text-[#080808] ml-10 mr-10 md:ml-20 md:mr-20 lg:ml-30 lg:mr-30">Skills</div> 
  <ul> <div className="text-center mt-6 mb-2 text-[#080808]  font-[Electrolize]">Data Engineering & Architecture</div>
   
<li className="list-row">
  <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">ETL Pipeline Design</div>
  <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Geospatial data modeling and analysis</div>
  <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Data architecture design</div>
  <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Query Optimization</div>
  <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Structured and semi-structured data types</div>
  <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Data integration</div>
  <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Data validation and error handling</div>
  </li> 
  </ul>
  <ul>  <div className="text-center mt-4 mb-2 text-[#080808]  font-[Electrolize]">Cloud & Infrastructure </div>

<li className="list-row">
      <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">AWS Glue</div>
       <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">AWS Step Functions</div>
 <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Docker</div>
     <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">AWS RDS</div>
    <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">GCP Big Query</div>
        <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">GCP Cloud Computer</div>
            <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">AWS S3</div>
                <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">GCP Cloud Storage</div>
                    <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Terraform</div>
                         <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">GitHub Actions</div>
                    </li> </ul>
      <ul><div className="text-center mt-4 mb-2 text-[#080808]  font-[Electrolize]">Programming & Tooling  </div> 
       <li className="list-row">     
     <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">PySpark</div>
   <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">DuckDB</div>
     <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Jupyter Notebook</div>
      <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">QGIS</div>
       <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Dagster</div>
<div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Typescript</div>
         <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Python</div></li> 
 <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Numpy</div>
       <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Panadas</div>
     <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">PDFPlumber</div>
 <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Pytesseract</div>
       <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Powershell</div>
     <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">HTML</div>
         <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">CSS</div>       
          <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">PostgreSQL</div> 
   <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">MySQL</div>
    <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">SQLite</div> 
           <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Boto3</div>
       <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Panadas</div>
     <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">SQLAlchemy</div>
         <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">Bash</div>
         <div className="badge bg-[#3b3c36] text-[#fff0f5] font-[Electrolize] m-1 p-3">BeautifulSoup</div>
   </ul>
</div>
</div>

)
}
