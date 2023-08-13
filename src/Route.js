import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './Components/Home';

import Home from './Pages/Home';
import CreateLaunch from './Components/launchpads/CreateLaunch';
import CreateToken from './Components/launchpads/CreateToken';
import LaunchpadList from './Components/launchpads/LaunchpadList';
import CreateAir from './Pages/Createair';
import Listair from './Pages/Listair';
import Leaderboard from './Pages/Leaderboard';
import Antibot from './Pages/Antibot'
import Multisender from './Pages/Multisender';
import Prisale from './Pages/Prisale';
import Prilist from './Pages/Prilist';
import Liquidity from './Pages/Liquidity';
import Lockpink from './Pages/Lockpink';
import Tokenpink from './Pages/Tokenpink';

import Pemon from './Components/Trending/Pemon';
import { Docs, Doc1, Doc2, Doc3, Doc4, Doc5, Doc6, Doc7, Doc8, Doc9, Doc10, Doc11, Doc12, Doc13, Doc14,Doc15, Doc16, Doc17, Doc18, Doc19, Doc20, Doc42,
  Doc21, Doc22, Doc23, Doc24, Doc25, Doc26, Doc27,Doc28, Doc29, Doc30, Doc31, Doc32, Doc33, Doc34,Doc35, Doc36, Doc37, Doc38, Doc39, Doc40, Doc41,
  Doc43, Doc44, Doc45, Doc46, Doc47, Doc48, Doc49, Doc50, Doc51, Doc52, Doc53, Doc54, Doc55, Doc56, Doc57, Doc58,
Doc59, Doc60, Doc61, Doc62, Doc63, Doc64, Doc65, Doc66, Doc67, Doc68, Doc69} from './Pages/Docs'

function RouteConfig() {
 
  return <>
	<div>
      <BrowserRouter>

        <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/createLaunch" element={<CreateLaunch />} />
        <Route path="/createToken" element={<CreateToken />} />
        <Route path="/launchpadList" element={<LaunchpadList />} />
        <Route path="/create-air" element={<CreateAir />} />
        <Route path="/list-air" element={<Listair />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/anti-bot" element={<Antibot />} />
        <Route path='/multisender' element={<Multisender/>}/>
        <Route path='/private-sale' element={<Prisale/>}/> 
        <Route path='/private-list' element={<Prilist/>}/>
        <Route path='/liquidity' element={<Liquidity/>}/>
        <Route path='/lockpink' element={<Lockpink/>}/>
        <Route path='/tokenpink' element={<Tokenpink/>}/>
        <Route path='/docs' element={<Docs/>}/>
          <Route path='/docs1' element={<Doc1/>}/>
          <Route path='/docs2' element={<Doc2/>}/>
          <Route path='/docs3' element={<Doc3/>}/>
          <Route path='/docs4' element={<Doc4/>}/>
          <Route path='/docs5' element={<Doc5/>}/>
          <Route path='/docs6' element={<Doc6/>}/>
          <Route path='/docs7' element={<Doc7/>}/>
          <Route path='/docs8' element={<Doc8/>}/>
          <Route path='/docs9' element={<Doc9/>}/>
          <Route path='/docs10' element={<Doc10/>}/>
          <Route path='/docs11' element={<Doc11/>}/>
          <Route path='/docs12' element={<Doc12/>}/>
          <Route path='/docs13' element={<Doc13/>}/>
          <Route path='/docs14' element={<Doc14/>}/>
          <Route path='/docs15' element={<Doc15/>}/>
          <Route path='/docs16' element={<Doc16/>}/>
          <Route path='/docs17' element={<Doc17/>}/>
          <Route path='/docs18' element={<Doc18/>}/>
          <Route path='/docs19' element={<Doc19/>}/>
          <Route path='/docs20' element={<Doc20/>}/>
          <Route path='/docs21' element={<Doc21/>}/>
          <Route path='/docs22' element={<Doc22/>}/>
          <Route path='/docs23' element={<Doc23/>}/>
          <Route path='/docs24' element={<Doc24/>}/>
          <Route path='/docs25' element={<Doc25/>}/>
          <Route path='/docs26' element={<Doc26/>}/>
          <Route path='/docs27' element={<Doc27/>}/>
          <Route path='/docs28' element={<Doc28/>}/>
          <Route path='/docs29' element={<Doc29/>}/>
          <Route path='/docs30' element={<Doc30/>}/>
          <Route path='/docs31' element={<Doc31/>}/>
          <Route path='/docs32' element={<Doc32/>}/>
          <Route path='/docs33' element={<Doc33/>}/>
          <Route path='/docs34' element={<Doc34/>}/>
          <Route path='/docs35' element={<Doc35/>}/>
          <Route path='/docs36' element={<Doc36/>}/>
          <Route path='/docs37' element={<Doc37/>}/>
          <Route path='/docs38' element={<Doc38/>}/>
          <Route path='/docs39' element={<Doc39/>}/>
          <Route path='/docs40' element={<Doc40/>}/>
          <Route path='/docs41' element={<Doc41/>}/>
          <Route path='/docs42' element={<Doc42/>}/>
          <Route path='/docs43' element={<Doc43/>}/>
          <Route path='/docs44' element={<Doc44/>}/>
          <Route path='/docs45' element={<Doc45/>}/>
          <Route path='/docs46' element={<Doc46/>}/>
          <Route path='/docs47' element={<Doc47/>}/>
          <Route path='/docs48' element={<Doc48/>}/>
          <Route path='/docs49' element={<Doc49/>}/>
          <Route path='/docs50' element={<Doc50/>}/>
          <Route path='/docs51' element={<Doc51/>}/>
          <Route path='/docs52' element={<Doc52/>}/>
          <Route path='/docs53' element={<Doc53/>}/>
          <Route path='/docs54' element={<Doc54/>}/>
          <Route path='/docs55' element={<Doc55/>}/>
          <Route path='/docs56' element={<Doc56/>}/>
          <Route path='/docs57' element={<Doc57/>}/>
          <Route path='/docs58' element={<Doc58/>}/>
          <Route path='/docs59' element={<Doc59/>}/>
          <Route path='/docs60' element={<Doc60/>}/>
          <Route path='/docs61' element={<Doc61/>}/>
          <Route path='/docs62' element={<Doc62/>}/>
          <Route path='/docs63' element={<Doc63/>}/>
          <Route path='/docs64' element={<Doc64/>}/>
          <Route path='/docs65' element={<Doc65/>}/>
          <Route path='/docs66' element={<Doc66/>}/>
          <Route path='/docs67' element={<Doc67/>}/>
          <Route path='/docs68' element={<Doc68/>}/>
          <Route path='/docs69' element={<Doc69/>}/>
        <Route path='/pemon' element={<Pemon/>}/>

        </Routes>
            
    </BrowserRouter>
        
	</div>
  </>
  }
  
  export default RouteConfig;
