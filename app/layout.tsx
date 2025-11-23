const style = "body { background-color: grey; align-items: center; justify-content: center; }";
const short = "https://www.youtube.com/shorts/eszgZ79GjRY";
export default function App() {
	return(
     <html>
			<body>
          <style>
					{style}
 			       </style>
				<em><h1>Hi, I'm Zain!</h1></em>
				<p> Welcome to my portfolio </p>
                                <p> Technologies learned: JavaScript React Python Next </p>
                     	                <iframe src={short}></iframe>
 					                           <p>A Short</p>
				</body>
			</html>
	);
}
                                      
				
