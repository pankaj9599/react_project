

export default function User({user}){
    const {avatar_url,login,following,followers,url}=user;
 return <div className="profile_container">
  <div>
    <img src={avatar_url} alt="profile" />
  </div>
  <div style={{display:"flex",
    flexDirection:"row"
  }}>
        Name:-{login}
    <br />
    followers:-{followers}
    <br />
    following:-{following}

  </div>

    
 </div>
}