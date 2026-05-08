import Hello from "./component/Hello";
import Date from "./component/Date";

function App() {
  return (
    <>
      <Date />
      <Hello name="Gideon" date= {20} message= "You are trying"/>
      <Hello name="Aaron" date= {67} message= "God is good"/>   
      <Hello name="Sarah" date= {67} message= "God is good"/>   
    </>   
  );    
}   
export default App;   
