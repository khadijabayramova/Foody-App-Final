function Square(props) {
  return (
    <div className="bg-bgcards flex flex-col gap-2  w-[45%] h-[55vh]  p-6  rounded-[3%] ">
      <h1 className="text-2xl ">{props.title}</h1>
      <div className="flex justify-center items-center h-[90%]   ">{props.children}</div>
    </div>
  );
}

export default Square;

