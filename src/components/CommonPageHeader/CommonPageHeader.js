import React from 'react';
import { Link } from 'react-router-dom';

const CommonPageHeader = ({ title, level_1, level_2, level_3}) => {
   console.log('%cCommonPageHeader',"color:blue")
   return (
      <>
         <section className="page__title p-relative d-flex align-items-center fix">
            <div className="container p-relative">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="page__title-content mt-100">
                        <h2>{title}</h2>

                        <nav aria-label="breadcrumb">
                           <ol className="breadcrumb">
                              <li className="breadcrumb-item">{level_1}</li>
                              <li className="breadcrumb-item" aria-current="page">{level_2}</li>
                              {level_3 &&
                                  <li className="breadcrumb-item" aria-current="page">{level_3}</li>
                              }
                           </ol>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CommonPageHeader;