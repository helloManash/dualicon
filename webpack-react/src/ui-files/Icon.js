

function Icon({item}) {

    const onHandleClick = () => {
        parent.postMessage({ pluginMessage: { type: "Click" } }, "*");
      };
    const icon = item.find(item => item.name === name);
    
    return (
      <div dangerouslySetInnerHTML={{__html: icon.content}} oncClick={onHandleClick}/>
    );
  }
export default Icon;