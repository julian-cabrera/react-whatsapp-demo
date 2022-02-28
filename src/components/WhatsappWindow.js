import ChatWindow from "./ChatWindow";

const WhatsappWindow = () => {
	return (
		<>
			<div className="position-absolute bottom-0 end-0 col-3 border p-1 m-3 card bg-success">
				<div id="wsp_number" className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="+1 324 654987"
					/>
				</div>
				<div id="wsp_textarea" className="mb-3">
					<textarea
						className="form-control"
						placeholder="Write your message!"
						style={{ resize: "none" }}
					/>
				</div>
				<button
					className="btn rounded-circle position-absolute bottom-0 end-0 m-1"
					style={{ backgroundColor: "#0DC143" }}
				>
					<svg width="16" height="16" fill="white" className="bi bi-send">
						<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
					</svg>
				</button>
			</div>
		</>
	);
};
export default WhatsappWindow;
