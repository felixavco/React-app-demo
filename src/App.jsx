import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';
import ErrorBundary from './components/errorpages/ErrorBundary';
const Landing = lazy(() => import('./components/landing/Landing'));
const UsersList = lazy(() => import('./components/users/UsersList'));


function App() {
  return (
    <div className="App">
      <ErrorBundary>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/users" component={UsersList} />
            </Switch>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </ErrorBundary>
    </div>
  );
}

export default App;
