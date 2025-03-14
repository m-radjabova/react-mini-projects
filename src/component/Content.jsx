import UserName from "./UserName";
function Content (props) {
    return (
        <div>
            <div className="content-header">
                <UserName name="Alice 👩‍💼"/>
                <div className="icons">
                    <i class="bi bi-balloon-heart"></i>
                    <i class="bi bi-search"></i>
                    <i class="bi bi-telephone"></i>
                    <i class="bi bi-camera-video"></i>
                    <i class="bi bi-three-dots"></i>
                </div>
            </div>
        </div>
    );
}

export default Content;