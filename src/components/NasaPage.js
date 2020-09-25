import React from 'react'
import Description from './Description'
import Footer from './Footer'
import Header from './Header'
import HoverPage from './HoverPage'
import Title from './Title'
import {
    Card, CardBody,
  } from 'reactstrap';
import BackgroundImagePage from './BackgroundImagePage'

const NasaPage = (props) => {
  return (
      <div>
    <div>
    <Header/>
      <Card>
        <CardBody>
           <Title imgTitle = {props.data.title} date = {props.data.date}/>
           {/* <Img photo = {props.data.hdurl}/> */}
           <HoverPage photo = {props.data.hdurl}/>
           <Description desc = {props.data.explanation}/>
        </CardBody>
      </Card>
      <Footer/>
    </div>
    </div>
  );
};

export default NasaPage











// export default function NasaPage() {

//     const [dailyData, setDailyData] = useState([]);

//     const effectFn = () => {
//         axios
//         .get(`https://api.nasa.gov/planetary/apod?api_key=xKkue9hehQ8u0qeYqF9dFZPov8qynnnbGfkxg3ue`)
//         .then((res) => {
//             setDailyData(res.data)
//             console.log(res);
//         })
//         .catch((error) => console.log(error));
//     }
//     useEffect(effectFn, []);
//     console.log(dailyData);

//     return <div>NasaPage</div>;
// }
