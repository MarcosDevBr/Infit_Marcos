import React from 'react'
import { Card } from 'antd';


export default function CardPessoa({pessoa, cebolinha}) {
  
  
  return(

    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title={pessoa.username} bordered={false} style={{ width: 300 }}>


      
     <Card title='email' bordered={false} style={{ width: 250 }}>
     <p>Email: {pessoa.email}</p>
     </Card>



     
     
      <Card title='Endereço' bordered={false} style={{ width: 250   }}>

      <p>City: {pessoa.address.city}</p>
      <p>Street: {pessoa.address.street}</p>
      <p>Suite: {pessoa.address.suite}</p>
      <p>Zipcode: {pessoa.address.zipcode}</p>

        
        <Card title='Geo' bordered={false} style={{ width: 200   }}>
        <p>Lat: {pessoa.address.geo.lat}</p>
        <p>Lng: {pessoa.address.geo.lng}</p>
        
        </Card>
     </Card>
      
     <Card title='phone' bordered={false} style={{ width: 250   }}>
     <p>Phone: {pessoa.phone}</p>
     </Card>

     <Card title='website' bordered={false} style={{ width: 250   }}>
     <p>Website: {pessoa.website}</p>
     </Card>
     

     
     <Card title='company' bordered={false} style={{ width: 250   }}>
     <p>Name: {pessoa.company.name}</p>
      <p>CatchPhrase: {pessoa.company.catchPhrase}</p>
      <p>Bs: {pessoa.company.bs}</p>
      <button
        onClick={() => cebolinha(pessoa.id)}
      >
        Excluir
      </button>
     </Card>
  
 </Card>
  </div>
  )
}