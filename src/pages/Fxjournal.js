// src/Fxjournal.js
import React, { useState, useEffect } from 'react'; 
import './Fxjournal.css';
import { journalData } from "../journaldata";
import { Helmet } from 'react-helmet'; 
import { useLocation } from "react-router-dom";

const Fxjournal = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fxjournal | Emmanuel Okonkwo",
    "url": window.location.href,
    "description": "Learn about Emmanuel Okonkwo, a co-founder skilled in algorithmic forex trading, core engineering, backend development, API creation, and algorithm design. Discover my journey, expertise, and mission to deliver impactful software solutions and trading strategies.",
    "author": {
      "@type": "Personal",
      "name": "Emmanuel Okonkwo"
    }
  }; 

  const [items, setItems] = useState([]); 
  useEffect(() => {
    setItems(journalData); // Load data dynamically
  }, []);

  //______________________________________________________________
  const [activeTab, setActiveTab] = useState("jr-home"); 
  const [selectedMonth, setSelectedMonth] = useState(null);

  const showTab = (tabId, month) => {
    setActiveTab(tabId);
    setSelectedMonth(month); // Store the selected month
  }; 

  const location = useLocation();
  const [singleJrData, setSingleJrData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlParam = params.get("id");

    if (urlParam && parseInt(urlParam, 10) > 0) {
      setSingleJrData(journalData.find((item) => item.id === urlParam));
      showTab("jr-home4"); // Change tab when ID is valid
    }
  }, [location]); // Runs when the URL changes

  //______________________________________________________________

  // Filter items by the selected month
  const filteredItems = selectedMonth ? items.filter((item) => item.month.toLowerCase() === selectedMonth) : items;

  // Total items count
  const totalItems = filteredItems.length;

  // Count items where wl === "WIN"
  const totalWins = filteredItems.filter((item) => item.wl === "WIN").length;

  // Calculate Win Rate
  const winRate = totalItems > 0 ? ((totalWins / totalItems) * 100).toFixed(2) : 0;

  return (  
    <div className='main-container'>
      <Helmet>
       <meta name="description" content="Learn about Emmanuel Okonkwo, a co-founder skilled in algorithmic forex trading, core engineering, backend development, API creation, and algorithm design. Discover my journey, expertise, and mission to deliver impactful software solutions and trading strategies." />
       <meta name="keywords" content="About Emmanuel Okonkwo, algorithmic forex trading, backend development, API creation, algorithm design, software engineering, co-founder, impactful solutions, trading strategies, tech expertise" />
       <meta property="og:description" content="Get to know Emmanuel Okonkwo, a co-founder, software engineer, and expert in algorithmic forex trading, backend development, APIs, and algorithms. Explore the story and skills behind my innovative solutions and trading strategies." />
       <meta property="og:url" content={window.location.href} />
       <title>Fxjournal | Emmanuel Okonkwo</title>
       <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main About page content */}
      <section className='journal content'>
        <div id='jr-home' className={`tab-content ${activeTab === "jr-home" ? "active" : "hidden"}`}>
          <div className='jr-header-bredcum'>
            <div onClick={() => showTab("jr-home")}>
              <img src={`${process.env.PUBLIC_URL}/images/core/bullchart.svg`} alt='bear chart' />
              <span>MY FOREX JOURNAL</span>
            </div> 
          </div>

          <div>
            <img className='jr-header-img' src={`${process.env.PUBLIC_URL}/images/core/bearchart.svg`} alt='bear chart' />
            <h1>MY FOREX JOURNAL</h1>
            <div className='jr-home-list' onClick={() => showTab("jr-home2")}>
              <img className='jr-list-img' src={`${process.env.PUBLIC_URL}/images/core/bullchart.svg`} alt='bear chart' />
              <span>2025</span>
            </div>
            <div className='jr-home-list inna'>
              <img className='jr-list-img' src={`${process.env.PUBLIC_URL}/images/core/bullchart.svg`} alt='bear chart' />
              <span>2026</span>
            </div>
          </div>
        </div>

        <div id='jr-home2' className={`tab-content ${activeTab === "jr-home2" ? "active" : "hidden"}`}>
          <div className='jr-header-bredcum'>
            <div onClick={() => showTab("jr-home")}>
              <img src={`${process.env.PUBLIC_URL}/images/core/bullchart.svg`} alt='bear chart' />
              <span>MY FOREX JOURNAL</span>
            </div>
            <span style={{fontSize: "20px"}}>/</span>
            <div onClick={() => showTab("jr-home2")}>
              <img src={`${process.env.PUBLIC_URL}/images/core/bearchart.svg`} alt='bear chart' />
              <span>2025</span>
            </div> 
          </div>

          <div>
            <img className='jr-header-img' src={`${process.env.PUBLIC_URL}/images/core/bullchart.svg`} alt='bear chart' />
            <h1>2025</h1>
            <div className='jr-home2-list' onClick={() => showTab("jr-home3", "january")}>
              <img className='jr-list-img' src={`${process.env.PUBLIC_URL}/images/core/264b.svg`} alt='img' />
              <span>JANUARY</span>
            </div>
            <div className='jr-home2-list' onClick={() => showTab("jr-home3", "febuary")}>
              <img className='jr-list-img' src={`${process.env.PUBLIC_URL}/images/core/264b.svg`} alt='img' />
              <span>FEBUARY</span>
            </div> 
            <div className='jr-home2-list' onClick={() => showTab("jr-home3", "march")}>
              <img className='jr-list-img' src={`${process.env.PUBLIC_URL}/images/core/264b.svg`} alt='img' />
              <span>MARCH</span>
            </div>
            <div className='jr-home2-list' onClick={() => showTab("jr-home3", "march_1:2")}>
              <img className='jr-list-img' src={`${process.env.PUBLIC_URL}/images/core/264b.svg`} alt='img' />
              <span>MARCH_1:2</span>
            </div>
          </div>
        </div>

        <div id='jr-home3' className={`tab-content ${activeTab === "jr-home3" ? "active" : "hidden"}`}>
          <div className='jr-header-bredcum'>
            <div onClick={() => showTab("jr-home")}>
              <img src={`${process.env.PUBLIC_URL}/images/core/bullchart.svg`} alt='bear chart' />
              <span>MY FOREX JOURNAL</span>
            </div>
            <span style={{fontSize: "20px"}}>/</span>
            <div onClick={() => showTab("jr-home2")}>
              <img src={`${process.env.PUBLIC_URL}/images/core/bearchart.svg`} alt='bear chart' />
              <span>2025</span>
            </div>
            <span style={{fontSize: "20px"}}>/</span>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/core/264b.svg`} alt='bear chart' />
              <span>{selectedMonth ? selectedMonth.toUpperCase() : "SELECT A MONTH"}</span>
            </div>
          </div>
          
          <div className='jr-home3-header'>
            <img src={`${process.env.PUBLIC_URL}/images/core/bullchart.svg`} alt='bear chart' />
            <h1><h1>{selectedMonth ? selectedMonth.toUpperCase() : "SELECT A MONTH"}</h1>
            </h1>
          </div>
          <div className='jr-tb-viewer'>
            <img className='jr-list-img' src={`${process.env.PUBLIC_URL}/images/core/post.png`} alt='bear chart' />
            <span>Table</span>
            <img className='jr-list-img' src={`${process.env.PUBLIC_URL}/images/core/arrowdown.png`} alt='bear chart' />
          </div> 
          <div className='jr-home3-table overFlow-x-noBar'>
            <table className='brandTable'> 
             <thead>
              <tr>     
                <th className='overFlow-x-noBar'><span className='th-icon'>&#128260;</span>PAIRS</th>           
                <th className='overFlow-x-noBar'><span className='th-icon'>&#128205;</span>POSITION</th>           
                <th className='overFlow-x-noBar'><span className='th-icon'>&#9200;</span>SESSION</th>           
                <th className='overFlow-x-noBar'><span className='th-icon'>&#128197;</span>DATE</th>           
                <th className='overFlow-x-noBar'><span className='th-icon'>&#128339;</span>TIME</th>
                <th className='overFlow-x-noBar'><span className='th-icon'>&#128202;</span>W/L</th>
                <th className='overFlow-x-noBar'><span className='th-icon'>&#128209;</span>RPT</th>           
                <th className='overFlow-x-noBar'><span className='th-icon'>&#128259;</span>TRADE TYPE</th>           
                <th className='overFlow-x-noBar'><span className='th-icon'>&#9989;</span>CONFIRMATION</th>           
                <th className='overFlow-x-noBar'><span className='th-icon'>&#129504;</span>PSYCH.MANAGE</th>           
              </tr>
             </thead> 
             <tbody> 
             {items
             .filter((item) => selectedMonth === null || item.month.toLowerCase() === selectedMonth) // Filter by selectedMonth
             .map((item, index) => (
              <tr key={index}>
                <td className='overFlow-x-noBar flex-center'>
                 {item.wl === "LOSS" ? ( 
                  <>
                    <span>&#128308;</span> {item.pairs}
                    <a className='jr-tb-link' href={`#/Fxjournal?id=${item.id}`} target="_blank" rel="noopener noreferrer">
                      <img className='jr-tb-link-img' src={`${process.env.PUBLIC_URL}/images/core/external-link2.svg`} alt='link' />
                    </a>
                  </>
                  ) : item.wl === "WIN" ? (
                  <>
                    <span>&#128994;</span> {item.pairs} 
                    <a className='jr-tb-link' href={`#/Fxjournal?id=${item.id}`} target="_blank" rel="noopener noreferrer">
                      <img className='jr-tb-link-img' src={`${process.env.PUBLIC_URL}/images/core/external-link2.svg`} alt='link' />
                    </a>
                  </>
                  ) : (
                  <>
                    <span>&#128992;</span> {item.pairs}
                    <a className='jr-tb-link' href={`#/Fxjournal?id=${item.id}`} target="_blank" rel="noopener noreferrer">
                      <img className='jr-tb-link-img' src={`${process.env.PUBLIC_URL}/images/core/external-link2.svg`} alt='link' />
                    </a>
                  </>
                 )}
                </td>    
                <td className='overFlow-x-noBar'>
                 {item.position === "SELL" ? ( 
                  <><span className='tb-span-red'>{item.position}</span></>
                  ) : (
                  <><span className='tb-span-green'>{item.position}</span></>
                 )}
                </td>    
                <td className='overFlow-x-noBar'><span className='tb-span-blue'>{item.session}</span></td>    
                <td className='overFlow-x-noBar'><span>{item.date}</span></td>    
                <td className='overFlow-x-noBar '>{item.time}</td> 
                <td className='overFlow-x-noBar'>
                 {item.wl === "LOSS" ? ( 
                  <><span className='tb-span-red'>{item.wl}</span></>
                  ) : item.wl === "WIN" ? (
                  <><span className='tb-span-blue'>{item.wl}</span></>
                  ) : (
                  <><span className='tb-span-orange'>{item.wl}</span></>
                 )}
                </td>      
                <td className='overFlow-x-noBar '><span className='tb-span-green'>{item.rpt}</span></td>    
                <td className='overFlow-x-noBar'><span className='tb-span-gray'>{item.tradetype}</span></td>
                <td className='overFlow-x-noBar'><span className='tb-span-purple'>{item.confirmation}</span></td>
                <td className='overFlow-x-noBar'><span className='tb-span-greenlight'>{item.psychManage}</span></td>
              </tr>   
              ))}  
             </tbody> 
            </table>
            <div style={{width: "100%", display: "flex"}}>
               <p style={{width: "50%", fontSize: "13px",color: "gray", textAlign: "left" }}>TOTAL TRADES: {totalItems}</p>
               <p style={{width: "50%", fontSize: "13px",color: "gray", textAlign: "right" }}>WIN-RATE: {winRate}%</p>
            </div>
          </div> 
        </div> 

        <div id='jr-home4' className={`tab-content ${activeTab === "jr-home4" ? "active" : "hidden"}`}>
          <div className='jr-header-bredcum'>
            <div onClick={() => showTab("jr-home")}>
              <img src={`${process.env.PUBLIC_URL}/images/core/bullchart.svg`} alt='bear chart' />
              <span>MY FOREX JOURNAL</span>
            </div>
            <span style={{fontSize: "20px"}}>/</span>
            <div onClick={() => showTab("jr-home2")}>
              <img src={`${process.env.PUBLIC_URL}/images/core/bearchart.svg`} alt='bear chart' />
              <span>2025</span>
            </div> 
          </div>

          {singleJrData ? (
            <div>
             <div>
              <div className='sj-head'>  
                {singleJrData.wl === "LOSS" ? ( 
                  <>
                    <span>&#128308;</span> 
                  </>
                  ) : singleJrData.wl === "WIN" ? (
                  <>
                    <span>&#128994;</span> 
                  </>
                  ) : (
                  <>
                    <span>&#128992;</span>  
                  </>
                )}   
                <h1>{singleJrData.pairs} </h1>
              </div> 
              <div className='sj-header-box'>
                <p><span>&#128205;</span>POSITION</p>
                <p><span className='tb-span-green'>{singleJrData.position}</span></p>
              </div>
              <div className='sj-header-box'>
                <p><span>&#9200;</span>SESSION</p>
                <p><span className='tb-span-blue'>{singleJrData.session}</span></p>
              </div>
              <div className='sj-header-box'>
                <p><span>&#128197;</span>DATE</p>
                <p><span className='tb-span-orange'>{singleJrData.date}</span></p>
              </div> 
              <div className='sj-header-box'>
                <p><span>&#128339;</span>TIME</p>
                <p><span className='tb-span-green'>{singleJrData.time}</span></p>
              </div> 
              <div className='sj-header-box'>
                <p><span>&#128202;</span>W/L</p>
                <p><span className='tb-span-gray'>{singleJrData.wl}</span></p>
              </div> 
              <div className='sj-header-box'>
                <p><span>&#128209;</span>RPT</p>
                <p><span className='tb-span-green'>{singleJrData.rpt}</span></p>
              </div>  
              <div className='sj-header-box'>
                <p><span>&#128259;</span>TRADE TYPE</p>
                <p><span className='tb-span-purple'>{singleJrData.tradetype}</span></p>
              </div> 
              <div className='sj-header-box'>
                <p><span>&#9989;</span>CONFIRMATION</p>
                <p><span className='tb-span-greenlight'>{singleJrData.confirmation}</span></p>
              </div> 
              <div className='sj-header-box'>
                <p><span>&#129504;</span>PSYCH.MANAGE</p>
                <p><span className='tb-span-red'>{singleJrData.psychManage}</span></p>
              </div>      
             </div>

             <div className='sj-container'>  
              {singleJrData.contents.map((content, index) => (
              <div key={index} className='sj-article-box'>
               {content.type === "image" ? (
               <img src={`${process.env.PUBLIC_URL}/images/jrimg/${content.src}`} alt={`Content ${index + 1}`} style={{ width: "100%", height: "auto" }} />
               ) : (
               <p>{content.content}</p>
               )}
              </div>
              ))} 
             </div>
            </div>
          ) : (
            <div><h2>No data available</h2></div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Fxjournal;
