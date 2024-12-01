import { faEdit, faTrash, faSchool, faUserSecret, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

export default function TeacherCard(props) {
    return (
        <div  className="overflow-hidden    bg-white shadow-sm sm:rounded-lg">
             <div className=" flex justify-end p-1 items-center text-red-400 ">
                <Link href={props.show_route}> <FontAwesomeIcon className="mx-2 " icon={faEye} /></Link>
                <Link href={props.route}> <FontAwesomeIcon  className="mx-2 " icon={faEdit} /></Link>
                <FontAwesomeIcon onClick={props.onDelete} className="mx-2 cursor-pointer" icon={faTrash} />

                </div>
            <div className="p-2 px-4 text-gray-900 flex">
                <div className="border h-10 flex justify-center items-center w-10  rounded-full">
                <FontAwesomeIcon icon={faUserSecret} />

                </div>

                <div className="ml-3 flex flex-col">
                    <span className=" font-bold">{props.name}</span>


                    {props.university && <div className=" text-xs mt-1  text-gray-400">
                    <span className="font-extralight ml-1  ">university at {props.university}</span>
                    </div>}



                    {props.school_blacklisted >0&&<div className=" text-xs mt-1 text-gray-400">
                    <FontAwesomeIcon icon={faSchool} />
                    <span className="font-extralight ml-1  "> {props.school_blacklisted} {props.school_blacklisted >1?'Schools':'School'} BlackListed </span>
                    </div>}









                </div>

            </div>
        </div>
    );
}
