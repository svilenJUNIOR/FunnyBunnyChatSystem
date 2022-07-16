import "./Styles/All.css"
import { BunnyPartial } from "../Partials/BunnyPartial";

export const All = (props) => {
    return (

        <div>
            <h1>Don't be shy and check out all available bunnies</h1>

            <table className="AllBunnies">
                <tbody>
                    {props.bunnies.map(bunny => <BunnyPartial key={bunny._id} {...bunny}/>)}
                </tbody>
            </table>

        </div>
    )
};