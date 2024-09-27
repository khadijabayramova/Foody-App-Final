 function Rectangle(props) {
  return (
    <div className="bg-bgcards  w-[55%] h-[55vh] p-5 rounded-[3%] ">
      <h1 className="text-2xl" >{props.title}</h1>
      <div className="flex justify-center items-center h-full " >{props.children}</div>
    </div>
  );
}
 
export default Rectangle