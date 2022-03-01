import axios from "axios";
import { useState } from "react";

const WhatsappWindow = () => {
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState(0);

	const sendMessage = (number, message) => {
		if (number !== 0 && message !== "") {
			const payload = {
				chatId: number + "@c.us",
				body: message,
			};
			axios
				.post(`http://localhost:8080/webhook/send`, payload)
				.then((data) => console.log(data))
				.catch((err) => console.log(err));
		}
	};
	return (
		<div className="position-absolute bottom-0 end-0 col-3 border p-1 m-3 card bg-success border-dark">
			<div className="d-flex justify-content-end">
				<button className="btn text-light">X</button>
			</div>
			<div id="wsp_number" className="mb-3 input-group">
				<span className="input-group-text text-white bg-success border-success fw-bold">
					+
				</span>
				<input
					type="text"
					placeholder="+1 324 654987"
					className="form-control rounded-3"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
			</div>
			<div id="wsp_textarea" className="mb-3 d-flex justify-content-end">
				<textarea
					className="form-control"
					placeholder="Write your message!"
					style={{ resize: "none" }}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
			<div className="d-flex justify-content-end">
				<button
					className="btn rounded-circle end-0 m-1 position-absolute bottom-0 end-0"
					style={{ backgroundColor: "#0DC143" }}
					onClick={() => sendMessage(number, message)}
				>
					<svg width="16" height="16" fill="white" className="bi bi-send">
						<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
					</svg>
				</button>
			</div>
		</div>
	);
};
export default WhatsappWindow;
