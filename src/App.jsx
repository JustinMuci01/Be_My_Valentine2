import { useState } from 'react'
import Start from './Start.jsx'
import Info from './Info.jsx'
import Question from './Question.jsx';
import Final from './Final.jsx'

function App() {

  const [state, setState] = useState('start');

  const views = {
    ['start']: <Start setState = {setState}/>,
    ['info']: <Info setState = {setState}/>,
    ['question']: <Question setState = {setState}/>,
    ['final'] : <Final></Final>
  };

  console.log(state)
  return (
    <div>
      {views[state] ?? <NotFound />}
    </div>
  );
}

export default App
