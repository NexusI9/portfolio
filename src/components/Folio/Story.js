const Story = ({paragraphs, dark=false}) => (
    <div className={'story' + (dark ? ' dark' : '') }>
      <h2><span></span> The Story </h2>
      <section>{paragraphs.map( p => <p key={'story'+Math.random()}>{p}</p>)}
    </section></div>
);

export default Story;