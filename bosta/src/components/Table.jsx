import React, { useState } from 'react';
import "./Table.css";
import Navbar from './Navbar';
import MultiStepProgressBar from './Stepbar';
import "./stepbar.css"



const Table = () => {
   
  return (

    <><><><table className="my-table">
          <thead>
              <tr>
                  <th>Number of Shipment</th>
                  <th>Last Edited</th>
                  <th>Shop Name</th>
                  <th>Arrive On</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className='forit'>Shipment Canceled</td>
                  <td>Monday 06/04/2020 at 5:22pm</td>
                  <td>SOUQ.COM</td>
                  <td>3 January 2020</td>
              </tr>

              <tr>

              </tr>

          </tbody>
      </table>
          <div>
              <MultiStepProgressBar />
          </div>

          <h4 className='labels'>
              Shipment<br/> Accepted</h4>


      </><table className='my-table1'>
              <thead>
                  <div> Address</div>
                  <tr>
                      <th>Imbaba, Giza, new cairo <br />
                          Appartment 3, Cairo,Egypt

                      </th>

                  </tr>
              </thead>
          </table></><table className="my-table2">
              <thead>
                <div> Shipment Details</div>
                  <tr>
                      <th>Branch</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Details</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Madinet Nasr</td>
                      <td>05/04/2020</td>
                      <td>12:30pm</td>
                      <td>Shipment Accepted</td>
                  </tr>
                  <tr>
                      <td>Madinet Nasr</td>
                      <td>05/04/2020</td>
                      <td>12:30pm</td>
                      <td>Shipment Taked From Retailer</td>
                  </tr>
                  <tr>
                      <td>Madinet Nasr</td>
                      <td>05/04/2020</td>
                      <td>12:30pm</td>
                      <td>Shipment Out For Delivery</td>
                  </tr>
                  <tr>
                      <td>Madinet Nasr</td>
                      <td>05/04/2020</td>
                      <td>12:30pm</td>
                      <td>Shipment No Delivered</td>
                  </tr>

              </tbody>

          </table></>

          
  );
}

export default Table

