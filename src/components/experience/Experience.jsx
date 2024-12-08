import React from 'react'
import './experience.css'
import styled from "styled-components";
import project1 from '../../assets/ss.png'
import project2 from '../../assets/pr2.png'


const Experience = () => {

  const liveDemoLinks = {
    personalSite: "https://yogamnan-web.vercel.app/",
    project1: "https://your-project1-demo-link.com",
    project2: "https://your-project2-demo-link.com",
    project3: ""
  };

  const sourceCodeLinks = {
    personalSite: "https://github.com/Yogamnan",
    project1: "https://github.com/your-project1",
    project2: "https://github.com/your-project2",
    project3: ""
  };
  return (
    <StyledWrapper>
      <div className="card-experience-container" id='experience'>
        <div className="card-experience">
          <img className="svg" src={project1} alt="project background" />
          <div className="card__content">
            <p className="card__title">Personal-Site</p>
            <p className="card__description">
              Ini adalah web berbasis frame work React Js pertama saya.
            </p>
            <button className="card__button" onClick={() => window.open(liveDemoLinks.personalSite, '_blank')} >Live Demo</button>
            <button className="card__button secondary" onClick={() => window.open(sourceCodeLinks.personalSite, '_blank')}>Source Code</button>
          </div>
        </div>

        <div className="card-experience">
          <img className="svg" src={project2} alt="project background" />
          <div className="card__content">
            <p className="card__title">Cinema-Vers</p>
            <p className="card__description">
              Ini web berbasis frame work Reack Js membuat website seperti netflix secara sederhana, saya menggunakan icon AI untuk mempermudah pengerjaan .
            </p>
            <button className="card__button">Live Demo</button>
            <button className="card__button secondary" onClick={() => window.open(sourceCodeLinks.personalSite, '_blank')}>Source Code</button>
          </div>
        </div>

        <div className="card-experience">
          <img className="svg" src={project1} alt="project background" />
          <div className="card__content">
            <p className="card__title">Project Name</p>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <button className="card__button">Live Demo</button>
            <button className="card__button secondary">Source Code</button>
          </div>
        </div>

        <div className="card-experience">
          <img className="svg" src={project2} alt="project background" />
          <div className="card__content">
            <p className="card__title">Project Name</p>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <button className="card__button">Live Demo</button>
            <button className="card__button secondary">Source Code</button>
          </div>
        </div>
      </div>

    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
.card-experience-container {

  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Agar card membungkus ke baris kedua */
  gap: 20px;
  max-width: 800px; /* Batasi lebar kontainer */
  margin: 0 auto;
  min-height: 80vh;
  padding-top: 40px; /* Atur padding atas */
  padding-bottom: 40px; /* Atur padding bawah */
}

.card-experience {
  flex-basis: calc(50% - 20px); /* Setiap card mengambil 50% dari lebar kontainer, dikurangi gap */
  max-width: 350px; /* Batasi lebar maksimum card */
  width: 100%; /* Agar card bersifat responsif */
  aspect-ratio: 16/9;
  background-color: black;
  border-radius: 10px;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 3px var(--main-color);
  max-height: 200px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
}


.card-experience svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.svg {
  width: 100%;
  height: 100%;
}

.card-experience:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #080808;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-experience:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 20px;
  color: #333;
  font-weight: 700;
}

.card-experience:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 10px;
  font-size: 12px;
  color: #777;
  line-height: 1.4;
}

.card__button {
  padding: 15px;
  border-radius: 8px;
  background: #777;
  border: none;
  color: white;
}

.secondary {
  background: transparent;
  color: #777;
  border: 1px solid #777;
}

`;



//   return (
//     <StyledWrapper>
//       <div className='card-experience'>
//       <article className="article-wrapper">
//         <div className="rounded-lg container-project">
//           <img className="foto-card" src={bgc} alt="" />
//         </div>
//         <div className="project-info">
//           <div className="flex-pr">
//             <div className="project-title text-nowrap">Project</div>
//             <div className="project-hover">
//               <svg
//                 style={{ color: "white" }}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="2em"
//                 height="2em"
//                 color="black"
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <line y2="12" x2="19" y1="12" x1="5" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </div>
//           </div>
//           <div className="types">
//             <span
//               style={{
//                 backgroundColor: "rgba(165, 96, 247, 0.43)",
//                 color: "rgb(85, 27, 177)",
//               }}
//               className="project-type"
//             >
//               &bullet; Analytics
//             </span>
//             <span className="project-type">&bullet; Dashboards</span>
//           </div>
//         </div>
//       </article>
//       <article className="article-wrapper">
//         <div className="rounded-lg container-project">
//           <img className="foto-card" src={bgc} alt="" />
//         </div>
//         <div className="project-info">
//           <div className="flex-pr">
//             <div className="project-title text-nowrap">Project</div>
//             <div className="project-hover">
//               <svg
//                 style={{ color: "white" }}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="2em"
//                 height="2em"
//                 color="black"
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <line y2="12" x2="19" y1="12" x1="5" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </div>
//           </div>
//           <div className="types">
//             <span
//               style={{
//                 backgroundColor: "rgba(165, 96, 247, 0.43)",
//                 color: "rgb(85, 27, 177)",
//               }}
//               className="project-type"
//             >
//               &bullet; Analytics
//             </span>
//             <span className="project-type">&bullet; Dashboards</span>
//           </div>
//         </div>
//       </article>
//       <article className="article-wrapper">
//         <div className="rounded-lg container-project">
//           <img className="foto-card" src={bgc} alt="" />
//         </div>
//         <div className="project-info">
//           <div className="flex-pr">
//             <div className="project-title text-nowrap">Project</div>
//             <div className="project-hover">
//               <svg
//                 style={{ color: "white" }}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="2em"
//                 height="2em"
//                 color="black"
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <line y2="12" x2="19" y1="12" x1="5" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </div>
//           </div>
//           <div className="types">
//             <span
//               style={{
//                 backgroundColor: "rgba(165, 96, 247, 0.43)",
//                 color: "rgb(85, 27, 177)",
//               }}
//               className="project-type"
//             >
//               &bullet; Analytics
//             </span>
//             <span className="project-type">&bullet; Dashboards</span>
//           </div>
//         </div>
//       </article>
//       <article className="article-wrapper">
//         <div className="rounded-lg container-project">
//           <img className="foto-card" src={bgc} alt="" />
//         </div>
//         <div className="project-info">
//           <div className="flex-pr">
//             <div className="project-title text-nowrap">Project</div>
//             <div className="project-hover">
//               <svg
//                 style={{ color: "white" }}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="2em"
//                 height="2em"
//                 color="black"
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <line y2="12" x2="19" y1="12" x1="5" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </div>
//           </div>
//           <div className="types">
//             <span
//               style={{
//                 backgroundColor: "rgba(165, 96, 247, 0.43)",
//                 color: "rgb(85, 27, 177)",
//               }}
//               className="project-type"
//             >
//               &bullet; Analytics
//             </span>
//             <span className="project-type">&bullet; Dashboards</span>
//           </div>
//         </div>
//       </article>
//       </div>

//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
// .card-experience {
//   display: grid;
//   width: 40px;
//   grid-template-columns: repeat(2, 1fr); /* 2 kolom grid */
//   justify-content: center; /* Memusatkan grid secara horizontal */
//   align-items: center; /* Memusatkan item secara vertikal jika ada lebih banyak ruang */
//   grid-gap: 20px; /* Jarak antar card */

//   max-width: 800px; /* Batasi lebar kontainer */
//   margin: 0 auto; /* Kontainer di tengah halaman */
//   padding: 20px;
// }

// .article-wrapper {
//   background-color: #f8f8f8;
//   padding: 10px;
//   border-radius: 8px;
//   width: 100%; /* Pastikan card memenuhi kolom grid */
// }



//   .article-wrapper {
//   width: 250px;
//   -webkit-transition: 0.15s all ease-in-out;
//   transition: 0.15s all ease-in-out;
//   border-radius: 10px;
//   padding: 5px;
//   border: 4px solid transparent;
//   cursor: pointer;
//   background-color: black;
// }

// .article-wrapper:hover {
//   -webkit-box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
//   box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
//   border-color: #0578c5;
//   -webkit-transform: translate(-20px, -20px);
//   -ms-transform: translate(-20px, -20px);
//   transform: translate(-20px, -20px);
// }

// .article-wrapper:active {
//   -webkit-box-shadow: none;
//   box-shadow: none;
//   -webkit-transform: translate(0, 0);
//   -ms-transform: translate(0, 0);
//   transform: translate(0, 0);
// }

// .types {
//   gap: 10px;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   place-content: flex-start;
// }

// .rounded-lg {
//  /* class tailwind */
//   border-radius: 10px;
// }

// .article-wrapper:hover .project-hover {
//   -webkit-transform: rotate(-45deg);
//   -ms-transform: rotate(-45deg);
//   transform: rotate(-45deg);
//   background-color: #a6c2f0;
// }

// .project-info {
//   padding-top: 20px;
//   padding: 10px;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   gap: 20px;
// }

// .project-title {
//   font-size: 2em;
//   margin: 0;
//   font-weight: 600;
//  /* depend de la font */
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   color: var(--text-color);
// }

// .flex-pr {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-pack: justify;
//   -ms-flex-pack: justify;
//   justify-content: space-between;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
// }

// .project-type {
//   background: #b2b2fd;
//   color: #1a41cd;
//   font-weight: bold;
//   padding: 0.3em 0.7em;
//   border-radius: 15px;
//   font-size: 12px;
//   letter-spacing: -0.6px
// }

// .project-hover {
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   padding: 9px;
//   -webkit-transition: all 0.3s ease;
//   transition: all 0.3s ease;
// }

// .container-project {
//   width: 100%;
//   height: 170px;
// }
// .foto-card{
//   width: 100%;
//   height: 170px;
// }

// `;


export default Experience