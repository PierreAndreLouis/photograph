import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des pages Web
import Home from './components/web_pages/home/homePage';
import Search from './components/web_pages/search/Search';
import About from './components/web_pages/about/About_page';
import Contact_page from './components/web_pages/contact/Contact_page';
import FormulaireReservation from './components/web_pages/reservation/FormulaireReservation';
import BlogPage from './components/web_pages/blog/BlogPage';
import BlogDetails from './components/web_pages/blog/BlogDetails';
import SignIn from './components/web_pages/sign_in/Signin';
import SignUp from './components/web_pages/sign_up/SignUp';
import Header from './components/web_pages/home/Header';

// Importation des composants du tableau de bord
import PrivateRoute from './components/dashboard/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import OnlyAdminPrivateRoute from './components/dashboard/OnlyAdminPrivateRoute';
import UpdatePost from './components/dashboard/UpdatePost';
import ScrollToTop from './components/dashboard/ScrollToTop';
import ProductPage from './components/web_pages/product/ProductPage';


export default function App() {
  return (
    <BrowserRouter>
      {/* Composant pour faire défiler vers le haut */}
      <ScrollToTop />

      {/* Composant d'en-tête */}
      <Header />

      <Routes>
        {/* Routes publiques */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/contact' element={<Contact_page />} />
        <Route path='/reservation' element={<FormulaireReservation />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/post/:postSlug' element={<BlogDetails />} />

        {/* Routes protégées */}
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        {/* Routes réservées aux administrateurs */}
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


