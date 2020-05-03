import './App.css'
import React from 'react'
import First from './Components/First'
import WithParameter from './Components/WithParameter'
import WithChildren from './Components/WithChildren'
import Card from './Components/layout/Card'
import Repetition from './Components/Repetition'
import Conditional from './Components/Conditional'
import ConditionalWithIf from './Components/ConditionalWithIf'

export default (props) => (
    <div className="App">
    
        <Card title="#06 - Conditional v2">
            <Conditional number={9}></Conditional>
        </Card>            

        <Card title="#05 - Conditional v1">
            <Conditional number={9}></Conditional>
        </Card>

        <Card title="#04 - Repetition">
            <Repetition></Repetition>
        </Card>

        <Card title="#03 - Component With Children">
            <WithChildren>
            <ul>
                <li>Children1</li>
                <li>Children2</li>
                <li>Children3</li>
                <li>Children4</li>
            </ul>       
            </WithChildren> 
        </Card>
        
        <Card title="#02 - Component With Parameter">
            <WithParameter 
                title='title example with props' 
                subtitle='subtitle example with props'>       
            </WithParameter>    
        </Card>
        
        <Card title="#01 - First Component">
            <First></First>
        </Card>

        {/* <Card title="Exercise x">
            Content
        </Card> */}
    </div>
)
    

