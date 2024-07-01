const Welcome=(props)=>
{
    const{name,greeting}=props;
    return(<h1>{greeting},{name}</h1>);
};
export default Welcome;
