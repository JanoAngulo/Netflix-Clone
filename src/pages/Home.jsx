import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Requests";

const Home = () => {
	return (
		<>
			<Main />
      <Row rowID='1' title="Now Playing" fetchURL={request.requestPlaying} />
			<Row rowID='2' title="Up Coming" fetchURL={request.requestUpcoming} />
			<Row rowID='3' title="Top Rated" fetchURL={request.requestTopRated} />
			<Row rowID='4' title="Popular" fetchURL={request.requestPopular} />
		</>
	);
};

export default Home;
