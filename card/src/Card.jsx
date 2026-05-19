import ProfilePic from './assets/profile.jpg'
function  Card() {


    return(
        <div className="card">
            <img className="card-img" src={ProfilePic} alt="profilr picture"></img>
            <h2 className="card-title">Ordinary Guy</h2>
            <p>Computer scientist and a plaintain chips addict</p>

        </div>

    );
}

export default Card;