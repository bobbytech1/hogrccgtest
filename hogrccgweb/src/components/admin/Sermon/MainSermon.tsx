import Sermon from "./Sermon"
import SermonCon from "./SermonCon"
const MainSermon = () => {
    return(
        <>
        <div className="space-y-6">
        <SermonCon />
            <Sermon />
        </div>
        </>
    )
}
export default MainSermon;