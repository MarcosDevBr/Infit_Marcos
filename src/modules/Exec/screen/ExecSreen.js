import React from 'react'
import TemplateExec from '../templates/TemplateExec'
import ExecNavs from '../componets/ExecNavs'
import ExecText from '../componets/ExecText'

export default function ExecScreen() {
    return (
        <TemplateExec
            execNav={<ExecNavs />}
            exectext={<ExecText/>}
       />
    )
}