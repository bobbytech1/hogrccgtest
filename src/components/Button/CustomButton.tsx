import {Link} from "react-router-dom";

interface CustomButtonProps{
    to: string,
    onPress?: any,
    btnStyle: string,
    txtStyle: string,
    txt:string,
    icon?: any
}

const CustomButton: React.FC<CustomButtonProps> = ({to, onPress, btnStyle, txtStyle, txt, icon}) => {
    return (
        <>
            <div className={`${btnStyle} flex items-center border-[2px] border-hogblue hover:text-white hover:bg-hogblue hover:transition-all hover:duration-500 cursor-pointer px-4 py-3 rounded-[8px] w-fit`} onClick={onPress}>
                <Link to={to} className={`${txtStyle} font-linkFont`}>{txt}</Link>
                {icon}
            </div>
        </>
    );
}

export default CustomButton;