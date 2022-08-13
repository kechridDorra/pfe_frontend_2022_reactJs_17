import React, { useEffect } from 'react';
import Users from './components/user/list/Users';
import Article from './components/article/Article';

import Encheres from './components/visiteur/encheres/Encheres'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//visituer
import Inscription from './components/inscription/Inscription';
import Login from './components/login/Login';
import AccueilUser from './components/user/accueilUser/AccueilUser';

import Cat1 from './components/visiteur/categorie/cat1/Cat1';
import Cat2 from './components/visiteur/categorie/cat2/Cat2';
import Cat3 from './components/visiteur/categorie/cat3/Cat3';
import Cat4 from './components/visiteur/categorie/cat4/Cat4';
import Cat5 from './components/visiteur/categorie/cat5/Cat5';
import Cat6 from './components/visiteur/categorie/cat6/Cat6';
import Cat7 from './components/visiteur/categorie/cat7/Cat7';
import Cat8 from './components/visiteur/categorie/cat8/Cat8';
import Cat9 from './components/visiteur/categorie/cat9/Cat9';
import Appels from './components/visiteur/appels/Appels';
import DetailEnch from './components/visiteur/detail/DetailEnch';
//user
import Profil from './components/user/profil/Profil';
import ModifierProfil from './components/user/profil/modifierProfil/ModifierProfil';
import Accueil from './components/Accueil';
import EncheresPlanifiees from './components/user/encheres/encheresPlanifiees/EncheresPlanifiees';
import ParticipantsPlanifiees from './components/user/encheres/encheresPlanifiees/participantsPlanifiees/ParticpationsPlanifiees';
import EncheresEnCours from './components/user/encheres/encheresEnCours/EncheresEnCours';
import ParticipantsEnCours from './components/user/encheres/encheresEnCours/participantsEnCours/ParticipantsEnCours';
import EncheresTerminees from './components/user/encheres/encheresTerminees/EncheresTerminees';
import ParticipantsTerminees from './components/user/encheres/encheresTerminees/participantsTerminees/ParticipantsTerminees';
import AppelOffres from './components/user/appelOffre/appelOffres/AppelOffres';
import RejointEnchereEC from './components/user/encheres/rejointEnchereEC/RejointEnchereEC';

//import AjoutArticle from './components/vendeur/ajoutArticle/AjoutArticle';
import EncheresT from './components/visiteur/encheresT/EncheresT';
import MesAppelOffres from './components/user/appelOffre/mesAppelOffres/MesAppelOffres';
import AjoutAppelOffre from './components/user/appelOffre/ajoutAppelOffre/AjoutAppelOffre';
//vendeur
import InscriVendeur from './components/vendeur/inscriVendeur/InscriVendeur';
import AjoutArticle from './components/vendeur/ajoutArticle/AjoutArticle';
import ReponseAppel from './components/vendeur/reponseAppel/ReponseVendeur';
import CreerEnchere from './components/vendeur/creerEnchere/CreerEnchere';
import MesEncheres from './components/vendeur/mesEncheres/MesEncheres';
import MesParticipants from './components/vendeur/mesEncheres/mesParticipants/MesParticipants';



export default function App() {
  return (
  <>  
   
   <BrowserRouter>
      <Routes>
        //visiteur
        <Route path="/login" element={<Login/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/users" element={<Users/>} />
        <Route exact path="/" element={<Accueil/>} />
        <Route path="/encheres" element={<Encheres/>} />
        <Route path="/categorie1" element={<Cat1/>} />
        <Route path="/categorie2" element={<Cat2/>} />
        <Route path="/categorie3" element={<Cat3/>} />
        <Route path="/categorie4" element={<Cat4/>} />
        <Route path="/categorie5" element={<Cat5/>} />
        <Route path="/categorie6" element={<Cat6/>} />
        <Route path="/categorie7" element={<Cat7/>} />
        <Route path="/categorie8" element={<Cat8/>} />
        <Route path="/categorie9" element={<Cat9/>} />
        <Route path="/encheresT" element={<EncheresT/>} />
        <Route path="/appels" element={<Appels/>}/>
        <Route path= "/detailEnch/:enchere" element={<DetailEnch/>}/>
        
  
        //user
        <Route exact path="/accueil" element={<AccueilUser/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/modifierProfil/:id" element={<ModifierProfil/>} />
        <Route path="/encheresPlanifiees" element={<EncheresPlanifiees/>} />
        <Route path="/participantsPlanifiees/:enchere" element={<ParticipantsPlanifiees/>} />
        <Route path="/encheresTerminees" element={<EncheresTerminees/>} />
        <Route path="/participantsTerminees/:enchere" element={<ParticipantsTerminees/>} />
        <Route path="/encheresEnCours" element={<EncheresEnCours/>} />
        <Route path="/participantsEnCours/:enchere" element={<ParticipantsEnCours/>} />
        <Route path="/appelOffres" element={<AppelOffres/>}/>
        <Route path="/mesAppelOffres" element={<MesAppelOffres/>}/>
        <Route path="/ajoutAppelOffre" element={<AjoutAppelOffre/>}/>
        <Route path="/rejointEnchereEC/:enchere" element={<RejointEnchereEC/>}/>

        //vendeur
        <Route path="/inscriVendeur" element={<InscriVendeur/>} />
        <Route path="/creerEnchere/:profil_vendeur" element={<CreerEnchere/>} />
        <Route path="/ajoutArticle" element={<AjoutArticle/>} />
        <Route path="/reponseAppel" element={<ReponseAppel/>} />
        <Route path="/ajoutArticle/:enchere" element={<AjoutArticle/>} />
        <Route path="/mesEncheres" element={<MesEncheres/>} />
        <Route path="/MesParticipants/:enchere" element={<MesParticipants/>} />
        //visiteur
        
      </Routes>
   </BrowserRouter>

</>
  );}