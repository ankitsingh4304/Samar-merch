import './merchandise.css'
import { useState } from 'react';
import {RazorpayButton,RazorpayButton2,RazorpayButton4} from './payment.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SizeChart from './sizechart.jsx'



function Merchandise() {

	const styles = {
		container: {

		  fontFamily: "Arial, sans-serif",
		  marginTop: "20px",
		},
		counter: {
		  display: "flex",

		  alignItems: "center",
		  gap: "10px",
		},
		button: {
		  backgroundColor: "white",
		  color: "black",
		  border: "1px solid #ccc",
		  borderRadius: "4px",
		  padding: "5px 10px",
		  fontSize: "18px",
		  cursor: "pointer",
		},
		value: {
		  fontSize: "30px",
		  fontWeight: "bold",
		},
		total: {
		  marginTop: "20px",
		  fontSize: "18px",
		  fontWeight: "bold",
		},
		amount: {
		  color: "white",
		},
	  };


	const [count, setCount] = useState(1); // Default count is 1
	const pricePerItem = 100; // Price for one unit

	// Handlers for increment and decrement
	const names = {
		1: "Overall Coordinator",
		2: "Head Coordinator",
		3: "Core Coordinator",
		4: "Executives"
	};
	const increment = () => setCount(count < 4 ? count + 1 : 4);
	const decrement = () => setCount(count > 1 ? count - 1 : 1); 

	const buttonMap = {
		1: <RazorpayButton />,
		2: <RazorpayButton2 />,
		3: <RazorpayButton4 />
	  };

	  const imgarray ={
		1: "src/assets/customIllustration/merch1.jpeg",
		2: "src/assets/customIllustration/merch2.jpeg",
		3: "src/assets/customIllustration/merch3.jpg",
		4: "src/assets/customIllustration/merch4.jpg"
	  }
	  const amount ={
		1: 400,
		2: 300,
		3: 200,
		4: 100
	  }
	
	return (
		<div className="cu-main">
			
			<div class="heading_merch">TEAM MERCHANDISE</div>
			<div class="cu_main">
				
				<div class="cu_container">
					<div className="mid-section">
						<img src={imgarray[count]} alt="Merch 1" class="cu-main-image" id="1"  />
						<div class="plus" style={styles.counter}>
							<button class="sign-left" onClick={decrement} style={styles.button}><FontAwesomeIcon icon={faArrowLeft} /></button>
							<span class="team-name" style={styles.value}>{names[count]}</span>
							<button class="sign-right" onClick={increment} style={styles.button}><FontAwesomeIcon icon={faArrowRight} /></button>
						</div>

					</div>
					
					<div class="cu-right-section">
						<p class="cu-maintext">SAMAR 2025 MERCH</p>
						<p class="cu-subtext">Fuel your passion for the game!</p>
						<div class="cu-special-offer">
							<p class="cu-special-text">it's all about celebrating your team. <br />Wear your pride, live the action!</p>
						</div>
							<div className="samar-sizes"><SizeChart /></div>
							

							<div  style={styles.container}>
								<div class="plus" style={styles.total}>
									<span>Total Amount: </span>
									<span style={styles.amount}>{amount[count]}/-</span>
								</div>
							</div>
							<div class="merch-btn">{buttonMap[count]}</div>
							
							
							
							<p class="cu-disclaimer"><span>Disclaimer:</span> Delivery Available Only in Raipur.</p>
						</div>
				</div>
			</div>
			
			
		</div>
	)
}

export default Merchandise;