import React from 'react'
import PropTypes from "prop-types";

export const ProfileComponent = ({fullName, bio, profession, children,handleName}) => {
  const styleObject={width: '18rem',margin:'50px'};
    return (
    <>
        <div className="card" style={styleObject}>
             {children}
                <div className="card-body">
                <h5 className="card-title">{fullName}</h5>
                <p className="card-text">{bio}</p>
                <p className="card-text">{profession}</p>
                <a href="#" className="btn btn-primary" onClick={(e)=>{e.preventDefault;handleName(fullName)}}>HandleName</a>
                </div>
        </div>

    </>
  )
}

ProfileComponent.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
};
