import { Routes as Rutas, Route } from 'react-router-dom';

import { useMediaQuery, useTheme } from '@mui/material';
import useStatusChecker from './firebase/statusCheck'
import { Detail, MainHome, Landing, AdminPanel, NotFound } from './pages';



import { Navbar, Social, Footer  } from './components';
import Wishes from './components/Wishes/AddtoWishes';
import Purchases from './components/Purchases/Purchases';




const Routes = () => {
	//solve conflictos
	useStatusChecker()
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Navbar />
			<Rutas>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/home" element={<MainHome />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path='/wishes' element={<Wishes/>} />
				<Route path='/admin' element={<AdminPanel/>} />
				<Route path = '*' element = {<NotFound/>}/>
				<Route path='/purchases' element={<Purchases/>} />
			</Rutas>
			<Footer />
		</>
	);
};

export default Routes;
