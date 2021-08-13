

const getProps = (targetList :Array<Array<string>>) => async function load ({ fetch }){
    const props = {};
    for (let index = 0; index < targetList.length; index++) {
        const [ path, key ] = targetList[index];
        
        const res = await fetch(path);
      //  if !(res.ok) {
      //  return {
        //  status: res.status,
        //  error: new Error()
       //  };
        //  }
        props[key] = await res.json();
    }
    return { props };
  }

export { getProps }
