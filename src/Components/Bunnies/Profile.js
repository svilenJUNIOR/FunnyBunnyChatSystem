import "./Styles/Profile.css"
import { ProfilePartial } from "../Partials/ProfilePartial";

export const Profile = (props) => {

    var print = () => {
        console.log(props.me._id)
    }
    return (
        <div>
            <button onClick={print}>ewffew</button>;
            <h1 className="ProfileHeading">My Profile</h1>

            {<ProfilePartial key={props.me._id}/>}

        </div>
    );
}