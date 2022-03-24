export const ChatInput = () => {
  return (
    <div id="wsp-chatinfo" className="row row-cols-2 p-1 bg-dark  border-gray">
      <div className="col-2 w-auto h-100">
        <input type="text" />
      </div>
      <div className="col-10">
        <button>mic</button>
      </div>
    </div>
  );
};
