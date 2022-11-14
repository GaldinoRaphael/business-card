import ProfilePhoto from '../imgs/profile-photo.jfif'

export default function Photo(){
    return (
        <figure className="profile-photo-container">
            <img class="profile-photo" src={ProfilePhoto} alt="Profile" ></img>
        </figure>
    )
}