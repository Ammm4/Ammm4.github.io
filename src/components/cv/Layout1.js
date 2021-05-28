import React from 'react';

function Layout({item}) {
  return (                              
    <div className="info">
    <h4 className="info-heading">{item.title}</h4>
       <table>
         <tbody>
           {item.listItems.map((item, index) => {
               return (<tr key={index.toString()}>
                         <td>{item[0]}</td>
                         <td>{item[1]}</td>
                         <td>{item[2]}</td>
                       </tr>)
           })
          }
        </tbody>
       </table>
</div>
 )
}


export default Layout;