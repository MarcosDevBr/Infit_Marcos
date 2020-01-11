import React, { useState } from 'react'
import { Modal, Button } from 'antd';


export default function ModalExercicios() {

  const [visible, setVisible] = useState(false)


  function chamadaGenerica(cebolinha) {
    setVisible(cebolinha)
  }
  
  return(
    <div>
      <Button type="primary"
      onClick={() => chamadaGenerica(true)}
      >Open Modal
      </Button>



      <Modal

        onOk={() => chamadaGenerica(false)}
        onCancel={() => chamadaGenerica(false)}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
                      
      </Modal>



    </div>
                )
              }