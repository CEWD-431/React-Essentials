
import Section from './Section';
import TabButton from './TabButton';
import Tabs from './Tabs';
import { EXAMPLES } from './data';
import { useState } from 'react';

export default function Examples () {
    const [ selectedTopic, setSelectedTopic ] = useState();
    function selectHandler (selectedButton) {
      // selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
    }
    let tabContent = 'Please click a button';
    if (selectedTopic) {
        tabContent =  <div id="tab-content">
                      <h3>{EXAMPLES[selectedTopic].title}</h3>
                      <p>{EXAMPLES[selectedTopic].description}</p>
                      <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                      </pre>
                    </div>
    }
    return (
        <Section title="Examples" id = "examples">
            <Tabs ButtonContainer="menu"
                buttons = {
                <>
                    <TabButton isSelected={selectedTopic==="components"} onSelect={() => selectHandler('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => selectHandler('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic==="props"} onSelect={() => selectHandler('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic==="state"} onSelect={() => selectHandler('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
  }
  