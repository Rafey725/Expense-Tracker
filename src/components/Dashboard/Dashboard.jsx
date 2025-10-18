import Body from "./Body";
import Header from "./Header";

export default function () {
    // bg-[#1b1b1b] background color
    // #0b0b0b body color
    // #383838 input color
    // #00d8c4 buttons color 
    return (
        <div className="bg-[#1b1b1b] h-screen text-white overflow-hidden">
            <Header />
            <div className="max-w-screen h-full max-h-[91vh] mx-auto px-10 xl:px-45 mt-4 py-10">
                <Body />
            </div>
        </div>
    )
}