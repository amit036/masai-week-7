import React from 'react';
class NavbarMainComponents extends React.Component{
    render(){
        return (
            <>
              <span className="yourNxt"> Your Next</span><span className="office"> Office</span>
               <div className="features">
                   <span>
                       Flexible Office
                   </span>
                   &nbsp;
                   <span><i class="material-icons yellowCol">emoji_objects</i></span>
                   &nbsp;
                   <span>
                       Any Budget
                   </span>
                   &nbsp;
                   <span><i class="material-icons yellowCol">emoji_objects</i></span>
                   &nbsp;
                   <span>
                       Key Location
                   </span>
                   &nbsp;
                   <span><i class="material-icons yellowCol">emoji_objects</i></span>
                   &nbsp;
                   <span>
                       Great Hospitality
                   </span>
               </div>
               <div className="btnMargin">
                   <button className="btnOne">RENT COWORKING SPACE</button>
                   <button className="btnTwo">OWN COWORKING FRANCHISE</button>
               </div>
               <div className="scrollDwn">Scroll Down</div>
               <div className="scrollDwnIcon"><i class="material-icons">keyboard_arrow_down</i></div>
            </>
        );

    }
}
export default NavbarMainComponents;